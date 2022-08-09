import React, { useState, useEffect, useMemo } from "react";
import './styles/App.css'
import logo from './images/logo.png'
import Filter from "./components/Filter/Filter";
import TicketList from "./components/TicketList/TicketList";
import { useFetching } from './hooks/useFetching';
import TicketService from './API/TicketService';
import Preloader from './components/UI/preloader/Preloader';
import Alert from '@mui/material/Alert';
import { defaultTransferFilters } from './components/Filter/constants';

function App() {
  const [tickets, setTickets] = useState([])
  const [currency, setCurrensy] = useState('rub');
  const [transferFilters, setTransferFilters] = useState(defaultTransferFilters);

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      return transferFilters[ticket.stops];
    })
  }, [tickets, transferFilters])

  const [fetchTickets, isTicketLoading, ticketError] = useFetching (async () => {
    const tickets = await TicketService.getAll();
    setTickets(tickets);
  })

  useEffect(() => {
      fetchTickets()
  }, [])

  return (
    <div className="wrapper">
      <header><img src={logo} className='logo' alt='logo'></img></header>
      <div className="container">
          <Filter 
            transferFilters={transferFilters} 
            setTransferFilters={setTransferFilters} 
            setCurrensy={setCurrensy} 
            tickets={tickets} 
            currency={currency} 
          />
      {ticketError &&
        <Alert severity="error">Произошла ошибка <b>{ticketError}</b></Alert>
      }
      {isTicketLoading
        ? <div className="preloader_container"><Preloader/></div>
        : <TicketList tickets={filteredTickets} currency={currency}/>
      }
      </div>
    </div>
  );
}

export default App;
