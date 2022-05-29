import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ErrorIcon from '../assets/error.svg'

const Error = () => {
    const navigate = useNavigate()

    
    return (
       <>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col d-flex justify-content-center'>
                        <img
                            alt         =   'navbarIcon'
                            src         =   { ErrorIcon }
                            width       =   '700'
                            height      =   '700'
                            className   =   'd-inline-block align-top w-75'
                        />
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'col d-flex justify-content-center'>
                        <Button className = 'w-25' onClick={() => navigate(-1)}>Go Back</Button>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Error