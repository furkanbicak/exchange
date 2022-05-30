import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import loginIcon from '../../src/assets/login.svg'
import './deneme.css'

const ForgetForm = ( { handleSubmit, setForgetEmail } ) => {
  return (
    <>
    <Container>
        <div className="d-flex justify-content-center align-items-center" style={{height:"95vh"}}>
            <Row className = 'mt-5 shadow p-3 mb-5 bg-white rounded m-auto'>
                <Col lg={5} md={6} sm={12} className='p-5 m-auto'>
                    <img 
                        alt         =   'image'
                        src         =   { loginIcon } 
                        className   =   'w-100 rounded mx-auto d-block mt-5' 
                    />
                </Col>
                <Col lg={5} md={6} sm={12} className='p-5 m-auto'>
                <h2 className = 'mt-5 font-weight-bold text-primary'>
                    Forget Password
                </h2>
                <small className = 'text-muted'>
                    Enter your email and we'll send you a link to reset your password.
                </small>
                <Form onSubmit = { handleSubmit } className = 'mt-5'>
                    <Form.Group className = 'mt-3' controlId = 'formForgetPassword'>
                            <Form.Label> Email </Form.Label>
                            <Form.Control 
                                type        =   'email' 
                                placeholder =   'Email' 
                                onChange    =   {(e) => setForgetEmail(e.target.value)}
                            />
                    </Form.Group>

                    <Button type = 'submit' variant = 'primary w-100 mt-5'> 
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </div>
        <h6 className = 'text-center text-secondary'>Copyright © 2022 Fintech. All Rights Reserved.</h6>
    </Container>
  </>



  )
}

export default ForgetForm
