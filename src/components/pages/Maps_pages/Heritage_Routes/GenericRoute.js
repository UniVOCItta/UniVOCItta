import React, { useRef, useState, useEffect } from 'react';
import '../../../../App.css';
import { HashLink } from 'react-router-hash-link';
// Bootstrap 
import { Breadcrumb, Card, Col, Row, Button } from 'react-bootstrap';
// Icons
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// Map (leafltet)
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
//import 'leaflet-polylinedecorator';
// Favorites
import { UserAuth } from '../../../../context/AuthContext';
// Translation
import { useTranslation } from "react-i18next";

function getMap(_center,_zoom,_mapRef,_userLocation,_currentLocationIcon,_markers,_path){
  return   <MapContainer key={_center.lat+"_"+_center.lng} id='routes-map' fullscreenControl={true} searchControl={true} center={_center} zoom={_zoom} ref={_mapRef}>
  <TileLayer
  url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
  attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  maxZoom={20}
  />
  {_path}
  {_markers}
  {_userLocation && (
      <Marker position={_userLocation} icon={_currentLocationIcon} >
        <Popup>
          <p >You're here</p>
        </Popup>
      </Marker>
    )}
</MapContainer>
}

const currentLocationIcon = new L.Icon({
  iconUrl: require('../../../../assets/imgs/maps-icons/location_icon_android.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});
function generateIcons(count){
  const markerIcons=[];
  for(var x=0;x<count;x++){
    if(x<15){
      markerIcons.push(new L.Icon({
        iconUrl: require('../../../../assets/imgs/maps-icons/'+(x+1)+'.png'),
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -46],
      }))
    }else{
      markerIcons.push(new L.Icon({
        iconUrl: require('../../../../assets/imgs/maps-icons/maps-icon.png'),
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -46],
      }))
    }
  }
  return markerIcons;
}



function convertCoordinatestoMarkers(coords,m_icons,m_content,clickSectionOnMap){
  return coords.map((coord, idx) => (
    <div  onClick={()=>{clickSectionOnMap(idx)}}>
      <Marker position={coord} key={idx} icon={m_icons[idx]}>
      <Popup>
        <div>
          {/*<h4>Location {idx + 1}</h4>*/}
          <p>{m_content[idx]}</p>
        </div>
      </Popup>
    </Marker>
    </div>
  ));
}


const GenericRoute = ({coordinates,markerContent, init_pos,title,text,cards,zooms,intestation}) => {
  // const map = useMap();

  const ZOOM_LEVEL = 13;
  const [center, setCenter] = useState(init_pos?init_pos:{ lat: 44.49381, lng: 11.33875 });
  const [currentZoom, setCurrentZoom] = useState(zooms[0]!==null?zooms[0]:ZOOM_LEVEL);
  const [userLocation, setUserLocation] = useState(null);
  const [currentCards,setCurrentCards] = useState(cards);
  const mapRef = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setCenter({ lat: latitude, lng: longitude });
      }, error => {
        console.error(error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Favorites
  const { user, favorites, addToFavorites, updateFavoritesStorage, removeFromFavorites } = UserAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  // Update favorites in localStorage whenever 'favorites' state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Function to check if a museum is already in favorites
  const isMuseumInFavorites = (museumTitle) => {
    return favorites.some((favMuseum) => favMuseum.title === museumTitle);
  };

  // Function to handle adding a museum to favorites
  const handleAddToFavorites = (museumTitle) => {
    if (user) {
      if (!isMuseumInFavorites(museumTitle)) {
        addToFavorites({ id: museumTitle, title: museumTitle });
        updateFavoritesStorage();
        setIsFavorite(true);
      }
    } else {
      const loginUrl = '/signin'; // Replace with the actual URL of your login page
      window.location.href = loginUrl;
    }
  };

  // Function to handle removing a museum from favorites
  const handleRemoveFromFavorites = (museumTitle) => {
    if (user) {
      removeFromFavorites({ id: museumTitle, title: museumTitle });
      updateFavoritesStorage();
      setIsFavorite(false);
    }
  };

  // Translation
  const { t } = useTranslation();

  const clickSection =(i)=>{
    setCenter({lat:coordinates[i][0],lng:coordinates[i][1]});
    if(zooms[i]!==null){
      setCurrentZoom(zooms[i])
    }
  }

  const clickSectionOnMap =(i)=>{
    setCurrentCards([cards[i]]);
  }
  const showAllCards =()=>{
    setCurrentCards(cards);
  }
  
  const markerIcons =generateIcons(coordinates.length);
  const markers = convertCoordinatestoMarkers(coordinates,markerIcons,markerContent,clickSectionOnMap)
  const path = <Polyline positions={coordinates} color="black" weight={3} opacity={0.3}  />;

  // console.log("center",center)
  return (
    <>
    <div className='container-fluid'>
      <Breadcrumb>
          <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
          <Breadcrumb.Item>
            <HashLink smooth to="/maps" id='crumb'>
            {t('maps.maps')}
            </HashLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <HashLink smooth to="/maps/routes" id='crumb'>
            {t('maps.routes_title')}
            </HashLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{t('maps.single_route')}</Breadcrumb.Item>
        </Breadcrumb>
          <div className="row align-items-center">
            <div className="col-md-9">
              <h2>{t(title)}</h2>
            </div>
            <div className="col-md-3 text-right">
              {isFavorite ? (
                <Button onClick={() => handleRemoveFromFavorites('A Title')}>
                  <FaHeart />
                  &nbsp;{t('maps.remove_favourites')}
                </Button>
              ) : (
                <Button onClick={() => handleAddToFavorites('A Title')}>
                  <FaRegHeart />
                  &nbsp;{t('maps.add_favourites')}
                </Button>
              )}
            </div>
          </div>
          <p>{t(text)}</p>
          <Row className='routes-icons'>
            <Col>
              <RiIcons.RiTimerLine className='routes-icon'/><span>&nbsp;{intestation.time}</span>
            </Col>
            <Col>
              <GiIcons.GiPathDistance className='routes-icon'/><span>&nbsp;{intestation.km}</span>
            </Col>
            <Col>
              <GiIcons.GiFootsteps className='routes-icon'/><span>&nbsp;{t(intestation.difficulty)}</span>
            </Col>
          </Row>
          <br/>
          <div className='fragments-list'>
              <Row className="no-gutters">
                <Col id='scrollable-col'>
                  <div>
                    <h3 style={{display:"inline-block"}}>&nbsp;{t("routes.itinerary")}</h3>
                    <p className="map_a" style={{float: "right",marginRight:"10px", display:"inline-block",cursor:"pointer"}} onClick={showAllCards}>{t("routes.show_all_cards")}</p>
                  </div>
                  {currentCards.map((el,i)=>{
                    return <div key={"desktop_"+i} onClick={()=>{clickSection(i)}}>
                      {el.map((el2,i2)=>{
                        return <div key={"desktop_"+i+"_"+i2}>
                                <Card className='card-title-routes'>
                                  <Card.Body className='card-body-routes'>
                                    {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                                    <h5><strong>{el2.title}</strong></h5>
                                    <p className="fragment_font">{el2.body}"</p>
                                    <p>{el2.p}</p>
                                  </Card.Body>
                                </Card>
                                <br/>
                            </div>
                      })
                      }
                    </div>
                  })}
                </Col>
                {/* i br sotto servobo per l'app, se no non si può scrolalre */}
                <br/><br/>
                <Col>
                {getMap(center,currentZoom,mapRef,userLocation,currentLocationIcon,markers,path)}
                </Col>
              </Row>
          </div>
             {/* MOBILE VISUALISATION */}
             <div className='mobile-visualisation'>
                <Col>
                {getMap(center,currentZoom,mapRef,userLocation,currentLocationIcon,markers,path)}
                </Col>
                <Col id='scrollable-col'>
                  <h3>&nbsp;ITINERARY</h3>
                  {cards.map((el,i)=>{
                    return <div key={"desktop_"+i} onClick={()=>{clickSection(i)}}>
                      {el.map((el2,i2)=>{
                        return <div key={"desktop_"+i+"_"+i2}>
                                <Card className='card-title-routes'>
                                  <Card.Body className='card-body-routes'>
                                    {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                                    <h5><strong>{el2.title}</strong></h5>
                                    <p className="fragment_font">{el2.body}"</p>
                                    <p>{el2.p}</p>
                                  </Card.Body>
                                </Card>
                                <br/>
                            </div>
                      })
                      }
                    </div>
                  })}
                </Col>
        </div>
    </div>
    </>
  )
}

export default GenericRoute;