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
   
  // Places array 
  const places = [
    {
      id: 0,
      title: 'Archiginnasio di Bologna',
      category: 'University',
      img: require('../../../assets/imgs/places/archiginnasio_Wwikiwalter.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.49205, 11.343406],
      copyright: 'Wwikiwalter, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Wwikiwalter, via Wikimedia Commons'
    },
    {
      id: 1,
      title: 'Basilica di San Bartolomeo e Gaetano',
      category: 'Worship',
      img: require('../../../assets/imgs/places/chiesa_bartolomeo_gaetano_Barbi.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.494167, 11.347222],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 2,
      title: 'Basilica di San Domenico',
      category: 'Worship',
      img: require('../../../assets/imgs/places/arca_San-Domenico_Barbi.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.489444, 11.344722],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 4,
      title: 'Basilica di San Francesco',
      category: 'Worship',
      img: require('../../../assets/imgs/places/san_francesco_tombe_Andrea_Samaritani.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.494913, 11.335046],
      copyright: 'Foto di Andrea Samaritani',
      copyright_text: 'Foto di Andrea Samaritani',
    },
    {
      id: 5,
      title: 'Basilica di San Petronio',
      category: 'Worship',
      img: require('../../../assets/imgs/places/san_petronio_Alexandra_Dan.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.492778, 11.343056],
      copyright: 'Foto di Alexandra Dan',
      copyright_text: 'Foto di Alexandra Dan'
    },
    {
      id: 6,
      title: 'Basilica di Santo Stefano',
      category: 'Worship',
      img: require('../../../assets/imgs/places/piazza_santo_stefano_Vanni_Lazzari.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.491985, 11.348727],
      copyright: 'Vanni Lazzari, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Vanni Lazzari, via Wikimedia Commons'
    },
    {
      id: 7,
      title: 'Chiesa di Santa Maria dei Servi',
      category: 'Worship',
      img: require('../../../assets/imgs/places/santa_maria_servi_DavideAlberani_CC_4.0.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.491822, 11.35219],
      copyright: 'Davide Alberani, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Davide Alberani, via Wikimedia Commons',
      
    },
    {
      id: 8,
      title: 'Chiesa parrocchiale Corpus Domini',
      category: 'Worship',
      img: require('../../../assets/imgs/places/chiesa_corpus_domini_BolognaBo.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. MANCANTE',
      location: [44.4938107, 11.3387500],
      copyright: 'Bologna.Bo, <https://www.bologna.bo/>',
      copyright_text: '©Bologna.Bo, https://www.bologna.bo'
    },
    {
      id: 9,
      title: 'Chiesa del Sacro Cuore di Gesù',
      category: 'Worship',
      img: require('../../../assets/imgs/places/chiesa_sacro_cuore_BeWeB.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.507778, 11.346789],
      copyright: 'BeWeB, <https://beweb.chiesacattolica.it/>',
      copyright_text: '©BeWeB, https://beweb.chiesacattolica.it'
    },
    {
      id: 10,
      title: 'Chiesa di San Giovanni in Monte',
      category: 'Worship',
      img: require('../../../assets/imgs/places/chiesa_san_giovanni_monte_Barbi.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.490828, 11.348263],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 11,
      title: 'Chiesa di San Gregorio dei Mendicanti',
      category: 'Worship',
      img: require('../../../assets/imgs/places/complesso_san_gregorio_BolognaOnline.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.495889, 11.339333],
      copyright: 'Bologna Online',
      copyright_text: '©Bologna Online'
    },
    {
      id: 12,
      title: 'Cimitero monumentale della Certosa',
      category: 'Worship',
      img: require('../../../assets/imgs/places/certosa_wikidata_Bissire.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      location: [44.497597, 11.30777],
      copyright: 'Bissire, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Bissire, via Wikimedia Commons'
    },
    {
      id: 13,
      title: 'Monastero di San Michele in Bosco',
      category: 'Worship',
      img: require('../../../assets/imgs/places/chiostro_SanMichele_Barbi.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.481468, 11.341932],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 14,
      title: 'Museo Giovanni Capellini',
      category: 'Museum',
      img: require('../../../assets/imgs/places/museo_capellini_Oscar_Ferrari_IMG_025.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. MANCANTE',
      location: [44.4967, 11.3519],
      copyright: '©Università di Bologna/Oscar Ferrari',
      copyright_text: '©Università di Bologna/Oscar Ferrari'
    },
    {
      id: 15,
      title: 'Museo Luigi Cattaneo',
      category: 'Museum',
      img: require('../../../assets/imgs/places/museo_cattaneo_Oscar_Ferrari.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.49855, 11.355008],
      copyright: '©Università di Bologna/Oscar Ferrari',
      copyright_text: '©Università di Bologna/Oscar Ferrari'
    },
    {
      id: 16,
      title: 'Museo Mineralogia - Luigi Bombicci',
      category: 'Museum',
      img: require('../../../assets/imgs/places/museo_mineralogia_Antonio_Todero.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.498208, 11.355501],
      copyright: 'Foto di Antonio Todero',
      copyright_text: 'Foto di Antonio Todero'
    },
    {
      id: 17,
      title: 'Museo Renzo Savini',
      category: 'Museum',
      img: require('../../../assets/imgs/places/casa_museo_renzo_savini_BolognaWelcome.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. MANCANTE',
      location: [44.4938100, 11.3387503],
      copyright: 'Bologna Welcome, <https://www.bolognawelcome.com/it>',
      copyright_text: '©Bologna Welcome, <https://www.bolognawelcome.com/it>'
    },
    {
      id: 18,
      title: 'Museo della Specola',
      category: 'Museum',
      img: require('../../../assets/imgs/places/specola_UNIBO.jpg'),
      path: '/coming', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.49669, 11.35247],
      copyright: '© Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    {
      id: 19,
      title: 'Orto Botanico di Bologna',
      category: 'Park',
      img: require('../../../assets/imgs/places/orto_botanico_Umberto_Mossetti.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.50068, 11.35351],
      copyright: 'Foto di Umberto Mossetti',
      copyright_text: 'Foto di Umberto Mossetti'
    },
    {
      id: 20,
      title: 'Osservatorio Stazione di Loaino',
      category: 'Other',
      img: require('../../../assets/imgs/places/osservatorio_loiano_INAF.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.500833, 11.356944],
      copyright: 'INAF (Istituto Nazionale di Astrofisica), <https://www.oas.inaf.it/it//>',
      copyright_text: '©INAF (Istituto Nazionale di Astrofisica), https://www.oas.inaf.it/it//'
    },
    {
      id: 21,
      title: 'Palazzo Aldrovandi',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_aldrovandi_Fabrizio_Garrisi_CC_4.0.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.497563, 11.341739],
      copyright: 'Fabrizio Garrisi, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Fabrizio Garrisi, via Wikimedia Commons'
    },
    {
      id: 22,
      title: 'Palazzo Caprara',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_caprara_Barbi.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.493969, 11.340146],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 23,
      title: 'Palazzo d’Accursio',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_accursio_Andrea_Samaritani.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.49386, 11.34228],
      copyright: 'Foto di Andrea Samaritani',
      copyright_text: 'Foto di Andrea Samaritani'
    },
    {
      id: 24,
      title: 'Palazzo del Podestà',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_podest…_UNIBO.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.494236, 11.343253],
      copyright: '©Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    {
      id: 25,
      title: 'Palazzo Fantuzzi',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_fantuzzi_Barbi.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.494275, 11.35044],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 26,
      title: 'Palazzo Hercolani',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_hercolani_cortile_Antonio_Cesari.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.491276, 11.353963],
      copyright: '©Università di Bologna/Antonio Cesari',
      copyright_text: '©Università di Bologna/Antonio Cesari'
    },
    {
      id: 27,
      title: 'Palazzo Malvezzi',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_malvezzi_cortile_Antonio_Cesari.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.495316, 11.348363],
      copyright: '©Università di Bologna/Antonio Cesari',
      copyright_text: '©Università di Bologna/Antonio Cesari'
    },
    {
      id: 28,
      title: 'Palazzo Poggi',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_poggi_studenti_UNIBO.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.496599, 11.351678],
      copyright: '©Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    {
      id: 29,
      title: 'Palazzo Ranuzzi',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_ranuzzi_Musei_Civici_Bologna.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.488349, 11.343177],
      copyright: '©Musei Civici Bologna, <http://www.museibologna.it/>',
      copyright_text: '©Musei Civici Bologna, http://www.museibologna.it/'
    },
    {
      id: 30,
      title: 'Palazzo Sampieri',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_sampieri_Unknown.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.493418, 11.348761],
      copyright: 'Biblioteca Salaborsa, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons',
      copyright_text: 'Biblioteca Salaborsa, via Wikimedia Commons'
    },
    {
      id: 31,
      title: 'Palazzo Sanuti Bevilacqua Degli Ariosti',
      category: 'Palace',
      img: require('../../../assets/imgs/places/palazzo_sanuti_Alex_Roudy.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.490518, 11.341253],
      copyright: '©Alex Roudoy',
      copyright_text: 'Foto di Alex Roudoy'
    },
    {
      id: 32,
      title: 'Piazza di Porta Ravegnana',
      category: 'Square',
      img: require('../../../assets/imgs/places/piazza_ravegnana_free.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. MANCANTE',
      location: [44.494459, 11.3470278],
      copyright: 'free'
    },
    {
      id: 33,
      title: 'Piazza Maggiore',
      category: 'Square',
      img: require('../../../assets/imgs/places/piazza_maggiore_Pasquali_Federico.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.49373, 11.343064],
      copyright: 'Foto di Federico Pasquali',
      copyright_text: 'Foto di Federico Pasquali'
    },
    {
      id: 34,
      title: 'Piazza Malpighi',
      category: 'Square',
      img: require('../../../assets/imgs/places/piazza_malpighi_scatti_di_gusto.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.49501, 11.33638],
      copyright: 'Scatti di gusto, <https://www.scattidigusto.it/>',
      copyright_text: '©Scatti di gusto, https://www.scattidigusto.it/ '
    },
    {
      id: 35,
      title: 'Piazza San Domenico',
      category: 'Square',
      img: require('../../../assets/imgs/places/piazza_san_domenico_Vanni_Lazzari_CC_4.0.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.48972, 11.34446],
      copyright: 'Vanni Lazzari, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Common',
      copyright_text: 'Foto di Vanni Lazzari, via Wikimedia Common'
    },
    {
      id: 36,
      title: 'Pinacoteca Nazionale di Bologna',
      category: 'Museum',
      img: require('../../../assets/imgs/places/pinacoteca_Gueraldo_Anna_Chiara.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.4977, 11.353469],
      copyright: 'Foto di Anna Chiara Gueraldo',
      copyright_text: 'Foto di Anna Chiara Gueraldo'
    },
    {
      id: 37,
      title: 'Porta San Vitale',
      category: 'Historical',
      img: require('../../../assets/imgs/places/porta_san_vitale_wikidata.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.493889, 11.356944],
      copyright: 'Anita.malina, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Anita.malina, via Wikimedia Commons'
    },
    {
      id: 38,
      title: 'Porta Saragozza',
      category: 'Historical',
      img: require('../../../assets/imgs/places/porta_saragozza_EvelinaRibarova_Wikimedia.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.490515, 11.32989],
      copyright: 'EvelinaRibarova, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di EvelinaRibarova, via Wikimedia Commons'
    },
    {
      id: 39,
      title: 'Portico dei Servi',
      category: 'Porticoes',
      img: require('../../../assets/imgs/places/Chiostro_del_portico_dei_servi_AnniediGiugno_Wikidata.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.492157, 11.3516986],
      copyright: 'AnniediGiugno, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di AnniediGiugno, via Wikimedia Commons'
    },
    {
      id: 40,
      title: 'Rettorato',
      category: 'University',
      img: require('../../../assets/imgs/places/rettorato_palazzo_poggi_Antonio_Cesari.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. MANCANTE',
      location: [44.496599, 11.351678],
      copyright: '©Università di Bologna/Antonio Cesari',
      copyright_text: '©Università di Bologna/Antonio Cesari '
    },
    {
      id: 41,
      title: 'Santuario della Madonna di San Luca',
      category: 'Worship',
      img: require('../../../assets/imgs/places/san_luca_wikipedia_Nebbius.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.479117, 11.298069],
      copyright: 'Puscas Vadim  (Nebbius), CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Puscas Vadim  (Nebbius), via Wikimedia Commons',
    },
    {
      id: 42,
      title: 'Due Torri',
      category: 'Tower',
      img: require('../../../assets/imgs/places/bologna_torri.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.494127, 11.346712],
      copyright: 'Free'
    },
    {
      id: 43,
      title: 'Stazione di Bologna Centrale',
      category: 'Other',
      img: require('../../../assets/imgs/places/stazione_Simone_Brunacci.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.505833, 11.341667],
      copyright: 'Foto di Simone Brunacci',
      copyright_text: 'Foto di Simone Brunacci'
    },
    {
      id: 44,
      title: 'Via Zamboni',
      category: 'Historical',
      img: require('../../../assets/imgs/places/via_zamboni_UNIBO.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: [44.4967, 11.3519],
      copyright: '© Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    // ... more place objects ...
  ];

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
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Museum' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Museum')}>Museum</Button> {/*NON FUNZIONA */}
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'University' ? 'active' : ''}`} onClick={() => handleCategoryFilter('University')}>University</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Library' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Library')}>Library</Button> {/*NON FUNZIONA */}
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Worship' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Worship')}>Place of worship</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Porticoes' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Porticoes')}>Porticoes</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Tower' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Tower')}>Tower</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Historical' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Historical')}>Historical</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Park' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Park')}>Park</Button>
                <Button variant='outline-dark' className={`routes-filter ${selectedCategory === 'Square' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Square')}>Square</Button>
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
                          &nbsp;Remove from Favorites
                        </Button>
                      ) : (
                        <Button variant='outline-dark' onClick={() => handleAddToFavorites(place)}>
                          <FaRegHeart />
                          &nbsp;Add to Favorites
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