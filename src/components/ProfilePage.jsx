import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const ProfilePage = () => {

    const location = useLocation();

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
                    Profile Page
                </Typography>
                {location.state?.message && (
                    <Typography component="p" color="success.main">
                        {location.state.message}
                    </Typography>
                )}
            </Box>
        </Container>
    );
}