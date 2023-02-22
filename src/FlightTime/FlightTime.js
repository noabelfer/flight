export default function FlightTime({time}){
  const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }

  return(
      <span>{time.toLocaleString("en-IS",options)}</span>
  )
}
      
  
    
      