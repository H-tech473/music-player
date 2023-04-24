import './Styles/App.css';
import { Main } from './Pages/Main';
import { Playlist } from './Pages/Playlist';
import { Top } from './Pages/Top';
import Login from './Pages/auth/login';
import { useEffect, useState } from 'react';
import { setClientToken } from "C:/Users/LENOVO/OneDrive/Desktop/Spotifyclone/podcasify/src/spotify.js";


function App() {

  const [token,setToken] = useState("");
  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }

  },[]);
  
  return (
    !token ? (<Login />):(
    <div className="App">
       <Top />
      <div className='mainSect'>
        <Playlist />
        <Main />
      </div> 
      
    </div>)
  );
  // return (
  //   <div className="App">
  //      <Top />
  //     <div className='mainSect'>
  //       <Playlist />
  //       <Main />
  //     </div> 
      
  //   </div>
  // )
}

export default App;
