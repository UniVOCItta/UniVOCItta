import React, { useRef, useState, useEffect } from 'react';
import '../../../../App.css';
import { HashLink } from 'react-router-hash-link';
// Bootstrap 
import { Breadcrumb, Card, Col, Row, Button } from 'react-bootstrap';
// Imgs
import locationIcon from '../../../../assets/imgs/maps-icons/red-icon.png';
import poggi from '../../../../assets/imgs/routes/museums/poggi_museo.jpg';
import specola from '../../../../assets/imgs/routes/museums/specola_museo.webp';
import mast from '../../../../assets/imgs/routes/museums/mast_museo.jpg';
import ustica from '../../../../assets/imgs/routes/museums/museo_ustica.jpg';
import pinacoteca from '../../../../assets/imgs/routes/museums/pinacoteca_museo.jpg';
// Icons
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// Map (leafltet)
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
//import 'leaflet-polylinedecorator';
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// Favorites
import { UserAuth } from '../../../../context/AuthContext';

function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        locationIcon /*NON FUNZIONA */
      }
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
} 

const markerIcons = [
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/1-red.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/2-red.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/3-red.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/4-red.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/5-red.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  // Add more icons for each coordinate
];

const coordinates = [
  [44.497778, 11.353333], // Pinacoteca
  [44.496964, 11.35261], // Poggi
  [44.49669, 11.35247], // Specola
  [44.512778, 11.349444], // Ustica
  [44.50629, 11.296395] // Mast
];

const markerContent = [
  "Pinacoteca",
  "Palazzo Poggi",
  "Specola",
  "Ustica",
  "MAST",
  // Add more popup content for each coordinate
];

const markers = coordinates.map((coord, idx) => (
  <Marker position={coord} key={idx} icon={markerIcons[idx]}>
    <Popup>
      <div>
        {/*<h4>Location {idx + 1}</h4>*/}
        <p>{markerContent[idx]}</p>
      </div>
    </Popup>
  </Marker>
));

const path = <Polyline positions={coordinates} color="black" weight={3} opacity={0.3}  />;

const MuseumRoute = () => {
  const [center, setCenter] = useState({ lat: 44.49381, lng: 11.33875 });
  const ZOOM_LEVEL = 13;
  const mapRef = useRef();

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
  
  return (
    <>
    <div className='container-fluid'>
      <Breadcrumb>
          <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
          <Breadcrumb.Item>
            <HashLink smooth to="/maps" id='crumb'>
            Maps
            </HashLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <HashLink smooth to="/maps/routes" id='crumb'>
            Heritage Routes
            </HashLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Route</Breadcrumb.Item>
        </Breadcrumb>
          <div className="row align-items-center">
            <div className="col-md-9">
              <h2>A title</h2>
            </div>
            <div className="col-md-3 text-right">
              {isFavorite ? (
                <Button onClick={() => handleRemoveFromFavorites('A Title')}>
                  <FaHeart />
                  &nbsp;Remove from Favorites
                </Button>
              ) : (
                <Button onClick={() => handleAddToFavorites('A Title')}>
                  <FaRegHeart />
                  &nbsp;Add to Favorites
                </Button>
              )}
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <Row className='routes-icons'>
            <Col>
              <RiIcons.RiTimerLine className='routes-icon'/><span>&nbsp;time</span>
            </Col>
            <Col>
              <GiIcons.GiPathDistance className='routes-icon'/><span>&nbsp;km</span>
            </Col>
            <Col>
              <GiIcons.GiFootsteps className='routes-icon'/><span>&nbsp;Easy</span>
            </Col>
          </Row>
          <br/>
          <div className='fragments-list'>
              <Row className="no-gutters">
                <Col id='scrollable-col'>
                  <h3>&nbsp;ITINERARY</h3>
                  <Card className='card-title-routes'>
                    <Card.Body className='card-body-routes'>
                      <img src={poggi} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={specola} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={mast} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={ustica} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <MapContainer id='routes-map' fullscreenControl={true} searchControl={true} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                    <TileLayer
                    url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
                    attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    maxZoom={20}
                    />
                    {path}
                    {markers}
                  </MapContainer>
                </Col>
              </Row>
          </div>
          {/* MOBILE VISUALISATION */}
          <div className='mobile-visualisation'>
                <Col>
                  <MapContainer id='routes-map' fullscreenControl={true} searchControl={true} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                    <TileLayer
                    url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
                    attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    maxZoom={20}
                    />
                    {path}
                    {markers}
                  </MapContainer>
                </Col>
                <Col id='scrollable-col'>
                  <h3>&nbsp;ITINERARY</h3>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={poggi} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p className='text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={specola} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={mast} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={ustica} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      <img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>
                      <h5><strong>Title</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Body>
                  </Card>
                </Col>
        </div>
    </div>
    </>
  )
}

export default MuseumRoute;