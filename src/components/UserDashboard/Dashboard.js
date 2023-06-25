import "./Dashboard.css";
import CalendarComp from './CalendarComp';
import HackathonBox from './HackathonBox';
import Matched from './Matched';
import kirti from "../../assets/kirti.jpeg";
import axios from "axios";
import purple from "../../assets/purple.png";
import blue from "../../assets/blue.png";
import orange from "../../assets/orange.png";
import { useEffect, useState } from "react";
function Dashboard()
{
    const[hacks,setHacks]=useState([]);
    const color=["lavender","#C0DEFF","#FCE2DB"];
    const buttonColor=["#BA94D1","#6C9BCF","pink"];
    const image=[purple,blue,orange];
    const[i,setI]=useState(0);
    useEffect(()=>{
        axios.get("/api/v1/displayhacks").then((response)=>{
            setHacks(response.data.hacks);
        })
    })
    return(
        <>
        <div className="homedash">
        <div className="navdash"><a href="/"><h3>Home</h3></a></div>
    <div className="dashboard">
        <div className="hackathons">
          <h1> My Hackathons</h1>
          {/* <HackathonBox title="Tech Together" desc="A hackathon to celebrate pride month" color="lavender" buttonColor="#BA94D1"/>
          <HackathonBox title="Tech Together" desc="A hackathon to celebrate pride month" color="#C0DEFF" buttonColor="#6C9BCF"/>
          <HackathonBox title="Tech Together" desc="A hackathon to celebrate pride month" color="#FCE2DB" buttonColor="pink"/> */}
          {hacks && hacks.map((hack,idx)=>(
                    <HackathonBox img={image[idx]}title={hack.title} desc={hack.achievements} color={color[idx%3]} buttonColor={buttonColor[idx%3]} id={hack._id} date={hack.date.slice(0,10)}/>
          ))}
        </div>
        <div className="teammates">
        <h1> Matched TeamMates</h1>
          <Matched name="Kirti Aggarwal" desc="Full Stack Developer" img={kirti}/>
          <Matched name="Abhiruchi" desc="Frontend Developer" img={kirti}/>
          <Matched name="Nisha Laura" desc="Frontend Developer" img={kirti}/>
          <Matched name="Pooja Gera" desc="Full Stack Developer" img={kirti}/>
        
        </div>
        <div className='calendar'>
        <h1> Schedule your hackathons</h1>
          <CalendarComp/>
        </div>
        </div>
        </div>
        </>
    )
}
export default Dashboard;