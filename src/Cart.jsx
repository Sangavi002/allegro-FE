import { Box, Text, Img, Button, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Cart = () => {
    const { userId ,} = useParams();
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            fetchCart(userId);
        }
    }, [userId]);

    const fetchCart = async (userId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://allegro-be.onrender.com/cart/cartItems?id=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch cart');
            }
            const data = await response.json();
            localStorage.setItem("Products",JSON.stringify(data.products)) || []
             setCart(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        try {
            const response = await fetch(`https://allegro-be.onrender.com/cart/cartItems?userId=${userId}&productId=${productId}&quantity=${newQuantity}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            if (!response.ok) {
                throw new Error('Failed to update quantity');
            }
            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteItem = async (productId) => {
        try {
            const response = await fetch(`https://allegro-be.onrender.com/cart/cartItems?userId=${userId}&productId=${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            setError(error.message);
        }
    };

    const calculateTotalPrice = () => {
        const total = cart.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
        return total;
    };

    useEffect(() => {
        if (cart && cart.products) {
            const total = calculateTotalPrice();
            localStorage.setItem("totalPrice", total.toFixed(2));
        }
    }, [cart]);
    
    
    return (
        <Box  pt="50px" pl="10px" pr="10px" bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px">
            <Box display="flex" flexDirection="row" w="70%" h="40px" p="10px 20px" gap="5px"> 
                    <Box w="30%">
                        <Text fontSize="20px" fontFamily="sans-serif" fontWeight="500" color="#ff5a00" m="0" pb="7px" borderBottom="5px solid #ff5a00">Your Cart</Text>
                    </Box>
                    <Box  w="30%">
                        <Text fontSize="20px" fontFamily="sans-serif" fontWeight="500" color="gray" m="0" pb="7px" borderBottom="5px solid gray">Delivery and payment</Text>
                    </Box>
                    <Box  w="30%">
                        <Text fontSize="20px" fontFamily="sans-serif" fontWeight="500" color="gray" m="0" pb="7px" borderBottom="5px solid gray">Done</Text>
                    </Box>
            </Box>
            <Box display="flex" gap="20px">
                <Box width="70%" h="auto" p="10px" >
                    
                    {loading ? (
                        <Spinner size="xl" />
                    ) : error ? (
                        <Text color="red.500">Error: {error}</Text>
                    ) : cart && cart.products.length > 0 ? (
                        cart.products.map((item, index) => (
                            <Box key={index} borderBottom="1px solid gray" mb="10px" p="10px">
                                <Box display="flex" flexDirection="row" bg="white">
                                    <Box>
                                        <Img src={item.product.image} alt={item.product.title} width="100px" />
                                    </Box>
                                    <Box w="40%">
                                        <Text fontSize="13px" mt="30px" fontFamily="sans-serif" color="gray">{item.product.title}</Text>
                                    </Box>
                                    <Box mb="10px" w="20%">
                                        <Button p="8px 10px" w="10%" mt="25px" ml="30px" bg="white" border="1px solid gray" onClick={() => updateQuantity(item.product._id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
                                        <Button p="8px 10px" w="30%" mt="25px" bg="white" border="1px solid gray">{item.quantity}</Button>
                                        <Button p="8px 10px" w="10%" mt="25px" bg="white" border="1px solid gray" onClick={() => updateQuantity(item.product._id, item.quantity + 1)}>+</Button>
                                    </Box>
                                    <Box>
                                        <Text fontSize="18px" fontWeight="700" fontFamily="sans-serif" color="#3a4d53" mt="25px" mb="30px">
                                            <span style={{ fontSize: "25px" }}>PLN</span> {item.product.price * item.quantity}
                                        </Text>
                                    </Box>
                                    <Box w="10%">
                                        <Button border="none" bg="white" mt="10px" onClick={() => deleteItem(item.product._id)}>
                                            <img src="https://sangavi002.github.io/allegro-image/delete.svg" alt="delete" width="80%" />
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Text>No items in cart.</Text>
                    )}
                </Box>"
                <Box width="25%" h="250px" p="10px" bg="white" fontFamily="sans-serif">
                    {cart && cart.products.length > 0 && (
                        <>
                            <Box display="flex" flexDirection="row" justifyContent="space-between">
                                <Box>
                                    <Text fontSize="lg" fontWeight="700">Total Price</Text>
                                    <Text fontSize="lg" fontWeight="700">Delivery</Text>
                                </Box>
                                <Box >
                                    <Text fontSize="lg" fontWeight="600">PLN {calculateTotalPrice().toFixed(2)}</Text>
                                    <Text fontSize="lg" fontWeight="700">free</Text>
                                </Box>
                            </Box>
                            <hr />
                            <Box display="flex" flexDirection="row" justifyContent="space-between" color="#3a4d53">
                                <Box>
                                    <Text fontSize="lg" fontWeight="700">With Delivery</Text>
                                </Box>
                                <Box>
                                    <Text fontSize="24px" fontWeight="600" m="0" mt="10px">PLN {calculateTotalPrice().toFixed(2)}</Text>
                                </Box>
                            </Box>
                            <Button w="100%" p="13px 10px" letterSpacing=".8px" border="none" bg="#ff5a00" color="white" mb="10px" onClick={() =>navigate("/checkout")}>Delivery and payment</Button>
                            <Button w="100%" p="13px 10px" letterSpacing=".8px" border="none" color="green" bg="white" onClick={() => navigate("/")}>CONTINUE SHOPPING</Button>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
