import axios, { URL } from '../api/axios';

let formData = new FormData()

//? Müşterileri getiren servis.
export const getCustomer = async () => {
    formData.append('Action', 'GetCustomer')
    formData.append('Version', 1)
    formData.append('Parameters', '{}')
    try {
        const res = await axios.post(URL.customer, formData, { 
            'content-type': 'multipart/form-data' 
        });
        
        if(res.status === 200){
            console.log("Data", res.data)
            return res.data
        } 
        else{
            return {
                error: 'Data gelmedi'
            }
        }
       
    } catch (error) {
        console.log("error")
    }
}

//? Müşterilerin id bilgisine göre hesaplarını getiren servis.
export const getCustomerAccount = async (id) => {
    formData.append('Action', 'GetAccountByCustomerId')
    formData.append('Version', 1)
    formData.append('Parameters', `{CustomerId: "${id}"}`)

    try {
        const res = await axios.post(URL.customer, formData, { 
            'content-type': 'multipart/form-data' 
        });
        
        if(res.status === 200){
            console.log("Data", res.data)
            return res.data
        } 
        else{
            return {
                error: 'Data gelmedi'
            }
        }
       
    } catch (error) {
        console.log("error")
    }
}