import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import loginIcon from '../../src/assets/login.svg'
import axios, { URL } from '../api/axios'
import { Formik } from 'formik';
import { LoginSchema } from '../constans/changePsYupSchema'
import { useNavigate } from 'react-router-dom'


const ChangePassword = () => {
    const navigate = useNavigate();

    const changePassword = async(e) => {

        const formData = new FormData()
   
        formData.append('Email', `${e.email}`)
        formData.append('CurrentPassword', `${e.currentPassword}`)
        formData.append('Password', `${e.password}`)
    
        try {
            const res = await axios.post(URL.changePassword, formData, { 
                'content-type': 'multipart/form-data' 
            });
            if(res.data.IsSuccess === true) {
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
            if(res.status === 200 ) {
                console.log('Data', res.data)
                return res.data
            } else {
                return {
                    error: 'Data gelmedi'
                }
            }
            
        } catch (error) {
            console.log('error')
        }
    }


    return (
        <>
            <Container>
                <Row className='mt-5 shadow p-3 mb-5 bg-white rounded m-auto'>
                    <Col lg={5} md={6} sm={12} className='p-5 m-auto'>
                        <img src={loginIcon} className='w-100 rounded mx-auto d-block mt-5' alt='image'/>
                    </Col>
                    <Formik
                        initialValues={{
                            email:'',
                            currentPassword:'',
                            password:''
                        }}

                        validationSchema={ LoginSchema }
                        
                        onSubmit={(values) => {
                            changePassword(values)
                        }}
                    >
                        {
                            ({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                                <Col lg={5} md={6} sm={12} className='p-5 m-auto'>
                                <h2 className='my-5 font-weight-bold text-primary'>Change Password</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId='formBasicEmail'>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type='email'  name='email' placeholder='Enter email' value={values.email} onBlur={handleBlur}  onChange={handleChange} />
                                            {
                                                errors.email && touched.email && (
                                                    <Form.Label className='text-danger mt-2'>*{errors.email}</Form.Label>
                                                )
                                            }
                                    </Form.Group>
        
                                    <Form.Group className='mt-3' controlId='formCurrentPassword'>
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control type='password'  name='currentPassword' placeholder=' Current Password' value={values.currentPassword} onBlur={handleBlur}  onChange={handleChange}/>
                                            {
                                                errors.currentPassword && touched.currentPassword && (
                                                    <Form.Label className='text-danger mt-2'>*{errors.currentPassword}</Form.Label>
                                                )
                                            }
                                    </Form.Group>
        
                                    <Form.Group className='mt-3' controlId='formBasicPassword'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' name='password' placeholder='Password' value={values.password} onBlur={handleBlur}  onChange={handleChange}/>
                                        {
                                                errors.password && touched.password && (
                                                    <Form.Label className='text-danger mt-2'>*{errors.password}</Form.Label>
                                                )
                                            }
                                    </Form.Group>
        
                                    <Button variant='primary w-100 mt-5' type='submit' onClick={handleSubmit}>
                                        Change
                                    </Button>
                                </Form>
                            </Col>
                            )
                        }
                    </Formik>
                </Row>
                <h6 className='text-center text-secondary '>Copyright © 2022 Fintech. All Rights Reserved.</h6>
            </Container>
        </>
  )
}

export default ChangePassword
