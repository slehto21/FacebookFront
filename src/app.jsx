import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage'; 
import { RegistrationPage } from './components/RegistrationPage';
import { ForgotPassword } from './components/ForgotPassword';
import { MainPage } from './components/MainPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
}