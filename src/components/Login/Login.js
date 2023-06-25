import { useState } from "react";
import axios from "axios";

function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const loginSubmit=(e)=>{
        e.preventDefault();
        axios.post("/api/v1/signin",{
            email:email,
            password:password
        }).then((response)=>{if(response.data.token)
        {
            window.location.href="/dashboard"
        }})
    }
    return(
        <>
            <form onSubmit={loginSubmit} method="POST" action="/signin" >
                <input type="text" onChange={(e)=>setEmail(e.target.value)}>

                </input>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}>
                    
                </input>
                <button>Submit</button>
            </form>
        </>
    )
}
export default Login;