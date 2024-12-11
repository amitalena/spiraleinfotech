import React from 'react';
import {
    Box,
    Stack,
    Typography,
    Button,
    useTheme,
    Paper,
    ListItem,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AdjustOutlined } from '@mui/icons-material';

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
    { name: "Java", color: '#41cf47', route: '/java-development-company' },
    { name: "Laravel", color: '#FAEA7C', route: '/laravel-development-company' },
    { name: "React.js", color: '#bf360c', route: '/reactjs-development-services' },
    { name: "React Native", color: '#4fc3f7', route: '/react-native-app-development-company' },
];

const OurService = () => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    // Reusable styles
    const serviceItemStyles = (isActive) => ({
        cursor: 'pointer',
    });

    const iconStyles = (color) => ({
        width: 20,
        height: 20,
        borderRadius: '50%',
        color,
        marginRight: theme.spacing(2),
    });

    const tagButtonStyles = {
        my: 2,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '10px',
    };

    return (
        <Box sx={{ position: 'sticky', mt: 0, mb: 2, top: '10%', px: 2 }}>
            {/* Services List */}
            <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="h4" fontWeight="bold">
                    Our Services
                </Typography>
                {serviceData.map((item, index) => (
                    <Stack direction="row" alignItems="center" spacing={1} key={index}>
                        <ListItem
                            sx={serviceItemStyles(location.pathname === item.route)}
                            onClick={() => navigate(item.route)} // React-friendly navigation
                        >
                            <AdjustOutlined sx={iconStyles(item.color)} />
                            <Typography variant="body2">{item.name}</Typography>
                        </ListItem>
                    </Stack>
                ))}
            </Paper>

            {/* Tag Cloud */}
            <Paper elevation={1} sx={{ p: 3, my: 2 }}>
                <Typography variant="h4" fontWeight="bold" py={2}>
                    Tag Cloud
                </Typography>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    spacing={1}// Added gap for spacing between buttons
                >
                    {techData.map((tech, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            sx={tagButtonStyles}
                            onClick={() => navigate(tech.route)} // Navigate to the tech route
                        >
                            {tech.name}
                        </Button>
                    ))}
                </Stack>
            </Paper>

        </Box>
    );
};

export default OurService;
