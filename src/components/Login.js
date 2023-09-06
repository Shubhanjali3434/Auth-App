import React , {useReducer} from 'react'
import './Login.css'



// Initial state for the reducer
const initialState = {
  username: '',
  password: '',

  isLoggedIn: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return { ...state, username: action.payload };
    case 'CHANGE_PASSWORD':
      return { ...state, password: action.payload };
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

const Login = () => {

   
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `CHANGE_${name.toUpperCase()}`, payload: value });
  };

   const handleLogin = () => {
    
    // You can perform login logic here
    if (state.username === 'user' && state.password === 'password') {
      dispatch({ type: 'LOGIN' });
    }
  
  };

  return (
    <div className='loginSection'>
            <div className='loginContainer' >
                <h2>Login Form</h2>
            <form className='formContainer'   >
                <input className='inputField' 
                type="text"
        name="username"
        placeholder="Username"
        value={state.username}
        onChange={handleInputChange}
                />
                <input  className='inputField'   type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={handleInputChange}/>
                <button className='submitButton' onClick={handleLogin}  type='submit'>Submit </button> 
            </form>
            </div>
    </div>
  )
}

export default Login