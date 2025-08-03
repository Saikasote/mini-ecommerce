import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, onView }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <Card sx={{ backgroundColor: '#FFFFFF', width: 220, height: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', m: 1 }}>
            <CardMedia component="img" image={product.image} height="140" sx={{ objectFit: 'contain', mt: 1 }} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2">{product.title.slice(0, 40)}...</Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 1 }}>
                <Button size="small"
                    variant="outlined" onClick={() => onView(product)}
                    sx={{
                        color: '#1976d2',
                        borderColor: '#1976d2',
                        borderWidth: 2,
                        textTransform: 'none',
                        textSizeAdjust: 20
                    }}>View Details</Button>

                <IconButton
                    size="small"
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                >
                    <img
                        src="/cart.png"
                        alt="Add to Cart"
                        style={{ width: 24, height: 24 }}
                    />
                </IconButton>
            </Box>
        </Card>
    );
};

export default ProductCard;
