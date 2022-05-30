import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../App.css'
import Login from '../pages/Login/login'
import Home from '../pages/Home/home'
import Layout from '../components/Layout'
import RequireAuth from '../components/RequireAuth'
import ForgotPassword from '../pages/ForgotPassword/forgotPassword'
import Account from '../pages/Account/Account'
import CustomerAccountList from '../pages/CustomerAccountList/customerAccountList'
import ForgotPasswordChange from '../pages/ForgotPasswordChange/forgotPasswordChange'
import Unauthorized from '../pages/Unauthorized/Unauthorized'


const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* //? Punlic routes */}
                    <Route path='/' element={<Login />} />
                    <Route path='/forgotPassword' element={<ForgotPassword />} />
                    <Route path='/ForgotPasswordChange' element={<ForgotPasswordChange />} />
                    <Route path='/unauthorized' element={<Unauthorized />} />
                
                
                    {/* //? Private routes  */}
                    <Route element={<RequireAuth />}>
                        <Route path='/home' element={<Home />} />
                        <Route path='/account' element={<Account />} />
                        <Route path='/table-account-list/:CustomerId' element={<CustomerAccountList />} />
                    </Route>

                     {/* catch all */}
                    <Route path="*" element={<Unauthorized />} />
                </Route>
            </Routes>
        </>
    )
}

export default Router