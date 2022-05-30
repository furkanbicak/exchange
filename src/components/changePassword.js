import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import loginIcon from '../../src/assets/login.svg'
import { Formik } from 'formik';
import { LoginSchema } from '../constans/changePsYupSchema'
import { useNavigate } from 'react-router-dom'
import { getChangePassword } from '../services/changePasswordService'


const ChangePassword = () => {
    
    const navigate = useNavigate();

    //? Şifre değiştirme isteğini çağıran fonksiyon.
    const changePassword = async(e) => {

        const res = await getChangePassword(e.email, e.currentPassword, e.password)
            
        if(res?.IsSuccess === true) {
            Swal.fire({
                timer               :   1500,
                showConfirmButton   :   false,
                icon                :   'success',
                position            :   'top-end',
                title               :   'İşleminiz başarıyla gerçekleşti.',
            })
            navigate('/home')
        } else {
            Swal.fire({
                timer               :   1500,
                showConfirmButton   :   false,
                icon                :   'error',
                position            :   'top-end',
                title               :   'Kullanıcı bilgileriniz hatalı!',
            })
        }
    }


    return (
        <>
            <Container>
                <Row className = 'mt-5 shadow p-3 mb-5 bg-white rounded m-auto'>
                    <Col lg={5} md={6} sm={12} className='p-5 m-auto'>
                        <img 
                            src         =   { loginIcon } 
                            alt         =   'imageIcon'
                            className   =   'w-100 rounded mx-auto d-block mt-5' 
                        />
                    </Col>
                    <Formik
                        initialValues = {{
                            email:'',
                            currentPassword:'',
                            password:''
                        }}

                        validationSchema = { LoginSchema }
                        
                        onSubmit = {(values) => {
                            changePassword(values)
                        }}
                    >
                        {
                            ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                                <Col className = 'p-5 m-auto' lg={5} md={6} sm={12}>
                                    <h2 className = 'my-5 font-weight-bold text-primary'>Change Password</h2>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId='formBasicEmail'>
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control 
                                                type            =   'email'  
                                                name            =   'email' 
                                                onBlur          =   { handleBlur }  
                                                value           =   { values.email } 
                                                onChange        =   { handleChange } 
                                                placeholder     =   'Enter email' 
                                            />
                                                {
                                                    errors.email && touched.email && (
                                                        <Form.Label className='text-danger mt-2'>
                                                            *{errors.email}
                                                        </Form.Label>
                                                    )
                                                }
                                        </Form.Group>
            
                                        <Form.Group className = 'mt-3' controlId='formCurrentPassword'>
                                            <Form.Label>Current Password</Form.Label>
                                            <Form.Control 
                                                type            =   'password'  
                                                name            =   'currentPassword' 
                                                onBlur          =   { handleBlur }  
                                                value           =   { values.currentPassword } 
                                                onChange        =   { handleChange }
                                                placeholder     =   'Current Password' 
                                            />
                                                {
                                                    errors.currentPassword && touched.currentPassword && (
                                                        <Form.Label className='text-danger mt-2'>
                                                            *{errors.currentPassword}
                                                        </Form.Label>
                                                    )
                                                }
                                        </Form.Group>
            
                                        <Form.Group className = 'mt-3' controlId='formBasicPassword'>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type            =   'password' 
                                                name            =   'password' 
                                                onBlur          =   { handleBlur }  
                                                value           =   { values.password }
                                                onChange        =   { handleChange}
                                                placeholder     =   'Password' 
                                            />
                                                {
                                                    errors.password && touched.password && (
                                                        <Form.Label className='text-danger mt-2'>
                                                            *{errors.password}
                                                        </Form.Label>
                                                    )
                                                }
                                        </Form.Group>
            
                                        <Button 
                                            type        =   'submit' 
                                            onClick     =   { handleSubmit }
                                            variant     =   'primary w-100 mt-5' 
                                        >
                                            Change
                                        </Button>
                                    </Form>
                                </Col>
                            )
                        }
                    </Formik>
                </Row>
                <h6 className = 'text-center text-secondary'>Copyright © 2022 Fintech. All Rights Reserved.</h6>
            </Container>
        </>
  )
}

export default ChangePassword
