import React from 'react'
import StatisticWedget from '../StatisticWedget'
import { content, services } from './data'
import { Grid, Stack, Box, Toolbar } from '@mui/material';
import OurService from '../OurService';
import Slider from '../../../Component/Public/Slider'
const WebDevelopment = () => {
    return (
        <>
            {content.map((item, idx) => {
                return (
                    <Stack key={idx}>
                        <StatisticWedget
                            heroImage={item.image1}
                            courseTitle={item.courseTitle}
                            homeColor={item.homeColor}
                        />
                    </Stack>
                )
            })}
            <Box sx={{ px: { xs: 0, ms: 10, lg: 20 }, }}>
                <Toolbar />
                <Grid container >
                    <Grid item xs={12} lg={8}>
                        {services.map((item, idx) => {
                            return (
                                <Stack key={idx} sx={{ mb: 2 }}>
                                    <StatisticWedget
                                        contentImage={item.image2}
                                        title={item.title}
                                        titleDescription={item.titleDescription}
                                        heading={item.heading}
                                        headingDescription={item.headingDescription}
                                        description={item.description}
                                    />
                                </Stack>
                            )
                        })}
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <OurService />
                    </Grid>
                </Grid>
            </Box>
            <Slider />
        </>
    )
}

export default WebDevelopment