import React from 'react'
import TicketItem from '../TicketItem/TicketItem'
import shortid from 'shortid'

function TicketList({tickets, currency}) {
	return (
		<div>
			<div className="container_tickets">
				{tickets.map(ticket =>
					<TicketItem ticket={ticket} key={shortid.generate()} currency={currency}/>
				)}
			</div>			
		</div>
	)
}

export default TicketList