import Link from 'next/link'
import Layout from '../components/Layout'
import {Box,Flex, Heading, Input, Text } from '@chakra-ui/react'
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

import retanguloAzul from "../images/MaskGroup2.png";

const IndexPage = () => {

    return (
      <Flex height="100vh" alingItems="center" justifyContent="center"  >
        <Image zIndex="-1" src={retanguloAzul}></Image>
        <Flex 
        direction="column" 
        background="#FFFFFF" 
        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.15)" 
        p={70} 
        rounded={6} 
        height="450px" 
        borderRadius="15px" 
        style={{marginTop:'80px'}}
        >
          <Heading mb={6}  textAlign="center"  style={{marginTop:'-15px'}}>
            <h1 style={{color:'#FDC921', fontSize:'24px'}}>GoTokens</h1>
            <p style={{color:'#3A3A3A', fontSize:'15px', marginTop:'10px'}}>Entre para começar sua sessão</p>
          </Heading>
          <Input placeholder=""  mb={3} type="email"/>
          <Input placeholder="*******"  mb={6} type="password"/>
          <Button colorScheme="teal"> Log In</Button>
        </Flex>
      </Flex>
    )
}

export default IndexPage
