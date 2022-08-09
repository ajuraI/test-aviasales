import React from 'react'
import '../Filter/Filter.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

function Filter({setCurrensy, tickets}) {
	const [update, setUpdate] = useState([tickets])
	const [activeButton, setActiveButton] = useState('')
	const [defaultCheck, setDefaultCheck] = useState({
		checkboxAll:true,
		checkbox0:false,
		checkbox1:false,
		checkbox2:false,
		checkbox3:false,
	})

	const checkedFilterAll = (e) => {
		const checked = e.target.checked;

		if (checked) {
			setDefaultCheck({
        checkboxAll: true		
      })
		} else {
			setDefaultCheck({
        checkboxAll: false,	
      })
		}
	}	

	const checkedFilter = (e) => {
		const value = e.target.value;
    const checked = e.target.checked;
    const name = e.target.name;
		const data = tickets;

		setDefaultCheck({[name] : checked})
		if (checked){
			const filterData = data.filter(item => item.stops === +value);
      filterData.forEach(item => update.push(item));
      setUpdate({
        update: update
      });
		}else {
			const filterData = data.filter(item => item.stops !== +value);
      setUpdate({
        update: filterData
      });
		}
	}

	
	const changeHandler = (event) => {
		setActiveButton(event.target.id);
		switch (event.target.id) {
			case 'rub':
				return setCurrensy('rub')
			case 'usd':
				return setCurrensy('usd')
			case 'eur':
				return setCurrensy('eur')
			default:
				return setCurrensy('rub')
		}
	};

	return (
		<div className='filter'>
			<div className='filter_currencies'>
				<h3>ВАЛЮТА</h3>
				<div className='currenciesButtons'>
					<button id='rub' className={activeButton === 'rub' ? 'button active' : 'button'} onClick={changeHandler}>RUB</button>
					<button id='usd' className={activeButton === 'usd' ? 'button active' : 'button'} onClick={changeHandler}>USD</button>
					<button id='eur' className={activeButton === 'eur' ? 'button active' : 'button'} onClick={changeHandler}>EUR</button>
				</div>
			</div>
			<div className='filter_check'>
				<h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
				<FormControlLabel
          value="end"
          control={<Checkbox 
							id='all'
							checked={defaultCheck.checkboxAll}
							name="checkboxAll"
							value='all'
							onChange={checkedFilterAll}						
						/>}
          label="Все"
					labelPlacement="end"
        />
				<FormControlLabel
          value="end"
          control={<Checkbox 
							id='none'
							checked={defaultCheck.checkbox0}
							name="checkbox0"
							value='0'
							onChange={checkedFilter}
						/>}
          label="Без пересадок"
          labelPlacement="end"
        />
				<FormControlLabel
          value="end"
          control={<Checkbox 
							id='one'
							checked={defaultCheck.checkbox1}
							name="checkbox1"
							value='1'
							onChange={checkedFilter}
						/>}
          label="1 пересадка"
          labelPlacement="end"
        />
				<FormControlLabel
          value="end"
          control={<Checkbox 
							id='two'
							checked={defaultCheck.checkbox2}
							name="checkbox2"
							value='2'
							onChange={checkedFilter}				
						/>}
          label="2 пересадки"
          labelPlacement="end"
        />
				<FormControlLabel
          value="end"
          control = {<Checkbox 
							id='three'
							checked={defaultCheck.checkbox3}
							name="checkbox3"
							value='3'
							onChange={checkedFilter}							
						/>}
          label="3 пересадки"
          labelPlacement="end"
        />																				
			</div>
		</div>
	)
	}




export default Filter