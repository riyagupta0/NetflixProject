import React, { useState } from 'react'
import "./LoginScreen.css";
import SigninScreen from './SigninScreen';

function LoginScreen() {
const [signIn, setSignIn] = useState(false);

  return (
    <div className='LoginScreen'>
         <div className="LoginScreen__background">
            <img className="LoginScreen_logo" src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt=""/>
            <button onClick={() => setSignIn(true)} className='LoginScreen_button' > Sign In</button>
            <div className='LoginScreen_gradient'></div>
            <div className="LoginScreen__body">
              {signIn ? (
                <SigninScreen/>
              ) :( 
               <>
               <h1>Unlimited films, TV programmes and more.</h1>
               <h2>Watch anywhere. Cancel at any time.</h2>
               <h3>
                Ready to watch? Enter your email to create or restart your membership.
               </h3>
               <div className="LoginScreen__input">
                <form>
                  <input type="email" placeholder='Email Address' />
                  <button onClick={() => setSignIn(true)}className='LoginScreen__getStarted'>GET STARTED</button>
                </form>
               </div>
               </>
               )
              }
            </div>
         </div>
    </div>
  )
}

export default LoginScreen