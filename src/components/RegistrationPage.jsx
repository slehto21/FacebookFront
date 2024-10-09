import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { differenceInYears, format, isValid } from 'date-fns';
import { enGB, is } from 'date-fns/locale';

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthdate: null,
    });
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
        birthdate: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value);
    };

    const handleDateChange = (value) => {
        try {
            const formattedDate = format(value, 'yyyy-MM-dd');
            const isValidDate = validateField('birthdate', formattedDate);
            if (isValidDate) {
                setFormData({
                    ...formData,
                    birthdate: formattedDate,
                });
            }
        } catch (error) {
            validateField('birthdate', null);
        }
    };

    const validateField = (field, value) => {
        switch (field) {
            case "firstName":
                if (value === '' || value.length < 2 || value.length > 50) {
                    setErrors({
                        ...errors,
                        [field]: true, // Error in this field
                    });
                    return false;
                } else {
                    setErrors({
                        ...errors,
                        [field]: false, // No errors
                    });
                }
                break;
            case "lastName":
                if (value === '' || value.length < 2 || value.length > 50) {
                    setErrors({
                        ...errors,
                        [field]: true,
                    });
                    return false;
                } else {
                    setErrors({
                        ...errors,
                        [field]: false,
                    });
                }
                break;
            case "email":
                if (value === '' || value.length < 5 || value.length > 50 || !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                    setErrors({
                        ...errors,
                        [field]: true,
                    });
                    return false;
                } else {
                    setErrors({
                        ...errors,
                        [field]: false,
                    });
                }
                break;
            case "password":
                if (value === '' || value.length < 8 || value.length > 100) {
                    setErrors({
                        ...errors,
                        [field]: true,
                    });
                    return false;
                } else {
                    setErrors({
                        ...errors,
                        [field]: false,
                    });
                }
                break;
            case "confirmPassword":
                if (value === '' || value !== formData.password) {
                    setErrors({
                        ...errors,
                        [field]: true,
                    });
                    return false;
                } else {
                    setErrors({
                        ...errors,
                        [field]: false,
                    });
                }
                break;
            case "birthdate":
                const currentDate = new Date();
                const givenDate = new Date(value);
                const difference = differenceInYears(currentDate, givenDate);
                if (!value || !value.match(/^\d{4}-\d{2}-\d{2}$/) || !givenDate || difference < 13 || difference > 150) {
                    setErrors({
                        ...errors,
                        [field]: true,
                    });
                    return false;
                } else {
                    setErrors({
                        ...errors,
                        [field]: false,
                    });
                }
                break;
            default:
                break;
        }
        return true;
    };

    const handleRegister = async () => {
        try {
            if (Object.values(errors).some((error) => error)) {
                throw new Error('Invalid fields');
            }
            const { confirmPassword, ...dataToSend } = formData;
            const response = await axios.post('http://localhost:3000/auth/register', dataToSend);
            navigate('/', { state: { message: 'Account created succesfully, please log in.', fromRegistration: true } });
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
        }
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
                    Register
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(e) => e.preventDefault()}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        helperText={errors.firstName ? "First name must be between 2 and 50 characters" : ""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        helperText={errors.lastName ? "Last name must be between 2 and 50 characters" : ""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        helperText={errors.email ? "Email must be valid" : ""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                        helperText={errors.password ? "Passwords must be at least 8 characters long" : ""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                        helperText={errors.confirmPassword ? "Passwords do not match" : ""}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={enGB}>
                        <DatePicker
                            label="Birthdate"
                            value={formData.birthdate}
                            inputFormat="dd/MM/yyyy"
                            onChange={(newValue) => handleDateChange(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    required
                                    error={errors.birthdate}
                                    helperText={errors.birthdate ? "Format must be DD/MM/YYYY, age must be between 13-150" : ""}
                                />
                            )}
                        />
                    </LocalizationProvider>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 1 }}
                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
