import { Box, Text,Button, Img } from "@chakra-ui/react"
import { useEffect,useState,useRef } from "react";
import { Link } from "react-router-dom";
import badgeLow from "./image/badgeLow.png"

export const Collection = () => {
    const [data, setData] = useState(null);
    const scroll = useRef(null);

    const scrollLeft = () => {
        if (scroll.current) {
            scroll.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scroll.current) {
            scroll.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        fetchTask();
    }, [])

    const fetchTask = async () => {
        try {
            const response = await fetch("https://allegro-be.onrender.com/api/collections", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
        <Box  mt="30px" >
            {data && (
                <Box >
                    {data.map((collection, collectionIndex) => (
                        <Box key={collectionIndex} mb="30" h="450px" bg="white" p="10px" position="relative"> 
                            <Button
                                position="absolute"
                                left="0"
                                top="200"
                                zIndex="1"
                                h="8%"
                                w="3%"
                                onClick={scrollLeft}
                                bg="rgba(255, 255, 255, 0.8)"
                            >
                                {"<"}
                            </Button>
                                <Text fontSize="25px" fontFamily="sans-serif" mb="4" >{collection.name}</Text>
                                
                                {collection.product.length === 0 ? (
                                    <Text>No products found.</Text>
                                ) : (
                                    <Box display="flex"  
                                         ref={scroll} 
                                         overflowX="auto"
                                         overflowY="hidden"
                                         sx={{
                                        '&::-webkit-scrollbar': {
                                            display: 'none',
                                        },
                                        '-ms-overflow-style': 'none',
                                        'scrollbar-width': 'none',
                                    }}>
                                        {collection.product.map((product, productIndex) => (
                                            <Box w="17%" flex="0 0 auto" p="10px" key={productIndex}>
                                                <Link key={productIndex} to={`/${collection.name}/${product._id}`} style={{textDecoration: "none"}}>
                                                <Box display="flex" justifyContent="center" h="200px">
                                                    <img src={product.image} alt={product.title} width="70%" h="200px" /> 
                                                </Box>
                                                <Text fontSize="27px" fontWeight="700" fontFamily="sans-serif" color="#117a1b" mt="25px" mb="0">{product.price.toFixed(2)} <span style={{fontSize: "15px"}}>PLN</span></Text>
                                                <Text fontFamily="sans-serif" fontSize="12px" color="#117a1b" mt="5px" mb="0"><Img src={badgeLow} alt="bagde" w="6%"/>Lowest price guarantee</Text>
                                                <Img src="https://sangavi002.github.io/allegro-image/smart.jpeg" alt="smart" w="23%" mt="3px" mb="5px"/>
                                                <Text fontSize="13px" fontFamily="sans-serif" color="#707070" m="0" h="50px">{product.title}</Text>
                                                <Text color="#1dbd25" fontSize="12px" fontFamily="sans-serif" fontWeight="700" mt="10px" mb="0"> delivery {product.delivery} <Img src="https://sangavi002.github.io/allegro-image/errors.png" alt="error" w="7%" mb="-4px"/></Text>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            <Button
                                position="absolute"
                                right="0"
                                top="200"
                                zIndex="1"
                                h="8%"
                                w="3%"
                                onClick={scrollRight}
                                bg="rgba(255, 255, 255, 0.8)"
                            >
                                {">"}
                            </Button>
                        </Box>
                    ))}
                    
                </Box>
            )}
            
        </Box>
        </>
    );
}