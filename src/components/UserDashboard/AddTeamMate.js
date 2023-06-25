import "./AddTeamMate.css";
import { useEffect, useState } from "react";
function AddTeamMate(props)
{const[alert,setAlert] = useState("");
function popup(){
    setAlert("TeamMate Added");
}
    return(
        <>
         <div className="teammate">
        <img src={props.img} alt=""/>
        <div className="Description">
            <h1>{props.name}</h1><br></br>
            <span>{props.desc}</span>
            </div>
            <button onClick={popup}>+</button>
            <div style={{color:"green",position:"absolute",bottom:"5%",left:"30%",fontWeight:"500"}}>{alert}</div>
        </div>

        </>
    )
}
export default AddTeamMate;