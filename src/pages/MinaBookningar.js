import axios from 'axios'
import React , {useState, useEffect}from 'react'
import Booking from "../components/Booking"

function MinaBookningar() {

const [bookings, setBookings] = useState([])
const [userId, setUserId] = useState(localStorage.getItem("userId"))
const [token, setToken] = useState(localStorage.getItem("jwt"))

useEffect(()=>{
  


   //"http://localhost:1337/user-bookings?users_permissions_user.id=14"

   console.log(userId)

   const fetchData = async ()=>{
        const res = await axios.get(`http://localhost:1337/user-bookings?users_permissions_user.id=${userId}`
        , {
            headers: {
              Authorization: `Bearer ${token}`,
            }
        })

        setBookings(res.data)
   }
   
   fetchData()
}, [])




    return (
        <div>
 <h1>Mina Bookningar</h1>
{bookings.map( (booking)=>{
    
    return(
    <Booking key={booking.id} name={booking.name} time={booking.timeToAppointment} />
    )
})
}
        </div>
    )
}

export default MinaBookningar