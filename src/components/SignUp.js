
import React , {useRef} from 'react'
import './SignUp.css'


const SignUp= () => {

   const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
   
    //submit handler for submitting the form
    const submitHandler = (e) => {
              e.preventDefault(); // so that page doesn't refresh
            

              const username = usernameRef.current.value;
              const email = emailRef.current.value;
              const password = passwordRef.current.value;

               console.log(email);
               console.log(password);  
               console.log(username);      
    }

  return (
    <div className='SignUpSection'>
            <div className='SignUpContainer' >
                <h2>signup Form</h2>
            <form className='formContainer'  onSubmit={submitHandler} >
                <input className='inputField' placeholder='enter email' type='email'  ref={emailRef}/>
                <input  className='inputField'  placeholder='enter password' type='password'  ref={passwordRef}  />
                <input className='inputField' placeholder='enter username' text='username' ref={usernameRef}/>
                <button className='submitButton' type='submit'>Submit </button> 
            </form>
            </div>
    </div>
  ) 
}

export default SignUp