import Head from 'next/head'
import Image from 'next/image'
import {Center, Container} from "@chakra-ui/react";
import TripCard from '../components/tripcard/tripcard.component';
import { TripDetails } from "../Mocks/tripDetails";

export default function Home() {
  return (
    <Container fontSize={'sm'}>
      <Center mt={5}>
        <TripCard
          tripName={TripDetails.tripName}
          price={ TripDetails.price }
          slots={TripDetails.slots}
          partner={TripDetails.partner}
          departureDate={TripDetails.departureDate}
          departureArea={TripDetails.departureArea}
          arrivalArea={TripDetails.arrivalArea}
          departureTime={TripDetails.departureTime}
          arrivalTime={TripDetails.arrivalTime}
        />
      </Center>

    </Container>
  )
}
