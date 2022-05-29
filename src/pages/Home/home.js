import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import NavbarContent from '../../components/NavbarContent'
import Search from '../../components/Search'
import TableCustomer from '../../components/TableCustomer'
import { getCustomer } from '../../services/customerGetServices'

const Home = () => {
	const [customer, setCustomer] = useState()						//? Servisten gelen datayı kaydetmek için. 
	const [searchData, setSearchData] = useState()					//? Search İşleminde kullanılan search edilen data.      
	const [loading, setloading] = useState(true)					//? Sayfa Loading işlemi için.


	useEffect(()=>{
		getData()
	},[])


	const getData = async () => {
		const res = await getCustomer()
		setCustomer(res.Result)
		setSearchData(res.Result)
		setloading(false)
		console.log("cevap",res.Result)
	}

	
return (
	<>
		<NavbarContent />
		<div className='mt-5  m-4'>
		{
            loading && loading ? <Loading /> :
			<>
				<Search 
					searchData	=	{ searchData } 
					setCustomer	=	{ setCustomer } 
				/>
				<TableCustomer 
					customer	=	{ customer } 
				/>
			</>
					
		}
		</div>
		
	</>
	
)
}

export default Home