import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { setToken, getToken } from '../services/authToken';

export const LoginPage = () => {
    
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', loginData);
            setToken(response.data.token);
            navigate('/main');
        } catch (error) {
            console.error('Error during login:', error.response ? error.response.data : error.message);
        }
    };

    const handleRegistration = () => {
        navigate('/register');
    };

    const handlePasswordReset = () => {
        navigate('/forgot-password');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Facebook
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={loginData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 1 }}
                        onClick={handleRegistration}
                    >
                        Register
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 1 }}
                        onClick={handlePasswordReset}
                    >
                        Forgot Password
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
