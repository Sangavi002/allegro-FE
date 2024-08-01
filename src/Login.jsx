import {Box,Text,Flex,Input,Button} from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [formData,setFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://allegro-be.onrender.com/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data)
            if(response.status === 200 && data.Token){
                localStorage.setItem("token",data.Token)
                localStorage.setItem("userId", data.UserId);
                navigate("/")
            }else{
                alert("Wrong Credentials.")
            }
        } catch (error) {
            console.error('Registration Error:', error); 
        }
    }

    return(
        <Box display="flex" flexDirection="row" gap="20px" pt="50px" h="650px" pl="10px" pr="10px"  bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px" >
           <Box  w="40%" h="500px" ml="auto" mr="0"  bg="white">
                <Box  w="90%" p="20px" >
                        <Text fontSize="20px" fontFamily="sans-serif" fontWeight="700">Sign in</Text>
                        <form onSubmit={handleSubmit}>
                            <Flex flexDirection="column">
                                <Input type="text" mb='10px' p='8px'
                                        name="email" 
                                        placeholder="login or email" 
                                        value={formData.email} 
                                        onChange={handleChange} required/>
                                <Input type="text" mb='10px' p='8px'
                                        name="password" 
                                        placeholder="password" 
                                        value={formData.password} 
                                        onChange={handleChange} required/>
                                <Text color="green" fontSize="13px" fontFamily="sans-serif" mt="0">Recover the password</Text>
                                <Button  type="submit"  fontSize="18px" letterSpacing=".8px" border="none" bg="#ff5a00"  p="10px 10px"color="white" mt="10px" mb="10px" >SIGN IN</Button>
                            </Flex>
                        </form>  
                        <Text textAlign="center">or</Text>  
                        <Button w="100%" bg="none" border="1px solid gray" mb="15px" p="5px"> <img src="https://sangavi002.github.io/allegro-image/google.svg" alt="google" />CONTINUE WITH GOOGLE</Button>
                        <Button w="100%" bg="none" border="1px solid gray" mb="15px" p="5px"><img src="https://sangavi002.github.io/allegro-image/fb.svg" alt="fb" />CONTINUE WITH FACEBOOK</Button>
                        <Button w="100%" bg="none" border="1px solid gray" mb="15px" p="5px"><img src="https://sangavi002.github.io/allegro-image/phone.svg" alt="phone" />USE CONTACT NUMBER</Button>
                </Box>
                <Box  h="50px" w="100%" bg="white" mt="10px">
                <Text p="15px 20px" fontSize="15px" fontFamily="sans-serif" fontWeight="700">First time on Allegro? <Button border="none" color="green" bg="white" letterSpacing=".8px" onClick={() => navigate("/register")}>CREATE AN ACCOUNT</Button></Text>
                </Box>
           </Box >
            <Box w="40%" h="568px" ml="0" mr="auto" bg="white">

            </Box>
        </Box>
    )
}