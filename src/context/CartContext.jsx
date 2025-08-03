import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
    cart: [],
    searchText: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existing = state.cart.find(p => p.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        case 'SET_SEARCH':
            return { ...state, searchText: action.payload };
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
