import {Flex, Text, Box, Button} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import {useState} from "react";

const HeaderComponent = ({mb}: { mb: any }) => {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  return (
    <Flex
      py={2}
      px={10}
      bg={'primary'}
      width={'100%'}
      height={'50px'}
      mb={mb}
      alignItems={'center'}
      color={'white'}
      justifyContent={'space-between'}
      fontSize={'md'}
      borderRadius={10}
    >
      <Flex fontWeight={'bold'}>Moya</Flex>
      <Flex position='relative' flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} cursor='pointer' onClick={() => setShowLoginForm(!showLoginForm)}>
        <Text >Login</Text>
        <Icon as={IoMdArrowDropdown} color={'white'} />
        {showLoginForm && (
          <Box width='200px' px={'10px'} py={'10px'} bg={'primary'} position='absolute' top='37px' right={0} opacity='0.8' alignItems={'center'}>
            <Text mb={1} fontSize={'xs'}>Login via</Text>
            <Button bg='white' color='#1A202C'  width='100%'  fontSize={'sm'} size='sm' boxShadow={'2px 2px 4px'}>
              <Icon mr={2} as={FcGoogle} width={'25px'} height={'25px'} />
              <Text fontSize='xs'>Login with google</Text>
            </Button>
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default HeaderComponent
