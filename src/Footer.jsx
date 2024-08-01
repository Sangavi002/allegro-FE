import { Box, Text, UnorderedList, ListItem,Img } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <>
        <Box  display="flex" fontFamily="sans-serif" mt="80" bg="white">
            <Box w="25%"  p="20px">
                <Text m="0" mb="30" fontSize="20px" fontFamily="sans-serif" fontWeight="700"> Allegro</Text>
                <UnorderedList styleType="none" p="0" m="0">
                    <ListItem mb="15">About Allegro</ListItem>
                    <ListItem mb="15">Allegro Share</ListItem>
                    <ListItem mb="15">Advertisement</ListItem>
                    <ListItem mb="15">Allegro Ads</ListItem>
                    <ListItem mb="15">Allegro API</ListItem>
                    <ListItem mb="15">Careers at Allegro</ListItem>
                    <ListItem mb="15">Sustainable Development</ListItem>
                    <ListItem mb="15">Information about Digital Services Act</ListItem>
                    <ListItem mb="15">Additional information about Allegro advertising and its parameters</ListItem>
                </UnorderedList>
            </Box>
            <Box w="25%"  p="20px">
                <Text m="0" mb="30" fontSize="20px" fontFamily="sans-serif" fontWeight="700"> Help center</Text>
                <UnorderedList styleType="none" p="0" m="0">
                    <ListItem mb="15">Help Center for buyers</ListItem>
                    <ListItem mb="15">Updates for buyers</ListItem>
                    <ListItem mb="15">Ask the Community</ListItem>
                    <ListItem mb="15">Help Center for sellers</ListItem>
                    <ListItem mb="15">Sell on Allegro</ListItem>
                    <ListItem mb="15">Purchase return</ListItem>
                    <ListItem mb="15">Social media privacy policy</ListItem>
                    <ListItem mb="15">Cookie Policy</ListItem>
                    <ListItem mb="15">Cookie settings</ListItem>
                    <ListItem mb="15">Terms & Conditions</ListItem>
                    <ListItem mb="15">Location Sharing</ListItem>
                    <ListItem mb="15">Security</ListItem>
                    <ListItem mb="15">International sales</ListItem>
                </UnorderedList>
            </Box>
            <Box w="25%"  p="20px">
                <Text m="0" mb="30" fontSize="20px" fontFamily="sans-serif" fontWeight="700"> Help center</Text>
                <UnorderedList styleType="none" p="0" m="0">
                    <ListItem mb="15">Allegro Protect</ListItem>
                    <ListItem mb="15">Allegro Academy</ListItem>
                    <ListItem mb="15">Allegro Analytics</ListItem>
                    <ListItem mb="15">Allegro Business</ListItem>
                    <ListItem mb="15">Allegro Cash </ListItem>
                    <ListItem mb="15">Allegro Lakalnie</ListItem>
                    <ListItem mb="15">Allegro One</ListItem>
                    <ListItem mb="15">Allegro One Fulfillment</ListItem>
                    <ListItem mb="15">Allegro Pay Business</ListItem>
                    <ListItem mb="15">Allegro Smart!</ListItem>
                    <ListItem mb="15">Allegro Archive</ListItem>
                    <ListItem mb="15">Allegro Gift Cards</ListItem>
                    <ListItem mb="15">Allegro Coins</ListItem>
                    <ListItem mb="15">Brands Zone</ListItem>
                </UnorderedList>
            </Box>
            <Box w="25%"  p="20px">
                <Text m="0" mb="30" fontSize="20px" fontFamily="sans-serif" fontWeight="700">Display setting</Text>
                <UnorderedList styleType="none" p="0" m="0">
                    <ListItem mb="15">Apperance:<span style={{ fontWeight: "700"}}>Device theme</span></ListItem>
                </UnorderedList>
                <Text m="0" mb="30" fontSize="20px" fontFamily="sans-serif" fontWeight="700">Location setting</Text>
                <UnorderedList styleType="none" p="0" m="0">
                    <ListItem mb="15">Country <span style={{ fontWeight: "700"}}>Poland</span></ListItem>
                    <ListItem mb="15">Delivery Country <span style={{ fontWeight: "700"}}>Poland</span></ListItem>
                    <ListItem mb="15">Language <span style={{ fontWeight: "700"}}>English</span></ListItem>
                    <ListItem mb="15">Currency <span style={{ fontWeight: "700"}}>PLN</span> </ListItem>
                </UnorderedList>
            </Box>
        </Box>
        <Box bg="white" pb="20px"> 
            <Img src="https://sangavi002.github.io/allegro-image/app.svg" alt="app" width="8%" ml="20"/>
            <Img src="https://sangavi002.github.io/allegro-image/playstore.svg" alt="playstore" width="8%" ml="10"/>
            <Img src="https://sangavi002.github.io/allegro-image/appgallery.svg" alt="appgallery" width="8%" ml="10"/>
            <Img src="https://sangavi002.github.io/allegro-image/fb.svg" alt="fb" ml="30"/>
            <Img src="https://sangavi002.github.io/allegro-image/insta.svg" alt="insta" ml="20"/>
            <Img src="https://sangavi002.github.io/allegro-image/instagram.svg" alt="instagram" ml="20"/>
            <Img src="https://sangavi002.github.io/allegro-image/pinterest.svg" alt="pinterest" ml="20"/>
        </Box>
        <Box bg="#3a4e57" p="20" display="flex" justifyContent="right">
        <Img src="https://sangavi002.github.io/allegro-image/allegro-1.svg" alt="app" width="10%" />
        </Box>
        </>
    );
};
