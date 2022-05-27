import axios, { URL } from "../api/axios";

let formData = new FormData();    //formdata object

//? Service that brings products.
export const forgetPassword = async (email) => {
    console.log("first",email)
    formData.append('Email', email);   //append the values with key, value pair
    try {
        const res = await axios.post(URL.forgotPassword, formData, { 
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