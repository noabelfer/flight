import FlightTime from "../FlightTime/FlightTime";
import Seats from "../seats/seats";
import Location from "../location/Location";
import './FlightCard.css'
import { Container, Row, Col } from "react-bootstrap";
import logo from './91605-200.png';



export default function FlightCard({flight}) {


  return (
 
    <Container>
    <br></br>
     <Row>

          <div class="card" >
          <br></br>
          <Row>
       
              <h1 class="h1"> <center> {flight.flight_num} </center> </h1>
          </Row>
          
          <Row>
              <Location  style="text-align: center;" origin = {flight.origin} destination = {flight.destination}  />
          </Row>
            <Col>
        
              {/* <center> */}
          
                <img height={30} src= {logo} alt="logo" />
                </Col> 
                <Col>
            
              <Seats seats_left={flight.seats_left}/>
              </Col>
              
              {/* </center>   */}
                         

          </div>
          
 
          
    </Row>
   
    </Container>
  )
}