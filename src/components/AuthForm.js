import React from 'react'
import { Col, Container, Form, Row, Button} from 'react-bootstrap'
import loginIcon from '../../src/assets/login.svg'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { LoginSchema } from '../constans/yupSchema'



const AuthForm = ({ loginSubmit }) => {

    return (
        <>
            <Container>
                <Row className = 'mt-5 shadow p-3 mb-5 bg-white rounded m-auto'>
                    <Col lg={5} md={6} sm={12} className = 'p-5 m-auto'>
                        <img 
                                src         =   { loginIcon } 
                                alt         =   'loginIcon'
                                className   =   'w-100 rounded mx-auto d-block mt-5' 
                            />
                    </Col>
                    <Formik
                        initialValues={{
                            email:'',
                            password:''
                        }}

                        validationSchema={ LoginSchema }
                        
                        onSubmit={(values) => {
                            loginSubmit(values)
                        }}
                    >
                        {
                            ({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                                <Col lg={5} md={6} sm={12} className = 'p-5 m-auto'>
                                    <h1 className = 'my-5 font-weight-bold text-primary'>Login</h1>
                                    <Form className = 'mb-5' onSubmit = {handleSubmit}>
                                        <Form.Group className='mt-5' controlId='formBasicEmail'>
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control 
                                                type        =   'email' 
                                                name        =   'email' 
                                                value       =   { values.email }  
                                                onBlur      =   { handleBlur } 
                                                onChange    =   { handleChange } 
                                                placeholder =   'Enter email' 
                                            />
                                                {
                                                    errors.email && touched.email && (
                                                        <Form.Label className = 'text-danger mt-2'>
                                                            *{errors.email}
                                                        </Form.Label>
                                                    )
                                                }
                                        </Form.Group>

                                        <Form.Group className='mt-4' controlId='formBasicPassword'>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type        =   'password' 
                                                name        =   'password' 
                                                value       =   { values.password }  
                                                onBlur      =   { handleBlur } 
                                                onChange    =   { handleChange }
                                                placeholder =   'Enter Password' 
                                            />
                                                {
                                                    errors.password && touched.password && (
                                                        <Form.Label className = 'text-danger mt-2'>
                                                            *{errors.password}
                                                        </Form.Label> 
                                                    )
                                                }
                                        </Form.Group>

                                        <Form.Group className = 'mt-3' controlId='formBasicPassword'>
                                            <Link to={'/forgotPassword'} className='link-primary'>Forget Password?</Link>
                                        </Form.Group>

                                        <Button variant='primary w-100 mt-5' type='submit' onClick={handleSubmit}>
                                            Login
                                        </Button>
                                    </Form>
                                </Col>
                            )
                        }
                    </Formik>
                </Row>
                <h6 className='text-center text-secondary'>Copyright © 2022 Fintech. All Rights Reserved.</h6>
            </Container>
        </>
  )
}

export default AuthForm