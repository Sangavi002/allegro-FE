import React from "react";
import { useRef } from "react";
import { Box, Img, Text, Button } from "@chakra-ui/react";
import installment from "./image/installment.webp";
import smart1 from "./image/smart1.webp";
import sell from "./image/sell.webp";
import summer from "./image/summer.webp";
import grill from "./image/grill.webp";
import chosen from "./image/chosen.webp";
import phone from "./image/phone.webp";
import tyre from "./image/tyre.webp";
import sofa from "./image/sofa.webp";
import cycle from "./image/cycle.webp";
import block from "./image/block.webp";
import sight from "./image/sight.webp";

export const ImageSlider = () => {
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
        <Box position="relative" mt="20px" >
            <Button
                position="absolute"
                left="0"
                top="100"
                zIndex="1"
                h="15%"
                w="3%"
                onClick={scrollLeft}
                bg="rgba(255, 255, 255, 0.8)"
            >
                {"<"}
            </Button>
                <Box
                    ref={scroll}
                    h="230px"
                    overflowX="auto"
                    overflowY="hidden"
                    bg="white"
                    mt="25px"
                    display="flex"
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                    }}
                >
                    <ImageBox src={installment} alt="Installment" label="Take in installments. APR 0%" />
                    <ImageBox src={smart1} alt="Smart1" label="Deliveries and returns for 0 PLN" />
                    <ImageBox src={sell} alt="Sell" label="Sell and get cash" />
                    <ImageBox src={summer} alt="Summer" label="If it's summer, grab some hot prices" />
                    <ImageBox src={grill} alt="Grill" label="When it's summer, it's grilling" />
                    <ImageBox src={chosen} alt="Chosen" label="If so, this one is chosen for you" />
                    <ImageBox src={phone} alt="Phone" label="Electronics" />
                    <ImageBox src={tyre} alt="Tyre" label="Motorization" />
                    <ImageBox src={sofa} alt="Sofa" label="House and garden" />
                    <ImageBox src={cycle} alt="Cycle" label="Sports and tourism" />
                    <ImageBox src={block} alt="Block" label="Kid" />
                    <ImageBox src={sight} alt="Sight" label="Fashion" />
                    
                </Box>
            <Button
                position="absolute"
                right="0"
                top="100"
                zIndex="1"
                h="15%"
                w="3%"
                onClick={scrollRight}
                bg="rgba(255, 255, 255, 0.8)"
            >
                {">"}
            </Button>
        </Box>
    );
};

const ImageBox = ({ src, alt, label }) => (
    <Box flex="0 0 auto" w="8%" p="19px 10px">
        <Img src={src} alt={alt} w="100%" />
        <Text textAlign="center" m="0" mt="7px" fontFamily="sans-serif" fontWeight="700">
            {label}
        </Text>
    </Box>
);
