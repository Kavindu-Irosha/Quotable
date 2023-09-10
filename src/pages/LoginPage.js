import '../App.css';
import { useEffect, useState } from 'react';
import { GoogleLogin } from '@leecheuk/react-google-login';
import Home from './Home';
import { Auth, Provider } from '../components/Config';
import {signInWithPopup} from "firebase/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoginPage() {

  const HandleAuth = () => {
    signInWithPopup(Auth, Provider).then((data) => {
      let user = data.user.displayName
      let ProfilePic = data.user.photoURL
      //setUserData(user);
      localStorage.setItem("ProfilePic", ProfilePic);
      localStorage.setItem("UserName", user);
      if(user) {
        setTimeout(() => {
          window.location.href = "/home"
        }, 2500)
      }
    })
  }

  return (
      <div className="App">
        <div className='main_'>
            <h1 className='head'>Quotable</h1> 
            <button className='login' onClick={HandleAuth} >
              <FontAwesomeIcon icon="fa-brands fa-google" style={{color: "#282c3"}}/>
              Sign In With Google
            </button>
        </div>
        <div className="copy">
          <p> </p>
        </div>
      </div>
  );
}

export default LoginPage;
