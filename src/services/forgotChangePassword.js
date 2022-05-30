import axios, { URL } from '../api/axios';


//? Müşterinin mailine giden bağlantıyla birlikte şifre değiştirme isteği atan fonksiyon.
export const forgotChangePassword = async (param, email, password) => {

    const formData = new FormData()
    
    formData.append('ForgotPasswordRequestId', param)
    formData.append('Email', email)
    formData.append('Password', password)

    try {
        const res = await axios.post(URL.passwordChange, formData, { 
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