import { useState } from "react";
import "./HackathonBox.css";
import Modal from '@material-ui/core/Modal';
import Matched from "./Matched";
import ModalTeam from "./ModalTeam";
import ModalAchievements from "./ModalAchievements";
function HackathonBox(props){
    const [open, setOpen] =useState(false);
    const [openForm, setOpenForm] =useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
    const handleCloseForm = () => {
        setOpenForm(false);
    };
 
    const handleOpenForm = () => {
        setOpenForm(true);
    };
 
    return(
        <>
        <div className="HackBox" style={{backgroundColor: `${props.color}`}}>
        <img src={props.img}/>
        <div className="details">
            <h1>{props.title}</h1>
            <p>{props.desc}({props.date})</p>
            <div className="buttonSection">
                <div className="addButton" style={{backgroundColor: `${props.buttonColor}`}}>
                    <button className="circleButton"  onClick={handleOpen}>+</button>
                    <span>Add TeamMates</span>
                </div>
                <div className="addButton" style={{backgroundColor: `${props.buttonColor}`}}>
                    <button className="circleButton"  onClick={handleOpenForm} >+</button>
                    <span>Add Achievements</span>
                </div>
            </div>
            </div>
        </div>
        <ModalTeam onClose={handleClose} open={open}/>
        <ModalAchievements onClose={handleCloseForm} open={openForm} id={props.id}/>

        </>
    )
}
export default HackathonBox;