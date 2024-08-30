import { Box, Img, Input, Flex, Button, Modal, ModalOverlay, ModalContent, ModalHeader, Text } from "@chakra-ui/react";
import logo from "./image/logo.png";
import truck from "./image/truck.png";
import favorite from "./image/favorite.png";
import message from "./image/message.png";
import notification from "./image/notification.png";
import cart from "./image/cart.png";
import allegro from "./image/allegro.png";
import { useDisclosure } from "@chakra-ui/react";
import { Categories } from "./Categories";
import umbrella from "./image/umbrella.png";
import badge from "./image/badge.png";
import coin from "./image/coin.png";
import percentage from "./image/percentage.png";
import suit from "./image/suit.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const { cartCount } = useCart();

    const goToCart = () => {
        navigate(`/cart/${localStorage.getItem('userId')}`);
    };

    return (
        <>
            <Box h="40px" p="7px 25px" bg="white">
                <Flex>
                    <Box w="10%" h="40px">
                        <Img src={logo} alt="logo" w="100%" />
                    </Box>
                    <Box w="28%" h="40px">
                        <Input type="text" placeholder="what are you looking for?" p="10px 150px 10px 10px" ml="20px" />
                    </Box>
                    <Box w="17%" h="40px">
                        <select name='All categories' style={{ padding: "10px 0px 10px 10px", fontSize: "14px" }}>
                            <option value='All categories'>All categories</option>
                            <optgroup label="Categories">
                                <option value='' className="option">House and garden</option>
                                <option value='' className="option">Kid</option>
                                <option value=''>Electronics</option>
                                <option value=''>Company and art</option>
                                <option value=''>Collections and art</option>
                                <option value=''>Culture and entertainment</option>
                                <option value=''>Fashion</option>
                                <option value=''>Motorization</option>
                                <option value=''>Real estate</option>
                                <option value=''>Sport and tourism</option>
                                <option value=''>Supermarket</option>
                                <option value=''>Beauty</option>
                                <option value=''>Health</option>
                            </optgroup>
                            <optgroup label="Other options">
                                <option value='Charitable purposes'>Charitable purposes</option>
                                <option value='Charities'>Charities</option>
                                <option value='Seller'>Seller</option>
                                <option value='Ended'>Ended</option>
                            </optgroup>
                        </select>
                    </Box>
                    <Box w="10%" h="40px" ml="5px">
                        <Button p="10px 15px 12px 15px" bg="#f85d01" border="none" color="white" letterSpacing="1px" fontSize="15px" borderRadius="3px">SEARCH</Button>
                    </Box>
                    <Box w="40%" h="40px">
                        <Button mb="40px" bg="white" p="0" w="20%" border="none">
                            <Img src={truck} alt="truck" w="50%" pl="20px" pt="3px" />
                        </Button>
                        <Button mb="40px" bg="white" p="0" w="20%" border="none">
                            <Img src={favorite} alt="favorite" w="50%" pl="15px" pt="3px" />
                        </Button>
                        <Button mb="40px" bg="white" p="0" w="20%" border="none">
                            <Img src={message} alt="message" w="40%" pl="15px" pt="3px" />
                        </Button>
                        <Button mb="40px" bg="white" p="0" w="20%" border="none">
                            <Img src={notification} alt="notification" w="40%" pl="15px" pt="3px" />
                        </Button>
                        <Button mb="40px" bg="white" p="0" w="20%" border="none" onClick={goToCart} position="relative">
                            <Img src={cart} alt="cart" w="40%" pl="15px" pt="3px" />
                            {cartCount > 0 && (
                                <Box
                                    position="absolute"
                                    top="20px"
                                    right="5px"
                                    bg="red.500"
                                    border="1px solid #ff5a00"
                                    borderRadius="50%"
                                    w="15px"
                                    h="15px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    color="white"
                                    fontSize="12px"
                                    bgColor="#ff5a00"
                                    
                                    
                                >
                                    <Text>{cartCount}</Text>
                                </Box>
                            )}
                        </Button>
                    </Box>
                    <Box w="20%" h="40px">
                        <Text m="0" pl="56px" fontSize="15px">be<Img src="https://sangavi002.github.io/allegro-image/smart.jpeg" alt="smart" w="32%" p="0" /></Text>
                        <Button ml="50px" bg="white" border="none" fontSize="15px" onClick={onOpen} textAlign="justify">My Allegro</Button>
                        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} w="50%">
                            <ModalOverlay />
                            <ModalContent w="23%" left="900px" top="80px" border="1px solid" p="10px 20px" bg="white" position="relative" zIndex="3">
                                <Img src={allegro} alt="allegro" w="70%" ml="auto" mr="auto" />
                                <ModalHeader textAlign="center" fontSize="25px" letterSpacing="1px" fontWeight="700">Welcome to Allegro!</ModalHeader>
                                <Text color="#a2a2a2" fontSize="13px" fontFamily="sans-serif" textAlign="center">Log in and see your purchases, watched offers and notifications.
                                    You are at home in Allegro!</Text>
                                <Button p="10px" border="none" bg="#f85d01" color="white" letterSpacing="2px" onClick={() => navigate("/login")}>SIGN IN</Button>
                                <Text m="0" p="10px">First time on Allegro? <Button border="none" color="green" bg="white" letterSpacing=".5px" onClick={() => navigate("/register")}>Create an account</Button></Text>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Flex>
            </Box>
            <hr style={{ marginTop: "1px", marginBottom: "-1px" }} />
            <Box h="40px" bg="white">
                <Categories />
                <Button w="12%" border="none" bg="white" p="3"><Img src={umbrella} alt="umbrella" w="10%" p="10px" />Allegro Protect</Button>
                <Button w="12%" border="none" bg="white" p="3"><Img src={badge} alt="badge" w="10%" p="10px" />Lowest price guarantee</Button>
                <Button w="12%" border="none" bg="white" p="3"><Img src={coin} alt="coin" w="10%" p="10px" />Get coins</Button>
                <Button w="12%" border="none" bg="white" p="3"><Img src={percentage} alt="percentage" w="10%" p="10px" />Opportunity zone</Button>
                <Button w="12%" border="none" bg="white" p="3"><Img src={suit} alt="suit" w="10%" p="10px" />Sell on Allegro</Button>
            </Box>
            <hr style={{ marginTop: "1px", marginBottom: "-2px" }} />
        </>
    )
}
