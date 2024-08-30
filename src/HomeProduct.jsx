import { Box, Text, Img, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const HomeProduct = () => {
    const { productId,category } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        product: "", 
        quantity: "",
    });

    useEffect(() => {
        if (productId && category) {
            fetchProductDetail(category, productId);
        }
    }, [productId, category]);

    useEffect(() => {
        if (productId) {
            setFormData(prevData => ({ ...prevData, product: productId }));
        }
    }, [productId]);

    const fetchProductDetail = async (category, productId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://allegro-be.onrender.com/api/collections/?category=${category}&id=${productId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateCart = async () => {
        try {
            const response = await fetch(`https://allegro-be.onrender.com/cart/cartItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    userId: localStorage.getItem('userId'),
                products: [
                    {
                        product: formData.product, 
                        size: formData.size,
                        quantity: count
                    }
                ] 
                }),
            });
            const data = await response.json();
            navigate(`/cart/${data.userId}`)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box display="flex" flexDirection="row" gap="20px" pt="50px" h="650px" pl="10px" pr="10px" bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px">
            <Box w="70%" p="10px" bg="white" h="580px">
                {loading ? (
                    <Text>Loading product details...</Text>
                ) : error ? (
                    <Text>Error: {error}</Text>
                ) : product ? (
                    <>
                        <Text fontSize="25px" fontFamily="sans-serif" fontWeight="700" mb="10px">{product.title}</Text>
                        <Box w="50%" h="500" ml="auto" mr="auto">
                            <Img src={product.image} alt={product.title} width="100%" mb="10px" h="480" />
                        </Box>
                        
                    </>
                ) : (
                    <Text>Product not found.</Text>
                )}
            </Box>
            <Box w="25%" p="20px" bg="white" h="350px">
                {product && ( 
                    <>
                    <Text fontSize="18px" fontWeight="700" fontFamily="sans-serif" color="#3a4d53" mt="25px" mb="30px">
                    <span style={{ fontSize: "25px" }}>PLN</span> {product.price} <Img src="https://sangavi002.github.io/allegro-image/smart.jpeg" alt="smart" w="25%" ml="20px" mb="-6px" />
                    </Text>
                    <hr /> 
                    <Text color="#1dbd25" fontSize="15px" fontFamily="sans-serif" fontWeight="700" mt="10px" mb="10">
                        delivery {product.delivery} <Img src="https://sangavi002.github.io/allegro-image/errors.png" alt="error" w="5%" mb="-4px" />
                    </Text>
                    <hr />
                    </>
                )}
                <Text mb="5px">Quantity</Text>
                <Box mb="10px">
                    <Button p="8px 10px" w="10%" bg="white" border="1px solid gray" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</Button>
                    <Button p="8px 10px" w="20%" bg="white" border="1px solid gray">{count}</Button>
                    <Button p="8px 10px" w="10%" bg="white" border="1px solid gray" onClick={() => setCount(count + 1)}>+</Button>
                </Box>
                <Button w="100%" p="13px 10px" letterSpacing=".8px" border="none" bg="#ff5a00" color="white" mb="10px" onClick={updateCart}>ADD TO CART</Button>
                <Button w="100%" p="13px 10px" letterSpacing=".8px" border="none" bg="#ff5a00" color="white">BUY AND PAY</Button>
                <Text color="gray" fontSize="12px" fontFamily="sans-serif">
                After clicking BUY AND PAY you will be directed to the delivery and payment summary. Your bank account will not be debited yet.
                </Text>
            </Box>
        </Box>
    );
};
