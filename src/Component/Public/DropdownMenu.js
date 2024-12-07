import React, { useState, useEffect } from "react";
import { Button, Typography, Box, IconButton, useTheme, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Styled Components
const Dropdown = styled("div")({
    position: "relative",
    display: "block",
    "&:hover > div": {
        display: "block",
    },
});

const DropdownContent = styled("div")({
    display: "none",
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
    minWidth: "230px",
    borderLeft: "2px solid #4fc3f7",
});

const NestedDropdown = styled(DropdownContent)({
    left: "100%",
    top: 0,
});

const StyledButton = styled(Button)(({ active }) => ({
    textTransform: "none",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    overflow: "hidden",
    background: "none",
    position: "relative",
    color: active ? "#4fc3f7" : "#000",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        height: active ? "1px" : "100px",
        width: active ? "100%" : "0",
        backgroundColor: "#4fc3f7",
        transition: "width 0.5s ease-in-out, color 0.5s ease-in-out",
        zIndex: -1,
    },
    "&:hover::after": {
        height: "100%",
        width: "100%",
    },
    "&:hover": {
        color: "#fff",
    },
}));

const DropdownMenu = ({ items }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const location = useLocation();
    const theme = useTheme();

    useEffect(() => {
        AOS.init({ duration: 500, easing: "ease-in-out" });
        AOS.refresh(); // Refresh AOS on updates
    }, []);

    const renderMenu = (menuItems) =>
        menuItems.map((item, index) => (
            <Dropdown data-aos="zoom-in" key={index}>
                <StyledButton
                    fullWidth
                    href={item.route || "#"}
                    active={location.pathname === item.route}
                >
                    {item.icon && (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                            {item.icon}
                        </Box>
                    )}
                    <Stack direction="row" gap={1} alignItems="center">
                        <Typography variant="body2">{item.name}</Typography>
                        <Typography variant="h5" sx={{ display: "flex", alignItems: "center" }}>
                            {item.icon1}
                        </Typography>
                    </Stack>
                </StyledButton>
                {item.subMenu && (
                    <DropdownContent>
                        {item.subMenu.map((subItem, subIndex) =>
                            subItem.subMenu ? (
                                <Dropdown key={subIndex}>
                                    <StyledButton
                                        fullWidth
                                        href={subItem.route || "#"}
                                        active={location.pathname === subItem.route}
                                        onMouseEnter={() => setHoveredItem(subIndex)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        sx={{ borderBottom: "1px solid #e9e9e9" }}
                                        data-aos="fade-up"
                                    >
                                        <Box
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                mx: 1,
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <IconButton size="small" sx={{ background: theme.palette.info.light, mr: 1 }}>
                                                {subItem.icon}
                                            </IconButton>
                                            <Typography variant="body2">{subItem.name}</Typography>
                                            <Typography variant="h5">
                                                {hoveredItem === subIndex ? item.icon2 : item.icon1}
                                            </Typography>
                                        </Box>
                                    </StyledButton>
                                    <NestedDropdown>
                                        {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                            <StyledButton
                                                key={nestedIndex}
                                                href={nestedItem.route || "#"}
                                                active={location.pathname === nestedItem.route}
                                                data-aos="flip-left"
                                            >
                                                <Box sx={{ width: "100%", display: "flex", alignItems: "center", mx: 1 }}>
                                                    <IconButton
                                                        size="small"
                                                        sx={{ background: theme.palette.info.light, mr: 1 }}
                                                    >
                                                        {nestedItem.icon}
                                                    </IconButton>
                                                    <Typography>{nestedItem.name}</Typography>
                                                </Box>
                                            </StyledButton>
                                        ))}
                                    </NestedDropdown>
                                </Dropdown>
                            ) : (
                                <StyledButton
                                    key={subIndex}
                                    href={subItem.route || "#"}
                                    active={location.pathname === subItem.route}
                                    sx={{ borderBottom: "1px solid #e9e9e9" }}
                                    data-aos="fade-left"
                                >
                                    <Box sx={{ width: "100%", display: "flex", alignItems: "center", mx: 1 }}>
                                        <IconButton
                                            size="small"
                                            sx={{ background: theme.palette.info.light, mr: 1 }}
                                        >
                                            {subItem.icon}
                                        </IconButton>
                                        <Typography>{subItem.name}</Typography>
                                    </Box>
                                </StyledButton>
                            )
                        )}
                    </DropdownContent>
                )}
            </Dropdown>
        ));

    return <>{renderMenu(items)}</>;
};

export default DropdownMenu;
