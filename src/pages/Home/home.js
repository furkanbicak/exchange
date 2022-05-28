import React, { useEffect, useState } from 'react'
import NavbarContent from '../../components/NavbarContent'
import TableCustomer from '../../components/TableCustomer'
import { getCustomer } from '../../services/customerGetServices'

const Home = () => {
	const [customer, setCustomer] = useState()

	useEffect(()=>{
		getData()
	},[])

	const getData = async () => {
		const res = await getCustomer()
		setCustomer(res.Result)
		console.log("cevap",res.Result)
	}

return (
	<>
		<NavbarContent />
		<TableCustomer customer={customer} />
	</>
)
}

export default Home