import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

// Instantiate the wrapper that supports callback functions
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      // getMe(): Returns the details of the authenticated user.
      spotify.getMe().then((user) => {
        // console.log('person', user);

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }

    console.log("i have a token", token);
  }, []);

  console.log('person', user);
  console.log('token', token);


  return (
    <div className="app">
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
