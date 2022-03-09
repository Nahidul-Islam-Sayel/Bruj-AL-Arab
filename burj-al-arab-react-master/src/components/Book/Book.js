import React,{useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Booking from '../Booking/Booking';
const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date());

    const {bedType} = useParams();
    const handlebooking=()=>{
        const email= loggedInUser.email;
        const Newdata={startDate,endDate,email};
        console.log(Newdata)
        fetch('http://localhost:3000/addBooking',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(Newdata)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
      
    }
    return (
        <div style={{textAlign: 'center'}}>
<h1>Hello {loggedInUser.name} Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DatePicker selected={endDate} onChange={(date) => setEndtDate(date)} />
            <button onClick={handlebooking}>Book Now</button>
            <Booking/>
        </div>
    );
};

export default Book;