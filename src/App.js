import React from "react";
import { useState, useEffect } from 'react';
import './styles/App.css'
import logo from './images/logo.png'
import Filter from "./components/Filter/Filter";
import TicketList from "./components/TicketList/TicketList";
import { useFetching } from './hooks/useFetching';
import TicketService from './API/TicketService';
import Preloader from './components/UI/preloader/Preloader';
import Alert from '@mui/material/Alert';

function App() {
  const [tickets, setTickets] = useState([])
  const [currency, setCurrensy] = useState('')

  const [fetchTickets, isTicketLoading, ticketError] = useFetching (async () => {
    const tickets = await TicketService.getAll();
    setTickets(tickets)
  })

  useEffect(() => {
      fetchTickets()
  }, [])

  return (
    <div className="wrapper">
      <header><img src={logo} className='logo'></img></header>
      <div className="container">
          <Filter setCurrensy={setCurrensy} tickets={tickets}/>
      {ticketError &&
        <Alert severity="error">Произошла ошибка <b>{ticketError}</b></Alert>
      }
      {isTicketLoading
        ? <div className="preloader_container"><Preloader/></div>
        : <TicketList tickets={tickets} currency={currency}/>
      }
      </div>
    </div>
  );
}

export default App;
