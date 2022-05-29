import React, { useState } from 'react'
import Swal from 'sweetalert2';
import ForgetForm from '../../components/ForgetForm'
import { forgetPassword } from '../../services/forgetPasswordService';

const ForgotPassword = () => {
    const [forgetEmail, setForgetEmail] = useState();

    //? Şifre değiştirme bağlantısı isteği için fonksiyon.
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await forgetPassword(forgetEmail);

        if(res.IsSuccess === true){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: res.Result.Message,
                showConfirmButton: false,
                timer: 1500
              })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: res.Result.Message,
                showConfirmButton: false,
                timer: 1500
              })
        }

    }
return (
    <ForgetForm 
        handleSubmit    =   { handleSubmit } 
        setForgetEmail  =   { setForgetEmail } 
    />
  )
}

export default ForgotPassword