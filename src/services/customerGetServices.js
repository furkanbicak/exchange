import axios, { URL } from '../api/axios';

//? Müşterileri getiren servis.
export const getCustomer = async () => {
    const formData = new FormData()
    
    formData.append('Action', 'GetCustomer')
    formData.append('Version', 1)
    formData.append('Parameters', '{}')
    try {
        const res = await axios.post(URL.customer, formData, { 
            'content-type': 'multipart/form-data' 
        });
        
        if(res.status === 200){
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

