import React, { useContext } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { CartContext } from '../context/CartContext';

const CartModal = ({ open, handleClose }) => {
    const { cart, dispatch } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    const updateQty = (id, qty) => {
        if (qty >= 1) {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: qty } });
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ backgroundColor: '#ffffff', p: 3, maxWidth: 900, m: 'auto', mt: 5, borderRadius: 2 }}>
                <Typography variant="h6">My Cart</Typography>
                <table width="100%" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>#</th><th>Product</th><th>Qty</th><th>Price</th><th>Total</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, i) => (
                            <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>{item.title.slice(0, 35)}...</td>
                                <td>
                                    <TextField
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                                        size="small"
                                        inputProps={{ min: 1 }}
                                        sx={{ width: 60 }}
                                    />
                                </td>
                                <td>${item.price}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <Button size="small" color="error" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Typography align="right" variant="h6" mt={2}>Grand Total: ₹ {total}</Typography>
            </Box>
        </Modal>
    );
};

export default CartModal;
