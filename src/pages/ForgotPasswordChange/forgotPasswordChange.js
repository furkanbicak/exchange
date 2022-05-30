import React from 'react'
import Swal from 'sweetalert2'
import ForgotChangePasswordForm from '../../components/ForgotChangePasswordForm'
import { forgotChangePassword } from '../../services/forgotChangePassword'


const ForgotPasswordChange = () => {

    //? Mailden gelen url'deki 'param' keyinin value değerini yakalar.
    const urlParams = new URLSearchParams(window.location.search)
    const param = urlParams.get('param')
    
    
    //? Şifre değiştirme fonksiyonu.
    const changeToPassword = async (e) => {
        const email = e.email
        const password = e.password

        const res = await forgotChangePassword(param, email, password)


        //? İşlem başarılı ise success alert.
        if (res?.IsSuccess === true) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: res?.Result.Message,
                showConfirmButton: false,
                timer: 1500
            })
        
        } 
        //? İşlem başarısız ise error alert.
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: res?.Result.Message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }


    return (
        <>
            <ForgotChangePasswordForm changeToPassword = { changeToPassword } />
        </>
    )
}

export default ForgotPasswordChange