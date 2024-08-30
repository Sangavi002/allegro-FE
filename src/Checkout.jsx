import { Box, Text, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from './CartContext';

export const Checkout = () => {
    const navigate = useNavigate(); 
    const { updateCart } = useCart(); 
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        country: "",
        street: "",
        buildingNo: "",
        apartmentNo: "",
        postalCode: "",
        city: ""
    });
    
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.firstname) newErrors.firstname = "First name is required";
        if (!formData.lastname) newErrors.lastname = "Last name is required";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";
        if (!formData.country) newErrors.country = "Country is required";
        if (!formData.street) newErrors.street = "Street is required";
        if (!formData.buildingNo) newErrors.buildingNo = "Building number is required";
        if (!formData.apartmentNo) newErrors.apartmentNo = "Apartment number is required";
        if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
        if (!formData.city) newErrors.city = "City is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        const userId = localStorage.getItem("userId"); 
        const order_item = JSON.parse(localStorage.getItem("Products")) || [];
        if (!userId || order_item.length === 0) {
            console.log("Missing userId or products.");
            return;
        }

        const requestBody = {
            userId,
            order_item,
            customer_detail: [formData]
        };

        try {
            const response = await fetch("https://allegro-be.onrender.com/checkout/list", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();
            if (response.status === 200) {
                localStorage.removeItem("Products");
                localStorage.removeItem("totalPrice");
                updateCart([])
                alert("Order placed successful!");
                navigate("/"); 
            } else {
                alert("Checkout failed. Please try again.");
            }
        } catch (error) {
            console.error('Checkout Error:', error);
        }
    }

    return(
        <Box pt="50px" pl="10px" pr="10px" bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px">
            <Box display="flex" flexDirection="row" w="70%" h="40px" p="10px 20px" gap="5px">  
                <Box w="30%">
                    <Text fontSize="20px" fontFamily="sans-serif" fontWeight="500" color="#ff5a00" m="0" pb="7px" borderBottom="5px solid #ff5a00">Your Cart</Text>
                </Box>
                <Box w="30%">
                    <Text fontSize="20px" fontFamily="sans-serif" fontWeight="500" color="#ff5a00" m="0" pb="7px" borderBottom="5px solid #ff5a00">Delivery and payment</Text>
                </Box>
                <Box w="30%">
                    <Text fontSize="20px" fontFamily="sans-serif" fontWeight="500" color="gray" m="0" pb="7px" borderBottom="5px solid gray">Done</Text>
                </Box>
            </Box> 
            <Box display="flex" gap="20px">
                <Box width="75%" h="auto" p="10px" mb="20px" fontFamily="sans-serif" bg="white">
                    <Box >
                        <Text fontSize="25px" fontWeight="700" m="15px">Your details</Text>
                    </Box >
                    <hr />
                    <Text mt="20px">This is your first purchase! Enter your details and we will save them to your user account on Allegro. You can always change the details you provided in the My Account tab.</Text>
                    <Box display="flex" flexDirection="column" w="75%">
                        <Text mt="0">Based on your address we can offer you suitable delivery options.</Text>
                        <label>First name</label>
                        <Input 
                            type="text"  
                            m="10px 0px" 
                            p="10px"
                            placeholder="e.g. John"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                        />
                        {errors.firstname && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.firstname}</Text>}
                        
                        <label>Last name</label>
                        <Input 
                            type="text"  
                            m="10px 0px" 
                            p="10px"
                            placeholder="e.g. Smith"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                        />
                        {errors.lastname && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.lastname}</Text>}
                        
                        <label>Phone Number</label>
                        <Input 
                            type="number"  
                            m="10px 0px" 
                            p="10px" 
                            placeholder="Mobile Number"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                        {errors.mobile && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.mobile}</Text>}
                        
                        <label>Country</label>
                        <select 
                            name="country" 
                            style={{ margin:"10px 0px", padding:"10px"}} 
                            onChange={handleChange} 
                            value={formData.country}
                            required
                        >
                            <option value="">Select Country</option>
                            <option value="Poland">Poland</option>
                            <option value="France">France</option>
                            <option value="India">India</option>
                        </select>
                        {errors.country && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.country}</Text>}

                        <Box display="flex" flexDirection="row" gap="10px">
                            <Box display="flex" flexDirection="column">
                                <label>Street</label>
                                <Input 
                                    type="text" 
                                    m="10px 0px" 
                                    p="10px 6px" 
                                    placeholder="e.g. Main Street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.street && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.street}</Text>}
                            </Box>
                            <Box display="flex" flexDirection="column">
                                <label>Building number</label>
                                <Input 
                                    type="number" 
                                    m="10px 0px"  
                                    p="10px 6px" 
                                    placeholder="e.g. 10"
                                    name="buildingNo"
                                    value={formData.buildingNo}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.buildingNo && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.buildingNo}</Text>}
                            </Box>
                            <Box display="flex" flexDirection="column">
                                <label>Apartment number</label>
                                <Input 
                                    type="number" 
                                    m="10px 0px"  
                                    p="10px 6px" 
                                    placeholder="e.g. 10"
                                    name="apartmentNo"
                                    value={formData.apartmentNo}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.apartmentNo && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.apartmentNo}</Text>}
                            </Box>
                        </Box>  
                        <Box display="flex" flexDirection="row" gap="10px">
                            <Box display="flex" flexDirection="column">
                                <label>Postal code</label>
                                <Input 
                                    type="number" 
                                    m="10px 0px" 
                                    p="10px" 
                                    placeholder="e.g. 00-0000"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.postalCode && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.postalCode}</Text>}
                            </Box>
                            <Box display="flex" flexDirection="column">
                                <label>City</label>
                                <Input 
                                    type="text" 
                                    m="10px 0px" 
                                    p="10px" 
                                    placeholder="e.g. Warsaw"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.city && <Text color="red" m="-5px 0 10px 0" fontSize="13px">{errors.city}</Text>}
                            </Box>
                        </Box>
                    </Box>
                    <Button type="submit" onClick={handleSubmit} bg="#ff5a00" color="white" border="none" p="10px" letterSpacing="1.5px">SAVE</Button>
                </Box>
                <Box width="30%" h="280px" p="10px"  bg="white" fontFamily="sans-serif">
                    <Box >
                        <Text fontSize="25px" fontWeight="700" m="15px">Summary</Text>
                    </Box >
                    <hr />
                    <Box display="flex" flexDirection="row" justifyContent="space-between" fontSize="15px" color="gray">
                        <Text >Value of products</Text>
                        <Text>PLN{localStorage.getItem("totalPrice")}</Text>
                    </Box>
                    <hr />
                    <Box display="flex" flexDirection="row" justifyContent="space-between" color="#3a4d53">
                        <Text fontSize="15px" fontWeight="700">Total</Text>
                        <Text fontSize="25px" fontWeight="700" m="5px">PLN{localStorage.getItem("totalPrice") }</Text>
                    </Box>
                    <Button bg="#ff5a00" color="white" border="none" p="10px" letterSpacing="1.5px" w="100%">BUY AND PAY</Button>
                    <Text fontSize="12px" color="gray">By clicking this button you confirm your purchase. The seller will receive your order.</Text>
                </Box>
            </Box>
        </Box>
    )
}
