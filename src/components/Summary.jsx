import { useState } from 'react';
import TicketForm from "./TicketForm"
import './Summary.css'
export default function summary(props)
{
    const {slidesData,current,getSummary}=props
    const [isBooked,setIsBooked]=useState(false)
    const parser = new DOMParser();
    const  html= parser.parseFromString(slidesData[current].show.summary, 'text/html')
    function bookTicket()
    {
        isBooked?
        setIsBooked(false):
        setIsBooked(true);
    }
    if(isBooked)
    {
        return(
            <TicketForm
                movieName={slidesData[current].show.name}
                isBooked={isBooked}
                setIsBooked={setIsBooked}
            />
        )
    }
    return(
        <div className='moviedetails'>
            <h1 className='title'>{slidesData[current].show.name}</h1>
            <h3>Summary</h3>
            <div className='summary'>
                {html.body.textContent}
            </div>
            <div className='btn-group'>
                <button onClick={getSummary} className='other-btn'>More Details</button>
                <button onClick={bookTicket} className='other-btn'>Book Ticket</button>
            </div>
        </div>
    )
            
}