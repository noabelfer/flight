import "./Location.css" 
import FlightTime from "../FlightTime/FlightTime"
import { Container, Row, Col } from "react-bootstrap";
export default function Location({origin, destination}) {



return(
  <Container>
    <Row>
    

    <Row>
        <Col>
        <h2 className="hed"> {origin.city}, {origin.country} 
         </h2>
          <img className="header" src = {origin.img_url} 
          alt = "Location"
          />
          <br></br>
          <FlightTime time={origin.time}/>
         </Col>

         <Col>
         <p className="arrow">&#10230;</p>
         </Col>


        <Col>
        <h2 className="hed"> {destination.city}, {destination.country} 
         </h2>
          <img className="header" src = {destination.img_url}
          alt = "Location" />
          <br></br>
          <FlightTime time={destination.time}/>
          {destination.time.getDate() != origin.time.getDate() ? <p className="ppp">(+1)</p>: <p></p>}
        </Col>



      
   
      </Row>
      

      </Row>

   
  </Container>



)

    }