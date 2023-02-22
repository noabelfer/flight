export default function Seats({seats_left}) {

  return (
      
      <div>

      {seats_left >= 20 ? (
      <p style={{color: "green"}}>
          Seats_left: {seats_left}
      </p>
      ) : (
      20 > seats_left && seats_left >= 8 ? (
          <p style={{color: "orange"}}>
          Seats_left: {seats_left}
          </p>
      ) : (
          8 > seats_left && seats_left > 0 ? (
          <p style={{color: "red"}}>
              Seats_left: {seats_left}
          </p>
          ) : (
          <p style={{color: "red"}}>
              no seats left
          </p>
          )
      )
      )}
         
      </div>
  )
}