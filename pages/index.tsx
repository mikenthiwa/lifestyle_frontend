import Head from 'next/head'
import Image from 'next/image'
import {Center, Container, Flex, SimpleGrid} from "@chakra-ui/react";
import TripCard from '../components/tripcard/tripcard.component';
import {  Trips } from "../Mocks/tripDetails";

export default function Home() {

  return (
    <Container fontSize={'sm'} maxW={['480px', '1320px']}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {Trips.map((TripDetails: any, index) => (
          <TripCard
            key={index}
            tripName={TripDetails.tripName}
            price={ TripDetails.price }
            slots={TripDetails.slots}
            partner={TripDetails.partner}
            departureDate={TripDetails.departureDate}
            departureArea={TripDetails.departureArea}
            arrivalArea={TripDetails.arrivalArea}
            departureTime={TripDetails.departureTime}
            arrivalTime={TripDetails.arrivalTime}
            inclusive={TripDetails.inclusive}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
