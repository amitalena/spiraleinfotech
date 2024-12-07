import React from 'react';
import { Box } from '@mui/material';
import NotFoundImage from '../../assest/notfound.mp4';

const NotFound = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                zIndex: 1300
            }}
        >
            <video
                src={NotFoundImage}
                autoPlay
                loop
                muted
                style={{
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </Box>
    );
};

export default NotFound;
