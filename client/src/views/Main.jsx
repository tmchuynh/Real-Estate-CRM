import React from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';
import RegistrationForm from '../components/Registration';
import LoginForm from '../components/Login';

export default () => {
    return (
        <div>
            <Routes>
                <Route path="/signin" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/password" element={<LoginForm />} />

                <Route path="*" element={<LoginForm />} />
            </Routes>
        </div>
    )
}