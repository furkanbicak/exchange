import axios, { URL } from '../api/axios'


//? Şifre değiştirme servisi.
export const getChangePassword = async ( email, currentPassword, password ) => {
    console.log("Email",email)
    console.log("currentPassword",currentPassword)
    console.log("password",password)

    const formData = new FormData()
   
    formData.append('Email', `${email}`)
    formData.append('CurrentPassword', `${currentPassword}`)
    formData.append('Password', `${password}`)

    try {
        const res = await axios.post(URL.changePassword, formData, { 
            'content-type': 'multipart/form-data' 
        });
        
        if (res.status === 200) {
            return res.data
        } 
        else {
            return {
                error: 'Data gelmedi'
            }
        }
    } catch (error) {
        console.log("error")
    }
}