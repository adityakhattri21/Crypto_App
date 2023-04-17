import { Button, HStack, Heading , Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Stack direction={['column' , 'row']} justifyContent={'space-between'}  padding={'4'} shadow={"base"} bgColor={'blackAlpha.900'} >
    <Heading color={'white'}><Link to="/">CoinPedia</Link></Heading>
    <HStack paddingRight={'8'} justifyContent={'space-around'}>
        <Button variant={'unstyled'} color={'white'}>
            <Link to='/'>Home</Link>
        </Button>
        
        <Button variant={'unstyled'} color={'white'}>
            <Link to='/exchanges'>Exchange</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'}>
            <Link to='/coins'>Coins</Link>
        </Button>
        </HStack>
    </Stack>
  )
}

export default Header

