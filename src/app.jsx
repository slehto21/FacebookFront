import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage'; 
import { RegistrationPage } from './components/RegistrationPage';
import { ForgotPassword } from './components/ForgotPassword';
import { MainPage } from './components/MainPage';
import { WelcomePage } from './components/WelcomePage';
import { ProfilePage } from './components/ProfilePage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}