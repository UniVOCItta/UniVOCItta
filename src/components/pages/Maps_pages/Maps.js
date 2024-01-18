import React from 'react';
import '../../../App.css';
// Router-dom 
import { Link } from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
// Imgs 
//import bologna_panoramica from '../../../assets/imgs/bologna_Festi_Elisa.jpg';
import bologna_360 from '../../../assets/imgs/places/san_michele_vista_bologna_NC.jpg'
// Reusable elements 
import Map from './Map';
// Translation
import { useTranslation } from "react-i18next";


export default function Maps() {
    // Translation 
    const { t } = useTranslation();

    return (
        <>
        {/* IMG BACKGROUND */}
        <div className="img_wrap">
            <img id='img-background' src={bologna_360} copyright='free' className='img-fluid'/>
                {/*<div className='img-content'>
                    <h1 className='img-title'>Maps</h1>
                </div>
                */}
        </div>
        <div id='map' className='container-fluid'>
            {/* Maps */}
            <h1 className='maps'>{t('maps.maps')}</h1>
            <p>{t('maps.text')}</p>
            {/* 
            <h2>Subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            */}
                    <div className='map-buttons'>
                        <Link to='../maps/Places'><Button className='corpus-button' variant="outline-dark">{t('maps.places_button')}</Button></Link>
                        <Link to='../maps/Travellers'><Button className='corpus-button' variant="outline-dark">{t('maps.travellers_button')}</Button></Link>
                        <Link to='../maps/Routes'><Button className='corpus-button' variant="outline-dark">{t('maps.routes_button')}</Button></Link>
                    </div>
            <Map/>
        </div>

        </>
    )
}