import {Flex, Box, Text, Center, Button} from "@chakra-ui/react";
import { TripCardInterface } from './interface/tripcard.interface'

const tripCard = (tripCard: TripCardInterface) => {
  const hrStyle = {width: '100%', borderWidth: '1px',   borderTop: '2px dashed #31708E',}
  return (
    <Flex flexDirection={"column"} width={'100%'} borderColor={'#DEDCDC'} borderWidth={1} pt={3} borderRadius={4}>
      <Flex flexDirection={"row"} justifyContent={"space-between"} px={3} pb={3}>
        <Flex flexDirection={"row"} width={'35%'} justifyContent={'space-between'}>
          <Box>Logo</Box>
          <Box fontWeight={'600'}>{tripCard.partner}</Box>
        </Flex>
        <Box color={"#31708E"} fontWeight={'600'}>{tripCard.slots} slots left</Box>
      </Flex>
      <Flex flexDirection={'column'} px={3} py={2} bg={'#F7F9FB'}>
        <Center pb={2}>
          <Text  fontSize={'xl'}>{ tripCard.tripName }</Text>
        </Center>
        <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex flexDirection={'column'}>
            <Text>{ tripCard.departureArea }</Text>
            <Text fontSize={'xl'} fontWeight={'600'}>{ tripCard.departureTime }</Text>
          </Flex>
          <Flex width={'50%'}>
            <hr style={hrStyle}/>
          </Flex>
          <Flex flexDirection={'column'}>
            <Text>{ tripCard.arrivalArea }</Text>
            <Text fontSize={'xl'} fontWeight={'600'}>{ tripCard.arrivalTime }</Text>
          </Flex>
        </Flex>
          <Center display={'flex'} flexDirection={'column'}>
            <Text fontSize={'lg'} fontWeight={'600'}>Inclusives</Text>
            {tripCard.inclusive.map((inclusive: string, index) => <Box key={index}>{inclusive}</Box>)}
          </Center>


        <Flex flexDirection={'row'} my={3} justifyContent={'space-between'}>
          <Button bg={'#31708E'} fontSize={'sm'} colorScheme={'#31708E'} size='md'>Book Trip</Button>
          <Flex flexDirection={'row'}>
            <Text fontWeight={'semibold'} mr={1}>Price:</Text>
            <Text>{tripCard.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KES</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default tripCard
