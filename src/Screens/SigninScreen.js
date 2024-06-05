import React, {useRef} from 'react'
import "./SigninScreen.css";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SigninScreen() {
    const emailRef = useRef(null);
    const passwordRef= useRef(null);

    const register = async (e) =>{
        e.preventDefault();
        try {
            const authUser = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            console.log(authUser);
        } catch (error) {
            alert(error.message);
        }
    };

    const signIn = async (e) =>{
        e.preventDefault();
        try {
            const authUser = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            console.log(authUser);
        } catch (error) {
            alert(error.message);
        }
    };

  return (
    <div className='SigninScreen'>
        <form>
            <h1>Sign In</h1>
            <input type="email" ref={emailRef} placeholder='Email'/>
            <input ref={passwordRef} type='password' placeholder='Password'/>
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
                <span className='signinScreen__gray'>New to Netflix?</span>  <span className='signinScreen__link' onClick={register}>Sign up now.</span></h4>
        </form>
    </div>
  )
}

export default SigninScreen