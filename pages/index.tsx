import Head from 'next/head'
import Image from 'next/image'
import {Center, Container, Flex, SimpleGrid} from "@chakra-ui/react";
import TripCard from '../components/tripcard/tripcard.component';
import {  Trips } from "../Mocks/tripDetails";
import HeaderComponent from "../components/header/header.component";
import axios from "axios";


export async function getStaticProps() {
  try {
    const baseURL = process.env.BASE_URL
    const {data: { response }} = await axios.get(`${baseURL}/tours/upcoming_trips`);
    return {
      props: {
        upcomingTrips: response
      }
    }
  } catch (error) {
    return {}
  }
}

export default function Home({ upcomingTrips }: any) {
  return (
    <Container pt={2} fontSize={'sm'} maxW={['480px', '1100px']}>
      <HeaderComponent mb={10} />
      <SimpleGrid columns={[1, 2, 3]} spacing={10} px='30px'>
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
