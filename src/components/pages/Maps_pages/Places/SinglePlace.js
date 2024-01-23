import React, {useRef, useState, useEffect} from 'react';
// Router-dom
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import placeholder from '../../../../assets/imgs/placeholder.png';
import locationIcon from '../../../../assets/imgs/maps-icon.png';
// Map (leafltet)
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";


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

const markerIcon = new L.Icon({
    iconUrl: require ('../../../../assets/imgs/maps-icons/maps-icon-red.png'),
    iconSize: [40,40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
})

function SinglePlace() {
  const [center, setCenter] = useState({lat: 44.492778, lng: 11.343056});
  const ZOOM_LEVEL = 17;
  const mapRef = useRef()
  return (
    <>
    <div className='container-fluid'>
        <Breadcrumb>
          <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
          <Breadcrumb.Item>
            <HashLink smooth to="/maps/places" id='crumb'>
            Places
            </HashLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Place</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Place Name</h1>
        <img src={placeholder} className='single-place-img'/>
        <p><strong>Location</strong>: a place </p>
        <p><strong>Founded in</strong>: 0000</p>
        <p><strong>Style</strong>: A Style </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum [<HashLink to='https://en.wikipedia.org/wiki/Count_von_Count'>Wikipedia</HashLink>]</p>
        <h4>Fragments</h4>
        {/* <ul className='places-fragments'>
            <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</li>
            <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</li>
            <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</li>
        </ul> */}
        <div className='places-map-place'>
          <h4>Map</h4>
            <MapContainer fullscreenControl={true} searchControl={true} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
                //NON FUNZIONA PIU' (API key differente) url="https://api.maptiler.com/maps/stage/256/{z}/{x}/{y}.png?key=0OrvEnHAAWTy5CyHcrD8"
                attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                maxZoom={20}
              />
                <Marker position={[44.492778, 11.343056]} icon={markerIcon}>
                    <Popup>
                      <p>Unità di ricerca LBC - CeSLIC (Centro di Studi Linguistico-Culturali) - Dipartimento LILEC</p>
                      <p>Via Cartoleria 5, Bologna</p>
                    </Popup>
                </Marker>
              <LeafletgeoSearch/>
            </MapContainer>
        </div>
    </div>
    </>
  )
}

export default SinglePlace