import React from 'react';
import '../App.css';
import './HeroSection.css';
// Link
import { Link } from 'react-router-dom';
// Bootstrap
import { Carousel, Button } from 'react-bootstrap';
// Imgs
import bolo from '../assets/imgs/hero_section/bologna.jpg'; // © FREE
import torri from '../assets/imgs/hero_section/bologna_torri.jpg'; // ©
import uni from '../assets/imgs/hero_section/bib_universitaria_2_Antonio_Cesari.jpg.jpg'; // © Antonio Cesari
import museum from '../assets/imgs/hero_section/pinacoteca_Gueraldo_Anna_Chiara.jpg'; // © Gueraldo Anna Chiara
import church from '../assets/imgs/hero_section/piazza_maggiore.jpg'; // ©
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
              <h3>City centre route</h3>
              <p className='carousel-p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link to='/coming'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={torri}
              alt="Two Towers, Bologna"
              copyright= "©Free"
            />
            <Carousel.Caption>
              <h3>The secrets of Bologna</h3>
              <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to='/coming'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={uni}
              alt="Biblioteca Universitaria di Bologna, Antonio Cesari. 2019"
              copyright= "©Università di Bologna/Antonio Cesari"
            />
            <Carousel.Caption>
              <h3>University Route</h3>
              <p className='carousel-p'>Praesent commodo cursus magna, vel scelerisque nisl.</p>
              <Link to='/coming'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src={church}
              alt="Piazza Maggiore, Bologna Welcome"
              copyright= "@Bologna Welcome"
            />
            <Carousel.Caption>
              <h3>A walk through the churches of Bologna</h3>
              <p className='carousel-p'>Praesent commodo cursus magna, vel scelerisque nisl.</p>
              <Link to='/coming'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
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
              <h3>Bologna's museums</h3>
              <p className='carousel-p'>Praesent commodo cursus magna, vel scelerisque nisl.</p>
              <Link to='/coming'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default HeroSection;