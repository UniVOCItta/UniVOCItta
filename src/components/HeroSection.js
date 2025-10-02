import React from 'react';
import '../App.css';
import './HeroSection.css';
// Link
import { Link } from 'react-router-dom';
// Bootstrap
import { Carousel, Button } from 'react-bootstrap';
// Imgs
import bolo from '../assets/imgs/hero_section/bologna.jpg'; // © FREE
import museum from '../assets/imgs/hero_section/pinacoteca_Gueraldo_Anna_Chiara.jpg'; // © Gueraldo Anna Chiara
import food from "../assets/imgs/hero_section/bologna_la_grassa.jpeg" // © Comune di Bologna
import tortellini from "../assets/imgs/hero_section/tortellini_Angelo_Muratore.jpg"
import laura_bassi from "../assets/imgs/hero_section/bassi_docufilm_2.jpg"
import placeholder from "../assets/imgs/hero_section/placeholder.png"
import sara_luca from "../assets/imgs/hero_section/saragozza_san_luca.jpg" // © Bologna Welcome
import appennini from "../assets/imgs/hero_section/appennino.jpg"
// Translation
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();
    return (
        <Carousel className='carousel'>
          <Carousel.Item interval={500}>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={bolo}
              alt="Bologna seen from Asinelli tower"
              copyright= "Goldmund100 (Luca Volpi), CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            />
            <Carousel.Caption>
              <h3>{t('routes.city_centre')}</h3>
              <p className='carousel-p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to='/maps/city_centre'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={sara_luca}
              alt="Biblioteca Universitaria di Bologna, Antonio Cesari. 2019"
              copyright= "©Università di Bologna/Antonio Cesari"
            />
            <Carousel.Caption>
              <h3>{t('routes.san_luca')}</h3>
              <p className='carousel-p'>Praesent commodo cursus magna, vel scelerisque nisl.</p>
              <Link to='/maps/san_luca'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={appennini}
              alt="Biblioteca Universitaria di Bologna, Antonio Cesari. 2019"
              copyright= "©Università di Bologna/Antonio Cesari"
            />
            <Carousel.Caption>
              <h3>{t('routes.appennini')}</h3>
              <p className='carousel-p'>{t('routes.appennini_preview')}</p>
              <Link to='/maps/appennino'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={laura_bassi}
              alt="Piazza Maggiore, Bologna Welcome"
              copyright= "@Bologna Welcome"
            />
            <Carousel.Caption>
              <h3>{t('routes.women')}</h3>
              <p className='carousel-p'>Praesent commodo cursus magna, vel scelerisque nisl.</p>
              <Link to='/maps/women'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={museum}
              alt="La pinacoteca di Bologna, foto di Anna Chiara Gueraldo. 2018"
              copyright= "Foto di Anna Chiara Gueraldo"
            />
            <Carousel.Caption>
              <h3>{t('routes.museums')}</h3>
              <p className='carousel-p'>Praesent commodo cursus magna, vel scelerisque nisl.</p>
              <Link to='/maps/museum'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={tortellini}
              alt="La pinacoteca di Bologna, foto di Anna Chiara Gueraldo. 2018"
              copyright= "Foto di Anna Chiara Gueraldo"
            />
            <Carousel.Caption>
              <h3>{t('routes.food')}</h3>
              <p className='carousel-p'>{t('routes.food_preview')}</p>
              <Link to='/maps/food'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default HeroSection;