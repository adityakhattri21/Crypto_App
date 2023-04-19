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
            <Avatar boxSize={"28"} mt={["4","0"]} src={"https://media.licdn.com/dms/image/D4D03AQFB6hzG2DED_w/profile-displayphoto-shrink_800_800/0/1670928476608?e=1687392000&v=beta&t=RIg_7Yt_2WVib6UdLKSOa_tluOjjJDyju8bAyGLmUrM"}/>
            <Text>Hi! Its Me.</Text>
        </VStack>
    </Stack>
   </Box>
  )
}

export default Footer
