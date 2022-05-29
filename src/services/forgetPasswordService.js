import axios, { URL } from '../api/axios'


//? Şifre yenileme bağlantısı gönderen servis.
export const forgetPassword = async (email) => {
    const formData = new FormData();    

    formData.append('Email', email);   
    try {
        const res = await axios.post(URL.forgotPassword, formData, { 
            'content-type'  :   'multipart/form-data' 
        });
        
        if (res.status === 200) {
            return res.data
        } else {
            return {
                error   : 'Data gelmedi'
            }
        }
       
    } catch (error) {
        console.log('error', error)
    }
}