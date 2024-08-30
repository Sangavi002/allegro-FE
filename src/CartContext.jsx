
import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            const userId = localStorage.getItem('userId');
            if (userId) {
                try {
                    const response = await fetch(`https://allegro-be.onrender.com/cart/cartItems?id=${userId}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    const data = await response.json();
                    setCart(data.products || []);
                    setCartCount(data.products?.length || 0);
                } catch (error) {
                    console.error("Failed to fetch cart", error);
                }
            }
        };

        fetchCart();
    }, []);

    const updateCart = (newCart) => {
        setCart(newCart);
        setCartCount(newCart.length);
    };

    return (
        <CartContext.Provider value={{ cart, cartCount, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};
