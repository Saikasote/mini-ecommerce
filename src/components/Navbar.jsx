import React, { useContext } from 'react';
import { AppBar, Toolbar, TextField, IconButton, Badge, Box, Typography } from '@mui/material';
import { CartContext } from '../context/CartContext';

function Navbar({ onCartClick }) {
    const { cart, dispatch } = useContext(CartContext);

    return (
        <AppBar position="static" sx={{ backgroundColor: '#000' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/logo.png" alt="Logo" style={{ height: 40, marginRight: 10 }} />
                    <Typography variant="h6" sx={{ color: '#fff' }}>Shopify</Typography>
                </Box>
                <TextField
                    placeholder="Search..."
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
                    sx={{ backgroundColor: '#fff', borderRadius: 1, minWidth: 300 }}
                />

                <IconButton onClick={onCartClick}>
                    <Badge badgeContent={cart.length} color="error">
                        <img src="/cart.png" alt="Cart" style={{ height: 30, width: 30 }} />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
