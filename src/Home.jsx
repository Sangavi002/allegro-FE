import { ImageSlider } from "./ImageSlider";
import { Collection } from "./Collection";
import { Supermarket } from "./Supermarket";
import { useContext } from "react";
import { SearchContext } from "./SearchContext"; 
import { Box, Text, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import badgeLow from "./image/badgeLow.png";

export const Home = () => {
  const {results} = useContext(SearchContext);

  return (
    <Box mt="30px">
      {results.length > 0 ? (
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="10px">
          {results.map((product, productIndex) => (
            <Box p="10px" key={productIndex}  borderRadius="md">
              <Link to={`/${product.title}/${product._id}`} style={{ textDecoration: "none" }}>
                <Box display="flex" justifyContent="center" h="200px">
                  <Img src={product.image} alt={product.title} width="70%" h="200px" objectFit="cover" />
                </Box>
                <Text fontSize="27px" fontWeight="700" fontFamily="sans-serif" color="#117a1b" mt="25px" mb="0">
                  {product.price.toFixed(2)} <span style={{ fontSize: "15px" }}>PLN</span>
                </Text>
                <Text fontFamily="sans-serif" fontSize="12px" color="#117a1b" mt="5px" mb="0">
                  <Img src={badgeLow} alt="badge" w="6%" />Lowest price guarantee
                </Text>
                <Img src="https://sangavi002.github.io/allegro-image/smart.jpeg" alt="smart" w="23%" mt="3px" mb="5px" />
                <Text fontSize="13px" fontFamily="sans-serif" color="#707070" m="0" h="50px">{product.title}</Text>
                <Text color="#1dbd25" fontSize="12px" fontFamily="sans-serif" fontWeight="700" mt="10px" mb="0">
                  Delivery {product.delivery} <Img src="https://sangavi002.github.io/allegro-image/errors.png" alt="error" w="7%" mb="-4px" />
                </Text>
              </Link>
            </Box>
          ))}
        </Box>
      ) : (
        <Box bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px">
          <ImageSlider />
          <Collection />
          <Supermarket />
        </Box>
      )}
    </Box>
  );
};
