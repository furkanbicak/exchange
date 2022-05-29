import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarContent from '../../components/NavbarContent';
import TableCustomerAccount from '../../components/TableCustomerAccount';
import { getCustomerAccount } from '../../services/customerGetAccountServices';


const CustomerAccountList = () => {
    const [customerAccount, setCustomerAccount] = useState()

    //? customerId alındı.
    const params = useParams();

    const getData = async (params) => {
        const res = await getCustomerAccount(params)
        setCustomerAccount(res?.Result)
    }

    useEffect(() => {
        getData(params.CustomerId)
    },[])

   
    return (
        <>
            <NavbarContent />
            <TableCustomerAccount customerAccount = { customerAccount } />
        </>
    )
}

export default CustomerAccountList