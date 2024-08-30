import { Menu, MenuButton, MenuList, MenuItem, Button, Img, Box, MenuOptionGroup } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import "./Categories.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

const categoriesData = {
    "Electronics": {
        icon: "https://sangavi002.github.io/allegro-image/laptop.png",
        subcategories: [
            { title: 'Phones and accessories', items: ['Smartphone', 'Smartwatches', 'Tablets', 'GSM accessories', 'Cases, covers and covers'] },
            { title: 'Small household appliances', items: ['Fat-free fryers', 'Upright vacuum cleaners', 'For the kitchen', 'Hygiene and care'] },
            { title: 'News', items: ['iPhone 15', 'iPhone 15 Pro Max'] },
            { title: 'Computers', items: ['Laptops', 'Laptop parts', 'Desktop computers','Computer components','Printers and scanners'] },
            { title: 'Household appliances',items: [ 'Refrigerators','Washing machines', 'Clothes dryers', 'Freestanding kitchens']},
            { title: 'Occasions',items: [ 'Coffee machines', 'Graphic cards']},
            { title: 'Televisions and accessories',items: [ 'Televisions','Projectors', 'Headphones', 'Audio for home','Home cinema']},
            { title: 'Built-in household appliances',items: [ 'Hotplates','Built-in ovens', 'Built-in dishwashers', 'Hoods']},
            { title: 'Brand Store',items: [ '']},
            { title: 'Consoles and machines',items: [ 'Playstation 5 Consoles','Xbox Series X/S Consoles', 'Playstation 4 Consoles', 'Xbox One Consoles','Nintendo Switch Consoles']},
            { title: 'Photography',items: [ 'Digital cameras','Lenses', 'Photo accessories', 'Instant cam','Nintendo Switch Consoles']}
        ]
    },
    "Dress": {
        icon: "https://sangavi002.github.io/allegro-image/dress.png",
        subcategories: [
            { title: 'She', items: ['Seasonal discounts','Female clothing',"Women's shoes","Lingerie","Women's jewelry","Caps","Dresses","Bags","Sandals"] },
            { title: "Fashion accessories", items: [ "Backpacks","Pouches and kidneys"]},
            { title: 'He', items: ["Seasonal discounts","Mens's clothing","Man's shoes","Men's underwear","Men's watches","Caps","Men's sweatshirts","Men's T-shirts","Sport shoes"] },
            { title: "Presents", items: ["Watches", "Bracelets"]},
            { title: 'Kid', items: ["Children's clothes","Children'shoes","Baby clothes","Children's underwear","Sandals","Children's T-Shirts","Hats","Football kits","Children's pajamas"]},
            { title: 'Brand Store',items: [ '']},
            { title:'Sneakers', items: ["adidas Superstar","Nike Air force 1", " adidas Terrex"]},
            { title: "Trends", items: ["New collections","Luggage","Sunglasses","Vans Backpacks","Plus size"]}
        ]
    },
    "House and garden": {
        icon: "https://sangavi002.github.io/allegro-image/house.png",
        subcategories: [
            {title: 'Equipment', items: ["Decorations and ornaments","Christmas and special occasion decorations","Carpets and rugs","Bed linen and blankets","Funny gadgets","pots and pans","Tableware","Kitchen tools","Window decoration and design"]},
            {title: 'Occasions', items: ["Bathroom furniture","Plumbing and fittings"]},
            {title: 'Tools', items: ["Screwdrivers","Saws and saws","Grinders and polishers","Welding machines","Hammer drills","Industrial vaccum cleaners","Measuring instruments","Accessories and equipment","Cleaning equipment"]},
            {title: 'Popular', items: ["Wardrobes", "Sofas"]},
            {title: 'Lighting', items: ["Hanging lamps","Halogens and floodlights","Light sources","Light fixtures"]},
            {title: 'Furniture', items: ["Furniture to living room","Bedroom furniture","Kitchen furniture","Bathroom and toilet furniture"]},
            {title: 'Construction', items: ["Heating","Plumbing and accessories","Electrics and accessories","Walls and facades"]},
            {title: 'Garden', items: ["Fertilizers and preparations","Animal scarers","Garden Furniture","Petrol lawn mowers"]}
        ]
    },
    "Supermarket": {
        icon:"https://sangavi002.github.io/allegro-image/house.png", 
        subcategories: [
            {title: 'Groceries', items: ["Coffee","Tea","Yerba Mate","Healthy Foods", "Dried Fruit,Nuts,Seeds","Confectionery Decorations","Dry Goods","Olive Oil","Vinegar"]},
            {title: 'Deals', items: ["Cat Food at Great Prices","Laundry Detergents at Great Prices"]},
            {title: 'Pet Supplies', items: ["Dogs","Cats","Aquaristics","Rodents and Rabbits","Terrariums and Other","For Exotic Birds","Dogs Food","Cat Foods","Dog Beds"]},
            {title: 'Recommended Trends', items: ["Dolce Gusto Capsules","Gift sets","Scratcher for Cats","Spin Mops"]},
            {title: 'Household Essentials', items: ["Laundry Detergents","Drying Racks","Ironing Boards","Kitchen Soaps","Trash Cans","Mops"]},
            {title: 'Popular', items: ["Coffee beans","Pasta","Flour","Drainers","Trash bags","Air fresheners","Cat Litter","Litter boxes for Cats","Aquarium filters"]},
        ]
    },
    "Kid": {
        icon:"https://sangavi002.github.io/allegro-image/kid.png", 
    },
    "Beauty": {
        icon:"https://sangavi002.github.io/allegro-image/beauty.png", 
    },
    "Health": {
        icon:"https://sangavi002.github.io/allegro-image/health.png", 
    },
    "Culture and entertainment": {
        icon:"https://sangavi002.github.io/allegro-image/culture.png", 
    },
    "Sports and tourism": {
        icon:"https://sangavi002.github.io/allegro-image/sport.png", 
    },
    "Motorization": {
        icon:"https://sangavi002.github.io/allegro-image/motor.png", 
    },
    "Real estate": {
        icon:"https://sangavi002.github.io/allegro-image/real.png", 
    },
    "Collections and art": {
        icon:"https://sangavi002.github.io/allegro-image/art.png", 
    },
    "Company and services": {
        icon:"https://sangavi002.github.io/allegro-image/company.png", 
    },
    "eBilet.pl": {
        icon:"https://sangavi002.github.io/allegro-image/ebilet.png", 
    },
    "Allegro Local": {
        icon:"https://sangavi002.github.io/allegro-image/local.png", 
    },
};

export const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState("Electronics"); 
    const navigate = useNavigate(); 
    const { isOpen, onOpen, onClose } = useDisclosure(); 

    const toggleMenu = () => {
        if (isOpen) {
            onClose();
        } else {
            onOpen();
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleItemClick = (item) => {
        if (item.toLowerCase() === "female clothing") {
            navigate("/female");
        } else {
            const route = item.toLowerCase().replace(/ /g, '-');
            navigate(`/${route}`);
        }
        onClose(); 
    };

    const splitIntoColumns = (arr, numColumns) => {
        const perColumn = Math.ceil(arr.length / 4);
        return Array.from({ length: 4 }, (v, i) =>
            arr.slice(i * perColumn, i * perColumn + perColumn)
        );
    };

    return (
        <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
                as={Button}
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                p="11px 20px"
                onClick={toggleMenu}
                bg="white"
                border="none"
                mt="1px"
                borderRight="1px solid"
            >
                Categories
            </MenuButton>
            <MenuList
                mt="-6px"
                border="1px solid"
                width="900px"
                height="520px"
                display="flex"
                bg="white"
                position="relative"
                zIndex="2"
            >
                <Box w="20%" p="10px 15px">
                    {Object.keys(categoriesData).map((category) => (
                        <MenuItem key={category} className="menu-item" onMouseEnter={() => handleCategoryClick(category)}>
                            <Img src={categoriesData[category].icon} alt={category} className="menu-img" /> {category}
                        </MenuItem>
                    ))}
                </Box>
                {selectedCategory && splitIntoColumns(categoriesData[selectedCategory].subcategories, 4).map((column, columnIndex) => (
                    <Box key={columnIndex} w="18%" p="10px 15px">
                        {column.map((subcategory, index) => (
                            <Box key={index} mb="20px">
                                <MenuOptionGroup defaultValue="asc" title={subcategory.title} fontWeight="900">
                                    {subcategory.items.map((item) => (
                                        <MenuItem key={item} className="menu-option-item" onClick={() => handleItemClick(item)}>
                                            {item}
                                        </MenuItem>
                                    ))}
                                </MenuOptionGroup>
                            </Box>
                        ))}
                    </Box>
                ))}
            </MenuList>
        </Menu>
    );
};
