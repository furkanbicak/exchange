import axios, { URL } from '../api/axios'


//? Login olmak için kullanılan servis.
export const postLogin = async ( user, password ) => {

    console.log('first',user,password)

    const formData = new FormData()

    formData.append('Email', user)   
    formData.append('Password', password);
    formData.append('LoginType', '50dcd869-eeb3-ec11-ac1f-000c29330757')

    try {
        const res = await axios.post(URL.login, formData, { 
            'content-type'  :   'multipart/form-data' 
        });
        
        if (res.status === 200) {
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