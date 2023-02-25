import {Container, SimpleGrid} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import TripCard from '../components/tripcard/tripcard.component';
import HeaderComponent from "../components/header/header.component";
import { toast } from 'react-toastify';
import axios from "axios";


export async function getStaticProps() {
  try {
    const baseURL = process.env.BASE_URL;
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

export default function Home({upcomingTrips}: any) {
    const router = useRouter()
    if (router.query?.error === "OAuthSignin") toast.error('Something went wrong!')
    return (
        <Container pt={2} fontSize={'sm'} maxW={['480px', '1100px']}>
            <HeaderComponent mb={10} />
            <Heading as='h4' size='md' mb={5}>Trips</Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={10} px=''>
            {upcomingTrips.map((TripDetails: any, index: number) => (
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
                logo={TripDetails.logo}
              />
            ))}
          </SimpleGrid>
        </Container>
    )
}
