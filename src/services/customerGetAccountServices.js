import axios, { URL } from '../api/axios'


//? Müşterilerin id bilgisine göre hesaplarını getiren servis.
export const getCustomerAccount = async (id) => {

    const formData = new FormData()

    formData.append('Action', 'GetAccountByCustomerId')
    formData.append('Version', 1)
    formData.append('Parameters', `{CustomerId: '${id}'}`)

    try {
        const res = await axios.post(URL.customer, formData, { 
            'content-type'  :   'multipart/form-data' 
        })
        
        if(res.status === 200){
            return res.data
        } 
        else{
            return {
                error: 'Data gelmedi'
            }
        }
       
    } catch (error) {
        console.log('error')
    }
}