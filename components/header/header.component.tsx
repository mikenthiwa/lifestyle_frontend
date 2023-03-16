import {useState} from "react";
import {Flex, Text, Button, Heading, Avatar} from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';
import { useSession, signIn, signOut } from "next-auth/react"


const HeaderComponent = ({mb}: { mb: any }) => {
  const { data: session, status } = useSession();
  const LoginButton = () => {
    return (
        <Button leftIcon={<FcGoogle size={20} />} colorScheme='#31708e' variant='outline' size='sm' onClick={() => signIn('google')}>
          <Text fontWeight='normal' fontSize='xs'>Login with google</Text>
        </Button>
    )
  }
  if (status === "loading") {
    return <h1>Loading or not authenticated...</h1>
  }

  return (
    <Flex
      py={2}
      bg={''}
      width={'100%'}
      height={'50px'}
      mb={mb}
      alignItems={'center'}
      color={'#31708e'}
      justifyContent={'space-between'}
      fontSize={'md'}
      borderRadius={10}
    >
      <Heading as='h4' size='md' color='#31708e'>Moya</Heading>
      {session  ? <Avatar size='sm' name={session.user ? session.user.name : '' } /> : <LoginButton />}
    </Flex>
  )
}

export default HeaderComponent
