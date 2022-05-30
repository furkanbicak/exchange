import axios, { URL } from '../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import AuthForm from '../../components/AuthForm'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
import jwt from 'jwt-decode'
import { useDispatch } from 'react-redux'


const Login = () => {
    const { setAuth } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home'


    //? Kullanıcı girişi yapılır ve reduxa gerekli bilgiler kaydedilir.
    const loginSubmit = async (e) => {

        const user = e.email
        const password = e.password

        const formData = new FormData()
        formData.append('Email', e.email)
        formData.append('Password', e.password)
        formData.append('LoginType', '50dcd869-eeb3-ec11-ac1f-000c29330757')

        try {
            const response = await axios.post(URL.login, formData, { 
                'content-type': 'multipart/form-data' 
            })

            const isSuccess =  response?.data.IsSuccess
            const accessToken = response?.data.Result.AccessToken

            //? Token decode edilir.
            const jwtDecoded = jwt(accessToken)


            dispatch({
                type:'SET_TOKEN',
                payload:accessToken
            })

            dispatch({
                type:'SET_ARR',
                payload: jwtDecoded
            })
         

            //?Auth Context Provider'a bilgiler set edilir.
            setAuth({ user, password, accessToken, isSuccess })
           
            navigate(from, { replace : true })


            //? Alert giriş başarılı mesaj.
           if (isSuccess === true) {
            Swal.fire({
                timer               :   1500,
                showConfirmButton   :   false,
                icon                :   'success',
                position            :   'top-end',
                title               :   'Giriş başarılı. Hoşgeldin.🤩',
            })
           } else {
            Swal.fire({
                timer               :   1500,
                showConfirmButton   :   false,
                icon                :   'error',
                position            :   'top-end',
                title               :   response?.data.Result.Message,
                })
           }

        } catch (err) {
            console.log('No Server Response',err)
        }
    }


    return (
        <AuthForm loginSubmit = { loginSubmit } />
  )
}

export default Login