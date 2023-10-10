import React from 'react'
import '../App.css';
// Imgs
import clock from '../assets/imgs/clock.webp'
// Translation
import { useTranslation } from "react-i18next";

function ComingSoon() {

  // Translation 
  const { t } = useTranslation(); 

  return (
    <>
        <div className='container-fluid'>
            <br/>
            <h1 style={{textAlign: "center"}}>COMING SOON</h1>
            <h2 style={{textAlign: "center"}}>STAY TUNED!</h2>
            <br/>
            <br/>
            <img style={{maxWidth:'100px', maxHeight:'100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}} src={clock}></img>
            <br/>
        </div>
    </>
  )
}

export default ComingSoon