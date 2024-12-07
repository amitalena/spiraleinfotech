import React from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import { FaRegHandPointRight } from "react-icons/fa";

const StatisticWidget = ({
    heroImage, // Renamed image1 to heroImage for better clarity
    courseTitle,
    contentImage, // Renamed image2 to contentImage for clarity
    title,
    homeColor,
    titleDescription,
    heading,
    headingDescription,
    description,
}) => {
    const theme = useTheme();

    return (
        <>
            {/* Hero Section */}
            {heroImage && (
                <Box
                    sx={{
                        width: "100%",
                        height: "35vh",
                        mt: 8,
                        position: "relative",
                        background: `url(${heroImage}) no-repeat center/cover`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* Overlay Box */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: homeColor,
                            zIndex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            sx={{
                                fontSize: { xs: "30px", md: "50px" },
                                zIndex: 2,
                                color: theme.palette.info.light,
                                textAlign: "center",
                            }}
                        >
                            {courseTitle}
                        </Typography>
                    </Box>
                </Box>
            )}

            {/* Main Content */}
            <Box
                sx={{
                    px: { xs: 2 },
                }}
            >
                <Stack spacing={2}>
                    {/* Content Image */}
                    {contentImage && (
                        <Box
                            sx={{
                                height: { xs: "35vh", md: "400px" },
                                width: "100%",
                                borderRadius: '15px',
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={contentImage}
                                alt={title || "Content"}
                                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                            />
                        </Box>
                    )}

                    {/* Title */}
                    {title && (
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                color: theme.palette.primary.dark,
                            }}
                        >
                            {title}
                        </Typography>
                    )}

                    {/* Title Description */}
                    {titleDescription && (
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {titleDescription}
                        </Typography>
                    )}

                    {/* Heading Section */}
                    {heading && (
                        <Box display="flex" alignItems="center" sx={{ width: "100%" }}>
                            <Typography component={'span'}>
                                <FaRegHandPointRight />
                                <Typography variant="body1" fontWeight="bold" component="span">
                                    {heading}
                                </Typography>
                                <Typography variant="body2" component="span">
                                    {headingDescription}
                                </Typography>
                            </Typography>
                        </Box>
                    )}

                    {/* Description */}
                    {description && (
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {description}
                        </Typography>
                    )}
                </Stack>
            </Box>
        </>
    );
};

export default StatisticWidget;
