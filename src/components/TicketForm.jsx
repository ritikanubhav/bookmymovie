import "./TicketForm.css"
import { useState } from "react";
export default function TicketForm(props)
{
    const {movieName,setIsBooked}=props
    const [formData,setformData]=useState({movie:movieName,name:"",phone:"",date:"",time:"",theatre:""})
    function handleSubmit(e) {
        e.preventDefault();
        alert('Ticket Booked for the movie ' +formData.movie +" by "+formData.name);
        setIsBooked(false);
        localStorage.setItem("Booking_Info", formData);
    }
    return(
      <form className='form' onSubmit={handleSubmit}>
        <input placeholder="Name"
            onChange={(e)=>{setformData(prev =>({...prev,name:e.target.value}))}}
            value={formData.name}
            className="input-field"
        />
        <input type="phone"placeholder="Mobile no"
            onChange={(e)=>{setformData(prev =>({...prev,phone:e.target.value}))}}
            value={formData.phone}
            className="input-field"
        />
        <input type="date" placeholder="Date"
            onChange={(e)=>{setformData(prev =>({...prev,date:e.target.value}))}}
            value={formData.date}
            className="input-field"
        />
        <input type="time" placeholder="Time"
            onChange={(e)=>{setformData(prev =>({...prev,time:e.target.value}))}}
            value={formData.time}
            className="input-field"
        />
        <input placeholder="Theatre"
            onChange={(e)=>{setformData(prev =>({...prev,theatre:e.target.value}))}}
            value={formData.theatre}
            className="input-field"
        />
        <div className='btn-group'></div>
          <button className="form-btn" type='submit'>Book Ticket</button>
          <button className="form-btn" onClick={()=>{alert("Cancelled ticket");setIsBooked(false)}}>Cancel</button>
        <div/>
      </form>
    )
}