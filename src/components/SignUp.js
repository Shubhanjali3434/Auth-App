
import React , {useState} from 'react'
import './SignUp.css'


const SignUp= () => {

    //states to store data  //useState hook   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username,setusername] = useState("");

    //email handler
    const emailHandler = (event) => {
            setEmail( event.target.value);  //to store the current value     
    }
    //password handler
    const passwordHandler = (event) => {

            setPassword( event.target.value); //to store the current value  
    }
    const usernameHandler =(event)=>{
        setusername(event.target.value);
    }
    //submit handler for submitting the form
    const submitHandler = (e) => {
                e.preventDefault(); // so that page doesn't refresh
                /// data will appear in the console 
                console.log(email);
                console.log(password);  
                console.log(username);      
    }

  return (
    <div className='SignUpSection'>
            <div className='SignUpContainer' >
                <h2>signup Form</h2>
            <form className='formContainer'  onSubmit={submitHandler} >
                <input className='inputField' placeholder='enter email' type='email' onChange={emailHandler}/>
                <input  className='inputField'  placeholder='enter password' type='password' onChange={passwordHandler} />
                <input className='inputField' placeholder='enter username' text='username'onchange={usernameHandler}/>
                <button className='submitButton' type='submit'>Submit </button> 
            </form>
            </div>
    </div>
  ) 
}

export default SignUp