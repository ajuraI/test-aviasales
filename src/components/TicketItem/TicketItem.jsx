import React from 'react'
import cl from './TicketItem.module.css'
import Air from '../../images/airplane.svg'

function TicketItem(props) {

	const   ViewCurrency = (price, currency) => {
    switch (currency) {
      case "rub":
        return `${price} ₽`;
      case "usd":
        return `${Math.floor(price / 60)} $`;
      case "eur":
        return `${Math.floor(price / 65)} €`;
      default:
        return `${price} ₽`;
    }
  };

	return (
		<div className={cl.tickets}>
			<div className={cl.tickets_left}>
				<div className={cl.tickets_left__logo}><img src={require(`../../images/${props.ticket.carrier}.svg`)}></img></div>
				<button className={cl.tickets_left__btn}>
					Купить <br/> за {ViewCurrency(props.ticket.price, props.currency)}
				</button>
			</div>
			<div className={cl.tickets_right}>
				<div className={cl.departure}>
					<div className={cl.departureTime}>{props.ticket.departure_time}</div>
					<div className={cl.departureCity}>{props.ticket.origin}, {props.ticket.origin_name}</div>
					<div className={cl.departureDate}>{props.ticket.departure_date}</div>
				</div>


				<div className={cl.transfers}>
					{props.ticket.stops ? (
              <div className={cl.transfersInfo}>
                {props.ticket.stops} пересадк
                {+props.ticket.stops > 1 ? `и` : `а`}
              </div>
            ) : (
              <div style={{marginTop:'20px'}} className={cl.transfersInfo} />		
          )}
					<div className={cl.transfersLine}>
						<img src={Air} alt="airplane" />
					</div>
				</div>

				<div className={cl.destination}>
					<div className={cl.destinationTime}>{props.ticket.arrival_time}</div>
					<div className={cl.destinationCity}>{props.ticket.destination_name}, {props.ticket.destination}</div>
					<div className={cl.destinationDate}>{props.ticket.arrival_date}</div>
				</div>
			</div>
		</div>
	)
}

export default TicketItem