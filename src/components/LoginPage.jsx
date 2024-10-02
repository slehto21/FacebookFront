import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

export const LoginPage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        console.log('Login button pressed');
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
                        value={email}
                        onChange={handleEmailChange}
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
                        value={password}
                        onChange={handlePasswordChange}
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
