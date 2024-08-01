import { Box, Flex, Text, Img, Button } from "@chakra-ui/react";
import { useRef } from "react";

export const Supermarket = () => {
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

  return (
    <Box  h="415px" mt="30" bg="white" position="relative">
      <Button
        position="absolute"
        left="0"
        top="180"
        zIndex="1"
        h="8%"
        w="3%"
        onClick={scrollLeft}
        bg="rgba(255, 255, 255, 0.8)"
      >
        {"<"}
      </Button>
      <Box
        display="flex"
        ref={scroll}
        overflowX="auto"
        overflowY="hidden"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        <Box p="30px" fontFamily="sans-serif">
          <Text w="200px" fontSize="25px" mb="0">Find Inspiration</Text>
          <Text fontSize="15px" mt="10">in the Supermarket Category</Text>
        </Box>
        <ImageBox src="https://sangavi002.github.io/allegro-image/laundry.webp" alt="laundry" label="Laundry and cleaning" />
        <ImageBox src="https://sangavi002.github.io/allegro-image/household chemical.webp" alt="household" label="Household chemicals" />
        <ImageBox src="https://sangavi002.github.io/allegro-image/coffee.webp" alt="coffee" label="Coffee" />
        <ImageBox src="https://sangavi002.github.io/allegro-image/spices.webp" alt="spice" label="Spices and herbs" />
        <ImageBox src="https://sangavi002.github.io/allegro-image/cat.webp" alt="cat" label="For cats" />
        <ImageBox src="https://sangavi002.github.io/allegro-image/nuts.webp" alt="nuts" label="Nuts, dried fruits, seeds" />
        <ImageBox src="https://sangavi002.github.io/allegro-image/for dogs.webp" alt="dog" label="For dogs" />
      </Box>
      <Button
        position="absolute"
        right="0"
        top="180"
        zIndex="1"
        h="8%"
        w="3%"
        onClick={scrollRight}
        bg="rgba(255, 255, 255, 0.8)"
      >
        {">"}
      </Button>
    </Box>
  )
}

const ImageBox = ({ src, alt, label }) => (
  <Box flex="0 0 auto" w="20%" position="relative" fontFamily="sans-serif" fontSize="14px">
    <Img src={src} alt={alt} w="100%" h="415px" />
    <Text 
      mb="40"
      w="80%"
      h="50px"
      bg="white"
      fontWeight="700"
      position="absolute"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {label}
    </Text>
  </Box>
);
