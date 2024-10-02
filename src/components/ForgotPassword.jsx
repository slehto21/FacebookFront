import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

export const ForgotPassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordReset = () => {
        console.log(`Password reset link sent to ${email}`);
        // Lähetä salasana resetointi -logiikka tänne (esim. API-kutsu)
    };

    const handleLogin = () => {
        navigate('/');
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
                    Forgot Password
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
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handlePasswordReset}
                    >
                        Reset Password
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color='secondary'
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleLogin}
                    >
                        Back to Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
