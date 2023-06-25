import Modal from '@material-ui/core/Modal';
import Matched from './Matched';
import kirti from "../../assets/kirti.jpeg";
import "./ModalTeam.css";
import AddTeamMate from './AddTeamMate';
function ModalTeam(props)
{
    return(
        <>
                <Modal
                onClose={props.onClose}
                open={props.open}
                style={{
                    position: 'absolute',
                    backgroundColor:'black',
                    // boxShadow: '2px solid black',
                    height: "50vh",
                    width: 350,
                    margin: 'auto',
                    padding:'30px'
                }}
            >
            <div>
                <AddTeamMate name="Kirti Aggarwal" desc="Full Stack Developer" img={kirti}/>
                <AddTeamMate name="Abhiruchi" desc="Frontend Developer" img={kirti}/>
                <AddTeamMate name="Nisha Laura" desc="Frontend Developer" img={kirti}/>
                <AddTeamMate name="Pooja Gera" desc="Full Stack Developer" img={kirti}/>
                </div>
            </Modal>

        </>
    )
}
export default ModalTeam;