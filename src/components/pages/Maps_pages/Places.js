import React, {useState, useEffect, useRef} from 'react';
import '../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
//Bootstrap
import { Breadcrumb, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
// Icons
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// Scroll to top
import ScrollToTop from '../../ScrollToTop';
// Translation
import { useTranslation } from 'react-i18next';
// Momentary
//import places from './Places/placesData';
//import quotes from './quotes.json';
// UserAuth
import { UserAuth } from '../../../context/AuthContext';
// Map (leafltet)
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import locationIcon from '../../../assets/imgs/maps-icon.png';
import {places} from './Places/placesData'
function LeafletGeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        icon: locationIcon
      }
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

const markerIcon = new L.Icon({
  iconUrl: require('../../../assets/imgs/maps-icon.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const currentLocationIcon = new L.Icon({
  iconUrl: require('../../../assets/imgs/maps-icons/location_icon_android.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

function Places() {
  // Translation 
  const { t } = useTranslation();

  // Categories
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  }; 

  const handleShowAll = () => {
    setSelectedCategory(null);
  };


  const [center, setCenter] = useState({ lat: 44.4938100, lng: 11.3387500 });
  const [userLocation, setUserLocation] = useState(null);
  const ZOOM_LEVEL = 13;
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

  const [isMapOpen, setIsMapOpen] = useState(false); // Track whether the map overlay is open or closed

  const handleMapButtonClick = () => {
    setIsMapOpen(true); // Open the map overlay
  };

  const handleCloseMap = () => {
    setIsMapOpen(false); // Close the map overlay
  };
   


  const map_disclaimer = (
    <Tooltip id="tooltip-disclaimer" style={{ fontSize: '0.75rem' }}>
    Visualize on the map.
    </Tooltip>
  );


  const { user, favorites, addToFavorites, updateFavoritesStorage, removeFromFavorites } = UserAuth();

  // Update favorites in localStorage whenever 'favorites' state changes
  useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]); 

  const isPlaceInFavorites = (place) => {
    return favorites.some((favPlace) => favPlace.id === place.id);
  }; 

  const handleAddToFavorites = (place) => {
    if (user) {
      addToFavorites(place);
      updateFavoritesStorage();
    } else {
      const loginUrl = '/signin'; // Replace with the actual URL of your login page
      window.location.href = loginUrl;
    }
  };

  const handleRemoveFromFavorites = (place) => {
    if (user) {
      removeFromFavorites(place);
      updateFavoritesStorage();
    }
  };


  return (
    <>
    <ScrollToTop/>
    <div className='container-fluid'>
      <Breadcrumb>
        <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps" id='crumb'>
          {t('maps.maps')}
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{t('maps.places_button')}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='places'>{t('maps.places_button')}</h1>
        <p>{t('maps.places_text')}</p>
        <h2>{t('maps.places_featured')}</h2>
              {/*Filters*/}
              <div className='routes-filter-buttons'>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Museum' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Museum')}>{t('maps.button_museum')}</Button> {/*NON FUNZIONA */}
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'University' ? 'active' : ''}`} onClick={() => handleCategoryFilter('University')}>{t('maps.button_uni')}</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Library' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Library')}>{t('maps.button_library')}</Button> {/*NON FUNZIONA */}
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Worship' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Worship')}>{t('maps.button_worship')}</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Porticoes' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Porticoes')}>{t('maps.button_porticoes')}</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Tower' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Tower')}>Tower</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Historical' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Historical')}>Historical</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Park' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Park')}>{t('maps.button_park')}</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Square' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Square')}>{t('maps.button_square')}</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Other' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Other')}>Other</Button>
                <Button variant='secondary' className={`routes-filter ${selectedCategory === null ? 'active' : ''}`} onClick={handleShowAll}>All</Button>
                <OverlayTrigger placement="top" overlay={map_disclaimer}><Button variant='outline-info' className='routes-filter' onClick={handleMapButtonClick}><GrIcons.GrMapLocation/></Button></OverlayTrigger>
                <br/>
                <br/>
              </div>
            <div className="row g-4 justify-content-center">
              {places
                .filter((place) => selectedCategory ? place.category === selectedCategory : true)
                .map((place) => (
                  <div className="col-md-6 col-lg-3" key={place.id}>
                    <div className="card bg-light">
                      <div className="card-body text-center">
                        <OverlayTrigger
                        placement='bottom'
                        overlay={<Tooltip id={`tooltip-${place.id}`}>{place.copyright_text}</Tooltip>}
                        >
                        <HashLink to={`${place.path}`}>
                          <img src={`${place.img}`} className="img-fluid" alt={place.title} />
                        </HashLink>
                        </OverlayTrigger>
                        <h4 id="places-card-title" className="card-title">{place.title}</h4>
                        <p id="places-card-text" className="card-text">{place.description}</p>
                        {/*{place.credit && <p className="credit">{place.credit}</p>}*/}
                      </div>
                      {isPlaceInFavorites(place) ? (
                        <Button variant='outline-dark' onClick={() => handleRemoveFromFavorites(place)}>
                          <FaHeart />
                          &nbsp;{t('maps.remove_favourites')}
                        </Button>
                      ) : (
                        <Button variant='outline-dark' onClick={() => handleAddToFavorites(place)}>
                          <FaRegHeart />
                          &nbsp;{t('maps.add_favourites')}
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              }
            </div>
            {isMapOpen && (
            <div className='map-overlay'>
            <MapContainer fullscreenControl={true} searchControl={true} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
                attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                maxZoom={20}
              />
              {places.map((name) =>
                <Marker position={name.location} icon={markerIcon}>
                  <Popup>
                    <p><sup><ImIcons.ImQuotesLeft className='left-quote' /></sup>{name.title}<sup><ImIcons.ImQuotesRight /></sup></p>
                    <div className="row-container">
                      <p>-{name.description}</p>
                      <AiIcons.AiOutlineHeart className='heart-icon' />
                    </div>
                  </Popup>
                </Marker>)}
              {userLocation && (
                <Marker position={userLocation} icon={currentLocationIcon}>
                  <Popup>
                    <p>You're here</p>
                  </Popup>
                </Marker>
              )}
              <LeafletGeoSearch />
            </MapContainer>
            <Button className="close-button" variant="info" onClick={handleCloseMap}><GrIcons.GrClose/></Button>
            </div>
            )}
    </div>
    </>
  )
}

export default Places