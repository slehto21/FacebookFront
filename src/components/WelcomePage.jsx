import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export const WelcomePage = () => {
    const [formData, setFormData] = useState({
        job: '',
        education: '',
        maritalStatus: '',
        bio: '',
        location: '',
        hobbies: '',
        phonenum: '',
        nickname: '',
    });
    const location = useLocation();
    const navigate = useNavigate();

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/profile', { state: { message: 'Profile completed successfully!' } });
        
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Welcome! Please complete your profile so others can know you better.
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="job"
                        label="Job Title"
                        name="job"
                        value={formData.job}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="education"
                        label="Education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="marital-status-label">Marital Status</InputLabel>
                        <Select
                            labelId="marital-status-label"
                            id="maritalStatus"
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            label="Marital Status"
                        >
                            <MenuItem value="single">Single</MenuItem>
                            <MenuItem value="married">Married</MenuItem>
                            <MenuItem value="divorced">Divorced</MenuItem>
                            <MenuItem value="widowed">Widowed</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="bio"
                        label="Bio"
                        name="bio"
                        multiline
                        rows={4}
                        value={formData.bio}
                        onChange={handleChange}
                        helperText="Max 500 characters"
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="hobbies"
                        label="Hobbies"
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="phonenum"
                        label="Phone Number"
                        name="phonenum"
                        value={formData.phonenum}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="nickname"
                        label="Nickname"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Complete Profile
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default WelcomePage;
