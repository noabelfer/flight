import FlightCard from "../flightCard/flightCard";
import { flights } from "../FlightsData";

export default function AllFlights(){

  const flightItems = flights.map(
    (flight) => <FlightCard key={flight.id} flight={flight}/>)
  
    return(
      <div>
        {flightItems}
      </div>
    )
  
}