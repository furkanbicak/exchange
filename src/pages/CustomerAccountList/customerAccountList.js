import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TableCustomerAccount from '../../components/TableCustomerAccount';
import { getCustomerAccount } from '../../services/customerGetServices';

const CustomerAccountList = () => {
    const [customerAccount, setCustomerAccount] = useState()

    //? customerId alındı.
    const params = useParams();
    console.log("Params",params.CustomerId)

    const getData = async (params) => {
        const res = await getCustomerAccount(params)
        console.log("Data",res)
        setCustomerAccount(res.Result)
    }

    useEffect(() => {
        getData(params.CustomerId)
    },[])

   
    return (
       <TableCustomerAccount customerAccount={customerAccount} />
    )
}

export default CustomerAccountList