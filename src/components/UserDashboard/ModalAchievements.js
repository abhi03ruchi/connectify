import Modal from '@material-ui/core/Modal';
import "./ModalAchievements.css";
import { useState } from 'react';
import axios from 'axios';
function ModalAchievements(props)
{        const[achievement,setAchievement]=useState("");
    function submitachievement(){
        axios.put(`api/v1/addachievement/${props.id}`,{achievement:achievement}).then((response)=>{
           console.log(response.data)
        })
            
}
    return(

        <>
         <Modal
                onClose={props.onClose}
                open={props.open}
                style={{
                    position: 'absolute',
                    // backgroundColor: 'grey',
                    boxShadow: '2px solid black',
                    border:'1px solid black',
                    height: "25vh",
                    width: "300px",
                    margin: 'auto',
                    padding:"30px",
                }}
            >
                <div className='achievement'>
                <h4> Add Achievement</h4>

                    <input type="text" onChange={(e)=>setAchievement(e.target.value)}></input>
                    <button onClick={submitachievement}>Add Achievement</button>

                </div>
            </Modal>

        </>
    )
}
export default ModalAchievements;