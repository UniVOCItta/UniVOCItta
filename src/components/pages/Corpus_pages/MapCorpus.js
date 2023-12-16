import React, {useRef, useState, useEffect} from 'react';
import '../../../App.css';
// Map (leafltet)
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import quotes from '../Maps_pages/quotes.json';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// Imgs
import locationIcon from '../../../assets/imgs/maps-icon.png';
// Icons
import * as ImIcons from 'react-icons/im';
//Test
import mapCorpusData from "../../../const/mapCorpusData.json";


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
    iconUrl: require ('../../../assets/imgs/maps-icon.png'),
    iconSize: [35,35],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
})



export default function Maps() {
    const [center, setCenter] = useState({lat: 44.4938100, lng: 11.3387500});
    const ZOOM_LEVEL = 13;
    const mapRef = useRef()
    return (
        <>
            <div className='container-fluid'>
            <MapContainer id='corpus-map' fullscreenControl={true} searchControl={true} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
                attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                maxZoom={20}
                />
                {mapCorpusData.map((item) => (
                <Marker position={[item.lat, item.lng]} icon={markerIcon}>
                    <Popup>
                        <p><sup><ImIcons.ImQuotesLeft/></sup>{item.fragment}<sup><ImIcons.ImQuotesRight/></sup></p>
                        <p>-{item.author[0]}</p>
                    </Popup>
                </Marker>))}
            </MapContainer>
            </div>
        </>
    )
}