import React, { useContext } from 'react';
import { Modal, Box, Typography, Button, Card, CardContent } from '@mui/material';
import { CartContext } from '../context/CartContext';

const ProductDetailModal = ({ open, handleClose, product }) => {
    const { dispatch } = useContext(CartContext);
    if (!product) return null;

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ backgroundColor: '#ffffff', p: 3, maxWidth: 900, m: 'auto', mt: 5, borderRadius: 10 }}>
                <Typography variant="h5">{product.title}</Typography>
                <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                    <img src={product.image} alt="product" height={250} />
                    <Box>
                        <Typography>Price: ${product.price}</Typography>
                        <Typography mt={1}>{product.description}</Typography>
                        <Typography mt={1}>Category: {product.category}</Typography>

                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <Card sx={{ minWidth: 100 }}>
                                <CardContent>
                                    <Typography>Rating</Typography>
                                    <Typography variant="h6">⭐ {product.rating.rate}</Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ minWidth: 100 }}>
                                <CardContent>
                                    <Typography>Discount</Typography>
                                    <Typography variant="h6" color="error">25% OFF</Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        <Button
                            variant="contained"
                            color="warning"
                            sx={{ mt: 2 }}
                            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                        >
                            Add To Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default ProductDetailModal;
