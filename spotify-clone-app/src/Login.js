import React from 'react'
import './Login.css';
import { loginUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
        
            {/* Spotify logo */}
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-horizontal-white-20.png"
      alt="" id="main-img" width="20%"/><br/>

            {/* Login with Spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
           
        </div>
    )
}

export default Login
