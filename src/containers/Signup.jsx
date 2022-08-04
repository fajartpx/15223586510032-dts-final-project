import React,{useState} from "react";
import Button from '../components/Button'
import { Link, useNavigate } from "react-router-dom";
import '../style/loginStyle.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../authentication/firebase.js";

const Signup = (props)=>{
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [, isLoading, error] = useAuthState(auth);

//   function getEmail(event) {
//     setEmail(event.target.value);
//   }

//   function getPassword(event) {
//     setPassword(event.target.value);
//   }

//   function localSubmitHandler(event) {
//     event.preventDefault();
//     props.formOnSubmit(email, password);
//   }

 const navigate = useNavigate();
 const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate("/Login");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const tray =()=> {
        alert('ini');
    }

    return(
        <>
        <div className="AppContainer">
        <form action="" onSubmit={handleSubmit} className="Inputan">
        <input type='text' placeholder=" Email" name="email" id="email" autoComplete="email"></input>
        <input type='password' placeholder=" password"  name="password"  id="password"></input>
        <Button 
            color='#ffffff' 
            background='#E50913' 
            title='Signup'
            width='310px'
            height='40px'
            padding= '10px' 
            type='submit'
                 />
            <p style={{color:'red'}}>{errorMessage}</p>
             <Link style={{color:'blue'}} to="/login">
            {"have an account? Login"}
            </Link>
        </form>
        </div>
       
       
       
            
        </>
   


    )
}
export default Signup;
