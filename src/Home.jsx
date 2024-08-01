import { Box } from "@chakra-ui/react"
import { ImageSlider } from "./ImageSlider"
import {Navbar} from "./Navbar"
import { Collection } from "./Collection"
import { Supermarket } from "./Supermarket"
import { Footer } from "./Footer"


export const Home = () => {
  return(
    <Box bg="#ebeff2" minHeight="100vh" mt="20px" m="-7px">
      <ImageSlider />
      <Collection />
      <Supermarket />
    </Box>
  )
}


