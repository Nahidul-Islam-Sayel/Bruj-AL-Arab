import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Booking = () => {
    const[booking,setBooking]=useState([]);
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);

   useEffect(()=>{
    
        fetch('http://localhost:3000/booking?email='+ loggedInUser.email)
        .then(res=>res.json())
        .then(res=>setBooking(res))
    },[])
    return (
        <div>

{
booking.map(data=>
<li>{(new Date(data.startDate)).toDateString('dd/mm/yy')} TO {(new Date(data.endDate)).toDateString('dd/mm/yy')}</li>
)
}
        </div>
    );
};

export default Booking;