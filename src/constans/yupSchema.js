import * as Yup from 'yup'


export const LoginSchema = Yup.object().shape({
    email : Yup
        .string()
        .email('Lütfen geçerli bir e-posta adresi giriniz.')
        .required('Bu alan zorunludur.'),
    password : Yup
        .string()
        .required('Bu alan zorunludur.'),
})
