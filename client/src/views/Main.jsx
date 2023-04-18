import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import RegistrationForm from '../components/Registration';
import LoginForm from '../components/Login';
import PasswordReset from '../components/Password';

export default () => {
    return (
        <div className='p-5'>
            <Routes>
                <Route path="/signin" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/password" element={<PasswordReset />} />
                <Route path="/reset" element={
                    <div>
                        <h3>We sent you en email which contains a link to reset your password
                        </h3>
                        <br /> <br /> <br />
                        <Link to={'/signin'}>Go Back</Link>

                    </div>
                } />
                <Route path="*" element={<LoginForm />} />
            </Routes>
        </div>
    )
}