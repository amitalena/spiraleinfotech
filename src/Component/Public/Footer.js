import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useLocation } from 'react-router-dom';

const serviceData = [
    { name: "App Development", color: '#11f', route: '/app-development-company' },
    { name: "Web Development", color: '#f88336', route: '/web-development-company' },
    { name: "API Services", color: '#212121', route: '/api-development-and-integration' },
    { name: "Cross-platform App Development", color: '#FAEA7C', route: '/cross-plateform-app-development' },
    { name: "eCommerce Services", color: '#bf360c', route: '/ecommerce-services' },
    { name: "CMS Development", color: '#4fc3f7', route: '/cms-development-company' },
    { name: "Privacy & Policy", color: '#41cf47', route: '/privacy-policy' },
];
const techData = [
    { name: "Android", color: '#11f', route: '/app-development-company' },
    { name: "iOS", color: '#f88336', route: '/ios-app-development-services' },
    { name: "Php", color: '#212121', route: '/php-development-services' },
    { name: "Laravel", color: '#FAEA7C', route: '/laravel-development-company' },
    { name: "React.js", color: '#bf360c', route: '/reactjs-development-services' },
    { name: "React Native", color: '#4fc3f7', route: '/react-native-app-development-company' },
    { name: "Java", color: '#41cf47', route: '/java-development-company' },
];

const Footer = () => {
    const theme = useTheme();
    const location = useLocation();
    return (
        <>
            <Box sx={{
                backgroundColor: theme.palette.primary.main, height: 'auto',
                px: { xs: 2, lg: 22, md: 10 },
                pt: { xs: 2, md: 5 },
                color: '#FFF'
            }}>
                <Grid container spacing={2} sx={{ borderBottom: '1px solid #ccc' }}>
                    <Grid item xs={12} lg={3.5} sm={12} md={6}>
                        <Typography variant='h6' py={1}>
                            About Company
                        </Typography>
                        <Typography variant='body2' py={2}>
                            Spirale Infosoft is one of the most trusted and reliable software development companies based in Delhi NCR. We provide our finest services in website designing and development. We have dedicated teams of experts and developers to help you in maintenance and digital marketing services as well.
                        </Typography>
                        <Stack direction={'row'} alignItems={'center'} py={2} justifyContent={'space-around'} sx={{
                            backgroundColor: theme.palette.info.deem,
                            borderRadius: '20px',
                        }}>
                            <Box>
                                <Typography variant='h5' color='#000'>
                                    Talk to Our Support
                                </Typography>
                                <Typography variant='h5' color='#000'>
                                    +9101204995054
                                </Typography>
                            </Box>
                            <Box sx={{ height: '70px', width: '70px', display: 'flex', alignItems: 'center', color: theme.palette.primary.dark, background: theme.palette.info.light, borderRadius: '50%' }}>
                                <HeadsetMicIcon sx={{ fontSize: 50, ml: 1 }} />
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} lg={3} sm={12} md={6}>
                        <Typography variant='h5' py={1}>
                            Services
                        </Typography>
                        {serviceData?.map((nestedItem, nestedIndex) => (
                            <Button
                                fullWidth
                                variant="none"
                                key={nestedIndex}
                                href={nestedItem.route || "#"}
                                active={location.pathname === nestedItem.route}
                                color="inherit"
                                startIcon={<KeyboardArrowRightIcon />}
                                sx={{
                                    flexDirection: 'row', // Horizontal alignment for icon and text
                                    justifyContent: 'flex-start',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        color: '#fa2',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {nestedItem.name}
                            </Button>
                        ))}
                    </Grid>

                    <Grid item xs={12} lg={2} sm={12} md={6}>
                        <Typography variant="h5" py={1}>
                            Technologies
                        </Typography>
                        {techData?.map((nestedItem, nestedIndex) => (
                            <Button
                                fullWidth
                                variant="none"
                                key={nestedIndex}
                                href={nestedItem.route || "#"}
                                active={location.pathname === nestedItem.route}
                                color="inherit"
                                startIcon={<KeyboardArrowRightIcon />}
                                sx={{
                                    flexDirection: 'row', // Horizontal alignment for icon and text
                                    justifyContent: 'flex-start',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        color: '#fa2',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {nestedItem.name}
                            </Button>
                        ))}
                    </Grid>

                    <Grid item xs={12} lg={3.5} sm={12} md={6}>
                        <Typography variant='h5' py={1}>
                            Enquiry
                        </Typography>
                        <Box py={1} width="100%">
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Box>
                        <Box py={1} width="100%">
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Box>
                        <Box py={1} width="100%">
                            <TextField
                                id="message"
                                label="Your Message"
                                multiline
                                rows={4}
                                fullWidth
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Box>
                        <Box py={1}>
                            <Button sx={{ background: theme.palette.primary.dark }} variant="contained">Send Message</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Typography variant='body1' py={2} textAlign={'center'}>
                        Copyright 2023 SpiraleInfoSoft.All Rights Reserved by <span style={{ color: "#E99f2B", textDecoration: 'underline', cursor: 'pointer' }}>SpiraleInfoSoft</span>
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Footer;
