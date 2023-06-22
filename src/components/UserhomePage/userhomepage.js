import {Image,Input,Text,Button,Box,Modal, ModalOverlay, ModalContent,ModalBody, ModalFooter,useDisclosure,Heading,Flex} from '@chakra-ui/react'; 
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Select} from '@chakra-ui/react'
import {ChevronRightIcon,AddIcon,ChevronLeftIcon} from '@chakra-ui/icons';
import React from 'react';
import { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';

    const UserhomePage = () => {
       
        const location = useLocation();
        const data = location.state?.data || [];
        console.log(data)

        const [isOuterDrawerOpen, setIsOuterDrawerOpen] = useState(false);
        const [isInnerDrawerOpen, setIsInnerDrawerOpen] = useState(false);
        const openOuterDrawer = () => {
          setIsOuterDrawerOpen(true);
        };
        const closeOuterDrawer = () => {
          setIsOuterDrawerOpen(false);
        };
        const openInnerDrawer = () => {
          setIsInnerDrawerOpen(true);
        };
        const closeInnerDrawer = () => {
          setIsInnerDrawerOpen(false);
        };
        
        
        const { isOpen, onOpen, onClose } = useDisclosure()
        const textStyle = {
         transform: 'rotate(270deg)',};
        return (
          <div className="UserhomePage" style={{'overflow-x': 'hidden'}}>
            <header className="home-header">
              <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
                 <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
                 <Button bgColor={'blue.100'} rightIcon={<ChevronRightIcon/>} top="-27px" left="1020px" textColor={'blue.500'} onClick={onOpen}>{data[0].name}</Button>
                 <Link to={'/'}>
                    <Button bgColor={'blue.100'} textColor={'blue.500'} position={'relative'} left="765px" top='-27px' fontWeight='semibold'>Log Out</Button>
                  </Link> 
                 <Link to={'/busdetailspage'}>    
                   <Button bgColor={'blue.100'} textColor={'blue.500'} position={'relative'} left="540px" top='-27px' fontWeight='semibold'>View Buses</Button>
                 </Link>  
                 <Text position={'relative'} left="670px" top='-60px' fontWeight='semibold'>Past Passes</Text>
              </Box>
             </header>
             <Button onClick={openOuterDrawer} bgColor={'blue.400'} leftIcon={<AddIcon marginTop={'1'} h='2'/>} borderRadius='5px' top="20px" left="1160px"textColor={'blue.50'} >Purchase pass</Button>
             <Heading position={'relative'} fontSize='4xl' fontWeight='bold' color={'blue.800'} left="170px" top='-25px'>Your Passes</Heading>
             <Modal size={'xs'} isOpen={isOpen} onClose={onClose}> 
                    <ModalOverlay />
                    <ModalContent>
                         <ModalBody>
                              <Text fontWeight='semibold' fontSize={'medium'} mb='1rem'><br></br>Name: {data[0].name} <br></br> Username: {data[0].username}<br></br>Password: {data[0].password}</Text>
                         </ModalBody>
                         <ModalFooter>
                             <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                         </ModalFooter>
                     </ModalContent>
            </Modal>
            <Flex bgColor={'blue.50'} height='70px' marginTop='20px' width='1017px' marginLeft='250px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>12</Box>
                <Text position={'relative'} textColor={'gray.400'} left="150px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="120px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="400px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="332px" top='30px' fontSize={'lg'} fontWeight='semibold'>Chalakudy</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='8px' width='1017px' marginLeft='250px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>12</Box>
                <Text position={'relative'} textColor={'gray.400'} left="150px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="120px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="400px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="332px" top='30px' fontSize={'lg'} fontWeight='semibold'>Chalakudy</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='8px' width='1017px' marginLeft='250px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>12</Box>
                <Text position={'relative'} textColor={'gray.400'} left="150px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="120px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="400px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="332px" top='30px' fontSize={'lg'} fontWeight='semibold'>Chalakudy</Text>
            </Flex>
            <div style={{ overflow: 'hidden' }}>
            <Drawer closeOnOverlayClick={false} size={'md'} isOpen={isOuterDrawerOpen} onClose={closeOuterDrawer} placement='right'>
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader>
               <Box width='130px'marginTop='25px' marginLeft='15px' height='6px' bgColor={'blue.400'}></Box>
               <Box width='130px' marginTop='-6px' marginLeft='160px' height='6px' bgColor={'blue.100'}></Box>
               <Box width='130px' marginTop='-6px' marginLeft='305px' height='6px' bgColor={'blue.100'}></Box>
               </DrawerHeader>
               <DrawerBody>
                  <Heading  position={'relative'} left='14px' top='10px' color={'blue.900'} fontSize={'5xl'}>Purchase</Heading>
                  <Heading  position={'relative'} left='14px' top='12px' color={'blue.900'} fontSize={'5xl'}>Pass</Heading>
                  <Text position={'relative'} left='18px' top='40px' fontSize={'md'} textColor={'blue.800'}>From</Text>
                  <Select maxWidth='425px' left='17px' top='55px' placeholder='Select Route'>
                  <option value='option1'>FISAT College</option>
                      <option value='option2'>Panampilly Nagar(Via vytilla)</option>
                      <option value='option3'>Kumbalam toll-Vytila</option>
                      <option value='option4'>High Court(Via Kaloor)</option>
                      <option value='option5'>Trippunithura(via Irimpanam)</option>
                      <option value='option6'>Koonammavu(via Aluva Paravur JN.)</option>
                      <option value='option7'>Kakkanad</option>
                      <option value='option8'>Mannuthy(via Chalakudy)</option>
                      <option value='option9'>Kottapady(via Neeliswaram)</option>
                      <option value='option10'>Kizhakkambalam(via Aluva)</option>
                      <option value='option11'>Thrissur(via Chalakudy)</option>
                      <option value='option12'>Thoppumpady(via Kaloor)</option>
                      <option value='option13'>Pariyaram(via Chalakudy)</option>
                      <option value='option14'>Njarakkal-NParavur(via Aluva)</option>
                      <option value='option15'>Kothamangalam(via Perumbavoor)</option>
                      <option value='option16'>Muppathadom</option>
                      <option value='option17'>Aluva</option>
                      <option value='option18'>Pettah(via Vytilla)</option>
                      <option value='option19'>Irinjalakuda(via Chalakudy)</option>
                      <option value='option20'>Pattimattom(via Perumbavoor)</option>
                      <option value='option21'>Kothamangalam(via Perumbavoor)</option>
                      <option value='option22'>Paravur(via Manjaly)</option>
                      <option value='option23'>Kodungaloor(via Aluva,Paravur JN.)</option>
                      <option value='option22'>Muvattupuzha(via perumbavoor)</option>
                      <option value='option23'>Mala(via Koratty)</option>
                  </Select>
                  <Input position={'relative'} top='60px' left='17px' maxWidth='425px' placeholder={'Select Boarding Point'}/>

                  <Text position={'relative'} left='18px' top='80px' fontSize={'md'} textColor={'blue.800'}>To</Text>
                  <Select maxWidth='425px' left='17px' top='95px' placeholder='Select Place'>
                      <option value='option1'>FISAT College</option>
                      <option value='option2'>Panampilly Nagar(Via vytilla)</option>
                      <option value='option3'>Kumbalam toll-Vytila</option>
                      <option value='option4'>High Court(Via Kaloor)</option>
                      <option value='option5'>Trippunithura(via Irimpanam)</option>
                      <option value='option6'>Koonammavu(via Aluva Paravur JN.)</option>
                      <option value='option7'>Kakkanad</option>
                      <option value='option8'>Mannuthy(via Chalakudy)</option>
                      <option value='option9'>Kottapady(via Neeliswaram)</option>
                      <option value='option10'>Kizhakkambalam(via Aluva)</option>
                      <option value='option11'>Thrissur(via Chalakudy)</option>
                      <option value='option12'>Thoppumpady(via Kaloor)</option>
                      <option value='option13'>Pariyaram(via Chalakudy)</option>
                      <option value='option14'>Njarakkal-NParavur(via Aluva)</option>
                      <option value='option15'>Kothamangalam(via Perumbavoor)</option>
                      <option value='option16'>Muppathadom</option>
                      <option value='option17'>Aluva</option>
                      <option value='option18'>Pettah(via Vytilla)</option>
                      <option value='option19'>Irinjalakuda(via Chalakudy)</option>
                      <option value='option20'>Pattimattom(via Perumbavoor)</option>
                      <option value='option21'>Kothamangalam(via Perumbavoor)</option>
                      <option value='option22'>Paravur(via Manjaly)</option>
                      <option value='option23'>Kodungaloor(via Aluva,Paravur JN.)</option>
                      <option value='option22'>Muvattupuzha(via perumbavoor)</option>
                      <option value='option23'>Mala(via Koratty)</option>
                  </Select>
                  <Input position={'relative'} top='100px' left='17px' maxWidth='425px' placeholder={'Select Destination Point'}/>

                  <Text position={'relative'} left='18px' top='130px' fontSize={'md'} textColor={'blue.800'}>Number of tickets</Text>
                  <Input position={'relative'} top='140px' left='17px' maxWidth='425px' placeholder={'Enter number of tickets'}/>
               </DrawerBody>
               <DrawerFooter>
                  <Button borderWidth={'thin'} borderColor={'blue.200'}  top='2' textAlign={'start'} width='150px' height='60px' left='-30px' borderRadius={'sm'} bgColor={'blue.100'} leftIcon={<ChevronLeftIcon/>} onClick={closeOuterDrawer}>Cancel</Button>
                  <Button onClick={openInnerDrawer} width='270px' height='60px' left='-23px' top='2' borderRadius={'sm'} bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>}>Proceed</Button>

                  <Drawer isOpen={isInnerDrawerOpen} onClose={closeInnerDrawer} closeOnOverlayClick={false} size={'md'} placement="right">
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                       <Box width='130px'marginTop='25px' marginLeft='15px' height='6px' bgColor={'blue.400'}></Box>
                       <Box width='130px' marginTop='-6px' marginLeft='160px' height='6px' bgColor={'blue.400'}></Box>
                       <Box width='130px' marginTop='-6px' marginLeft='305px' height='6px' bgColor={'blue.100'}></Box>
                    </DrawerHeader>
                    <DrawerBody style={{'overflow-x': 'hidden'}}>
                    <Text position={'relative'} top='10px' left='20px' textColor={'blue.800'} textAlign={'left'} fontWeight={'bold'} fontSize={'4xl'}>Payment</Text>
                    <Text position={'relative'} top='5px' left='20px' textColor={'blue.800'} textAlign={'left'} fontWeight={'bold'} fontSize={'4xl'}>Details</Text>
                        <Box borderRadius={'lg'} bgColor={'gray.100'} marginLeft='25' marginTop='30px' width='400px' height='400px'>
                           <Text position={'relative'} textColor={'blue.700'} fontSize={'md'} fontWeight={'medium'} top='30px' left='40px' >Total Payment</Text>
                           <Heading position={'relative'} textColor={'blue.900'} left='40px' top='30px' fontSize={'5xl'}fontWeight={'bold'} >Rs 400</Heading>
                           <Text position={'relative'} top='15px' left='15px' fontSize={'4xl'}  textColor={'gray.300'}>-------------------------</Text>
                           <Text position={'relative'} top='20px' left='40px' textColor={'blue.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Bill Number</Text>
                           <Text position={'relative'} top='40px' left='40px' textColor={'blue.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Name</Text>
                           <Text position={'relative'} top='60px' left='40px' textColor={'blue.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Bus Number</Text>
                           <Text position={'relative'} top='80px' left='40px' textColor={'blue.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Destination</Text>
                           <Text position={'relative'} top='100px' left='40px' textColor={'blue.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Number of tickets</Text>
                           <Text position={'relative'} top='-100px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>101</Text>
                           <Text position={'relative'} top='-80px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Dreama</Text>
                           <Text position={'relative'} top='-60px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>12</Text>
                           <Text position={'relative'} top='-40px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Chalakudy</Text>
                           <Text position={'relative'} top='-20px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>2</Text>
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button borderWidth={'thin'} borderColor={'blue.200'}  top='2' textAlign={'start'} width='150px' height='60px' left='-30px' borderRadius={'sm'} bgColor={'blue.100'} leftIcon={<ChevronLeftIcon/>} onClick={closeInnerDrawer}>Back</Button>
                        <Link to={'/PaymentComponent'}>
                        <Button width='270px' height='60px' left='-23px' top='2' borderRadius={'sm'} bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>}>Proceed</Button>
                        </Link>
                  </DrawerFooter>
                   </DrawerContent>
                  </Drawer>
             </DrawerFooter>
            </DrawerContent>
           </Drawer> 
           </div>
          </div>
       );
    }
    
export default UserhomePage;
       