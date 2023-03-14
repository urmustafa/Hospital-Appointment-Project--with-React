import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AddModal } from "./AddModal"
import { useState } from "react"

const Doctors = ({ doctors, appointments, setAppointments }) => {

  const [show, setShow] = useState(false);
  const [drName, setDrName]=useState("")

  const handleShow=(namer)=>{
    setDrName(namer)
    setShow(true)

  }

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{color:"purple"}}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((dt)=>{
          return(
           <Col key={dt.id} xs={6} sm={4} md={3} onClick={()=>handleShow(dt.name)}>
            <img src={dt.img} alt={dt.name} className="img-thumbnail doctor-img"/>
            <h5>{dt.name}</h5>
            <h6>{dt.dep}</h6>
           </Col>
          )
        })}
      </Row>
      <AddModal show={show} handleClose={()=>setShow(false)} 
      drName={drName} appointments={appointments}
      setAppointments={setAppointments}></AddModal>
    </Container>
  )
}

export default Doctors
