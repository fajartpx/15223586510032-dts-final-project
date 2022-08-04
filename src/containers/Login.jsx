import React,{useState} from "react";
import Button from '../components/Button'
import '../style/loginStyle.css'
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../authentication/firebase.js";
const Login = (props)=>{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [, isLoading, error] = useAuthState(auth);

  function getEmail(event) {
    setEmail(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function localSubmitHandler(event) {
    event.preventDefault();
    props.formOnSubmit(email, password);
  }


    return(
        <>
        <body>
        <div className="AppContainer">
        <form action="" onSubmit={localSubmitHandler} className="Inputan">
        <input value={email} type='text' placeholder=" Email" onChange={getEmail} id="email"></input>
        <input value={password} type='text' placeholder=" password" onChange={getPassword} id="password"></input>
        <Button 
            color='#ffffff' 
            background='#E50913' 
            title='Login'
            width='310px'
            height='40px'
            padding= '10px' 
            type='submit'
                 />
        </form>
        </div>
        </body>
       
       
            
        </>
   


    )
}
export default Login;
