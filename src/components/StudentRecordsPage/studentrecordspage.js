import {Image,Text,Button,Box,Input} from '@chakra-ui/react'; 
import {ChevronRightIcon,SearchIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';   



const StudentRecordsPage = () => {

    return (
      <div className="StudentRecordsPage" style={{'overflow-x': 'hidden'}}>
        <header className="home-header">
          <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
             <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
             <Link to="/"> 
                <Button bgColor={'blue.100'} rightIcon={<ChevronRightIcon/>} top="-27px" left="1110px" textColor={'blue.500'}>Log Out</Button>
             </Link>   
             <Link to="/adminhomepage">
                <Button position={'relative'} bgColor={'blue.100'} left="920px" top='-27px' fontWeight='semibold' color={'blue.600'}>Back</Button>
             </Link>
             <Text position={'relative'} left='860px' top='-58px' fontSize={'lg'} fontWeight='semibold'>Student Records</Text>
             <div>
              <Link to={'/studentrecordspage2'}>
                <SearchIcon boxSize={6} position={'relative'} left="250px" top="-95px" />
              </Link>
                <Input placeholder='Enter name of student' size='md' width="400px" bgColor={'gray.100'} position={'relative'} left="270px" top="-95px"/>
             </div>
          </Box>
        </header>

        <Image src='/assets/studentrecord.svg' position={'relative'} left="400px" top="-10px"/>

          </div>
       );
    }
    
export default StudentRecordsPage;