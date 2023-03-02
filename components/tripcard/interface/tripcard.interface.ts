export interface TripCardInterface {
  partner: string;
  logo: string;
  tripName: string;
  price: number;
  slots: number;
  departureDate: string;
  returnDate?: string;
  departureArea: string;
  arrivalArea: string;
  departureTime: string;
  arrivalTime: string;
  inclusive: Array<string>
}
