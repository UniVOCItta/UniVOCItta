import React, { useRef, useState, useEffect } from 'react';
import '../../../App.css';
// Bootstrap
import { Row, Form } from 'react-bootstrap';
// JSON data
import quotes from './quotes.json';
// Imgs
import locationIcon from '../../../assets/imgs/maps-icon.png';
// Icons
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
// Map (leafltet)
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
//Test
import test from "../Corpus_pages/database.json"; // this one has name.place.place_name_1.address_1.lat
import prova from "../Corpus_pages/prova.json"; // this one has name.lat

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

export default function Maps() {
  const [center, setCenter] = useState({ lat: 44.4938100, lng: 11.3387500 });
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
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

  const filterQuotesByLanguage = (language) => {
    if (!language) {
      return quotes; // No filter applied, return all quotes
    }
    return quotes.filter(quote => quote.language === language);
  };

  const filteredQuotes = filterQuotesByLanguage(selectedLanguage);

  return (
    <>
      <div className='container-fluid'>
        <MapContainer fullscreenControl={true} searchControl={true} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer
            url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
            attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            maxZoom={20}
          />
          {filteredQuotes.map((name) =>
            <Marker position={name.location} icon={markerIcon}>
              <Popup>
                <p><sup><ImIcons.ImQuotesLeft className='left-quote' /></sup>{name.quote}<sup><ImIcons.ImQuotesRight /></sup></p>
                <div className="row-container">
                  <p>-{name.author}</p>
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
        {/*
          <div className="language-filter">
            <label htmlFor="language">Select Language:</label>
            <Form.Select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">All Languages</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </Form.Select>
          </div>
        */}
      </div>
    </>
  );
}

 
