import React , {useState} from 'react'
import './Login.css'


const Login = () => {

    //states to store data  //useState hook   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //email handler
    const emailHandler = (event) => {
            setEmail( event.target.value);  //to store the current value     
    }
    //password handler
    const passwordHandler = (event) => {

            setPassword( event.target.value); //to store the current value  
    }
    //submit handler for submitting the form
    const submitHandler = (e) => {
                e.preventDefault(); // so that page doesn't refresh
                /// data will appear in the console 
                console.log(email);
                console.log(password);         
    }

  return (
    <div className='loginSection'>
            <div className='loginContainer' >
                <h2>Login Form</h2>
            <form className='formContainer'  onSubmit={submitHandler} >
                <input className='inputField' placeholder='enter email' type='email' onChange={emailHandler}/>
                <input  className='inputField'  placeholder='enter password' type='password' onChange={passwordHandler} />
                <button className='submitButton' type='submit'>Submit </button> 
            </form>
            </div>
    </div>
  )
}

export default Login