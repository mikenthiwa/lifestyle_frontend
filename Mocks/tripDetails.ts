import {TripCardInterface} from "../components/tripcard/interface/tripcard.interface";

export const TripDetails: TripCardInterface = {
  partner: "Jochi Safari",
  tripName: 'Kijabe Hills',
  logo: '123',
  price: 2000,
  slots: 40,
  departureDate: '2023-01-21T21:00:00.000Z',
  departureTime: '08:00',
  arrivalTime: '10:00',
  departureArea: 'Nairobi',
  arrivalArea: 'Kijabe',
  inclusive:  [
    "Transport",
    "Lunch(food pack)",
    "Facilitation Fee",
    "Entry fee",
    "Drinking water"
  ],
}

export const Trips = [
  TripDetails,
  TripDetails,
  TripDetails
]
