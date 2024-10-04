import React from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../services/authToken";
import { Container, Button, Typography } from "@mui/material";

export const MainPage = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        removeToken();
        navigate('/');
    }

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Welcome to Facebook
            </Typography>
            <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignOut}
            >
                Sign Out
            </Button>
        </Container>
    );
};