import { Box, Text, Img, Button, useBreakpointValue} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Female.css";
import { useNavigate } from "react-router-dom";

export const Female = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("Promoted offers"); 
    const [sortOrder, setSortOrder] = useState("");
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchTask(category);
    }, [category]);

    useEffect(() => {
        if (data) {
            const sortedData = [...data].map(collection => {
                collection.product.sort((a, b) => {
                    if (sortOrder === "LowToHigh") {
                        return a.price - b.price;
                    } else if (sortOrder === "HighToLow") {
                        return b.price - a.price;
                    } else {
                        return 0; 
                    }
                });
                return collection;
            });
            setData(sortedData);
        }
    }, [sortOrder]);

    const fetchTask = async (category) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://allegro-be.onrender.com/female/collections?category=${category}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px" p="10px" className="container">
            <Box>
                <Text p="10px 30px" fontSize="25px" fontWeight="700" mb="0">Female Clothing</Text>
            </Box>
            <Box display="flex" flexDirection="row" gap="20px">
                <Box className="category" w="15%" bg="white" p="30px" h="1150px">
                    <Text>Subcategories</Text>
                    <Button border="none" bg="none" mb="10px" onClick={() => navigate("/female")}>back to <span style={{color:"green"}}>Women's Clothing</span></Button>
                    <Box display="flex" flexDirection="column">
                        <Button className="category-button" onClick={() => setCategory("Blouses")}>Blouses</Button>
                        <Button className="category-button" onClick={() => setCategory("Bodysuits")}>Body suits</Button>
                        <Button className="category-button" onClick={() => setCategory("Bolero")}>Bolero</Button>
                        <Button className="category-button" onClick={() => setCategory("Corsets")}>Corsets</Button>
                        <Button className="category-button" onClick={() => setCategory("Dresses")}>Dresses</Button>
                        <Button className="category-button" onClick={() => setCategory("Evening Dresses")}>Evening Dresses</Button>
                        <Button className="category-button" onClick={() => setCategory("Hoodies")}>Hoodies</Button>
                        <Button className="category-button" onClick={() => setCategory("Jackets and Blazers")}>Jackets and Blazers</Button>
                        <Button className="category-button" onClick={() => setCategory("Jeans")}>Jeans</Button>
                        <Button className="category-button" onClick={() => setCategory("Jumpsuits")}>Jumpsuits</Button>
                        <Button className="category-button" onClick={() => setCategory("Legging")}>Legging</Button>
                    </Box>
                    <Box>
                        <Text fontSize="20px" fontWeight="700" fontFamily="sans-serif">Filters</Text>
                        <Button className="filter-button">Allegro Smart</Button>
                        <Button className="filter-button">New</Button>
                        <Button className="filter-button">buy now</Button>
                        <Button className="filter-button">delivery by tomorrow</Button>
                        <Button className="filter-button">below 75 PLN</Button>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="20px" fontWeight="700" fontFamily="sans-serif">Size</Text>
                        <label className="size-button">
                            <input type="checkbox" name="size" value="s" /> S
                        </label>
                        <label className="size-button">
                            <input type="checkbox" name="size" value="m" /> M
                        </label>
                        <label className="size-button">
                            <input type="checkbox" name="size" value="l" /> L
                        </label>
                        <label className="size-button">
                            <input type="checkbox" name="size" value="xl" /> XL
                        </label>
                        <label className="size-button">
                            <input type="checkbox" name="size" value="xxl" /> XXL
                        </label>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="20px" fontWeight="700" fontFamily="sans-serif">Delivery time</Text>
                        <label className="size-button">
                            <input type="radio" value="today" /> delivery today
                        </label>
                        <label className="size-button">
                            <input type="radio" value="tomorrow" /> delivery tomorrow
                        </label> 
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="20px" fontWeight="700" fontFamily="sans-serif">Price</Text>
                        <label className="size-button">
                            <input type="radio" value="25" /> below 25 PLN
                        </label>
                        <label className="size-button">
                            <input type="radio" value="25 to 50" /> 25 PLN to 50 PLN
                        </label> 
                        <label className="size-button">
                            <input type="radio" value="50 to 100" /> 50 PLN to 100 PLN
                        </label> 
                        <label className="size-button">
                            <input type="radio" value="100" /> over 100 PLN
                        </label> 
                    </Box>
                </Box>
                <Box className="product" w="80%">
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : error ? (
                        <Text>Error: {error}</Text>
                    ) : (
                        data && (
                            <Box>
                                
                                {data.map((collection, collectionIndex) => (
                                    <Box key={collectionIndex} p="10px" bg="white">
                                        <Box display="flex" justifyContent="end">
                                            <select onChange={(e) => setSortOrder(e.target.value)} >
                                                <option value="">Sort by</option>
                                                <option value="LowToHigh"> Price: Low To High</option>
                                                <option value="HighToLow"> Price: High To Low</option>
                                            </select>
                                        </Box>
                                        <Text fontSize="25px" fontFamily="sans-serif" mb="4" m="8">{collection.name}</Text>
                                        {collection.product.length === 0 ? (
                                            <Text>No products found.</Text>
                                        ) : (
                                            <Box className="product_grid">
                                                {collection.product.map((product, productIndex) => (
                                                    <Link key={productIndex} to={`/female/${collection.name}/${product._id}`} style={{textDecoration:"none"}}>
                                                        <Box key={productIndex} mb="4" className="product-box" borderBottomColor="2px red">
                                                            <Text m="0" fontFamily="sans-serif" color="gray" fontSize="12px">
                                                                Promoted <Img src="https://sangavi002.github.io/allegro-image/errors.png" alt="error" w="5%" mb="-2px" />
                                                            </Text>
                                                            <Box h="250px" ml="50px">
                                                                <img src={product.image} alt={product.title} width="80%" height="250px" />
                                                            </Box>
                                                            <Text className="product-title" fontSize="13px" fontFamily="sans-serif" color="#707070" mt="30px">{product.title}</Text>
                                                            <Text fontSize="18px" fontWeight="700" fontFamily="sans-serif" color="#3a4d53" mt="25px" mb="0">
                                                                <span style={{ fontSize: "25px" }}>PLN</span> {product.price.toFixed(2)}
                                                                <Img src="https://sangavi002.github.io/allegro-image/smart.jpeg" alt="smart" w="25%" ml="20px" mb="-6px" />
                                                            </Text>
                                                            <Text color="#1dbd25" fontSize="12px" fontFamily="sans-serif" fontWeight="700" mt="10px" mb="10">
                                                                delivery {product.delivery} <Img src="https://sangavi002.github.io/allegro-image/errors.png" alt="error" w="7%" mb="-4px" />
                                                            </Text>
                                                        </Box>
                                                    </Link>
                                                ))}
                                            </Box>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        )
                    )}
                </Box>
            </Box>
        </Box>
    );
};
