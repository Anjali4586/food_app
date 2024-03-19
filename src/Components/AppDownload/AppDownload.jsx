import React from 'react'
import './AppDownload.css';
import playStore from '../assets/assets/play_store.png';
import appStore from "../assets/assets/app_store.png";

const AppDownload = () => {
  return (
    <div className='app-download'>
        <p>For Better Experience Download <br/>Tomato App.</p>
       <div className="app-download-platforms">
        <img src={playStore} alt="play"/>
        <img src={appStore} alt="app"/>
       </div>

    </div>
  )
}

export default AppDownload