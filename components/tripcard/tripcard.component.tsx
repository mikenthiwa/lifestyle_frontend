import {Flex, Box} from "@chakra-ui/react";
import { TripCardInterface } from './interface/tripcard.interface'

const tripCard = (tripCard: TripCardInterface) => {
  return (
    <Flex flexDirection={"column"} width={'400px'} borderColor={'#DEDCDC'} borderWidth={1} pt={3} borderRadius={4}>
      <Flex flexDirection={"row"} justifyContent={"space-between"} px={3} pb={3}>
        <Flex flexDirection={"row"} width={'35%'} justifyContent={'space-between'}>
          <Box>Logo</Box>
          <Box fontWeight={'600'}>{tripCard.partner}</Box>
        </Flex>
        <Box color={"#AA210F"} fontWeight={'600'}>{tripCard.slots} slots left</Box>
      </Flex>
      <Flex flexDirection={'column'} px={3} py={2} bg={'#EDEFEE'}>
        <Box>Mike</Box>
      </Flex>
    </Flex>
  )
}

export default tripCard
