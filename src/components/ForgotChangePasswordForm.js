import React from 'react'
import { Col, Container, Form, Row, Button} from 'react-bootstrap'
import { Formik } from 'formik'
import { LoginSchema } from '../constans/yupSchema'
import loginIcon from '../../src/assets/login.svg'
import 'bootstrap/dist/css/bootstrap.css';



const ForgotChangePasswordForm = ({ changeToPassword }) => {

    return (
        <>
            <Container>
                <Row className = 'mt-5 shadow p-3 mb-5 bg-white rounded m-auto'>
                    <Col lg={5} md={6} sm={12} className = 'p-5 m-auto'>
                        <img 
                            src         =   { loginIcon } 
                            alt         =   'loginIcon.svg'
                            className   =   'w-100 rounded mx-auto d-block mt-5' 
                        />
                    </Col>
                    <Formik
                        initialValues = {{
                            email       :   '',
                            password    :   ''
                        }}

                        validationSchema = { LoginSchema }
                        
                        onSubmit = { (values) => {
                            changeToPassword(values)
                        }}
                    >
                        {
                            ( { values, errors, touched, handleSubmit, handleChange, handleBlur } ) => (
                                <Col lg={5} md={6} sm={12} className = 'p-5 m-auto'>
                                    <h1 className = 'my-5 font-weight-bold text-primary'>Change Password</h1>
                                    <Form onSubmit = {handleSubmit} className = 'mb-5' >
                                        
                                        <Form.Group className = 'mt-5' controlId = 'formBasicEmail' >
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control 
                                                type        =   'email' 
                                                name        =   'email' 
                                                placeholder =   'Enter email' 
                                                onBlur      =   { handleBlur } 
                                                onChange    =   { handleChange } 
                                                value       =   { values.email }  
                                            />
                                                {
                                                    errors.email && touched.email && (
                                                        <Form.Label className = 'text-danger mt-2'>
                                                            *{errors.email}
                                                        </Form.Label>
                                                    )
                                                }
                                        </Form.Group>

                                        <Form.Group className = 'mt-4' controlId = 'formBasicPassword'>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type        =   'password' 
                                                name        =   'password' 
                                                placeholder =   'Enter Password' 
                                                onBlur      =   { handleBlur } 
                                                onChange    =   { handleChange }
                                                value       =   { values.password }  
                                            />
                                                {
                                                    errors.password && touched.password && (
                                                        <Form.Label className='text-danger mt-2'>
                                                            *{errors.password}
                                                        </Form.Label>
                                                    )
                                                }
                                        </Form.Group>

                                        <Button type = 'submit' variant = 'primary w-100 mt-5' onClick = {handleSubmit}>
                                            Submit
                                        </Button>
                                        
                                    </Form>
                                </Col>
                            )
                        }
                    </Formik>
                </Row>
                <h6 className = 'text-center text-secondary'>
                    Copyright © 2022 Fintech. All Rights Reserved.
                </h6>
            </Container>
        </>
    )
}

export default ForgotChangePasswordForm