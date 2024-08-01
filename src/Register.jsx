import {Box,Input,Button,Flex,Text} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [formData,setFormData] = useState({
        email: "",
        password: "",
        contact: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://allegro-be.onrender.com/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            if(response.status === 200){
                navigate("/login")
            }else{
                alert("Email already exist.")
            } 
        } catch (error) {
            console.error('Registration Error:', error); 
        }
    }
    return(
        <Box display="flex"  pt="50px"  pl="10px" pr="10px"  bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px">
            <Box border="1px solid" w="45%" h="400px" ml="auto" mr="auto" bg="white" p="20px">
            <Text fontSize="20px" fontFamily="sans-serif" fontWeight="700">CREATE AN ACCOUNT</Text>
                <form onSubmit={handleSubmit}>
                    <Flex flexDirection="column">
                        <Input type="text" mb='10px' p='8px'
                                name="email" 
                                placeholder="email" 
                                value={formData.email} 
                                onChange={handleChange} required/>
                        <Input type="text" mb='10px' p='8px'
                                name="password" 
                                placeholder="password" 
                                value={formData.password} 
                                onChange={handleChange} required/>
                        <Input type="number" mb='10px' p='8px'
                                name="contact" 
                                placeholder="contact" 
                                value={formData.contact} 
                                onChange={handleChange} required/>
                        <Button  type="submit"  fontSize="18px" letterSpacing=".8px" border="none" bg="#ff5a00"  p="10px 10px"color="white" mt="10px" mb="10px" >CREATE AN ACCOUNT</Button>
                    </Flex>
                </form>  
                <Text textAlign="center">or</Text>  
                <Button w="100%" bg="none" border="1px solid gray" mb="15px" p="5px"> <img src="https://sangavi002.github.io/allegro-image/google.svg" alt="google" />CONTINUE WITH GOOGLE</Button>
                <Button w="100%" bg="none" border="1px solid gray" mb="15px" p="5px"><img src="https://sangavi002.github.io/allegro-image/fb.svg" alt="fb" />CONTINUE WITH FACEBOOK</Button>
            </Box>
        </Box>
    )
}