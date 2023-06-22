import {Button,Text,Image,Heading,Icon,Box} from '@chakra-ui/react';
import { Link } from "react-router-dom";         
import {ChevronRightIcon, InfoOutlineIcon } from '@chakra-ui/icons';


const HomePage = () => {
  return (
    <div className="Homepage">
      <header className="home-header">
          <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
              <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
              <Link to={'/adminloginpage'}>
                   <Button bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>} top="-27px" left="1020px" colorScheme={'blue,100'}>Admin Portal Login</Button>
              </Link>     
              <Text position={'relative'} left="950px" top='-59px' fontWeight='semibold'>Github</Text>  
          </Box>
      </header>
      <Image src='/assets/Sucessful purchase.svg' position={'relative'} top='-15px' left='750px' height='626px'/>
      <Heading position={'relative'} fontSize={'8xl'} fontWeight='bold' color={'blue.800'} left="200px" top='-610px'>Bus pass</Heading>
      <Heading position={'relative'} fontSize={'8xl'} fontWeight='bold' color={'blue.800'} left="200px" top='-625px'>purchasing</Heading>
      <Heading position={'relative'} fontSize={'8xl'} fontWeight='bold' color={'blue.400'} left="200px" top='-640px'>made easy.</Heading>
      <Text position={'relative'} fontSize='19px' fontWeight='normal' color={'blue.800'} left="200px" top='-620px'>Introducing GetPass - the free Automated Bus Pass </Text>
      <Text position={'relative'} fontSize='19px' fontWeight='normal' color={'blue.800'} left="200px" top='-615px'>Purchasing System for FISAT. Say goodbye to long</Text> 
      <Text position={'relative'} fontSize='19px' fontWeight='normal' color={'blue.800'} left="200px" top='-610px'>lines and purchase your pass hassle-free 24/7</Text>  
      <Link to={'/loginpage'}>
         <Button bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>} top="-595px" left="200px" colorScheme={'blue,100'}>Get Started for free</Button>
      </Link>   
      <Icon as={InfoOutlineIcon} color={'blue.600'} boxSize={'8'} size={'lg'} position={'relative'} borderColor={'blue.100'} top="-595px" left="215px"/>
    </div>
  );
}

export default HomePage;
