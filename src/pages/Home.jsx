import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { doctorData } from "../helper/data"
import { appointmentData } from "../helper/data"

const Home = () => {
 const [doctors, setDoctors] = useState(doctorData)
 const [appointments, setAppointments]=useState(appointmentData)
 console.log(doctors); 

  //! Mock Data yerine API'Den veri cekilseydi
  // const getAppointments = async () => {
  //   try {
  //     const { data } = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])
  console.log("bennnnnnnn ",appointments);

 
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">TAYYAR HOSPITAL</h1>
      <Doctors doctors={doctors} appointments={appointments} 
      setAppointments={setAppointments}></Doctors>
      <AppointmentList appointments={appointments} 
      setAppointments={setAppointments}></AppointmentList>
    </main>
  )
}

export default Home
