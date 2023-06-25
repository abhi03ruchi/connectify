import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';
import "./Calendar.css";
import { useState } from "react";
import axios from "axios";
function CalendarComp(){
    const[date,setDate]=useState(new Date())
    const [events, setEvents] = useState([]);
    const [eventName, setEventName]=useState(" ");
    const handleAddEvent = () => {
       axios.post("/api/v1/addhack",
       {date:date.setDate(date.getDate() + 1),
        title:eventName
      }).then((response)=>{
        console.log(response.data)
      })
      };
    return(
        <>
        <div className="cal">
        <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
        </div>
        <div className="text-center">
            {/* Selected date: {date.toDateString()} */}
        </div>
        {
            date && (
                <div className="event-form">
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter event name"
          className="addeventinput"
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
            )
        }
        </div>

        </>
    )
}
export default CalendarComp;