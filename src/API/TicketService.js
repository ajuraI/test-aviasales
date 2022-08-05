import axios from "axios"
export default class TicketService {
	static async getAll () {
		const response = await axios.get('http://myjson.dit.upm.es/api/bins/gbt6')
		const priceSort = response.data.sort((a,b) => a["price"] - b["price"])
		return priceSort
	}
}