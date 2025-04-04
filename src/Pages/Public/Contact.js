import React, { useEffect, useRef } from 'react';
import { Box, Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import contact from '../../assest/contact.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import callshape1 from '../../assest/callshap1.webp';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
    const theme = useTheme();
    const contactRef = useRef();
    const messageRef = useRef();
    const infoCardRef = useRef();

    // Animation Effect
    useEffect(() => {
        gsap.from(contactRef.current, {
            opacity: 0,
            y: -50,
            duration: 1.2,
            scrollTrigger: {
                trigger: contactRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.from(messageRef.current, {
            opacity: 0,
            x: -100,
            duration: 1.2,
            scrollTrigger: {
                trigger: messageRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.from(infoCardRef.current, {
            opacity: 0,
            x: 100,
            duration: 1.2,
            scrollTrigger: {
                trigger: infoCardRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);
    return (
        <>
            <Box
                sx={{
                    mt: theme.spacing(8),
                    backgroundImage: `url(${contact})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '40vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h3" color="white">
                    Contact
                </Typography>
            </Box>

            <Box sx={{ p: theme.spacing(5), px: { xs: 2, lg: 22, md: 10 }, }}>
                <Typography variant='h4' mb={5} textAlign={'center'}>
                    Get in Touch
                </Typography>
                <Typography variant='h5' textAlign={'center'}>
                    At Spirale Infosoft, we are always here to elevate your business. Our team of highly experienced developers and experts is available 24/7 to answer your web app development and related queries. Discuss your projects with us and begin your online journey.
                </Typography>

                <Box sx={{ p: theme.spacing(5) }}   >
                    <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>
                        Let's Send Us a Message Below
                    </Typography>
                </Box>

                <Grid container justifyContent="space-between" spacing={4} >
                    <Grid item xs={12} md={3.7}>
                        <Box
                            sx={{
                                backgroundColor: theme => theme.palette.primary.dark,
                                px: { xs: 2, md: 5 },
                                py: { xs: 2, md: 5 },
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '20px',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 1,
                                    backgroundImage: `url(${callshape1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.1,
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                }}
                            />

                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <Typography variant="h5" py={1} color="#E99f2B">
                                    Contact info
                                </Typography>
                                <Typography variant="h4" py={1} color="#FFF" fontWeight="bold">
                                    Let's Connect With Us
                                </Typography>
                                <Typography variant="h5" py={1} color="#FFF">
                                    We will help you regarding your query 24/7
                                </Typography>

                                {[
                                    { icon: CallIcon, title: 'Phone number', content: '+91 01204995054' },
                                    { icon: LocationOnIcon, title: 'Address', content: '3rd Floor, Bhavani Complex, Sector 27, Near Metro Station 18, Noida - 201301, Uttar Pradesh' },
                                    { icon: ChatBubbleOutlineIcon, title: 'Contact Info', content: 'info@spiraleinfosoft.com' }
                                ].map(({ icon: Icon, title, content }, index) => (
                                    <Stack key={index} py={1} direction="row" spacing={2}>
                                        <Icon sx={{ color: theme => theme.palette.ButtonColor, backgroundColor: '#FFF', borderRadius: '50%', p: 1, fontSize: 40 }} />
                                        <Box>
                                            <Typography variant="h5" color="#FFF" fontWeight="bold">
                                                {title}
                                            </Typography>
                                            <Typography py={1} variant="body1" fontSize={16} color="#FFF">
                                                {content}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8.2}>
                        <Stack direction="row" sx={{ display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex' } }} spacing={2} mb={2}>
                            <Box width={'100%'} sx={{ pb: { xs: 2 } }}>
                                <Typography variant='h6' pb={1}>Your Name</Typography>
                                <TextField
                                    placeholder="Your Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            border: '1px solid #2699f3',
                                            '& fieldset': {
                                                borderColor: '#2699f3', // default border color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#2699f3', // hover state color
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#2699f3', // focus state color
                                            },
                                        }
                                    }}
                                />
                            </Box>
                            <Box width={'100%'}>
                                <Typography variant='h6' pb={1}>Your Email*</Typography>
                                <TextField
                                    placeholder="Your Email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            border: '1px solid #2699f3',
                                            '& fieldset': { borderColor: '#2699f3', },
                                            '&:hover fieldset': {
                                                borderColor: '#2699f3',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#2699f3',
                                            },
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>
                        <Stack direction="row" sx={{ display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex' } }} spacing={2} mb={2}>
                            <Box width={'100%'} sx={{ pb: { xs: 2 } }}>
                                <Typography variant='h6' pb={1}>Mobile NO.</Typography>
                                <TextField
                                    placeholder="Mobile number"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            border: '1px solid #2699f3',
                                            '& fieldset': {
                                                borderColor: '#2699f3', // default border color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#2699f3', // hover state color
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#2699f3', // focus state color
                                            },
                                        }
                                    }}
                                />
                            </Box>
                            <Box width={'100%'}>
                                <Typography variant='h6' pb={1}>Subject</Typography>
                                <TextField
                                    placeholder="Subject"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            border: '1px solid #2699f3',
                                            '& fieldset': { borderColor: '#2699f3', },
                                            '&:hover fieldset': {
                                                borderColor: '#2699f3',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#2699f3',
                                            },
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>
                        <Box>
                            <Typography variant='h5' pb={1}>Your Message*</Typography>
                            <TextField
                                placeholder="Your Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={10}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        border: '1px solid #2699f3',
                                        '& fieldset': {
                                            borderColor: '#2699f3',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#2699f3',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#2699f3',
                                        },
                                    }
                                }}
                            />
                        </Box>
                        <Box textAlign={'center'} >
                            <Button size='lg' variant='contained' sx={{ p: 1, px: 3, mt: 3, background: ' #2699f3', borderRadius: '50px' }}>Send Message</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* Map Section */}
            <Box>
                <Box
                    sx={{
                        height: { xs: '300px', md: '400px' },
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28164.58633201035!2d77.31964772796199!3d28.570158245745755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48e2ed2bfc9%3A0x8d4c8eeb2d18938c!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1614670846780!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        title="YouTube video: Example Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </Box>
            </Box>
        </>
    );
};

export default Contact;
