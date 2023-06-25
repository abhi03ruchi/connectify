import "./AddTeamMate.css";
function AddTeamMate(props)
{
    return(
        <>
         <div className="teammate">
        <img src={props.img} alt=""/>
        <div className="Description">
            <h1>{props.name}</h1><br></br>
            <span>{props.desc}</span>
            </div>
            <button>+</button>
        </div>

        </>
    )
}
export default AddTeamMate;