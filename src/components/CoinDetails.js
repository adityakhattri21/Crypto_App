import React, { useEffect, useState } from 'react';
import { Box, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from './Loader';
import axios from "axios";
import {server} from "../index" ;
import {useParams} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';

const CoinDetails = () => {

const params = useParams();

const [loading , setLoading] = useState(true);
 const [coins , setCoins]=useState([]);
 const [error , setError]=useState(false);
 const [currency,setCurrency] = useState('inr');

 useEffect(()=>{
  const getCoins = async ()=>{
    try {
      const {data} = await axios.get(`${server}/coins/${params.id}`);
    setCoins(data);
    console.log(data)
    setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
    
  }
  getCoins();
} , [params.id])

if (error)
  return <ErrorComponent message={"Error while loading data..."}/>

  return (
    <Container maxWidth={'container.xl'}>
      {
        loading ? (<Loader/>) : (
          <>
          <Box w={'full'} borderWidth={1}>chart</Box>


{/* Stack of Buttons to update the chart.  */}
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
          <HStack spacing={'4'}>
          <Radio value={'inr'}>INR</Radio>
          <Radio value={'usd'}>USR</Radio>
          <Radio value={'eur'}>EUR</Radio>

          </HStack>
        </RadioGroup>
          </>
        )
      }
    </Container>
  )
}

export default CoinDetails
