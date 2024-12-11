import React, { useState } from 'react';
import "../styles/NavBar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const isSmallScreen = useMediaQuery('(max-width:767px)'); // Ajusta el valor según tu necesidad

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            handleClose();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ backgroundColor: '#032f24' }}>
                <Toolbar>
                    <Typography variant="h5" className='name' component="div" sx={{ flexGrow: 1 }}>
                        Valentino Villella
                    </Typography>
                    {isSmallScreen ? (
                        <>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => handleScroll('hero')}>Sobre Mí</MenuItem>
                                <MenuItem onClick={() => handleScroll('skills')}>Habilidades</MenuItem>
                                <MenuItem onClick={() => handleScroll('projects')}>Proyectos</MenuItem>
                                <MenuItem onClick={() => handleScroll('contact')}>Contactame</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button className='nav-button' color="inherit" onClick={() => handleScroll('hero')}>
                                Sobre Mí
                            </Button>
                            <Button className='nav-button' color="inherit" onClick={() => handleScroll('skills')}>
                                Habilidades
                            </Button>
                            <Button className='nav-button' color="inherit" onClick={() => handleScroll('projects')}>
                                Proyectos
                            </Button>
                            <Button className='nav-button' color="inherit" onClick={() => handleScroll('contact')}>
                                Contactame
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}