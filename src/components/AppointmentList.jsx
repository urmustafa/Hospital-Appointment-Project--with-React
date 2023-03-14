import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaTimesCircle } from "react-icons/fa"

//? const dizi = []  -> true
//? dizi ? x : y   ->  x

const AppointmentList = ( {appointments, setAppointments}) => {

  const handleDelete=(id)=>{
      setAppointments(appointments.filter((item)=>item.id !==id))
  }
  const handleDoubleClick=(id)=>{
    setAppointments(appointments.map((item)=>item.id===id ?
    {...item, consulted:!item.consulted} : item))
}
  
  console.log("veri:", appointments);
  console.log("tipi: ",typeof appointments);

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2">Appoment list</h3>
      {!appointments.length && (<img src="./img/appointment.jpg" 
      width="50%" alt=""/>)}

      {appointments.map((i)=>{
        const {id,patient,consulted,doctor,day}=i
        return(
          <div key={id} className={consulted? "appointments consulted":
          "appointments "}
          onDoubleClick={()=>handleDoubleClick(id)}>
            <Row>
              <Col>
                <h4>{patient}</h4>
                <h5>{doctor}</h5>
              </Col>
              <Col>
                <h6>{new Date(day).toLocaleDateString()}</h6>
                <h6>{new Date(day).toLocaleTimeString()}</h6>
              </Col>
              <Col>
                <FaTimesCircle className="text-danger fs-3" type="button"
                onClick={()=>handleDelete(id)}></FaTimesCircle>
              </Col>
            </Row>
          </div>
        )
      })}

       
    </Container>
  )
}

export default AppointmentList
