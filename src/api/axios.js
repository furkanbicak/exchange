import axios from 'axios'

export const baseURL = 'https://dev-smoothie-api.fintechyazilim.com'
export default axios.create({ baseURL })

export const URL = {
    login           :   '/api/User/Login',
    forgotPassword  :   '/api/User/ForgotPassword',
    changePassword  :   '/api/User/ChangePassword',
    customer        :   '/api/v1/FinTech/Execute',
    passwordChange  :   '/api/User/ForgotPasswordChange',

}