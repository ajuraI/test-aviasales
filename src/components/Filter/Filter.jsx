import React from 'react'
import '../Filter/Filter.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

function Filter({setCurrensy, tickets}) {
	const [activeButton, setActiveButton] = useState('')
	const [defaultCheck, setDefaultCheck] = useState({
		checkboxAll:true,
		checkbox0:true,
		checkbox1:true,
		checkbox2:true,
		checkbox3:true,
	})

	// const sortedPosts = useMemo(() => {
  //   if (sort) {
  //     return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
  //   } 
  //   return posts;
  // }, [sort, posts])
	
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
							value="All"
							onChange={() => setDefaultCheck(!defaultCheck.checkboxAll)}						
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
							value="0"
							
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
							value="1"
		
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
							value="2"
												
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
											value="3"
																				
										/>}
          label="3 пересадки"
          labelPlacement="end"
        />																				
			</div>
		</div>
	)
}


export default Filter