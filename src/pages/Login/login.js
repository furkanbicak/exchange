import axios, { URL } from '../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import AuthForm from '../../components/AuthForm'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
import jwt from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { postLogin } from '../../services/loginServices'


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

        const response = await postLogin(user, password)

        const isSuccess =  response?.IsSuccess 
        const accessToken = response?.Result.AccessToken

        //?Auth Context Provider'a bilgiler set edilir.
        setAuth({ user, password, accessToken, isSuccess })
            
        navigate(from, { replace : true })


        //? Alert giriş başarılı ise redux ve allert.
        if (isSuccess === true) {

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
                title               :   response?.Result.Message,
            })
        }    
    }
        return (
            <AuthForm loginSubmit = { loginSubmit } />
    )
}

export default Login