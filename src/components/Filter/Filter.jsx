import React from 'react'
import '../Filter/Filter.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { defaultTransferFilters, emptyTransferFilters } from './constants';
import { isAllTransferFilters } from "./utils";
import { useState } from 'react';
import { useEffect } from 'react';



function Filter({ setCurrensy, currency, transferFilters, setTransferFilters }) {
	const [isAllChecked, setIsAllChecked] = useState(true);


	useEffect(() => {
		if (isAllTransferFilters(transferFilters)) {
			setIsAllChecked(true);
		} else {
			setIsAllChecked(false);
		}
	}, [transferFilters]);

	const checkedFilterAll = (e) => {
		if (isAllChecked) {
			setTransferFilters(emptyTransferFilters);
		} else {
			setTransferFilters(defaultTransferFilters);
		}
	}	

	const checkedFilter = (e) => {
		const value = e.target.value;
		if (transferFilters[value]) {
			setTransferFilters(prev => ({
				...prev,
				[value]: false,
			}))
		} else {
			setTransferFilters(prev => ({
				...prev,
				[value]: true,
			}))
		}
	}

	
	const changeHandler = (event) => {
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
					<button id='rub' className={currency === 'rub' ? 'button active' : 'button'} onClick={changeHandler}>RUB</button>
					<button id='usd' className={currency === 'usd' ? 'button active' : 'button'} onClick={changeHandler}>USD</button>
					<button id='eur' className={currency === 'eur' ? 'button active' : 'button'} onClick={changeHandler}>EUR</button>
				</div>
			</div>
			<div className='filter_check'>
				<h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
				<FormControlLabel
          value="end"
          control={<Checkbox 
							id='all'
							checked={isAllChecked}
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
							checked={transferFilters[0]}
							name="checkbox0"
							value={0}
							onChange={checkedFilter}
						/>}
          label="Без пересадок"
          labelPlacement="end"
        />
				<FormControlLabel
          value="end"
          control={<Checkbox 
							id='one'
							checked={transferFilters[1]}
							name="checkbox1"
							value={1}
							onChange={checkedFilter}
						/>}
          label="1 пересадка"
          labelPlacement="end"
        />
				<FormControlLabel
          value="end"
          control={<Checkbox 
							id='two'
							checked={transferFilters[2]}
							name="checkbox2"
							value={2}
							onChange={checkedFilter}				
						/>}
          label="2 пересадки"
          labelPlacement="end"
        />
				<FormControlLabel
          value="end"
          control = {<Checkbox 
							id='three'
							checked={transferFilters[3]}
							name="checkbox3"
							value={3}
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