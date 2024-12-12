import React from 'react';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import {
    Android as AndroidIcon,
    ChevronRight as ChevronRightIcon,
    ManageSearch as ManageSearchIcon,
    CastForEducation as CastForEducationIcon,
    Api as ApiIcon,
    Apple as AppleIcon,
    AcUnit as AcUnitIcon,
} from '@mui/icons-material';
import service from '../../assest/service.webp';
import { Link } from 'react-router-dom';
const servicesData = [
    {
        id: 1,
        icon: ManageSearchIcon,
        content: 'CMS Development',
        route: '/cms-development-company',
        subContent:
            'From asking the question whether you need a CMS or not to develop a most optimal solution, we have a trained team to take care of all that you need to run a CMS.',
    },
    {
        id: 2,
        icon: AndroidIcon,
        content: 'APP Development',
        route: '/app-development-company',
        subContent:
            'We believe in taking our clients online business to the next level by developing interactive, beautiful Mobile Apps and publishing it to play store.',
    },
    {
        id: 3,
        icon: CastForEducationIcon,
        content: 'Web Development',
        route: '/web-development-company',
        subContent:
            'If you are looking affordable website designing services, you are at the right place. We provide custom website designing services within your budget.',
    },
    {
        id: 4,
        icon: AcUnitIcon,
        content: 'eCommerce Services',
        route: '/ecommerce-services',
        subContent:
            'If you are looking affordable website designing services, you are at the right place. We provide custom website designing services within your budget.',
    },
    {
        id: 5,
        icon: ApiIcon,
        content: 'API Services',
        rout: '/api-development-and-integration',
        subContent:
            'We are expert in developing and integrating APIs, earning a reputation as reliable API developers with PHP, NodeJs, etc.',
    },
    {
        id: 6,
        icon: AppleIcon,
        content: 'IOS App Development',
        route: '/ios-app-development-services',
        subContent:
            'With our expert iOS developers and experts, we have developed 100+ iOS apps and published them on the app store.',
    },
    {
        id: 7,
        icon: AcUnitIcon,
        content: 'React Native',
        route: '/react-native-app-development-company',
        subContent:
            'React native is a hot technology used to create cross-platform applications with beautiful, fast, and responsive UIs.',
    },
    {
        id: 8,
        icon: CastForEducationIcon,
        content: 'React.js',
        route: '/reactjs-development-services',
        subContent:
            'React native is a hot technology used to create cross-platform applications with beautiful, fast, and responsive UIs.',
    },
];
const OurServices = () => {
    const theme = useTheme();

    // Shared styles
    const gridItemStyle = {
        backgroundColor: '#F0F1F5',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        m: 1,
        '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#4fc3f7',
            borderRadius: '20px',
            transform: 'scale(0)',
            transformOrigin: 'bottom right',
            transition: 'transform 0.6s ease-in-out',
            zIndex: 0,
        },
        '&:hover::before': {
            transform: 'scale(1)',
        },
        '&:hover': { color: '#fff' },
    };

    const contentBoxStyle = {
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        position: 'relative',
        zIndex: 1,
    };

    return (
        <Box
            sx={{
                py: 5,
                px: { xs: 1, md: 14, lg: 22 },
                backgroundColor: theme.palette.primary.main,
                position: 'relative',
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    height: { xs: 200, sm: 300, md: 400 },
                    backgroundImage: `url(${service})`,
                    backgroundPosition: 'right top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '100%',
                }}
            />

            {/* Header */}
            <Typography variant="h5" color="#E99f2B" textAlign="center" pb={2}>
                Our Services
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="#fff" textAlign="center" pb={5}>
                Our wide range of IT services enhances the <br /> working experience
            </Typography>

            {/* Services Grid */}
            <Grid container justifyContent="center" position="relative" zIndex={1}>
                {servicesData.map(({ id, icon: Icon, content, route, subContent }) => (
                    <Grid item xs={12} md={6} lg={2.8} key={id} sx={gridItemStyle}>
                        <Box sx={contentBoxStyle}>
                            <Icon sx={{ fontSize: 60 }} />
                            <Typography variant="h6" fontWeight="bold">
                                <Link style={{ textDecoration: 'none', color: 'inherit', }} to={route || '#'}>
                                    {content}
                                </Link>
                            </Typography>
                            <Typography variant="body2">{subContent}</Typography>
                            <Box textAlign="left">
                                <Button
                                    href={route || '#'}
                                    variant="text"
                                    endIcon={<ChevronRightIcon />}
                                    sx={{ color: 'inherit', fontWeight: 'bold', mt: 'auto' }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default OurServices;
