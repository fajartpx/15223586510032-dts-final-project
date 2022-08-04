import React,{useState} from "react";
import Button from '../components/Button'
import { Link, useNavigate } from "react-router-dom";
import '../style/loginStyle.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../authentication/firebase.js";
const Login = (props)=>{
  
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
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
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
            title='Login'
            width='310px'
            height='40px'
            padding= '10px' 
            type='submit'
                 />
            <p style={{color:'red'}}>{errorMessage}</p>
            <p>username : admin1@gmail.com</p>
            <p>password : 123456</p>
            <p>atau</p>
             <Link style={{color:'blue'}} to="/signup">
            {"Don't have an account? Sign Up"}
            </Link>
        </form>
        
        </div>
       
       
       
            
        </>
   


    )
}
export default Login;
