import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HomeAppBar from '../../../Component/Public/HomeAppBar';
import Footer from '../../../Component/Public/Footer';
import { Toolbar } from '@mui/material';

const PublicLayout = () => {
    const location = useLocation();

    // Paths where header and footer should be hidden
    const hideHeaderFooter = location.pathname === '/*';

    return (
        <div>
            {!hideHeaderFooter && <HomeAppBar />}
            <Toolbar />
            <Outlet />
            {!hideHeaderFooter && <Footer />}
        </div>
    );
};

export default PublicLayout;
