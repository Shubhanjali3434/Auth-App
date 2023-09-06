import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='homeScreenContainer'>
        
        <SignUp />
        <Login />

    </div>
  )
}

export default HomeScreen