import Login from './Login.js';
import React, { useEffect, useState } from "react";
import './App.css';
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();


function App() {

  const [token, setToken] = useState(null);



//Run code based on a given condition
useEffect(() => {

//code...
const hash = getTokenFromUrl();
window.location.hash = "";
const _token = hash.access_token;


if(_token){
  setToken(_token);

  spotify.setAccessToken(_token);

  spotify.getMe().then(user => {
    console.log("person", user);
  })
}


console.log("I HAVE A TOKEN:::", token);
}, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in.</h1>
        ) : (
          <Login />
        )
      }
    

    </div>
  );
}

export default App;
