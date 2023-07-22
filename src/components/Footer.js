import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>
    <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
        <VStack w={'full'} alignItems={["center","flex-start"]}>
        <Text fontWeight={"bold"}>About</Text>
        <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>Get Crypto Data Under One Hood. Historical and Real-time data with visualization.</Text>
        </VStack>
        <VStack>
            <Avatar boxSize={"28"} mt={["4","0"]} src={"https://res.cloudinary.com/dy2tlnsx5/image/upload/v1686243023/avatar/qpwkb2jl4lusfoipuzgp.jpg"}/>
            <Text>Hi! Its Me.</Text>
        </VStack>
    </Stack>
   </Box>
  )
}

export default Footer
