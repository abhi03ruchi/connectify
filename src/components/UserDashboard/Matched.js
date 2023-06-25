import "./Matched.css";
function Matched(props)
{
    return(
        <>
        <div className="teamMate">
        <img src={props.img} alt=""/>
        <div className="description">
            <h1>{props.name}</h1><br></br>
            <span>{props.desc}</span>
            </div>
            <button>></button>
        </div>

        </>
    )
}
export default Matched;