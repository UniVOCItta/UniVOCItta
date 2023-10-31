import React, { useState, useEffect, useRef } from "react";
import '../../../App.css';
import { HashLink } from 'react-router-hash-link';
//Bootstrap
import { Row, Col, Container, Table, Button, Tooltip, OverlayTrigger, Modal, Form, Dropdown, DropdownButton, DropdownToggle, InputGroup, Pagination } from 'react-bootstrap';
// JSON data
import test from './database.json'
import prova_output from './prova_output.json'
import output from './output.json'
import database_finale from './database_finale.json' //28/10
import database_finalissimo from './database_finale_finalissimo.json' //30/10
// Icons
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
// Imgs
import locationIcon from '../../../assets/imgs/maps-icon.png';
//Map
import MapCorpus from './MapCorpus';
// Map (leafltet)
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import quotes from '../Maps_pages/quotes.json';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// Translation
import { useTranslation } from "react-i18next";
// UserAuth
import { UserAuth } from "../../../context/AuthContext";

    
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

    const currentLocationIcon = new L.Icon({
        iconUrl: require('../../../assets/imgs/maps-icons/location_icon_android.png'),
        iconSize: [35, 35],
        iconAnchor: [17, 46],
        popupAnchor: [0, -46],
      });

    const disclaimer = (
        <Tooltip id="tooltip-disclaimer" style={{ fontSize: '0.6rem' }}>
            Visualize the Italian translation
        </Tooltip>
    );


    const Fragments = () => {
        const [searchTerm, setSearchTerm] = useState('')
        const [selectedLanguage, setSelectedLanguage] = useState("")
        const [selectedPlaceType, setSelectedPlaceType] = useState("");
        const [selectedAuthor, setSelectedAuthor] = useState("")
        const [selectedPeriod, setSelectedPeriod] = useState("")
        const [selectedExperience, setSelectedExperience] = useState("")
        const [selectedCharacter, setSelectedCharacter] = useState("")
        const [selectedArtist, setSelectedArtist] = useState("")
        const [selectedCity, setSelectedCity] = useState("")
        const [selectedTheme, setSelectedTheme] = useState("") // new filter (THEME)
        const [selectedNature, setSelectedNature] = useState("") // new filter (NATURE)
        const [selectedArtwork, setSelectedArtwork] = useState("") // new filter (ARTWORK)
        const [showItalian, setShowItalian] = useState(false);
        const [selectedLanguageButton, setSelectedLanguageButton] = useState("");


        const filteredData = database_finalissimo.filter((item) => {
            if (selectedLanguage && item.language !== selectedLanguage) {
                return false;
            }
            if (selectedLanguageButton && item.language !== selectedLanguageButton) {
                return false;
            }
            if (selectedPlaceType && (item.place[0] !==selectedPlaceType && item.place[1] !==selectedPlaceType && item.place[2] !==selectedPlaceType && item.place[3] !==selectedPlaceType && item.place[4] !==selectedPlaceType && item.place[5] !==selectedPlaceType && item.place[6] !==selectedPlaceType)) {
                return false;            
            }
            if (selectedAuthor && (item.autore[0] !== selectedAuthor && item.autore[1] !== selectedAuthor && item.autore[2] !== selectedAuthor && item.autore[3] !== selectedAuthor && item.autore[4] !== selectedAuthor && item.autore[5] !== selectedAuthor && item.autore[6] !== selectedAuthor)) {
                return false;
            }
            if (selectedPeriod && (item.period[0] !== selectedPeriod && item.period[1] !== selectedPeriod && item.period[2] !== selectedPeriod && item.period[3] !== selectedPeriod && item.period[4] !== selectedPeriod && item.period[5] !== selectedPeriod && item.period[6])) {
                return false;
            }
            if (selectedExperience && (item.experience[0] !== selectedExperience && item.experience[1] !== selectedExperience && item.experience[2] !== selectedExperience && item.experience[3] !== selectedExperience && item.experience[4] !== selectedExperience && item.experience[5] !== selectedExperience && item.experience[6] !== selectedExperience)) {
                return false;
            }
            if (selectedCharacter && (item.character[0] !== selectedCharacter && item.character[1] !== selectedCharacter && item.character[2] !== selectedCharacter && item.character[3] !== selectedCharacter && item.character[4] !== selectedCharacter && item.character[5] !== selectedCharacter && item.character[6] !== selectedCharacter)) {
                return false;
            }
            if (selectedArtist && (item.artist[0] !== selectedArtist && item.artist[1] !== selectedArtist && item.artist[2] !== selectedArtist && item.artist[3] !== selectedArtist && item.artist[4] !== selectedArtist && item.artist[5] !== selectedArtist && item.artist[6] !== selectedArtist)) {
                return false;
            }
            if (selectedCity && item.city !== selectedCity) {
                return false 
            }
            if (selectedTheme && (item.topic[0] !== selectedTheme && item.topic[1] !== selectedTheme && item.topic[2] !== selectedTheme && item.topic[3] !== selectedTheme && item.topic[4] !== selectedTheme && item.topic[5] !== selectedTheme && item.topic[6] !== selectedTheme)) {
                return false;
            }
            if (selectedArtwork && (item.artwork[0] !== selectedArtwork && item.artwork[1] !== selectedArtwork && item.artwork[2] !== selectedArtwork && item.artwork[3] !== selectedArtwork && item.artwork[4] !== selectedArtwork && item.artwork[5] !== selectedArtwork && item.artwork[6] !== selectedArtwork)) {
                return false;
            }
            if (selectedNature && (item.nature[0] !== selectedNature && item.nature[1] !== selectedNature && item.nature[2] !== selectedNature && item.nature[3] !== selectedNature && item.nature[4] !== selectedNature && item.nature[5] !== selectedNature && item.nature[5] !== selectedNature)) {
                return false;
            }

            return true;
        });

        const [currentPage, setCurrentPage] = useState(1);
        const [numEntriesPerPage, setNumEntriesPerPage] = useState(5);
        
        const totalPages = Math.ceil(filteredData.length / numEntriesPerPage);
        
        const maxPageNumbersToShow = 5; // Number of page numbers to display in pagination
        const pageNumbers = [];
        
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
        
        const startIndex = Math.max(currentPage - Math.floor(maxPageNumbersToShow / 2), 1);
        const endIndex = Math.min(startIndex + maxPageNumbersToShow - 1, totalPages);
        
        const displayedPageNumbers = pageNumbers.slice(startIndex - 1, endIndex);
        
        const currentData = filteredData.slice(
          (currentPage - 1) * numEntriesPerPage,
          currentPage * numEntriesPerPage
        );
        
        const handlePageChange = (newPage) => {
          setCurrentPage(newPage);
        };
        
        const handleNumEntriesPerPageChange = (e) => {
          setNumEntriesPerPage(parseInt(e.target.value));
          setCurrentPage(1);
        };
        
        const handlePrevButtonClick = () => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        };
        
        const handleNextButtonClick = () => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        };


        const [center, setCenter] = useState({lat: 44.4938100, lng: 11.3387500});
        const ZOOM_LEVEL = 13;
        const mapRef = useRef()


        function handleButtonClick(language) {
            setSelectedLanguageButton(language === selectedLanguageButton ? null : language);
        }
        
        function handleClearSelection() {
            setSelectedLanguageButton(null);
        }

    // Translation 
    const { t } = useTranslation();

    // Bookmarks
    
  const { user, bookmarks, addToBookmarks, updateBookmarksStorage, removeFromBookmarks } = UserAuth();

  // Update favorites in localStorage whenever 'favorites' state changes
  useEffect(() => {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]); 

  const isBookInFavorites = (book) => {
    return bookmarks.some((favBook) => favBook.id === book.id);
  }; 

  const handleAddToBookmarks = (book) => {
    if (user) {
      addToBookmarks(book);
      updateBookmarksStorage();
    } else {
      const loginUrl = '/signin'; // Replace with the actual URL of your login page
      window.location.href = loginUrl;
    }
  };

  const handleRemoveFromBookmarks = (book) => {
    if (user) {
      removeFromBookmarks(book);
      updateBookmarksStorage();
    }
  };

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  // Map for the single locations

  const [selectedFragmentLocation, setSelectedFragmentLocation] = useState(null);
 const handleMarkerClick = (location) => {
    setSelectedFragmentLocation(location);
    setIsMapOpen(true); // Open the map overlay when a marker is clicked
  };


 // Track whether the map overlay is open or closed

  const handleCloseMap = () => {
    setIsMapOpen(false); // Close the map overlay
  };
    
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

    // Modal
    const [showModal, setShowModal] = useState(false);

    const handleHelpIconClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className='corpus-buttons'>
                <Button
                    className='corpus-button'
                    variant="outline-dark"
                    active={selectedLanguageButton === "English"}
                    onClick={() => handleButtonClick("English")}
                >
                    English
                </Button>
                <Button
                    className='corpus-button'
                    variant="outline-dark"
                    active={selectedLanguageButton === "French"}
                    onClick={() => handleButtonClick("French")}
                >
                    French
                </Button>
                <Button
                    className='corpus-button'
                    variant="outline-dark"
                    active={selectedLanguageButton === "Spanish"}
                    onClick={() => handleButtonClick("Spanish")}
                >
                    Spanish
                </Button>
                <Button
                    className='corpus-button'
                    variant="outline-dark"
                    active={selectedLanguageButton === "Russian"}
                    onClick={() => handleButtonClick("Russian")}
                >
                    Russian
                </Button>
                {/* 
                <Button
                    className='corpus-button'
                    variant="outline-secondary"
                    onClick={handleClearSelection}
                >
                    Clear
                </Button>
                */}
            </div>
            <p><small>{t('corpus.language_text_postilla')}</small></p>
            {/* Query */}
            <h2 id='query'>{t('corpus.query')}</h2>
                <p>{t('corpus.query_text')}</p>
            <Container className='filter-sidebar'>
                <br/>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ marginBottom: '0' }}>
                        <IoIcons.IoMdOptions/>&nbsp;{t('corpus.filters')}
                    </h3>
                    <IoIcons.IoIosHelpCircle className='help'
                    onClick={handleHelpIconClick}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                type='text'
                placeholder={t('corpus.search')}
                className='form-control'
                style={{marginTop:20, marginBottom: 20, width:'100%'}}
                onChange ={(e)=>{
                    setSearchTerm(e.target.value)
                }}>
                </input>
                {/* Sidebar that appears only when the viewport is small*/}
                    <div className="sidebar">
                        <Dropdown className='language_option'>
                            <Dropdown.Toggle className='lang_toggle' variant="dark" id="dropdown-basic"><IoIcons.IoMdOptions/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='lang_menu'>
                                <Form.Select
                                    value={selectedLanguage}
                                    onChange={(event) => setSelectedLanguage(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_lang')}</option>
                                    <option value="English">{t('en')}</option>
                                    <option value="French">{t('fr')}</option>
                                    <option value="Spanish">{t('es')}</option>
                                    <option value="Russian">{t('ru')}</option>
                                </Form.Select>
                                <Form.Select
                                    value={selectedPlaceType}
                                    onChange={(event) => setSelectedPlaceType(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_place')}</option>
                                    <option value="Accademie - Accademia Carracci">Accademie - Accademia Carracci</option>
                                    <option value="Accademie - Accademia Clementina">Accademie - Accademia Clementina</option>
                                    <option value="Accademie - Accademia delle Belle Arti">Accademie - Accademia delle Belle Arti</option>
                                    <option value="Accademie - Accademia delle Scienze Istituto di Bologna">Accademie - Accademia delle Scienze Istituto di Bologna</option>
                                    <option value="Accademie - Accademia">Accademie - Accademia</option>
                                    <option value="All'Aperto - All'aperto">All'Aperto - All'aperto</option>
                                    <option value="All'Aperto - Castelfranco Emilia">All'Aperto - Castelfranco Emilia</option>
                                    <option value="All'aperto - Certosa Cimitero">All'aperto - Certosa Cimitero</option>
                                    <option value="All'Aperto - Certosa">All'Aperto - Certosa</option>
                                    <option value="All'Aperto - Corte Isolani">All'Aperto - Corte Isolani</option>
                                    <option value="All'Aperto - Cortile">All'Aperto - Cortile</option>
                                    <option value="All'Aperto - Fiume">All'Aperto - Fiume</option>
                                    <option value="All'Aperto - Giardini Margherita">All'Aperto - Giardini Margherita</option>
                                    <option value="All'Aperto - Giardino Parco Urbano">All'Aperto - Giardino Parco Urbano</option>
                                    <option value="All'Aperto - Monte La Guardia">All'Aperto - Monte La Guardia</option>
                                    <option value="All'Aperto - Orto Botanico">All'Aperto - Orto Botanico</option>
                                    <option value="All'Aperto - Paesaggio">All'Aperto - Paesaggio</option>
                                    <option value="All'aperto - Parco della Montagnola">All'aperto - Parco della Montagnola</option>
                                    <option value="All'Aperto - Pugliole San Bernardino">All'Aperto - Pugliole San Bernardino</option>
                                    <option value="All'Aperto - Strade">All'Aperto - Strade</option>
                                    <option value="All'Aperto - Terme">All'Aperto - Terme</option>
                                    <option value="All'Aperto - Torrente Samoggia">All'Aperto - Torrente Samoggia</option>
                                    <option value="All'Aperto - Torrente Savena">All'Aperto - Torrente Savena</option>
                                    <option value="All'Aperto - Torrente">All'Aperto - Torrente</option>
                                    <option value="Archivi - Archivio">Archivi - Archivio</option>
                                    <option value="Biblioteche - Biblioteca Convento San Salvatore">Biblioteche - Biblioteca Convento San Salvatore</option>
                                    <option value="Biblioteche - Biblioteca Universitaria">Biblioteche - Biblioteca Universitaria</option>
                                    <option value="Biblioteche - Biblioteca">Biblioteche - Biblioteca</option>
                                    <option value="Castelli - Castello Estense">Castelli - Castello Estense</option>
                                    <option value="Castelli - Castello">Castelli - Castello</option>
                                    <option value="Di Culto - Basilica di San Bartolomeo e Gaetano">Di Culto - Basilica di San Bartolomeo e Gaetano</option>
                                    <option value="Di Culto - Basilica Di San Domenico">Di Culto - Basilica Di San Domenico</option>
                                    <option value="Di Culto - Basilica Di San Francesco">Di Culto - Basilica Di San Francesco</option>
                                    <option value="Di Culto - Basilica di San Giacomo Maggiore">Di Culto - Basilica di San Giacomo Maggiore</option>
                                    <option value="Di Culto - Basilica Di San Petronio">Di Culto - Basilica Di San Petronio</option>
                                    <option value="Di Culto - Basilica Di Santo Stefano">Di Culto - Basilica Di Santo Stefano</option>
                                    <option value="Di Culto - Basilica San Domenico">Di Culto - Basilica San Domenico</option>
                                    <option value="Di culto - Basilica San Giacomo Maggiore">Di culto - Basilica San Giacomo Maggiore</option>
                                    <option value="Di Culto - Basilica San Petronio">Di Culto - Basilica San Petronio</option>
                                    <option value="Di culto - Basilica Santa Maria Dei Servi">Di culto - Basilica Santa Maria Dei Servi</option>
                                    <option value="Di Culto - Basilica">Di Culto - Basilica</option>
                                    <option value="Di Culto - Cappella">Di Culto - Cappella</option>
                                    <option value="Di Culto - Cattedrale di San Pietro">Di Culto - Cattedrale di San Pietro</option>
                                    <option value="Di Culto - Cattedrale">Di Culto - Cattedrale</option>
                                    <option value="Di culto - Chieda della Madonna di Galliera">Di culto - Chieda della Madonna di Galliera</option>
                                    <option value="Di Culto - Chiesa dei Filippini">Di Culto - Chiesa dei Filippini</option>
                                    <option value="Di Culto - Chiesa dei Servi">Di Culto - Chiesa dei Servi</option>
                                    <option value="Di Culto - Chiesa Del Corpus Domini">Di Culto - Chiesa Del Corpus Domini</option>
                                    <option value="Di Culto - Chiesa Del Sacro Cuore Di Gesù">Di Culto - Chiesa Del Sacro Cuore Di Gesù</option>
                                    <option value="Di Culto - Chiesa della Madonna di Galliera">Di Culto - Chiesa della Madonna di Galliera</option>
                                    <option value="Di Culto - Chiesa di San Giovanni in Monte">Di Culto - Chiesa di San Giovanni in Monte</option>
                                    <option value="Di Culto - Chiesa di San Girolamo della Certosa">Di Culto - Chiesa di San Girolamo della Certosa</option>
                                    <option value="Di Culto - Chiesa di San Salvatore">Di Culto - Chiesa di San Salvatore</option>
                                    <option value="Di Culto - Chiesa di Santa Caterina">Di Culto - Chiesa di Santa Caterina</option>
                                    <option value="Di Culto - Chiesa di Santa Cecilia">Di Culto - Chiesa di Santa Cecilia</option>
                                    <option value="Di Culto - Chiesa Di Sant'Agnese">Di Culto - Chiesa Di Sant'Agnese</option>
                                    <option value="Di Culto - Chiesa e Monastero di Santa Margherita">Di Culto - Chiesa e Monastero di Santa Margherita</option>
                                    <option value="Di Culto - Chiesa Madonna Del Braccano">Di Culto - Chiesa Madonna Del Braccano</option>
                                    <option value="Di Culto - Chiesa Ortodossa Tutti i Santi">Di Culto - Chiesa Ortodossa Tutti i Santi</option>
                                    <option value="Di Culto - Chiesa San Gregorio dei Mendicanti">Di Culto - Chiesa San Gregorio dei Mendicanti</option>
                                    <option value="Di Culto - Chiesa San Martino">Di Culto - Chiesa San Martino</option>
                                    <option value="Di Culto - chiesa">Di Culto - chiesa</option>
                                    <option value="Di Culto - Chiese Cattedrali Cappelle">Di Culto - Chiese Cattedrali Cappelle</option>
                                    <option value="Di culto - Complesso di Santa Cristina della Fondazza">Di culto - Complesso di Santa Cristina della Fondazza</option>
                                    <option value="Di Culto - Convento delle Monache Domenicane di Sant'Agnese">Di Culto - Convento delle Monache Domenicane di Sant'Agnese</option>
                                    <option value="Di Culto - Convento di San Domenico Biblioteca">Di Culto - Convento di San Domenico Biblioteca</option>
                                    <option value="Di Culto - Convento di San Domenico">Di Culto - Convento di San Domenico</option>
                                    <option value="Di Culto - Convento">Di Culto - Convento</option>
                                    <option value="Di Culto - Duomo Di Modena">Di Culto - Duomo Di Modena</option>
                                    <option value="Di Culto - Monastero Agostiniane di Gesù e Maria">Di Culto - Monastero Agostiniane di Gesù e Maria</option>
                                    <option value="Di Culto - Monastero San Michele in Bosco Chiostro">Di Culto - Monastero San Michele in Bosco Chiostro</option>
                                    <option value="Di Culto - Monastero San Michele in Bosco Corridoio">Di Culto - Monastero San Michele in Bosco Corridoio</option>
                                    <option value="Di Culto - Monastero San Michele in Bosco">Di Culto - Monastero San Michele in Bosco</option>
                                    <option value="Di Culto - Monastero">Di Culto - Monastero</option>
                                    <option value="Di Culto - Oratorio">Di Culto - Oratorio</option>
                                    <option value="Di Culto - San Petronio Meridiana">Di Culto - San Petronio Meridiana</option>
                                    <option value="Di Culto - San Petronio">Di Culto - San Petronio</option>
                                    <option value="Di Culto - Santuario Di San Luca">Di Culto - Santuario Di San Luca</option>
                                    <option value="Di Culto - Santuario Madonna di Loreto in Santo Stefano">Di Culto - Santuario Madonna di Loreto in Santo Stefano</option>
                                    <option value="Di Culto - Santuario">Di Culto - Santuario</option>
                                    <option value="Di Studio - Auditorio">Di Studio - Auditorio</option>
                                    <option value="Di Studio - Collegio dei Fiamminghi">Di Studio - Collegio dei Fiamminghi</option>
                                    <option value="Di Studio - Collegio di Spagna">Di Studio - Collegio di Spagna</option>
                                    <option value="Di Studio - Collegio">Di Studio - Collegio</option>
                                    <option value="Di studio - Conservatorio">Di studio - Conservatorio</option>
                                    <option value="Di Studio - Giardini Botanici Istituto">Di Studio - Giardini Botanici Istituto</option>
                                    <option value="Di Studio - Istituto">Di Studio - Istituto</option>
                                    <option value="Di Studio - Laboratorio">Di Studio - Laboratorio</option>
                                    <option value="Di Studio - Sala Di Lettura">Di Studio - Sala Di Lettura</option>
                                    <option value="Di Studio - Sala">Di Studio - Sala</option>
                                    <option value="Di Studio - Scuola di Anatomia Istituto">Di Studio - Scuola di Anatomia Istituto</option>
                                    <option value="Di Studio - Scuola di Chimica Istituto">Di Studio - Scuola di Chimica Istituto</option>
                                    <option value="Di Studio - Scuola di Filosofia Istituto">Di Studio - Scuola di Filosofia Istituto</option>
                                    <option value="Di Studio - Teatro Istituto">Di Studio - Teatro Istituto</option>
                                    <option value="Di Studio - Università">Di Studio - Università</option>
                                    <option value="Di Sudio - Libreria Istituto di Bologna">Di Sudio - Libreria Istituto di Bologna</option>
                                    <option value="Edifici - Albergati Zola Predosa">Edifici - Albergati Zola Predosa</option>
                                    <option value="Edifici - Albergo del Pellegrino">Edifici - Albergo del Pellegrino</option>
                                    <option value="Edifici - Palazzo Albergati">Edifici - Palazzo Albergati</option>
                                    <option value="Edifici - Palazzo Bentivoglio">Edifici - Palazzo Bentivoglio</option>
                                    <option value="Edifici - Palazzo Bolognini">Edifici - Palazzo Bolognini</option>
                                    <option value="Edifici - Palazzo Bonfiglioli">Edifici - Palazzo Bonfiglioli</option>
                                    <option value="Edifici - Palazzo d'Accursio">Edifici - Palazzo d'Accursio</option>
                                    <option value="Edifici - Palazzo del Comune">Edifici - Palazzo del Comune</option>
                                    <option value="Edifici - Palazzo Magnani">Edifici - Palazzo Magnani</option>
                                    <option value="Edifici - Palazzo Marsigli">Edifici - Palazzo Marsigli</option>
                                    <option value="Edifici - Palazzo Re Enzo">Edifici - Palazzo Re Enzo</option>
                                    <option value="Edifici - Palazzo Sampieri">Edifici - Palazzo Sampieri</option>
                                    <option value="Edifici - Palazzo Sanuti Bevilacqua degli Ariosti">Edifici - Palazzo Sanuti Bevilacqua degli Ariosti</option>
                                    <option value="Edifici - Palazzo Tanari">Edifici - Palazzo Tanari</option>
                                    <option value="Edifici - Palazzo Zambeccari">Edifici - Palazzo Zambeccari</option>
                                    <option value="Edifici - Palazzo Zampieri">Edifici - Palazzo Zampieri</option>
                                    <option value="Edifici - Palazzo">Edifici - Palazzo</option>
                                    <option value="Edifici - Palazzo_dAccursio">Edifici - Palazzo_dAccursio</option>
                                    <option value="Edifici - Sferisterio">Edifici - Sferisterio</option>
                                    <option value="Ferrovie - Stazione di Bologna">Ferrovie - Stazione di Bologna</option>
                                    <option value="Ferrovie - Stazione">Ferrovie - Stazione</option>
                                    <option value="Fiume - Aposa">Fiume - Aposa</option>
                                    <option value="Fiume - Ghironda">Fiume - Ghironda</option>
                                    <option value="Fiume - Lavino">Fiume - Lavino</option>
                                    <option value="Fiume - Panaro">Fiume - Panaro</option>
                                    <option value="Fiume - Po">Fiume - Po</option>
                                    <option value="Fiume - Reno">Fiume - Reno</option>
                                    <option value="Fiume - Savena">Fiume - Savena</option>
                                    <option value="Fiumi - Canale">Fiumi - Canale</option>
                                    <option value="Fontane - Fontana Nettuno">Fontane - Fontana Nettuno</option>
                                    <option value="Istituto Ortopedico">Istituto Ortopedico</option>
                                    <option value="Mura di Bologna - Mura">Mura di Bologna - Mura</option>
                                    <option value="Mura di Bologna - Porta Castiglione">Mura di Bologna - Porta Castiglione</option>
                                    <option value="Mura di Bologna - Porta Galliera">Mura di Bologna - Porta Galliera</option>
                                    <option value="Mura di Bologna - Porta Lame">Mura di Bologna - Porta Lame</option>
                                    <option value="Mura di Bologna - Porta Maggiore">Mura di Bologna - Porta Maggiore</option>
                                    <option value="Mura di Bologna - Porta Mascarella">Mura di Bologna - Porta Mascarella</option>
                                    <option value="Mura di Bologna - Porta San Donato">Mura di Bologna - Porta San Donato</option>
                                    <option value="Mura di Bologna - Porta San Felice">Mura di Bologna - Porta San Felice</option>
                                    <option value="Mura di Bologna - Porta San Mamolo">Mura di Bologna - Porta San Mamolo</option>
                                    <option value="Mura di Bologna - Porta San Vitale">Mura di Bologna - Porta San Vitale</option>
                                    <option value="Mura di Bologna - Porta Sant'Isaia">Mura di Bologna - Porta Sant'Isaia</option>
                                    <option value="Mura di Bologna - Porta Santo Stefano">Mura di Bologna - Porta Santo Stefano</option>
                                    <option value="Mura di Bologna - Porta Saragozza">Mura di Bologna - Porta Saragozza</option>
                                    <option value="Musei - Aldrovandiano">Musei - Aldrovandiano</option>
                                    <option value="Musei - Anatomia Comparata">Musei - Anatomia Comparata</option>
                                    <option value="Musei - Casa Museo Renzo Savini">Musei - Casa Museo Renzo Savini</option>
                                    <option value="Musei - Gabinetto">Musei - Gabinetto</option>
                                    <option value="Musei - Galleria d'Arte">Musei - Galleria d'Arte</option>
                                    <option value="Musei - Geologia">Musei - Geologia</option>
                                    <option value="Musei - Giovanni Capellini">Musei - Giovanni Capellini</option>
                                    <option value="Musei - Museo Ostetrico">Musei - Museo Ostetrico</option>
                                    <option value="Musei - Museo">Musei - Museo</option>
                                    <option value="Musei - Palazzo Bonfiglioli">Musei - Palazzo Bonfiglioli</option>
                                    <option value="Musei - Palazzo Poggi">Musei - Palazzo Poggi</option>
                                    <option value="Musei - Pinacoteca">Musei - Pinacoteca</option>
                                    <option value="Musei - Storia Naturale">Musei - Storia Naturale</option>
                                    <option value="Musei - Studenti">Musei - Studenti</option>
                                    <option value="Musei - Teatro Anatomico">Musei - Teatro Anatomico</option>
                                    <option value="Osservatorio - Stazione Di Loiano">Osservatorio - Stazione Di Loiano</option>
                                    <option value="Osservatorio Museo - Specola">Osservatorio Museo - Specola</option>
                                    <option value="Piazze - Piazza Carducci">Piazze - Piazza Carducci</option>
                                    <option value="Piazze - Piazza del Gigante">Piazze - Piazza del Gigante</option>
                                    <option value="Piazze - Piazza del Nettuno">Piazze - Piazza del Nettuno</option>
                                    <option value="Piazze - Piazza di Porta Ravegnana">Piazze - Piazza di Porta Ravegnana</option>
                                    <option value="Piazze - Piazza Duomo">Piazze - Piazza Duomo</option>
                                    <option value="Piazze - Piazza Maggiore">Piazze - Piazza Maggiore</option>
                                    <option value="Piazze - Piazza Malpighi">Piazze - Piazza Malpighi</option>
                                    <option value="Piazze - Piazza San Domenico">Piazze - Piazza San Domenico</option>
                                    <option value="Piazze - Piazza">Piazze - Piazza</option>
                                    <option value="Portici - Portico">Portici - Portico</option>
                                    <option value="Storico Culturale - Accademie">Storico Culturale - Accademie</option>
                                    <option value="Storico Culturale - Archiginnasio">Storico Culturale - Archiginnasio</option>
                                    <option value="Storico Culturale - CAI Emilia Romagna">Storico Culturale - CAI Emilia Romagna</option>
                                    <option value="Storico Culturale - Camera di Commercio">Storico Culturale - Camera di Commercio</option>
                                    <option value="Storico Culturale - Cippo di Sacerno">Storico Culturale - Cippo di Sacerno</option>
                                    <option value="Storico Culturale - CLUB Domino">Storico Culturale - CLUB Domino</option>
                                    <option value="Storico Culturale - Locanda dei Tre Mori">Storico Culturale - Locanda dei Tre Mori</option>
                                    <option value="Storico Culturale - Locanda del pellegrino">Storico Culturale - Locanda del pellegrino</option>
                                    <option value="Storico Culturale - Palazzo Albergatti">Storico Culturale - Palazzo Albergatti</option>
                                    <option value="Storico Culturale - Palazzo Aldrovandi">Storico Culturale - Palazzo Aldrovandi</option>
                                    <option value="Storico Culturale - Palazzo Bonfiglioli Rossi">Storico Culturale - Palazzo Bonfiglioli Rossi</option>
                                    <option value="Storico Culturale - Palazzo Caprara">Storico Culturale - Palazzo Caprara</option>
                                    <option value="Storico Culturale - Palazzo dei Banchi">Storico Culturale - Palazzo dei Banchi</option>
                                    <option value="Storico Culturale - Palazzo del Governo">Storico Culturale - Palazzo del Governo</option>
                                    <option value="Storico Culturale - Palazzo del Monte">Storico Culturale - Palazzo del Monte</option>
                                    <option value="Storico Culturale - Palazzo del Podestà">Storico Culturale - Palazzo del Podestà</option>
                                    <option value="Storico Culturale - Palazzo Fantucci">Storico Culturale - Palazzo Fantucci</option>
                                    <option value="Storico Culturale - Palazzo Fantuzzi">Storico Culturale - Palazzo Fantuzzi</option>
                                    <option value="Storico Culturale - Palazzo Fava">Storico Culturale - Palazzo Fava</option>
                                    <option value="Storico Culturale - Palazzo Hercolani">Storico Culturale - Palazzo Hercolani</option>
                                    <option value="Storico Culturale - Palazzo Lambertini">Storico Culturale - Palazzo Lambertini</option>
                                    <option value="Storico Culturale - Palazzo Magnani">Storico Culturale - Palazzo Magnani</option>
                                    <option value="Storico Culturale - Palazzo Malvezzi">Storico Culturale - Palazzo Malvezzi</option>
                                    <option value="Storico Culturale - Palazzo Monti poi Salina">Storico Culturale - Palazzo Monti poi Salina</option>
                                    <option value="Storico Culturale - Palazzo Pepoli">Storico Culturale - Palazzo Pepoli</option>
                                    <option value="Storico Culturale - Palazzo Ranuzzi">Storico Culturale - Palazzo Ranuzzi</option>
                                    <option value="Storico Culturale - Palazzo Sampieri">Storico Culturale - Palazzo Sampieri</option>
                                    <option value="Storico Culturale - Palazzo Tanari">Storico Culturale - Palazzo Tanari</option>
                                    <option value="Storico Culturale - Palazzo Vizzani">Storico Culturale - Palazzo Vizzani</option>
                                    <option value="Storico Culturale - Palazzo Zambeccari">Storico Culturale - Palazzo Zambeccari</option>
                                    <option value="Storico Culturale - Torre Ghirlandina">Storico Culturale - Torre Ghirlandina</option>
                                    <option value="Storico Culturale - Torre">Storico Culturale - Torre</option>
                                    <option value="Strade - Via Emilia">Strade - Via Emilia</option>
                                    <option value="Strade - Via Miola">Strade - Via Miola</option>
                                    <option value="Teatri - Arena del Sole">Teatri - Arena del Sole</option>
                                    <option value="Teatri - Comunale">Teatri - Comunale</option>
                                    <option value="Teatri - Teatro Comunale">Teatri - Teatro Comunale</option>
                                    <option value="Teatri - Teatro Farnese">Teatri - Teatro Farnese</option>
                                    <option value="Teatri - Teatro">Teatri - Teatro</option>
                                    <option value="Torri - Asinelli">Torri - Asinelli</option>
                                    <option value="Torri - Garisenda">Torri - Garisenda</option>
                                    <option value="Torri - Torri">Torri - Torri</option>
                                    <option value="Zona Universitaria - Campus">Zona Universitaria - Campus</option>
                                    <option value="Zona Universitaria - Orto botanico">Zona Universitaria - Orto botanico</option>
                                    <option value="Zona Universitaria - Via Zamboni">Zona Universitaria - Via Zamboni</option>
                                    <option value="Zona Unviersitaria - Università">Zona Unviersitaria - Università</option>

                                </Form.Select>
                                <Form.Select
                                    value={selectedAuthor}
                                    onChange={(event) => setSelectedAuthor(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_authors')}</option>
                                    <option value="Adam Walker">Adam Walker</option>
                                    <option value="Addison, Joseph">Addison, Joseph</option>
                                    <option value="Alarcón, Pedro A. de">Alarcón, Pedro A. de</option>
                                    <option value="Andrés, Juan">Andrés, Juan</option>
                                    <option value="Annenkov Pavel Vasilievič">Annenkov Pavel Vasilievič</option>
                                    <option value="Archimandrit Avgustin (Nikitin)">Archimandrit Avgustin (Nikitin)</option>
                                    <option value="Auteur anonyme">Auteur anonyme</option>
                                    <option value="Baena, Clemente A. de">Baena, Clemente A. de</option>
                                    <option value="Balaguer, Víctor">Balaguer, Víctor</option>
                                    <option value="Baroja, Pío">Baroja, Pío</option>
                                    <option value="Barthélemy, Jean-Jacques">Barthélemy, Jean-Jacques</option>
                                    <option value="Bazin, René">Bazin, René</option>
                                    <option value="Beaugrand, Honoré">Beaugrand, Honoré</option>
                                    <option value="Bérenger, Jean-Pierre">Bérenger, Jean-Pierre</option>
                                    <option value="Bergeret de Grancourt, Pierre Jacques et Fragonard, Jean Honoré">Bergeret de Grancourt, Pierre Jacques et Fragonard, Jean Honoré</option>
                                    <option value="Beste, Henry Digby">Beste, Henry Digby</option>
                                    <option value="Binos, Marie-Dominique de">Binos, Marie-Dominique de</option>
                                    <option value="Blasco Ibáñez, Vicente">Blasco Ibáñez, Vicente</option>
                                    <option value="Boccage, Anne-Marie Lepage Fiquet du">Boccage, Anne-Marie Lepage Fiquet du</option>
                                    <option value="Bolonskij Universitet, Enciklopedičeskij slovar’ Brokgauz e Efron">Bolonskij Universitet, Enciklopedičeskij slovar’ Brokgauz e Efron</option>
                                    <option value="Borrajo y Herrera, Pedro; Giner de los Ríos, Hermenegildo de">Borrajo y Herrera, Pedro; Giner de los Ríos, Hermenegildo de</option>
                                    <option value="Boyle, John">Boyle, John</option>
                                    <option value="Breval, John Durant">Breval, John Durant</option>
                                    <option value="Brosses, Charles de">Brosses, Charles de</option>
                                    <option value="Browning, Robert">Browning, Robert</option>
                                    <option value="Burgos, Carmen de">Burgos, Carmen de</option>
                                    <option value="Burton, Richard Francis">Burton, Richard Francis</option>
                                    <option value="Cabrol, Élie">Cabrol, Élie</option>
                                    <option value="Campano, Lorenzo">Campano, Lorenzo</option>
                                    <option value="Camus, Renaud">Camus, Renaud</option>
                                    <option value="Carne, John">Carne, John</option>
                                    <option value="Castelar, Emilio">Castelar, Emilio</option>
                                    <option value="Caylus, Anne Claude Philippe de">Caylus, Anne Claude Philippe de</option>
                                    <option value="Cervantes Saavedra, Miguel de">Cervantes Saavedra, Miguel de</option>
                                    <option value="Chancel, A.D.">Chancel, A.D.</option>
                                    <option value="Chauveau, M. Pierre">Chauveau, M. Pierre</option>
                                    <option value="Cochin, Charles-Nicolas et Michel, Christian">Cochin, Charles-Nicolas et Michel, Christian</option>
                                    <option value="Colston Marianne">Colston Marianne</option>
                                    <option value="Cotteau, Gustave">Cotteau, Gustave</option>
                                    <option value="Couture, Jean-Baptiste">Couture, Jean-Baptiste</option>
                                    <option value="Coyer, Gabriel-François">Coyer, Gabriel-François</option>
                                    <option value="Cruz y Bahamonde, Nicolás de la">Cruz y Bahamonde, Nicolás de la</option>
                                    <option value="Cvetaev Ivan Vladimirovič, Nečaev-Mal’cov Jurij Stepanovič">Cvetaev Ivan Vladimirovič, Nečaev-Mal’cov Jurij Stepanovič</option>
                                    <option value="De Feller, François Xavier">De Feller, François Xavier</option>
                                    <option value="De Sain, Édouard">De Sain, Édouard</option>
                                    <option value="De Staël Holstein, Madame">De Staël Holstein, Madame</option>
                                    <option value="de Villalón, Cristóbal">de Villalón, Cristóbal</option>
                                    <option value="Dickens, Charles">Dickens, Charles</option>
                                    <option value="Dobroljubov Nikolaj Aleksandrovič">Dobroljubov Nikolaj Aleksandrovič</option>
                                    <option value="Dondel du Faouëdic, Noémie">Dondel du Faouëdic, Noémie</option>
                                    <option value="Driou, Alfred">Driou, Alfred</option>
                                    <option value="Drummond, Alexander">Drummond, Alexander</option>
                                    <option value="Duclos, Charles Pinot">Duclos, Charles Pinot</option>
                                    <option value="Ducos, Basile Joseph">Ducos, Basile Joseph</option>
                                    <option value="Dunbar, Margaret">Dunbar, Margaret</option>
                                    <option value="Dutens, Louis">Dutens, Louis</option>
                                    <option value="ǅerali Frančesko, Vai Džan Battista, Malachova Irina Gennad'evna">ǅerali Frančesko, Vai Džan Battista, Malachova Irina Gennad'evna</option>
                                    <option value="Elisabeth Craven">Elisabeth Craven</option>
                                    <option value="Evelyn John">Evelyn John</option>
                                    <option value="Fedina Inessa">Fedina Inessa</option>
                                    <option value="Fernández de Moratín, Leandro">Fernández de Moratín, Leandro</option>
                                    <option value="Fig’e, Lui">Fig’e, Lui</option>
                                    <option value="Figueroa, Á. de, Conde de Romanones">Figueroa, Á. de, Conde de Romanones</option>
                                    <option value="Filippov Sergej Nikitič">Filippov Sergej Nikitič</option>
                                    <option value="Fontaine, Prosper">Fontaine, Prosper</option>
                                    <option value="Fonvizin Denis Ivanovič">Fonvizin Denis Ivanovič</option>
                                    <option value="Fréville, Valentin (pseudonyme d'Alfred Driou)">Fréville, Valentin (pseudonyme d'Alfred Driou)</option>
                                    <option value="Gercen Aleksandr Ivanovič">Gercen Aleksandr Ivanovič</option>
                                    <option value="Glagolev Andrej Gаvrilovič">Glagolev Andrej Gаvrilovič</option>
                                    <option value="Goncourt, Jules et Edmond de">Goncourt, Jules et Edmond de</option>
                                    <option value="Goudar, Ange">Goudar, Ange</option>
                                    <option value="Greč Nikolaj Ivanovič">Greč Nikolaj Ivanovič</option>
                                    <option value="Guidi, Jean Baptiste Marie">Guidi, Jean Baptiste Marie</option>
                                    <option value="Guillame">Guillame</option>
                                    <option value="Gumilev Nikolaj">Gumilev Nikolaj</option>
                                    <option value="Guthrie, Arthur">Guthrie, Arthur</option>
                                    <option value="Hervey, C.">Hervey, C.</option>
                                    <option value="Hiester, John P.">Hiester, John P.</option>
                                    <option value="Ideville, Henry d’">Ideville, Henry d’</option>
                                    <option value="Iribas y Sánchez, Gregorio de">Iribas y Sánchez, Gregorio de</option>
                                    <option value="Italy, by Morgan, Lady (Sydney), Morgan, Thomas Charles, Sir">Italy, by Morgan, Lady (Sydney), Morgan, Thomas Charles, Sir</option>
                                    <option value="Janin, Jules">Janin, Jules</option>
                                    <option value="John Moore">John Moore</option>
                                    <option value="John Owen">John Owen</option>
                                    <option value="Jumangulov Vil' Jakubovič">Jumangulov Vil' Jakubovič</option>
                                    <option value="Knapp Samuel Lorenzo">Knapp Samuel Lorenzo</option>
                                    <option value="La Condamine, Charles-Marie de">La Condamine, Charles-Marie de</option>
                                    <option value="La Lande, Jérôme de">La Lande, Jérôme de</option>
                                    <option value="La Lande, Jêrome de">La Lande, Jêrome de</option>
                                    <option value="La Porte, Joseph de">La Porte, Joseph de</option>
                                    <option value="La Roche, J de.">La Roche, J de.</option>
                                    <option value="Lagacé, J. B.">Lagacé, J. B.</option>
                                    <option value="Lamberg, Maximilian Joseph von">Lamberg, Maximilian Joseph von</option>
                                    <option value="Larionova Ekaterina">Larionova Ekaterina</option>
                                    <option value="Lasa, José de">Lasa, José de</option>
                                    <option value="Lee, Vernon">Lee, Vernon</option>
                                    <option value="Lemeševa Ol'ga Alekseevna">Lemeševa Ol'ga Alekseevna</option>
                                    <option value="León y Domínguez, José M.">León y Domínguez, José M.</option>
                                    <option value="Libri, Guglielmo">Libri, Guglielmo</option>
                                    <option value="Lichačev Vasilij">Lichačev Vasilij</option>
                                    <option value="López de Ecala y Zubiría, José M.">López de Ecala y Zubiría, José M.</option>
                                    <option value="Lord Byron">Lord Byron</option>
                                    <option value="Marmottan, Paul">Marmottan, Paul</option>
                                    <option value="Massenet, Jules">Massenet, Jules</option>
                                    <option value="Monge, José M.">Monge, José M.</option>
                                    <option value="Montaigne, Michel de">Montaigne, Michel de</option>
                                    <option value="Moraleda y Esteban, Juan">Moraleda y Esteban, Juan</option>
                                    <option value="Moyne, Joseph Louis Théodore">Moyne, Joseph Louis Théodore</option>
                                    <option value="Mudrov Andrej">Mudrov Andrej</option>
                                    <option value="Muratov, Pavel Pavlovič">Muratov, Pavel Pavlovič</option>
                                    <option value="Negrín, Ignacio de">Negrín, Ignacio de</option>
                                    <option value="Nekhaeva Svetlana">Nekhaeva Svetlana</option>
                                    <option value="Nemirovič-Dančenko Vladimir Ivanovič">Nemirovič-Dančenko Vladimir Ivanovič</option>
                                    <option value="Niberg Rеjngol'd">Niberg Rеjngol'd</option>
                                    <option value="Nikitenko Sofia Aleksandrovna">Nikitenko Sofia Aleksandrovna</option>
                                    <option value="Nikogosjan David">Nikogosjan David</option>
                                    <option value="Nollet, Jean Antoine">Nollet, Jean Antoine</option>
                                    <option value="Owen, John">Owen, John</option>
                                    <option value="Paulovič, Konstantin">Paulovič, Konstantin</option>
                                    <option value="Pellechet, Jules">Pellechet, Jules</option>
                                    <option value="Pérez Galdós, Benito">Pérez Galdós, Benito</option>
                                    <option value="Pérez-Villamil, Manuel">Pérez-Villamil, Manuel</option>
                                    <option value="Perojo, José del">Perojo, José del</option>
                                    <option value="Peter Beckford">Peter Beckford</option>
                                    <option value="Pisarev Dmitrij Ivanovič">Pisarev Dmitrij Ivanovič</option>
                                    <option value="Plessis, Joseph-Octave">Plessis, Joseph-Octave</option>
                                    <option value="Pokrovskij Iosif Alekseevič">Pokrovskij Iosif Alekseevič</option>
                                    <option value="Polonceau, Émile">Polonceau, Émile</option>
                                    <option value="Prokop’ev Nikolaj, Nazmutdinova Veronika, Nasonov Vladimir">Prokop’ev Nikolaj, Nazmutdinova Veronika, Nasonov Vladimir</option>
                                    <option value="Radet, Edmond">Radet, Edmond</option>
                                    <option value="Rangoni, Elisabetta (Princesse de Gonzague)">Rangoni, Elisabetta (Princesse de Gonzague)</option>
                                    <option value="Reck, Madame de">Reck, Madame de</option>
                                    <option value="Rémusat, Charles de">Rémusat, Charles de</option>
                                    <option value="Reymond, Marcel">Reymond, Marcel</option>
                                    <option value="Riballier, Philibert et Cosson, Cathérine">Riballier, Philibert et Cosson, Cathérine</option>
                                    <option value="Ringuet (pseudonyme de Philippe Panneton)">Ringuet (pseudonyme de Philippe Panneton)</option>
                                    <option value="Robert Gray">Robert Gray</option>
                                    <option value="Rocheleau, Eustache">Rocheleau, Eustache</option>
                                    <option value="Roland de La Platière, Jean-Marie">Roland de La Platière, Jean-Marie</option>
                                    <option value="Rutenburg, Viktor Ivanovič">Rutenburg, Viktor Ivanovič</option>
                                    <option value="Seignelay, Jean-Baptiste Antoine Colbert">Seignelay, Jean-Baptiste Antoine Colbert</option>
                                    <option value="Sir James Edward Smith">Sir James Edward Smith</option>
                                    <option value="Snegirev, Vladimir Leont'evič">Snegirev, Vladimir Leont'evič</option>
                                    <option value="Starke, Mariana">Starke, Mariana</option>
                                    <option value="Starke, Richard et Mariana">Starke, Richard et Mariana</option>
                                    <option value="Stefko Marija Stanislavovna">Stefko Marija Stanislavovna</option>
                                    <option value="Stendhal">Stendhal</option>
                                    <option value="Taillasson, Jean-Joseph">Taillasson, Jean-Joseph</option>
                                    <option value="Taine, Hippolyte">Taine, Hippolyte</option>
                                    <option value="Tarle Evgenij Viktorovič">Tarle Evgenij Viktorovič</option>
                                    <option value="Teste, Louis">Teste, Louis</option>
                                    <option value="Tolstoj Petr Alekseevič">Tolstoj Petr Alekseevič</option>
                                    <option value="Torjanik Evgenij">Torjanik Evgenij</option>
                                    <option value="Trollope, Mrs">Trollope, Mrs</option>
                                    <option value="Valery, Antoine-Claude">Valery, Antoine-Claude</option>
                                    <option value="Vari">Vari</option>
                                    <option value="Viardot, Louis">Viardot, Louis</option>
                                    <option value="Viera y Clavijo, José de">Viera y Clavijo, José de</option>
                                    <option value="Vigee Lebrun, Louise- Élisabeth">Vigee Lebrun, Louise- Élisabeth</option>
                                    <option value="Villanueva Gutiérrez, Adulfo">Villanueva Gutiérrez, Adulfo</option>
                                    <option value="Voltaire">Voltaire</option>
                                    <option value="William Beckford">William Beckford</option>
                                    <option value="WILLIAM HAZLITT">WILLIAM HAZLITT</option>
                                    <option value="Williams Champney, Lizzie">Williams Champney, Lizzie</option>
                                    <option value="Wolkonsky, Marie">Wolkonsky, Marie</option>
                                    <option value="Wright, Esq. Edward">Wright, Esq. Edward</option>
                                </Form.Select>
                
                                <Form.Select
                                    value={selectedPeriod}
                                    onChange={(event) => setSelectedPeriod(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_period')}</option>
                                    <option value="Anno 1088">Anno 1088</option>
                                    <option value="Anno 1095">Anno 1095</option>
                                    <option value="Anno 1109">Anno 1109</option>
                                    <option value="Anno 1160">Anno 1160</option>
                                    <option value="Anno 1313">Anno 1313</option>
                                    <option value="Anno 1364">Anno 1364</option>
                                    <option value="Anno 1390">Anno 1390</option>
                                    <option value="Anno 1530">Anno 1530</option>
                                    <option value="Anno 1789">Anno 1789</option>
                                    <option value="Anno 1888">Anno 1888</option>
                                    <option value="Barocco">Barocco</option>
                                    <option value="Medioevo">Medioevo</option>
                                    <option value="Rinascimento">Rinascimento</option>
                                    <option value="Secolo IX">Secolo IX</option>
                                    <option value="Secolo V">Secolo V</option>
                                    <option value="Secolo VI">Secolo VI</option>
                                    <option value="Secolo X">Secolo X</option>
                                    <option value="Secolo XI">Secolo XI</option>
                                    <option value="Secolo XII">Secolo XII</option>
                                    <option value="Secolo XIII">Secolo XIII</option>
                                    <option value="Secolo XIV">Secolo XIV</option>
                                    <option value="Secolo XIX">Secolo XIX</option>
                                    <option value="Secolo XV">Secolo XV</option>
                                    <option value="Secolo XVI">Secolo XVI</option>
                                    <option value="Secolo XVII">Secolo XVII</option>
                                    <option value="Secolo XVIII">Secolo XVIII</option>
                                    <option value="Secolo XX">Secolo XX</option>
                                    <option value="Secolo XXI">Secolo XXI</option>
                                </Form.Select>
                                <Form.Select
                                    value={selectedExperience}
                                    onChange={(event) => setSelectedExperience(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_experience')}</option>
                                    <option value="Ammirazione">Ammirazione</option>
                                    <option value="Compassione">Compassione</option>
                                    <option value="Critica">Critica</option>
                                    <option value="Curiosità">Curiosità</option>
                                    <option value="Disgusto">Disgusto</option>
                                    <option value="Esperienza">Esperienza</option>
                                    <option value="Fascino">Fascino</option>
                                    <option value="Fatica">Fatica</option>
                                    <option value="Gioia">Gioia</option>
                                    <option value="Gratitudine">Gratitudine</option>
                                    <option value="Imprevisto">Imprevisto</option>
                                    <option value="Indifferenza">Indifferenza</option>
                                    <option value="Intrattenimento">Intrattenimento</option>
                                    <option value="Ironia">Ironia</option>
                                    <option value="Nostalgia">Nostalgia</option>
                                    <option value="Orrore">Orrore</option>
                                    <option value="Paura">Paura</option>
                                    <option value="Raccoglimento">Raccoglimento</option>
                                    <option value="Ricordi">Ricordi</option>
                                    <option value="Scoperte">Scoperte</option>
                                    <option value="Sogno">Sogno</option>
                                    <option value="Straniamento">Straniamento</option>
                                    <option value="Stupore">Stupore</option>
                                    <option value="Tranquillità">Tranquillità</option>
                                    <option value="Tristezza">Tristezza</option>
                                    <option value="Viaggi">Viaggi</option>
                                </Form.Select>
                                <Form.Select
                                    value={selectedCharacter}
                                    onChange={(event) => setSelectedCharacter(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_characters')}</option>
                                    <option value="Accursio Francesco">Accursio Francesco</option>
                                    <option value="Agnesi Gaetana">Agnesi Gaetana</option>
                                    <option value="Aldrovandi Filippo">Aldrovandi Filippo</option>
                                    <option value="Aldrovandi Ulisse">Aldrovandi Ulisse</option>
                                    <option value="Alessandro_Gavazzi">Alessandro_Gavazzi</option>
                                    <option value="Alighieri Dante">Alighieri Dante</option>
                                    <option value="Alvarez de Albornoz Gil">Alvarez de Albornoz Gil</option>
                                    <option value="Antonio Magini Giovanni">Antonio Magini Giovanni</option>
                                    <option value="Ariosto">Ariosto</option>
                                    <option value="Aristotele_Fioravanti">Aristotele_Fioravanti</option>
                                    <option value="Baciocchi Elisa">Baciocchi Elisa</option>
                                    <option value="Baldovini Iacopo">Baldovini Iacopo</option>
                                    <option value="Barbarossa">Barbarossa</option>
                                    <option value="Bartolomeo da Saliceto">Bartolomeo da Saliceto</option>
                                    <option value="Bartolomeo Spani">Bartolomeo Spani</option>
                                    <option value="Bassi Laura">Bassi Laura</option>
                                    <option value="Bassiano Giovanninc">Bassiano Giovanninc</option>
                                    <option value="Battista Dossi">Battista Dossi</option>
                                    <option value="Beccari Jacopo">Beccari Jacopo</option>
                                    <option value="Benedetto XIV">Benedetto XIV</option>
                                    <option value="Bentivogli">Bentivogli</option>
                                    <option value="Bentivoglio Giovanni II">Bentivoglio Giovanni II</option>
                                    <option value="Bentivoglio Lorenzo">Bentivoglio Lorenzo</option>
                                    <option value="Bernardo Di Quintavalle">Bernardo Di Quintavalle</option>
                                    <option value="Biancani Jacopo">Biancani Jacopo</option>
                                    <option value="Bianconi Giovanni">Bianconi Giovanni</option>
                                    <option value="Boccaccio">Boccaccio</option>
                                    <option value="Bocchi Dorotea">Bocchi Dorotea</option>
                                    <option value="Bolognetti Alberto">Bolognetti Alberto</option>
                                    <option value="Bonaparte Napoleone">Bonaparte Napoleone</option>
                                    <option value="Borromeo Carlo">Borromeo Carlo</option>
                                    <option value="Broeck Muschen">Broeck Muschen</option>
                                    <option value="Buonsignori Maddalena">Buonsignori Maddalena</option>
                                    <option value="Calori Luigi">Calori Luigi</option>
                                    <option value="Capellini Giovanni">Capellini Giovanni</option>
                                    <option value="Cardinale Mezzofanti">Cardinale Mezzofanti</option>
                                    <option value="Carducci Giosue'">Carducci Giosue'</option>
                                    <option value="Carlo Goldoni">Carlo Goldoni</option>
                                    <option value="Carlo V">Carlo V</option>
                                    <option value="Cassini Giovanni">Cassini Giovanni</option>
                                    <option value="Caterina da Bologna Santa">Caterina da Bologna Santa</option>
                                    <option value="Cattani Giuseppina">Cattani Giuseppina</option>
                                    <option value="Cignani Carlo">Cignani Carlo</option>
                                    <option value="Clemente V">Clemente V</option>
                                    <option value="Clemente VII">Clemente VII</option>
                                    <option value="Clemente XI">Clemente XI</option>
                                    <option value="Clemente XII">Clemente XII</option>
                                    <option value="Colomés Juan Bautista">Colomés Juan Bautista</option>
                                    <option value="Copernico Niccolo'">Copernico Niccolo'</option>
                                    <option value="Cospi Ferdinando">Cospi Ferdinando</option>
                                    <option value="Da Bagnolo Accursio">Da Bagnolo Accursio</option>
                                    <option value="Da Medicina Pillio">Da Medicina Pillio</option>
                                    <option value="Da Rotterdam Erasmo">Da Rotterdam Erasmo</option>
                                    <option value="Da Signa Boncompagno">Da Signa Boncompagno</option>
                                    <option value="Dalle Donne Maria">Dalle Donne Maria</option>
                                    <option value="D'Andrea Novella">D'Andrea Novella</option>
                                    <option value="De' Liuzzi Mondino">De' Liuzzi Mondino</option>
                                    <option value="De Romanzi Rolandino">De Romanzi Rolandino</option>
                                    <option value="De' Romanzi Rolandino">De' Romanzi Rolandino</option>
                                    <option value="Denari Odofredo">Denari Odofredo</option>
                                    <option value="Di Canossa Matilde">Di Canossa Matilde</option>
                                    <option value="Di Russia Caterina II">Di Russia Caterina II</option>
                                    <option value="Dorado Montero Pedro">Dorado Montero Pedro</option>
                                    <option value="Dosso Dossi">Dosso Dossi</option>
                                    <option value="Duglioli Elena">Duglioli Elena</option>
                                    <option value="Elisa Bachiocchi">Elisa Bachiocchi</option>
                                    <option value="Enzo Re">Enzo Re</option>
                                    <option value="Ercolo Isolani">Ercolo Isolani</option>
                                    <option value="Farinelli (Pseudonimo Carlo Maria Michelangelo Nicola Broschi">Farinelli (Pseudonimo Carlo Maria Michelangelo Nicola Broschi</option>
                                    <option value="Federico II">Federico II</option>
                                    <option value="Fernández de Moratín">Fernández de Moratín</option>
                                    <option value="Ferri Enrico">Ferri Enrico</option>
                                    <option value="Fioravanti Aristotele">Fioravanti Aristotele</option>
                                    <option value="Foscarari Egidio">Foscarari Egidio</option>
                                    <option value="Fra Damiano da Bergamo">Fra Damiano da Bergamo</option>
                                    <option value="Francesco Zambeccari">Francesco Zambeccari</option>
                                    <option value="Gaetana Agnesi Maria">Gaetana Agnesi Maria</option>
                                    <option value="Galilei Galileo">Galilei Galileo</option>
                                    <option value="Galvani Luigi">Galvani Luigi</option>
                                    <option value="Gapare_Nadi">Gapare_Nadi</option>
                                    <option value="Garibaldi Giuseppe">Garibaldi Giuseppe</option>
                                    <option value="Gesuiti spagnoli">Gesuiti spagnoli</option>
                                    <option value="Giorgio Vasari">Giorgio Vasari</option>
                                    <option value="Giovanni XXII">Giovanni XXII</option>
                                    <option value="Giovanni">Giovanni</option>
                                    <option value="Giulio II">Giulio II</option>
                                    <option value="Giuseppe Spina">Giuseppe Spina</option>
                                    <option value="Giustiniano">Giustiniano</option>
                                    <option value="Goethe">Goethe</option>
                                    <option value="Gozzadini Bettisia">Gozzadini Bettisia</option>
                                    <option value="Graziano">Graziano</option>
                                    <option value="Gregorio XIII">Gregorio XIII</option>
                                    <option value="Gregorio XVI">Gregorio XVI</option>
                                    <option value="Guarini">Guarini</option>
                                    <option value="Guglielmini Domenico">Guglielmini Domenico</option>
                                    <option value="Irazoqui José María">Irazoqui José María</option>
                                    <option value="Irnerio">Irnerio</option>
                                    <option value="Jacopo">Jacopo</option>
                                    <option value="John Ruskin">John Ruskin</option>
                                    <option value="John">John</option>
                                    <option value="Lancastre Roger">Lancastre Roger</option>
                                    <option value="Lanzi Luigi">Lanzi Luigi</option>
                                    <option value="Lasala Manuel">Lasala Manuel</option>
                                    <option value="Laura Bassi">Laura Bassi</option>
                                    <option value="Leopardi Giacomo">Leopardi Giacomo</option>
                                    <option value="Lord Byron">Lord Byron</option>
                                    <option value="Luigi Galvani">Luigi Galvani</option>
                                    <option value="Magno Carlo">Magno Carlo</option>
                                    <option value="Malpighi Marcello">Malpighi Marcello</option>
                                    <option value="Malvezzi famiglia">Malvezzi famiglia</option>
                                    <option value="Manfredi Eustachio">Manfredi Eustachio</option>
                                    <option value="Marconi Guglielmo">Marconi Guglielmo</option>
                                    <option value="Maria Grimaldi Francesco">Maria Grimaldi Francesco</option>
                                    <option value="Maria Zambeccari Girolamo">Maria Zambeccari Girolamo</option>
                                    <option value="Maria Zanotti Francesco">Maria Zanotti Francesco</option>
                                    <option value="Marsili Ferdinando Ludovico">Marsili Ferdinando Ludovico</option>
                                    <option value="Marsili Ferdinando Luigi">Marsili Ferdinando Luigi</option>
                                    <option value="Mazzini Giuseppe">Mazzini Giuseppe</option>
                                    <option value="Mezzofanti Giuseppe">Mezzofanti Giuseppe</option>
                                    <option value="Minghetti Marco">Minghetti Marco</option>
                                    <option value="Monti Filippo">Monti Filippo</option>
                                    <option value="Montpensier famiglia">Montpensier famiglia</option>
                                    <option value="Morgagni Giovanni Battista">Morgagni Giovanni Battista</option>
                                    <option value="Murri Augusto">Murri Augusto</option>
                                    <option value="Napoleone">Napoleone</option>
                                    <option value="Nebrija_de_Antonio">Nebrija_de_Antonio</option>
                                    <option value="Orioli Francesco">Orioli Francesco</option>
                                    <option value="Paleotti e Zambeccari Famiglia">Paleotti e Zambeccari Famiglia</option>
                                    <option value="Panzacchi Enrico">Panzacchi Enrico</option>
                                    <option value="Papa Sisto V">Papa Sisto V</option>
                                    <option value="Papa">Papa</option>
                                    <option value="Passaggeri Rolandino">Passaggeri Rolandino</option>
                                    <option value="Pellegrino da Modena">Pellegrino da Modena</option>
                                    <option value="Pepoli Taddeo">Pepoli Taddeo</option>
                                    <option value="Petrarca Francesco">Petrarca Francesco</option>
                                    <option value="Pignatelli Faustina">Pignatelli Faustina</option>
                                    <option value="Pio XI">Pio XI</option>
                                    <option value="Pope Adrian III">Pope Adrian III</option>
                                    <option value="Ranuzzi Girolamo">Ranuzzi Girolamo</option>
                                    <option value="Regina Margherita">Regina Margherita</option>
                                    <option value="Riccioli Giovanni Battista">Riccioli Giovanni Battista</option>
                                    <option value="Rodríguez Aponte Manuel">Rodríguez Aponte Manuel</option>
                                    <option value="Rossini Gioacchino">Rossini Gioacchino</option>
                                    <option value="Rubbiani Alfonso">Rubbiani Alfonso</option>
                                    <option value="Saffi Aurelio">Saffi Aurelio</option>
                                    <option value="Sampieri marchesa">Sampieri marchesa</option>
                                    <option value="San Domenico">San Domenico</option>
                                    <option value="San Luca Evangelista">San Luca Evangelista</option>
                                    <option value="San Petronio">San Petronio</option>
                                    <option value="Savorgnan Urbano">Savorgnan Urbano</option>
                                    <option value="Spallanzani Lazzaro">Spallanzani Lazzaro</option>
                                    <option value="Stendhal CAR CONFLICT">Stendhal CAR CONFLICT</option>
                                    <option value="Stendhal">Stendhal</option>
                                    <option value="Tagliacozzi Gaspare">Tagliacozzi Gaspare</option>
                                    <option value="Talon famiglia">Talon famiglia</option>
                                    <option value="Tambroni Clotilde">Tambroni Clotilde</option>
                                    <option value="Tartagni Alessandro">Tartagni Alessandro</option>
                                    <option value="Tasso Torquato">Tasso Torquato</option>
                                    <option value="Tasso">Tasso</option>
                                    <option value="Teodosio I">Teodosio I</option>
                                    <option value="Tommasini Giacomo">Tommasini Giacomo</option>
                                    <option value="Vendagogli Lucia">Vendagogli Lucia</option>
                                    <option value="Veratti Giuseppe">Veratti Giuseppe</option>
                                    <option value="Villalón Cristóbal de">Villalón Cristóbal de</option>
                                    <option value="Visconti">Visconti</option>
                                    <option value="Vittorio Emanuele II">Vittorio Emanuele II</option>
                                    <option value="Vives Luis">Vives Luis</option>
                                    <option value="Volta Alessandro">Volta Alessandro</option>
                                    <option value="Voltaire">Voltaire</option>
                                    <option value="Zanotti Eustachio">Zanotti Eustachio</option>
                                </Form.Select>
                                <Form.Select
                                    value={selectedArtist}
                                    onChange={(event) => setSelectedArtist(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_artists')}</option>
                                    <option value="Agnelli Guglielmo">Agnelli Guglielmo</option>
                                    <option value="Agostino Carracci">Agostino Carracci</option>
                                    <option value="Albani Francesco">Albani Francesco</option>
                                    <option value="Alessandro Algardi">Alessandro Algardi</option>
                                    <option value="Alfonso Rubbiani">Alfonso Rubbiani</option>
                                    <option value="Algardi Alessandro">Algardi Alessandro</option>
                                    <option value="Andrea da Fiesole">Andrea da Fiesole</option>
                                    <option value="Annibale Carracci">Annibale Carracci</option>
                                    <option value="Asinelli Fratelli">Asinelli Fratelli</option>
                                    <option value="Bagnacavallo">Bagnacavallo</option>
                                    <option value="Barozzi da Vignola Jacopo">Barozzi da Vignola Jacopo</option>
                                    <option value="Bassani Battista Giovanni">Bassani Battista Giovanni</option>
                                    <option value="Bernini">Bernini</option>
                                    <option value="Bistolfi Leonardo">Bistolfi Leonardo</option>
                                    <option value="Bolognese Franco">Bolognese Franco</option>
                                    <option value="Bolognini">Bolognini</option>
                                    <option value="Bononi Carlo">Bononi Carlo</option>
                                    <option value="Bramante">Bramante</option>
                                    <option value="Buonarroti Michelangelo">Buonarroti Michelangelo</option>
                                    <option value="Burrini Giovanni Antonio">Burrini Giovanni Antonio</option>
                                    <option value="Calvi Jacopo Alessandro">Calvi Jacopo Alessandro</option>
                                    <option value="Cantarini Simone">Cantarini Simone</option>
                                    <option value="Canuti Domenico Maria">Canuti Domenico Maria</option>
                                    <option value="Caravaggio">Caravaggio</option>
                                    <option value="Carracci Agostino">Carracci Agostino</option>
                                    <option value="Carracci Annibale">Carracci Annibale</option>
                                    <option value="Carracci Fratelli">Carracci Fratelli</option>
                                    <option value="Carracci Ludovico">Carracci Ludovico</option>
                                    <option value="Cassini Domenico">Cassini Domenico</option>
                                    <option value="Cassini">Cassini</option>
                                    <option value="Cesi Bartolomeo">Cesi Bartolomeo</option>
                                    <option value="Chigniani Carlo">Chigniani Carlo</option>
                                    <option value="Cimabue">Cimabue</option>
                                    <option value="Colonna Angelo Michele">Colonna Angelo Michele</option>
                                    <option value="Correggio">Correggio</option>
                                    <option value="Corsini Agostino">Corsini Agostino</option>
                                    <option value="Cortellini Girolamo">Cortellini Girolamo</option>
                                    <option value="Cossa Francesco del">Cossa Francesco del</option>
                                    <option value="Costa Lorenzo">Costa Lorenzo</option>
                                    <option value="da Bologna Giovanni">da Bologna Giovanni</option>
                                    <option value="Da Pisa Nicola">Da Pisa Nicola</option>
                                    <option value="Da Vinci Leonardo">Da Vinci Leonardo</option>
                                    <option value="Dall'Arca Nicolò">Dall'Arca Nicolò</option>
                                    <option value="De Rossi Properzia">De Rossi Properzia</option>
                                    <option value="del Cossa Francesco">del Cossa Francesco</option>
                                    <option value="Del Sarto Andrea">Del Sarto Andrea</option>
                                    <option value="della Quercia Jacopo">della Quercia Jacopo</option>
                                    <option value="Dell'Abate Nicolò">Dell'Abate Nicolò</option>
                                    <option value="dell'Arca Niccolò">dell'Arca Niccolò</option>
                                    <option value="di Bartolo Andrea">di Bartolo Andrea</option>
                                    <option value="Domenichino (pseudonimo Domenico Zampieri)">Domenichino (pseudonimo Domenico Zampieri)</option>
                                    <option value="Domenichino">Domenichino</option>
                                    <option value="Dürer Albrecht">Dürer Albrecht</option>
                                    <option value="Felice Torelli">Felice Torelli</option>
                                    <option value="Fontana">Fontana</option>
                                    <option value="Formigini">Formigini</option>
                                    <option value="Francia Francesco">Francia Francesco</option>
                                    <option value="Francia Jacopo">Francia Jacopo</option>
                                    <option value="Gandolfi Gaetano">Gandolfi Gaetano</option>
                                    <option value="Garofalo">Garofalo</option>
                                    <option value="Gessi Francesco">Gessi Francesco</option>
                                    <option value="Giambologna">Giambologna</option>
                                    <option value="Giordano Luca">Giordano Luca</option>
                                    <option value="Giovanni Putti">Giovanni Putti</option>
                                    <option value="Graziani Ercole">Graziani Ercole</option>
                                    <option value="Guercino">Guercino</option>
                                    <option value="Innocenzo da Imola">Innocenzo da Imola</option>
                                    <option value="Jacopo della Guercia">Jacopo della Guercia</option>
                                    <option value="Jacopo della Quercia">Jacopo della Quercia</option>
                                    <option value="Jacopo Negretti detto Palma il Vecchio">Jacopo Negretti detto Palma il Vecchio</option>
                                    <option value="Jarmorini Giuseppe">Jarmorini Giuseppe</option>
                                    <option value="Joseph Grabinski">Joseph Grabinski</option>
                                    <option value="Joshua Reynolds">Joshua Reynolds</option>
                                    <option value="Lanfranco Giovanni">Lanfranco Giovanni</option>
                                    <option value="Lauretti Tommaso">Lauretti Tommaso</option>
                                    <option value="Lelli Ercole">Lelli Ercole</option>
                                    <option value="Leonello Spada">Leonello Spada</option>
                                    <option value="Levanti Antonio">Levanti Antonio</option>
                                    <option value="Lippi Filippo">Lippi Filippo</option>
                                    <option value="Lippo Dalmasio">Lippo Dalmasio</option>
                                    <option value="Lombardi Alfonso">Lombardi Alfonso</option>
                                    <option value="Lucio Massari">Lucio Massari</option>
                                    <option value="Ludovico Carracci">Ludovico Carracci</option>
                                    <option value="Manfredi Emilio">Manfredi Emilio</option>
                                    <option value="Manzolini Giovanni">Manzolini Giovanni</option>
                                    <option value="marcantonio franceschini">marcantonio franceschini</option>
                                    <option value="Martinelli Vicente">Martinelli Vicente</option>
                                    <option value="Martini Giovanni Battista">Martini Giovanni Battista</option>
                                    <option value="Mastelletta">Mastelletta</option>
                                    <option value="Mazenta">Mazenta</option>
                                    <option value="Menganti Alessandro">Menganti Alessandro</option>
                                    <option value="Mengazzino">Mengazzino</option>
                                    <option value="Minozzi Innocenzio Flaminio">Minozzi Innocenzio Flaminio</option>
                                    <option value="Morandi Manzolini Anna">Morandi Manzolini Anna</option>
                                    <option value="Muratori Angela Teresa">Muratori Angela Teresa</option>
                                    <option value="Nerio Malvezzi">Nerio Malvezzi</option>
                                    <option value="Nicola da Pisa">Nicola da Pisa</option>
                                    <option value="Oderisi da Gubbio">Oderisi da Gubbio</option>
                                    <option value="Palladio">Palladio</option>
                                    <option value="Pannolini Francesco">Pannolini Francesco</option>
                                    <option value="Parmigianino">Parmigianino</option>
                                    <option value="Pasinelli Lorenzo">Pasinelli Lorenzo</option>
                                    <option value="Pellegrino Tibaldi">Pellegrino Tibaldi</option>
                                    <option value="Perugino">Perugino</option>
                                    <option value="Pietro Giordani">Pietro Giordani</option>
                                    <option value="Pio' Angelo Gabriello">Pio' Angelo Gabriello</option>
                                    <option value="Piò Domenico">Piò Domenico</option>
                                    <option value="Pisano Nicola">Pisano Nicola</option>
                                    <option value="Primaticcio Francesco">Primaticcio Francesco</option>
                                    <option value="Procaccini Ercole il Vecchio">Procaccini Ercole il Vecchio</option>
                                    <option value="Properzia de Rossi">Properzia de Rossi</option>
                                    <option value="Raffaello">Raffaello</option>
                                    <option value="Ramenghi Giovanni Battista">Ramenghi Giovanni Battista</option>
                                    <option value="Reni Guido">Reni Guido</option>
                                    <option value="Righetti Mario">Righetti Mario</option>
                                    <option value="Romano Giulio">Romano Giulio</option>
                                    <option value="Rosa Salvatore">Rosa Salvatore</option>
                                    <option value="Rosaspina Francesco">Rosaspina Francesco</option>
                                    <option value="Rubens">Rubens</option>
                                    <option value="Sabatini Lorenzo">Sabatini Lorenzo</option>
                                    <option value="Sansovino">Sansovino</option>
                                    <option value="Sanzio Raffaello">Sanzio Raffaello</option>
                                    <option value="Scuola Bolognese">Scuola Bolognese</option>
                                    <option value="Sirani Elisabetta">Sirani Elisabetta</option>
                                    <option value="Sirani">Sirani</option>
                                    <option value="Spada Lionello">Spada Lionello</option>
                                    <option value="Tadolini Francesco">Tadolini Francesco</option>
                                    <option value="Tadolini Petronio">Tadolini Petronio</option>
                                    <option value="Tassoni Alessandro">Tassoni Alessandro</option>
                                    <option value="Terribilia">Terribilia</option>
                                    <option value="Tiarini Alessandro">Tiarini Alessandro</option>
                                    <option value="Tisio Benvenuto">Tisio Benvenuto</option>
                                    <option value="Tiziano">Tiziano</option>
                                    <option value="Torregiani Alfonso">Torregiani Alfonso</option>
                                    <option value="Triachini Bartolomeo">Triachini Bartolomeo</option>
                                    <option value="Tribolo">Tribolo</option>
                                    <option value="Tubertini Giuseppe">Tubertini Giuseppe</option>
                                    <option value="Van Dyck">Van Dyck</option>
                                    <option value="Venturoli Angelo">Venturoli Angelo</option>
                                    <option value="Viani Domenico">Viani Domenico</option>
                                    <option value="Zanotti Davide">Zanotti Davide</option>
                                </Form.Select>
                                <Form.Select
                                    value={selectedCity}
                                    onChange={(event) => setSelectedCity(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_cities')}</option>
                                    <option value="Bazzano">Bazzano</option>
                                    <option value="Bologna descrizione">Bologna descrizione</option>
                                    <option value="Bologna Etrusca">Bologna Etrusca</option>
                                    <option value="Bologna Forcelli">Bologna Forcelli</option>
                                    <option value="Bologna topografia">Bologna topografia</option>
                                    <option value="Bologna">Bologna</option>
                                    <option value="Casalecchio">Casalecchio</option>
                                    <option value="Castelfranco">Castelfranco</option>
                                    <option value="Ferrara">Ferrara</option>
                                    <option value="Forlì">Forlì</option>
                                    <option value="Loiano">Loiano</option>
                                    <option value="Malalbergo">Malalbergo</option>
                                    <option value="Modena">Modena</option>
                                    <option value="Parma">Parma</option>
                                    <option value="Pianoro">Pianoro</option>
                                    <option value="Pietramala">Pietramala</option>
                                    <option value="Pistoia">Pistoia</option>
                                    <option value="Porretta">Porretta</option>
                                    <option value="Ravenna">Ravenna</option>
                                    <option value="Valsamoggia">Valsamoggia</option>
                                    <option value="Zola Predosa">Zola Predosa</option>
                                </Form.Select>
                                <Form.Select
                                    value={selectedNature}
                                    onChange={(event) => setSelectedNature(event.target.value)}
                                >
                                    <option value="">All Nature</option>
                                    <option value="Allevamenti">Allevamenti</option>
                                    <option value="Appennino">Appennino</option>
                                    <option value="Baco da seta">Baco da seta</option>
                                    <option value="Campagna">Campagna</option>
                                    <option value="Collina">Collina</option>
                                    <option value="Coltivazioni">Coltivazioni</option>
                                    <option value="Fenomeni naturalistici">Fenomeni naturalistici</option>
                                    <option value="Fiumi">Fiumi</option>
                                    <option value="Montagna">Montagna</option>
                                    <option value="Monte Paderno">Monte Paderno</option>
                                    <option value="Natura">Natura</option>
                                    <option value="Parco di Monte Paderno">Parco di Monte Paderno</option>
                                    <option value="Piante">Piante</option>
                                    <option value="Pianura">Pianura</option>
                                </Form.Select>
                                <Form.Select
                                    value={selectedTheme}
                                    onChange={(event) => setSelectedTheme(event.target.value)}
                                >
                                    <option value="">All Themes</option>
                                    <option value="Arte Musicale">Arte Musicale</option>
                                    <option value="Cibo">Cibo</option>
                                    <option value="Cittadini di Bologna">Cittadini di Bologna</option>
                                    <option value="Congresso">Congresso</option>
                                    <option value="Di Culto - Basilica di San Paolo Maggiore">Di Culto - Basilica di San Paolo Maggiore</option>
                                    <option value="Donna">Donna</option>
                                    <option value="Evento">Evento</option>
                                    <option value="Industria">Industria</option>
                                    <option value="Persone">Persone</option>
                                    <option value="Studenti">Studenti</option>
                                    <option value="Università Docenti">Università Docenti</option>
                                    <option value="Università">Università</option>
                                    <option value="Usi">Usi</option>

                                </Form.Select>
                                <Form.Select
                                    value={selectedArtwork}
                                    onChange={(event) => setSelectedArtwork(event.target.value)}
                                >
                                    <option value="">All Artworks</option>
                                    <option value="Architettura - Architettura">Architettura - Architettura</option>
                                    <option value="Architettura - Arco">Architettura - Arco</option>
                                    <option value="Architettura - Bagni di Mario">Architettura - Bagni di Mario</option>
                                    <option value="Architettura - Campanile">Architettura - Campanile</option>
                                    <option value="Architettura - Capitello">Architettura - Capitello</option>
                                    <option value="Architettura - Cimitero">Architettura - Cimitero</option>
                                    <option value="Architettura - Colonna dell'Immacolata">Architettura - Colonna dell'Immacolata</option>
                                    <option value="Architettura - Colonna di San Domenico">Architettura - Colonna di San Domenico</option>
                                    <option value="Architettura - Colonna">Architettura - Colonna</option>
                                    <option value="Architettura - Cornice">Architettura - Cornice</option>
                                    <option value="Architettura - Cupola">Architettura - Cupola</option>
                                    <option value="Architettura - Facciata">Architettura - Facciata</option>
                                    <option value="Architettura - Fregio">Architettura - Fregio</option>
                                    <option value="Architettura - Mausoleo">Architettura - Mausoleo</option>
                                    <option value="Architettura - Meridiana">Architettura - Meridiana</option>
                                    <option value="Architettura - Merlatura ghibellina">Architettura - Merlatura ghibellina</option>
                                    <option value="Architettura - Monumento">Architettura - Monumento</option>
                                    <option value="Architettura - Mura">Architettura - Mura</option>
                                    <option value="Architettura - Ordine">Architettura - Ordine</option>
                                    <option value="Architettura - Pilastro">Architettura - Pilastro</option>
                                    <option value="Architettura - Piramide">Architettura - Piramide</option>
                                    <option value="Architettura - Porta Magna">Architettura - Porta Magna</option>
                                    <option value="Architettura - Porta">Architettura - Porta</option>
                                    <option value="Architettura - Portico di San Luca">Architettura - Portico di San Luca</option>
                                    <option value="Architettura - Portico">Architettura - Portico</option>
                                    <option value="Architettura - Sarcofago">Architettura - Sarcofago</option>
                                    <option value="Architettura - Scalinata">Architettura - Scalinata</option>
                                    <option value="Architettura - Soffitto">Architettura - Soffitto</option>
                                    <option value="Architettura - Vetrata">Architettura - Vetrata</option>
                                    <option value="Arti Figurative - Arti Figurative">Arti Figurative - Arti Figurative</option>
                                    <option value="Arti figurative - Decorazione">Arti figurative - Decorazione</option>
                                    <option value="Arti figurative - Immagine Madonna Laureatana">Arti figurative - Immagine Madonna Laureatana</option>
                                    <option value="Bassorilievo - Bassorilievo">Bassorilievo - Bassorilievo</option>
                                    <option value="Colonna - Cippo di Sacerno">Colonna - Cippo di Sacerno</option>
                                    <option value="Coro ligneo - Coro ligneo">Coro ligneo - Coro ligneo</option>
                                    <option value="Dipinto - David con la testa di Golia">Dipinto - David con la testa di Golia</option>
                                    <option value="Dipinto - Dipinto">Dipinto - Dipinto</option>
                                    <option value="Dipinto - Effigie Beata Vergine col Bambino">Dipinto - Effigie Beata Vergine col Bambino</option>
                                    <option value="Dipinto - Estasi di Santa Cecilia">Dipinto - Estasi di Santa Cecilia</option>
                                    <option value="Dipinto - Il Martirio di Sant'Agnese">Dipinto - Il Martirio di Sant'Agnese</option>
                                    <option value="Dipinto - Madonna Con Bambino In Trono">Dipinto - Madonna Con Bambino In Trono</option>
                                    <option value="Dipinto - Madonna del Rosario">Dipinto - Madonna del Rosario</option>
                                    <option value="Dipinto - Morte di San Giuseppe">Dipinto - Morte di San Giuseppe</option>
                                    <option value="Dipinto - San Francesco">Dipinto - San Francesco</option>
                                    <option value="Dipinto - San Giorgio e il drago">Dipinto - San Giorgio e il drago</option>
                                    <option value="Dipinto - San Giovanni Battista si congeda dal padre Zaccaria">Dipinto - San Giovanni Battista si congeda dal padre Zaccaria</option>
                                    <option value="Dipinto - San Pietro consacra sant'Apollinare">Dipinto - San Pietro consacra sant'Apollinare</option>
                                    <option value="Dipinto - Sansone vittorioso">Dipinto - Sansone vittorioso</option>
                                    <option value="Dipinto - Santa Cecilia">Dipinto - Santa Cecilia</option>
                                    <option value="Dipinto - Strage degli innocenti">Dipinto - Strage degli innocenti</option>
                                    <option value="Dipinto - Trasfigurazione di Gesù Cristo">Dipinto - Trasfigurazione di Gesù Cristo</option>
                                    <option value="Dipinto - Vestizione di San Guglielmo">Dipinto - Vestizione di San Guglielmo</option>
                                    <option value="Fontana del Gigante">Fontana del Gigante</option>
                                    <option value="Grafica - Disegno">Grafica - Disegno</option>
                                    <option value="Grafica - Figura">Grafica - Figura</option>
                                    <option value="Grafica - Graffiti">Grafica - Graffiti</option>
                                    <option value="Grafica - Incisione">Grafica - Incisione</option>
                                    <option value="Grafica - Iscrizione">Grafica - Iscrizione</option>
                                    <option value="Grafica - Stampa">Grafica - Stampa</option>
                                    <option value="Letteratura - Letteratura">Letteratura - Letteratura</option>
                                    <option value="Mosaico - Ritratto di Benedetto XIV">Mosaico - Ritratto di Benedetto XIV</option>
                                    <option value="Pittura - Affresco">Pittura - Affresco</option>
                                    <option value="Pittura - Annunciazione">Pittura - Annunciazione</option>
                                    <option value="Pittura - Ascensione">Pittura - Ascensione</option>
                                    <option value="Pittura - Assunzione">Pittura - Assunzione</option>
                                    <option value="Pittura - Battesimo">Pittura - Battesimo</option>
                                    <option value="Pittura - Collezione">Pittura - Collezione</option>
                                    <option value="Pittura - Cristo">Pittura - Cristo</option>
                                    <option value="Pittura - Crocifissione">Pittura - Crocifissione</option>
                                    <option value="Pittura - Estasi">Pittura - Estasi</option>
                                    <option value="Pittura - Figura">Pittura - Figura</option>
                                    <option value="Pittura - Immacolata">Pittura - Immacolata</option>
                                    <option value="Pittura - Madonna">Pittura - Madonna</option>
                                    <option value="Pittura - Martirio">Pittura - Martirio</option>
                                    <option value="Pittura - Morte">Pittura - Morte</option>
                                    <option value="Pittura - Nascita">Pittura - Nascita</option>
                                    <option value="Pittura - Nozze">Pittura - Nozze</option>
                                    <option value="Pittura - Pittura">Pittura - Pittura</option>
                                    <option value="Pittura - Ritratto">Pittura - Ritratto</option>
                                    <option value="Pittura - Santi">Pittura - Santi</option>
                                    <option value="Pittura - Soggetti Biblici">Pittura - Soggetti Biblici</option>
                                    <option value="Pittura - Soggetti Pagani">Pittura - Soggetti Pagani</option>
                                    <option value="Pittura - Trasfigurazione">Pittura - Trasfigurazione</option>
                                    <option value="Pittura - Trinità">Pittura - Trinità</option>
                                    <option value="Pittura - Vergine">Pittura - Vergine</option>
                                    <option value="Pittuta - Mosaico">Pittuta - Mosaico</option>
                                    <option value="Scultura - Animale">Scultura - Animale</option>
                                    <option value="Scultura - Busto">Scultura - Busto</option>
                                    <option value="Scultura - Cera anatomica">Scultura - Cera anatomica</option>
                                    <option value="Scultura - Cera">Scultura - Cera</option>
                                    <option value="Scultura - Decapitazione Di San Paolo">Scultura - Decapitazione Di San Paolo</option>
                                    <option value="Scultura - Ercole">Scultura - Ercole</option>
                                    <option value="Scultura - Figura">Scultura - Figura</option>
                                    <option value="Scultura - Gesso">Scultura - Gesso</option>
                                    <option value="Scultura - Legno">Scultura - Legno</option>
                                    <option value="Scultura - Madonna">Scultura - Madonna</option>
                                    <option value="Scultura - Modello">Scultura - Modello</option>
                                    <option value="Scultura - Monumento a Giosuè Carducci">Scultura - Monumento a Giosuè Carducci</option>
                                    <option value="Scultura - Nettuno">Scultura - Nettuno</option>
                                    <option value="Scultura - Scultura">Scultura - Scultura</option>
                                    <option value="Scultura - Testa">Scultura - Testa</option>
                                    <option value="Statua - Adorazione dei Magi">Statua - Adorazione dei Magi</option>
                                    <option value="Statua - Decapitazione di San Paolo">Statua - Decapitazione di San Paolo</option>
                                    <option value="Statua - Gallo di S.Pietro">Statua - Gallo di S.Pietro</option>
                                    <option value="Statua - Gregorio XIII">Statua - Gregorio XIII</option>
                                    <option value="Statua - San Domenico">Statua - San Domenico</option>
                                    <option value="Statua - San Petronio">Statua - San Petronio</option>
                                    <option value="Statua - Statua">Statua - Statua</option>
                                    <option value="Tomba - Arca Di San Domenico">Tomba - Arca Di San Domenico</option>
                                    <option value="Tomba - Ludovico Boccadiferro">Tomba - Ludovico Boccadiferro</option>
                                    <option value="Tomba - Tomba">Tomba - Tomba</option>
                                </Form.Select>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {/* ALTERNATIVE INPUT GROUP WITH DROPDOWN
                <InputGroup className="mb-3" type="text"
                    placeholder="Search...">
                
                    <Form.Control aria-label="Text input with dropdown button" />

                    <DropdownButton
                    variant="secondary"
                    title={<FaIcons.FaFilter/>}
                    id="input-group-dropdown-2"
                    align="end"
                    >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                */}
        
                {/* FILTERS */}
                <section className="filters">
                    <Row>
                        <Col className='col-3'>
                        {/*Language*/}
                        <Form.Select
                            value={selectedLanguage}
                            onChange={(event) => setSelectedLanguage(event.target.value)}
                        >
                            <option value="">{t('corpus.all_lang')}</option>
                            <option value="English">{t('en')}</option>
                            <option value="French">{t('fr')}</option>
                            <option value="Spanish">{t('es')}</option>
                            <option value="Russian">{t('ru')}</option>
                        </Form.Select>
                        </Col>
                        {/*PlaceType*/}
                        <Col className='col-3'>
                        <Form.Select
                            value={selectedPlaceType}
                            onChange={(event) => setSelectedPlaceType(event.target.value)}
                        >
                            <option value="">{t('corpus.all_place')}</option>
                            <option value="Accademie - Accademia Carracci">Accademie - Accademia Carracci</option>
                            <option value="Accademie - Accademia Clementina">Accademie - Accademia Clementina</option>
                            <option value="Accademie - Accademia delle Belle Arti">Accademie - Accademia delle Belle Arti</option>
                            <option value="Accademie - Accademia delle Scienze Istituto di Bologna">Accademie - Accademia delle Scienze Istituto di Bologna</option>
                            <option value="Accademie - Accademia">Accademie - Accademia</option>
                            <option value="All'Aperto - All'aperto">All'Aperto - All'aperto</option>
                            <option value="All'Aperto - Castelfranco Emilia">All'Aperto - Castelfranco Emilia</option>
                            <option value="All'aperto - Certosa Cimitero">All'aperto - Certosa Cimitero</option>
                            <option value="All'Aperto - Certosa">All'Aperto - Certosa</option>
                            <option value="All'Aperto - Corte Isolani">All'Aperto - Corte Isolani</option>
                            <option value="All'Aperto - Cortile">All'Aperto - Cortile</option>
                            <option value="All'Aperto - Fiume">All'Aperto - Fiume</option>
                            <option value="All'Aperto - Giardini Margherita">All'Aperto - Giardini Margherita</option>
                            <option value="All'Aperto - Giardino Parco Urbano">All'Aperto - Giardino Parco Urbano</option>
                            <option value="All'Aperto - Monte La Guardia">All'Aperto - Monte La Guardia</option>
                            <option value="All'Aperto - Orto Botanico">All'Aperto - Orto Botanico</option>
                            <option value="All'Aperto - Paesaggio">All'Aperto - Paesaggio</option>
                            <option value="All'aperto - Parco della Montagnola">All'aperto - Parco della Montagnola</option>
                            <option value="All'Aperto - Pugliole San Bernardino">All'Aperto - Pugliole San Bernardino</option>
                            <option value="All'Aperto - Strade">All'Aperto - Strade</option>
                            <option value="All'Aperto - Terme">All'Aperto - Terme</option>
                            <option value="All'Aperto - Torrente Samoggia">All'Aperto - Torrente Samoggia</option>
                            <option value="All'Aperto - Torrente Savena">All'Aperto - Torrente Savena</option>
                            <option value="All'Aperto - Torrente">All'Aperto - Torrente</option>
                            <option value="Archivi - Archivio">Archivi - Archivio</option>
                            <option value="Biblioteche - Biblioteca Convento San Salvatore">Biblioteche - Biblioteca Convento San Salvatore</option>
                            <option value="Biblioteche - Biblioteca Universitaria">Biblioteche - Biblioteca Universitaria</option>
                            <option value="Biblioteche - Biblioteca">Biblioteche - Biblioteca</option>
                            <option value="Castelli - Castello Estense">Castelli - Castello Estense</option>
                            <option value="Castelli - Castello">Castelli - Castello</option>
                            <option value="Di Culto - Basilica di San Bartolomeo e Gaetano">Di Culto - Basilica di San Bartolomeo e Gaetano</option>
                            <option value="Di Culto - Basilica Di San Domenico">Di Culto - Basilica Di San Domenico</option>
                            <option value="Di Culto - Basilica Di San Francesco">Di Culto - Basilica Di San Francesco</option>
                            <option value="Di Culto - Basilica di San Giacomo Maggiore">Di Culto - Basilica di San Giacomo Maggiore</option>
                            <option value="Di Culto - Basilica Di San Petronio">Di Culto - Basilica Di San Petronio</option>
                            <option value="Di Culto - Basilica Di Santo Stefano">Di Culto - Basilica Di Santo Stefano</option>
                            <option value="Di Culto - Basilica San Domenico">Di Culto - Basilica San Domenico</option>
                            <option value="Di culto - Basilica San Giacomo Maggiore">Di culto - Basilica San Giacomo Maggiore</option>
                            <option value="Di Culto - Basilica San Petronio">Di Culto - Basilica San Petronio</option>
                            <option value="Di culto - Basilica Santa Maria Dei Servi">Di culto - Basilica Santa Maria Dei Servi</option>
                            <option value="Di Culto - Basilica">Di Culto - Basilica</option>
                            <option value="Di Culto - Cappella">Di Culto - Cappella</option>
                            <option value="Di Culto - Cattedrale di San Pietro">Di Culto - Cattedrale di San Pietro</option>
                            <option value="Di Culto - Cattedrale">Di Culto - Cattedrale</option>
                            <option value="Di culto - Chieda della Madonna di Galliera">Di culto - Chieda della Madonna di Galliera</option>
                            <option value="Di Culto - Chiesa dei Filippini">Di Culto - Chiesa dei Filippini</option>
                            <option value="Di Culto - Chiesa dei Servi">Di Culto - Chiesa dei Servi</option>
                            <option value="Di Culto - Chiesa Del Corpus Domini">Di Culto - Chiesa Del Corpus Domini</option>
                            <option value="Di Culto - Chiesa Del Sacro Cuore Di Gesù">Di Culto - Chiesa Del Sacro Cuore Di Gesù</option>
                            <option value="Di Culto - Chiesa della Madonna di Galliera">Di Culto - Chiesa della Madonna di Galliera</option>
                            <option value="Di Culto - Chiesa di San Giovanni in Monte">Di Culto - Chiesa di San Giovanni in Monte</option>
                            <option value="Di Culto - Chiesa di San Girolamo della Certosa">Di Culto - Chiesa di San Girolamo della Certosa</option>
                            <option value="Di Culto - Chiesa di San Salvatore">Di Culto - Chiesa di San Salvatore</option>
                            <option value="Di Culto - Chiesa di Santa Caterina">Di Culto - Chiesa di Santa Caterina</option>
                            <option value="Di Culto - Chiesa di Santa Cecilia">Di Culto - Chiesa di Santa Cecilia</option>
                            <option value="Di Culto - Chiesa Di Sant'Agnese">Di Culto - Chiesa Di Sant'Agnese</option>
                            <option value="Di Culto - Chiesa e Monastero di Santa Margherita">Di Culto - Chiesa e Monastero di Santa Margherita</option>
                            <option value="Di Culto - Chiesa Madonna Del Braccano">Di Culto - Chiesa Madonna Del Braccano</option>
                            <option value="Di Culto - Chiesa Ortodossa Tutti i Santi">Di Culto - Chiesa Ortodossa Tutti i Santi</option>
                            <option value="Di Culto - Chiesa San Gregorio dei Mendicanti">Di Culto - Chiesa San Gregorio dei Mendicanti</option>
                            <option value="Di Culto - Chiesa San Martino">Di Culto - Chiesa San Martino</option>
                            <option value="Di Culto - chiesa">Di Culto - chiesa</option>
                            <option value="Di Culto - Chiese Cattedrali Cappelle">Di Culto - Chiese Cattedrali Cappelle</option>
                            <option value="Di culto - Complesso di Santa Cristina della Fondazza">Di culto - Complesso di Santa Cristina della Fondazza</option>
                            <option value="Di Culto - Convento delle Monache Domenicane di Sant'Agnese">Di Culto - Convento delle Monache Domenicane di Sant'Agnese</option>
                            <option value="Di Culto - Convento di San Domenico Biblioteca">Di Culto - Convento di San Domenico Biblioteca</option>
                            <option value="Di Culto - Convento di San Domenico">Di Culto - Convento di San Domenico</option>
                            <option value="Di Culto - Convento">Di Culto - Convento</option>
                            <option value="Di Culto - Duomo Di Modena">Di Culto - Duomo Di Modena</option>
                            <option value="Di Culto - Monastero Agostiniane di Gesù e Maria">Di Culto - Monastero Agostiniane di Gesù e Maria</option>
                            <option value="Di Culto - Monastero San Michele in Bosco Chiostro">Di Culto - Monastero San Michele in Bosco Chiostro</option>
                            <option value="Di Culto - Monastero San Michele in Bosco Corridoio">Di Culto - Monastero San Michele in Bosco Corridoio</option>
                            <option value="Di Culto - Monastero San Michele in Bosco">Di Culto - Monastero San Michele in Bosco</option>
                            <option value="Di Culto - Monastero">Di Culto - Monastero</option>
                            <option value="Di Culto - Oratorio">Di Culto - Oratorio</option>
                            <option value="Di Culto - San Petronio Meridiana">Di Culto - San Petronio Meridiana</option>
                            <option value="Di Culto - San Petronio">Di Culto - San Petronio</option>
                            <option value="Di Culto - Santuario Di San Luca">Di Culto - Santuario Di San Luca</option>
                            <option value="Di Culto - Santuario Madonna di Loreto in Santo Stefano">Di Culto - Santuario Madonna di Loreto in Santo Stefano</option>
                            <option value="Di Culto - Santuario">Di Culto - Santuario</option>
                            <option value="Di Studio - Auditorio">Di Studio - Auditorio</option>
                            <option value="Di Studio - Collegio dei Fiamminghi">Di Studio - Collegio dei Fiamminghi</option>
                            <option value="Di Studio - Collegio di Spagna">Di Studio - Collegio di Spagna</option>
                            <option value="Di Studio - Collegio">Di Studio - Collegio</option>
                            <option value="Di studio - Conservatorio">Di studio - Conservatorio</option>
                            <option value="Di Studio - Giardini Botanici Istituto">Di Studio - Giardini Botanici Istituto</option>
                            <option value="Di Studio - Istituto">Di Studio - Istituto</option>
                            <option value="Di Studio - Laboratorio">Di Studio - Laboratorio</option>
                            <option value="Di Studio - Sala Di Lettura">Di Studio - Sala Di Lettura</option>
                            <option value="Di Studio - Sala">Di Studio - Sala</option>
                            <option value="Di Studio - Scuola di Anatomia Istituto">Di Studio - Scuola di Anatomia Istituto</option>
                            <option value="Di Studio - Scuola di Chimica Istituto">Di Studio - Scuola di Chimica Istituto</option>
                            <option value="Di Studio - Scuola di Filosofia Istituto">Di Studio - Scuola di Filosofia Istituto</option>
                            <option value="Di Studio - Teatro Istituto">Di Studio - Teatro Istituto</option>
                            <option value="Di Studio - Università">Di Studio - Università</option>
                            <option value="Di Sudio - Libreria Istituto di Bologna">Di Sudio - Libreria Istituto di Bologna</option>
                            <option value="Edifici - Albergati Zola Predosa">Edifici - Albergati Zola Predosa</option>
                            <option value="Edifici - Albergo del Pellegrino">Edifici - Albergo del Pellegrino</option>
                            <option value="Edifici - Palazzo Albergati">Edifici - Palazzo Albergati</option>
                            <option value="Edifici - Palazzo Bentivoglio">Edifici - Palazzo Bentivoglio</option>
                            <option value="Edifici - Palazzo Bolognini">Edifici - Palazzo Bolognini</option>
                            <option value="Edifici - Palazzo Bonfiglioli">Edifici - Palazzo Bonfiglioli</option>
                            <option value="Edifici - Palazzo d'Accursio">Edifici - Palazzo d'Accursio</option>
                            <option value="Edifici - Palazzo del Comune">Edifici - Palazzo del Comune</option>
                            <option value="Edifici - Palazzo Magnani">Edifici - Palazzo Magnani</option>
                            <option value="Edifici - Palazzo Marsigli">Edifici - Palazzo Marsigli</option>
                            <option value="Edifici - Palazzo Re Enzo">Edifici - Palazzo Re Enzo</option>
                            <option value="Edifici - Palazzo Sampieri">Edifici - Palazzo Sampieri</option>
                            <option value="Edifici - Palazzo Sanuti Bevilacqua degli Ariosti">Edifici - Palazzo Sanuti Bevilacqua degli Ariosti</option>
                            <option value="Edifici - Palazzo Tanari">Edifici - Palazzo Tanari</option>
                            <option value="Edifici - Palazzo Zambeccari">Edifici - Palazzo Zambeccari</option>
                            <option value="Edifici - Palazzo Zampieri">Edifici - Palazzo Zampieri</option>
                            <option value="Edifici - Palazzo">Edifici - Palazzo</option>
                            <option value="Edifici - Palazzo_dAccursio">Edifici - Palazzo_dAccursio</option>
                            <option value="Edifici - Sferisterio">Edifici - Sferisterio</option>
                            <option value="Ferrovie - Stazione di Bologna">Ferrovie - Stazione di Bologna</option>
                            <option value="Ferrovie - Stazione">Ferrovie - Stazione</option>
                            <option value="Fiume - Aposa">Fiume - Aposa</option>
                            <option value="Fiume - Ghironda">Fiume - Ghironda</option>
                            <option value="Fiume - Lavino">Fiume - Lavino</option>
                            <option value="Fiume - Panaro">Fiume - Panaro</option>
                            <option value="Fiume - Po">Fiume - Po</option>
                            <option value="Fiume - Reno">Fiume - Reno</option>
                            <option value="Fiume - Savena">Fiume - Savena</option>
                            <option value="Fiumi - Canale">Fiumi - Canale</option>
                            <option value="Fontane - Fontana Nettuno">Fontane - Fontana Nettuno</option>
                            <option value="Istituto Ortopedico">Istituto Ortopedico</option>
                            <option value="Mura di Bologna - Mura">Mura di Bologna - Mura</option>
                            <option value="Mura di Bologna - Porta Castiglione">Mura di Bologna - Porta Castiglione</option>
                            <option value="Mura di Bologna - Porta Galliera">Mura di Bologna - Porta Galliera</option>
                            <option value="Mura di Bologna - Porta Lame">Mura di Bologna - Porta Lame</option>
                            <option value="Mura di Bologna - Porta Maggiore">Mura di Bologna - Porta Maggiore</option>
                            <option value="Mura di Bologna - Porta Mascarella">Mura di Bologna - Porta Mascarella</option>
                            <option value="Mura di Bologna - Porta San Donato">Mura di Bologna - Porta San Donato</option>
                            <option value="Mura di Bologna - Porta San Felice">Mura di Bologna - Porta San Felice</option>
                            <option value="Mura di Bologna - Porta San Mamolo">Mura di Bologna - Porta San Mamolo</option>
                            <option value="Mura di Bologna - Porta San Vitale">Mura di Bologna - Porta San Vitale</option>
                            <option value="Mura di Bologna - Porta Sant'Isaia">Mura di Bologna - Porta Sant'Isaia</option>
                            <option value="Mura di Bologna - Porta Santo Stefano">Mura di Bologna - Porta Santo Stefano</option>
                            <option value="Mura di Bologna - Porta Saragozza">Mura di Bologna - Porta Saragozza</option>
                            <option value="Musei - Aldrovandiano">Musei - Aldrovandiano</option>
                            <option value="Musei - Anatomia Comparata">Musei - Anatomia Comparata</option>
                            <option value="Musei - Casa Museo Renzo Savini">Musei - Casa Museo Renzo Savini</option>
                            <option value="Musei - Gabinetto">Musei - Gabinetto</option>
                            <option value="Musei - Galleria d'Arte">Musei - Galleria d'Arte</option>
                            <option value="Musei - Geologia">Musei - Geologia</option>
                            <option value="Musei - Giovanni Capellini">Musei - Giovanni Capellini</option>
                            <option value="Musei - Museo Ostetrico">Musei - Museo Ostetrico</option>
                            <option value="Musei - Museo">Musei - Museo</option>
                            <option value="Musei - Palazzo Bonfiglioli">Musei - Palazzo Bonfiglioli</option>
                            <option value="Musei - Palazzo Poggi">Musei - Palazzo Poggi</option>
                            <option value="Musei - Pinacoteca">Musei - Pinacoteca</option>
                            <option value="Musei - Storia Naturale">Musei - Storia Naturale</option>
                            <option value="Musei - Studenti">Musei - Studenti</option>
                            <option value="Musei - Teatro Anatomico">Musei - Teatro Anatomico</option>
                            <option value="Osservatorio - Stazione Di Loiano">Osservatorio - Stazione Di Loiano</option>
                            <option value="Osservatorio Museo - Specola">Osservatorio Museo - Specola</option>
                            <option value="Piazze - Piazza Carducci">Piazze - Piazza Carducci</option>
                            <option value="Piazze - Piazza del Gigante">Piazze - Piazza del Gigante</option>
                            <option value="Piazze - Piazza del Nettuno">Piazze - Piazza del Nettuno</option>
                            <option value="Piazze - Piazza di Porta Ravegnana">Piazze - Piazza di Porta Ravegnana</option>
                            <option value="Piazze - Piazza Duomo">Piazze - Piazza Duomo</option>
                            <option value="Piazze - Piazza Maggiore">Piazze - Piazza Maggiore</option>
                            <option value="Piazze - Piazza Malpighi">Piazze - Piazza Malpighi</option>
                            <option value="Piazze - Piazza San Domenico">Piazze - Piazza San Domenico</option>
                            <option value="Piazze - Piazza">Piazze - Piazza</option>
                            <option value="Portici - Portico">Portici - Portico</option>
                            <option value="Storico Culturale - Accademie">Storico Culturale - Accademie</option>
                            <option value="Storico Culturale - Archiginnasio">Storico Culturale - Archiginnasio</option>
                            <option value="Storico Culturale - CAI Emilia Romagna">Storico Culturale - CAI Emilia Romagna</option>
                            <option value="Storico Culturale - Camera di Commercio">Storico Culturale - Camera di Commercio</option>
                            <option value="Storico Culturale - Cippo di Sacerno">Storico Culturale - Cippo di Sacerno</option>
                            <option value="Storico Culturale - CLUB Domino">Storico Culturale - CLUB Domino</option>
                            <option value="Storico Culturale - Locanda dei Tre Mori">Storico Culturale - Locanda dei Tre Mori</option>
                            <option value="Storico Culturale - Locanda del pellegrino">Storico Culturale - Locanda del pellegrino</option>
                            <option value="Storico Culturale - Palazzo Albergatti">Storico Culturale - Palazzo Albergatti</option>
                            <option value="Storico Culturale - Palazzo Aldrovandi">Storico Culturale - Palazzo Aldrovandi</option>
                            <option value="Storico Culturale - Palazzo Bonfiglioli Rossi">Storico Culturale - Palazzo Bonfiglioli Rossi</option>
                            <option value="Storico Culturale - Palazzo Caprara">Storico Culturale - Palazzo Caprara</option>
                            <option value="Storico Culturale - Palazzo dei Banchi">Storico Culturale - Palazzo dei Banchi</option>
                            <option value="Storico Culturale - Palazzo del Governo">Storico Culturale - Palazzo del Governo</option>
                            <option value="Storico Culturale - Palazzo del Monte">Storico Culturale - Palazzo del Monte</option>
                            <option value="Storico Culturale - Palazzo del Podestà">Storico Culturale - Palazzo del Podestà</option>
                            <option value="Storico Culturale - Palazzo Fantucci">Storico Culturale - Palazzo Fantucci</option>
                            <option value="Storico Culturale - Palazzo Fantuzzi">Storico Culturale - Palazzo Fantuzzi</option>
                            <option value="Storico Culturale - Palazzo Fava">Storico Culturale - Palazzo Fava</option>
                            <option value="Storico Culturale - Palazzo Hercolani">Storico Culturale - Palazzo Hercolani</option>
                            <option value="Storico Culturale - Palazzo Lambertini">Storico Culturale - Palazzo Lambertini</option>
                            <option value="Storico Culturale - Palazzo Magnani">Storico Culturale - Palazzo Magnani</option>
                            <option value="Storico Culturale - Palazzo Malvezzi">Storico Culturale - Palazzo Malvezzi</option>
                            <option value="Storico Culturale - Palazzo Monti poi Salina">Storico Culturale - Palazzo Monti poi Salina</option>
                            <option value="Storico Culturale - Palazzo Pepoli">Storico Culturale - Palazzo Pepoli</option>
                            <option value="Storico Culturale - Palazzo Ranuzzi">Storico Culturale - Palazzo Ranuzzi</option>
                            <option value="Storico Culturale - Palazzo Sampieri">Storico Culturale - Palazzo Sampieri</option>
                            <option value="Storico Culturale - Palazzo Tanari">Storico Culturale - Palazzo Tanari</option>
                            <option value="Storico Culturale - Palazzo Vizzani">Storico Culturale - Palazzo Vizzani</option>
                            <option value="Storico Culturale - Palazzo Zambeccari">Storico Culturale - Palazzo Zambeccari</option>
                            <option value="Storico Culturale - Torre Ghirlandina">Storico Culturale - Torre Ghirlandina</option>
                            <option value="Storico Culturale - Torre">Storico Culturale - Torre</option>
                            <option value="Strade - Via Emilia">Strade - Via Emilia</option>
                            <option value="Strade - Via Miola">Strade - Via Miola</option>
                            <option value="Teatri - Arena del Sole">Teatri - Arena del Sole</option>
                            <option value="Teatri - Comunale">Teatri - Comunale</option>
                            <option value="Teatri - Teatro Comunale">Teatri - Teatro Comunale</option>
                            <option value="Teatri - Teatro Farnese">Teatri - Teatro Farnese</option>
                            <option value="Teatri - Teatro">Teatri - Teatro</option>
                            <option value="Torri - Asinelli">Torri - Asinelli</option>
                            <option value="Torri - Garisenda">Torri - Garisenda</option>
                            <option value="Torri - Torri">Torri - Torri</option>
                            <option value="Zona Universitaria - Campus">Zona Universitaria - Campus</option>
                            <option value="Zona Universitaria - Orto botanico">Zona Universitaria - Orto botanico</option>
                            <option value="Zona Universitaria - Via Zamboni">Zona Universitaria - Via Zamboni</option>
                            <option value="Zona Unviersitaria - Università">Zona Unviersitaria - Università</option>
                        </Form.Select>
                        </Col>
                        {/*Author*/}
                        <Col className='col-3'>
                        <Form.Select
                            value={selectedAuthor}
                            onChange={(event) => setSelectedAuthor(event.target.value)}
                        >
                            <option value="">{t('corpus.all_authors')}</option>
                            <option value="Adam Walker">Adam Walker</option>
                            <option value="Addison, Joseph">Addison, Joseph</option>
                            <option value="Alarcón, Pedro A. de">Alarcón, Pedro A. de</option>
                            <option value="Andrés, Juan">Andrés, Juan</option>
                            <option value="Annenkov Pavel Vasilievič">Annenkov Pavel Vasilievič</option>
                            <option value="Archimandrit Avgustin (Nikitin)">Archimandrit Avgustin (Nikitin)</option>
                            <option value="Auteur anonyme">Auteur anonyme</option>
                            <option value="Baena, Clemente A. de">Baena, Clemente A. de</option>
                            <option value="Balaguer, Víctor">Balaguer, Víctor</option>
                            <option value="Baroja, Pío">Baroja, Pío</option>
                            <option value="Barthélemy, Jean-Jacques">Barthélemy, Jean-Jacques</option>
                            <option value="Bazin, René">Bazin, René</option>
                            <option value="Beaugrand, Honoré">Beaugrand, Honoré</option>
                            <option value="Bérenger, Jean-Pierre">Bérenger, Jean-Pierre</option>
                            <option value="Bergeret de Grancourt, Pierre Jacques et Fragonard, Jean Honoré">Bergeret de Grancourt, Pierre Jacques et Fragonard, Jean Honoré</option>
                            <option value="Beste, Henry Digby">Beste, Henry Digby</option>
                            <option value="Binos, Marie-Dominique de">Binos, Marie-Dominique de</option>
                            <option value="Blasco Ibáñez, Vicente">Blasco Ibáñez, Vicente</option>
                            <option value="Boccage, Anne-Marie Lepage Fiquet du">Boccage, Anne-Marie Lepage Fiquet du</option>
                            <option value="Bolonskij Universitet, Enciklopedičeskij slovar’ Brokgauz e Efron">Bolonskij Universitet, Enciklopedičeskij slovar’ Brokgauz e Efron</option>
                            <option value="Borrajo y Herrera, Pedro; Giner de los Ríos, Hermenegildo de">Borrajo y Herrera, Pedro; Giner de los Ríos, Hermenegildo de</option>
                            <option value="Boyle, John">Boyle, John</option>
                            <option value="Breval, John Durant">Breval, John Durant</option>
                            <option value="Brosses, Charles de">Brosses, Charles de</option>
                            <option value="Browning, Robert">Browning, Robert</option>
                            <option value="Burgos, Carmen de">Burgos, Carmen de</option>
                            <option value="Burton, Richard Francis">Burton, Richard Francis</option>
                            <option value="Cabrol, Élie">Cabrol, Élie</option>
                            <option value="Campano, Lorenzo">Campano, Lorenzo</option>
                            <option value="Camus, Renaud">Camus, Renaud</option>
                            <option value="Carne, John">Carne, John</option>
                            <option value="Castelar, Emilio">Castelar, Emilio</option>
                            <option value="Caylus, Anne Claude Philippe de">Caylus, Anne Claude Philippe de</option>
                            <option value="Cervantes Saavedra, Miguel de">Cervantes Saavedra, Miguel de</option>
                            <option value="Chancel, A.D.">Chancel, A.D.</option>
                            <option value="Chauveau, M. Pierre">Chauveau, M. Pierre</option>
                            <option value="Cochin, Charles-Nicolas et Michel, Christian">Cochin, Charles-Nicolas et Michel, Christian</option>
                            <option value="Colston Marianne">Colston Marianne</option>
                            <option value="Cotteau, Gustave">Cotteau, Gustave</option>
                            <option value="Couture, Jean-Baptiste">Couture, Jean-Baptiste</option>
                            <option value="Coyer, Gabriel-François">Coyer, Gabriel-François</option>
                            <option value="Cruz y Bahamonde, Nicolás de la">Cruz y Bahamonde, Nicolás de la</option>
                            <option value="Cvetaev Ivan Vladimirovič, Nečaev-Mal’cov Jurij Stepanovič">Cvetaev Ivan Vladimirovič, Nečaev-Mal’cov Jurij Stepanovič</option>
                            <option value="De Feller, François Xavier">De Feller, François Xavier</option>
                            <option value="De Sain, Édouard">De Sain, Édouard</option>
                            <option value="De Staël Holstein, Madame">De Staël Holstein, Madame</option>
                            <option value="de Villalón, Cristóbal">de Villalón, Cristóbal</option>
                            <option value="Dickens, Charles">Dickens, Charles</option>
                            <option value="Dobroljubov Nikolaj Aleksandrovič">Dobroljubov Nikolaj Aleksandrovič</option>
                            <option value="Dondel du Faouëdic, Noémie">Dondel du Faouëdic, Noémie</option>
                            <option value="Driou, Alfred">Driou, Alfred</option>
                            <option value="Drummond, Alexander">Drummond, Alexander</option>
                            <option value="Duclos, Charles Pinot">Duclos, Charles Pinot</option>
                            <option value="Ducos, Basile Joseph">Ducos, Basile Joseph</option>
                            <option value="Dunbar, Margaret">Dunbar, Margaret</option>
                            <option value="Dutens, Louis">Dutens, Louis</option>
                            <option value="ǅerali Frančesko, Vai Džan Battista, Malachova Irina Gennad'evna">ǅerali Frančesko, Vai Džan Battista, Malachova Irina Gennad'evna</option>
                            <option value="Elisabeth Craven">Elisabeth Craven</option>
                            <option value="Evelyn John">Evelyn John</option>
                            <option value="Fedina Inessa">Fedina Inessa</option>
                            <option value="Fernández de Moratín, Leandro">Fernández de Moratín, Leandro</option>
                            <option value="Fig’e, Lui">Fig’e, Lui</option>
                            <option value="Figueroa, Á. de, Conde de Romanones">Figueroa, Á. de, Conde de Romanones</option>
                            <option value="Filippov Sergej Nikitič">Filippov Sergej Nikitič</option>
                            <option value="Fontaine, Prosper">Fontaine, Prosper</option>
                            <option value="Fonvizin Denis Ivanovič">Fonvizin Denis Ivanovič</option>
                            <option value="Fréville, Valentin (pseudonyme d'Alfred Driou)">Fréville, Valentin (pseudonyme d'Alfred Driou)</option>
                            <option value="Gercen Aleksandr Ivanovič">Gercen Aleksandr Ivanovič</option>
                            <option value="Glagolev Andrej Gаvrilovič">Glagolev Andrej Gаvrilovič</option>
                            <option value="Goncourt, Jules et Edmond de">Goncourt, Jules et Edmond de</option>
                            <option value="Goudar, Ange">Goudar, Ange</option>
                            <option value="Greč Nikolaj Ivanovič">Greč Nikolaj Ivanovič</option>
                            <option value="Guidi, Jean Baptiste Marie">Guidi, Jean Baptiste Marie</option>
                            <option value="Guillame">Guillame</option>
                            <option value="Gumilev Nikolaj">Gumilev Nikolaj</option>
                            <option value="Guthrie, Arthur">Guthrie, Arthur</option>
                            <option value="Hervey, C.">Hervey, C.</option>
                            <option value="Hiester, John P.">Hiester, John P.</option>
                            <option value="Ideville, Henry d’">Ideville, Henry d’</option>
                            <option value="Iribas y Sánchez, Gregorio de">Iribas y Sánchez, Gregorio de</option>
                            <option value="Italy, by Morgan, Lady (Sydney), Morgan, Thomas Charles, Sir">Italy, by Morgan, Lady (Sydney), Morgan, Thomas Charles, Sir</option>
                            <option value="Janin, Jules">Janin, Jules</option>
                            <option value="John Moore">John Moore</option>
                            <option value="John Owen">John Owen</option>
                            <option value="Jumangulov Vil' Jakubovič">Jumangulov Vil' Jakubovič</option>
                            <option value="Knapp Samuel Lorenzo">Knapp Samuel Lorenzo</option>
                            <option value="La Condamine, Charles-Marie de">La Condamine, Charles-Marie de</option>
                            <option value="La Lande, Jérôme de">La Lande, Jérôme de</option>
                            <option value="La Lande, Jêrome de">La Lande, Jêrome de</option>
                            <option value="La Porte, Joseph de">La Porte, Joseph de</option>
                            <option value="La Roche, J de.">La Roche, J de.</option>
                            <option value="Lagacé, J. B.">Lagacé, J. B.</option>
                            <option value="Lamberg, Maximilian Joseph von">Lamberg, Maximilian Joseph von</option>
                            <option value="Larionova Ekaterina">Larionova Ekaterina</option>
                            <option value="Lasa, José de">Lasa, José de</option>
                            <option value="Lee, Vernon">Lee, Vernon</option>
                            <option value="Lemeševa Ol'ga Alekseevna">Lemeševa Ol'ga Alekseevna</option>
                            <option value="León y Domínguez, José M.">León y Domínguez, José M.</option>
                            <option value="Libri, Guglielmo">Libri, Guglielmo</option>
                            <option value="Lichačev Vasilij">Lichačev Vasilij</option>
                            <option value="López de Ecala y Zubiría, José M.">López de Ecala y Zubiría, José M.</option>
                            <option value="Lord Byron">Lord Byron</option>
                            <option value="Marmottan, Paul">Marmottan, Paul</option>
                            <option value="Massenet, Jules">Massenet, Jules</option>
                            <option value="Monge, José M.">Monge, José M.</option>
                            <option value="Montaigne, Michel de">Montaigne, Michel de</option>
                            <option value="Moraleda y Esteban, Juan">Moraleda y Esteban, Juan</option>
                            <option value="Moyne, Joseph Louis Théodore">Moyne, Joseph Louis Théodore</option>
                            <option value="Mudrov Andrej">Mudrov Andrej</option>
                            <option value="Muratov, Pavel Pavlovič">Muratov, Pavel Pavlovič</option>
                            <option value="Negrín, Ignacio de">Negrín, Ignacio de</option>
                            <option value="Nekhaeva Svetlana">Nekhaeva Svetlana</option>
                            <option value="Nemirovič-Dančenko Vladimir Ivanovič">Nemirovič-Dančenko Vladimir Ivanovič</option>
                            <option value="Niberg Rеjngol'd">Niberg Rеjngol'd</option>
                            <option value="Nikitenko Sofia Aleksandrovna">Nikitenko Sofia Aleksandrovna</option>
                            <option value="Nikogosjan David">Nikogosjan David</option>
                            <option value="Nollet, Jean Antoine">Nollet, Jean Antoine</option>
                            <option value="Owen, John">Owen, John</option>
                            <option value="Paulovič, Konstantin">Paulovič, Konstantin</option>
                            <option value="Pellechet, Jules">Pellechet, Jules</option>
                            <option value="Pérez Galdós, Benito">Pérez Galdós, Benito</option>
                            <option value="Pérez-Villamil, Manuel">Pérez-Villamil, Manuel</option>
                            <option value="Perojo, José del">Perojo, José del</option>
                            <option value="Peter Beckford">Peter Beckford</option>
                            <option value="Pisarev Dmitrij Ivanovič">Pisarev Dmitrij Ivanovič</option>
                            <option value="Plessis, Joseph-Octave">Plessis, Joseph-Octave</option>
                            <option value="Pokrovskij Iosif Alekseevič">Pokrovskij Iosif Alekseevič</option>
                            <option value="Polonceau, Émile">Polonceau, Émile</option>
                            <option value="Prokop’ev Nikolaj, Nazmutdinova Veronika, Nasonov Vladimir">Prokop’ev Nikolaj, Nazmutdinova Veronika, Nasonov Vladimir</option>
                            <option value="Radet, Edmond">Radet, Edmond</option>
                            <option value="Rangoni, Elisabetta (Princesse de Gonzague)">Rangoni, Elisabetta (Princesse de Gonzague)</option>
                            <option value="Reck, Madame de">Reck, Madame de</option>
                            <option value="Rémusat, Charles de">Rémusat, Charles de</option>
                            <option value="Reymond, Marcel">Reymond, Marcel</option>
                            <option value="Riballier, Philibert et Cosson, Cathérine">Riballier, Philibert et Cosson, Cathérine</option>
                            <option value="Ringuet (pseudonyme de Philippe Panneton)">Ringuet (pseudonyme de Philippe Panneton)</option>
                            <option value="Robert Gray">Robert Gray</option>
                            <option value="Rocheleau, Eustache">Rocheleau, Eustache</option>
                            <option value="Roland de La Platière, Jean-Marie">Roland de La Platière, Jean-Marie</option>
                            <option value="Rutenburg, Viktor Ivanovič">Rutenburg, Viktor Ivanovič</option>
                            <option value="Seignelay, Jean-Baptiste Antoine Colbert">Seignelay, Jean-Baptiste Antoine Colbert</option>
                            <option value="Sir James Edward Smith">Sir James Edward Smith</option>
                            <option value="Snegirev, Vladimir Leont'evič">Snegirev, Vladimir Leont'evič</option>
                            <option value="Starke, Mariana">Starke, Mariana</option>
                            <option value="Starke, Richard et Mariana">Starke, Richard et Mariana</option>
                            <option value="Stefko Marija Stanislavovna">Stefko Marija Stanislavovna</option>
                            <option value="Stendhal">Stendhal</option>
                            <option value="Taillasson, Jean-Joseph">Taillasson, Jean-Joseph</option>
                            <option value="Taine, Hippolyte">Taine, Hippolyte</option>
                            <option value="Tarle Evgenij Viktorovič">Tarle Evgenij Viktorovič</option>
                            <option value="Teste, Louis">Teste, Louis</option>
                            <option value="Tolstoj Petr Alekseevič">Tolstoj Petr Alekseevič</option>
                            <option value="Torjanik Evgenij">Torjanik Evgenij</option>
                            <option value="Trollope, Mrs">Trollope, Mrs</option>
                            <option value="Valery, Antoine-Claude">Valery, Antoine-Claude</option>
                            <option value="Vari">Vari</option>
                            <option value="Viardot, Louis">Viardot, Louis</option>
                            <option value="Viera y Clavijo, José de">Viera y Clavijo, José de</option>
                            <option value="Vigee Lebrun, Louise- Élisabeth">Vigee Lebrun, Louise- Élisabeth</option>
                            <option value="Villanueva Gutiérrez, Adulfo">Villanueva Gutiérrez, Adulfo</option>
                            <option value="Voltaire">Voltaire</option>
                            <option value="William Beckford">William Beckford</option>
                            <option value="WILLIAM HAZLITT">WILLIAM HAZLITT</option>
                            <option value="Williams Champney, Lizzie">Williams Champney, Lizzie</option>
                            <option value="Wolkonsky, Marie">Wolkonsky, Marie</option>
                            <option value="Wright, Esq. Edward">Wright, Esq. Edward</option>                 
                        </Form.Select>
                        </Col>
                        <Col className='col-3'>
                        {/*Period*/}
                        <Form.Select
                            value={selectedPeriod}
                            onChange={(event) => setSelectedPeriod(event.target.value)}
                        >
                            <option value="">{t('corpus.all_period')}</option>
                            <option value="Anno 1088">Anno 1088</option>
                            <option value="Anno 1095">Anno 1095</option>
                            <option value="Anno 1109">Anno 1109</option>
                            <option value="Anno 1160">Anno 1160</option>
                            <option value="Anno 1313">Anno 1313</option>
                            <option value="Anno 1364">Anno 1364</option>
                            <option value="Anno 1390">Anno 1390</option>
                            <option value="Anno 1530">Anno 1530</option>
                            <option value="Anno 1789">Anno 1789</option>
                            <option value="Anno 1888">Anno 1888</option>
                            <option value="Barocco">Barocco</option>
                            <option value="Medioevo">Medioevo</option>
                            <option value="Rinascimento">Rinascimento</option>
                            <option value="Secolo IX">Secolo IX</option>
                            <option value="Secolo V">Secolo V</option>
                            <option value="Secolo VI">Secolo VI</option>
                            <option value="Secolo X">Secolo X</option>
                            <option value="Secolo XI">Secolo XI</option>
                            <option value="Secolo XII">Secolo XII</option>
                            <option value="Secolo XIII">Secolo XIII</option>
                            <option value="Secolo XIV">Secolo XIV</option>
                            <option value="Secolo XIX">Secolo XIX</option>
                            <option value="Secolo XV">Secolo XV</option>
                            <option value="Secolo XVI">Secolo XVI</option>
                            <option value="Secolo XVII">Secolo XVII</option>
                            <option value="Secolo XVIII">Secolo XVIII</option>
                            <option value="Secolo XX">Secolo XX</option>
                            <option value="Secolo XXI">Secolo XXI</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className='col-3'>
                        {/*Experience*/}
                        <Form.Select
                            value={selectedExperience}
                            onChange={(event) => setSelectedExperience(event.target.value)}
                        >
                            <option value="">{t('corpus.all_experience')}</option>
                            <option value="Ammirazione">Ammirazione</option>
                            <option value="Compassione">Compassione</option>
                            <option value="Critica">Critica</option>
                            <option value="Curiosità">Curiosità</option>
                            <option value="Disgusto">Disgusto</option>
                            <option value="Esperienza">Esperienza</option>
                            <option value="Fascino">Fascino</option>
                            <option value="Fatica">Fatica</option>
                            <option value="Gioia">Gioia</option>
                            <option value="Gratitudine">Gratitudine</option>
                            <option value="Imprevisto">Imprevisto</option>
                            <option value="Indifferenza">Indifferenza</option>
                            <option value="Intrattenimento">Intrattenimento</option>
                            <option value="Ironia">Ironia</option>
                            <option value="Nostalgia">Nostalgia</option>
                            <option value="Orrore">Orrore</option>
                            <option value="Paura">Paura</option>
                            <option value="Raccoglimento">Raccoglimento</option>
                            <option value="Ricordi">Ricordi</option>
                            <option value="Scoperte">Scoperte</option>
                            <option value="Sogno">Sogno</option>
                            <option value="Straniamento">Straniamento</option>
                            <option value="Stupore">Stupore</option>
                            <option value="Tranquillità">Tranquillità</option>
                            <option value="Tristezza">Tristezza</option>
                            <option value="Viaggi">Viaggi</option>
                        </Form.Select>
                        </Col>
                        <Col className='col-3'>
                        {/*Character*/}
                        <Form.Select
                            value={selectedCharacter}
                            onChange={(event) => setSelectedCharacter(event.target.value)}
                        >
                            <option value="">{t('corpus.all_characters')}</option>
                            <option value="Accursio Francesco">Accursio Francesco</option>
                            <option value="Agnesi Gaetana">Agnesi Gaetana</option>
                            <option value="Aldrovandi Filippo">Aldrovandi Filippo</option>
                            <option value="Aldrovandi Ulisse">Aldrovandi Ulisse</option>
                            <option value="Alessandro_Gavazzi">Alessandro_Gavazzi</option>
                            <option value="Alighieri Dante">Alighieri Dante</option>
                            <option value="Alvarez de Albornoz Gil">Alvarez de Albornoz Gil</option>
                            <option value="Antonio Magini Giovanni">Antonio Magini Giovanni</option>
                            <option value="Ariosto">Ariosto</option>
                            <option value="Aristotele_Fioravanti">Aristotele_Fioravanti</option>
                            <option value="Baciocchi Elisa">Baciocchi Elisa</option>
                            <option value="Baldovini Iacopo">Baldovini Iacopo</option>
                            <option value="Barbarossa">Barbarossa</option>
                            <option value="Bartolomeo da Saliceto">Bartolomeo da Saliceto</option>
                            <option value="Bartolomeo Spani">Bartolomeo Spani</option>
                            <option value="Bassi Laura">Bassi Laura</option>
                            <option value="Bassiano Giovanninc">Bassiano Giovanninc</option>
                            <option value="Battista Dossi">Battista Dossi</option>
                            <option value="Beccari Jacopo">Beccari Jacopo</option>
                            <option value="Benedetto XIV">Benedetto XIV</option>
                            <option value="Bentivogli">Bentivogli</option>
                            <option value="Bentivoglio Giovanni II">Bentivoglio Giovanni II</option>
                            <option value="Bentivoglio Lorenzo">Bentivoglio Lorenzo</option>
                            <option value="Bernardo Di Quintavalle">Bernardo Di Quintavalle</option>
                            <option value="Biancani Jacopo">Biancani Jacopo</option>
                            <option value="Bianconi Giovanni">Bianconi Giovanni</option>
                            <option value="Boccaccio">Boccaccio</option>
                            <option value="Bocchi Dorotea">Bocchi Dorotea</option>
                            <option value="Bolognetti Alberto">Bolognetti Alberto</option>
                            <option value="Bonaparte Napoleone">Bonaparte Napoleone</option>
                            <option value="Borromeo Carlo">Borromeo Carlo</option>
                            <option value="Broeck Muschen">Broeck Muschen</option>
                            <option value="Buonsignori Maddalena">Buonsignori Maddalena</option>
                            <option value="Calori Luigi">Calori Luigi</option>
                            <option value="Capellini Giovanni">Capellini Giovanni</option>
                            <option value="Cardinale Mezzofanti">Cardinale Mezzofanti</option>
                            <option value="Carducci Giosue'">Carducci Giosue'</option>
                            <option value="Carlo Goldoni">Carlo Goldoni</option>
                            <option value="Carlo V">Carlo V</option>
                            <option value="Cassini Giovanni">Cassini Giovanni</option>
                            <option value="Caterina da Bologna Santa">Caterina da Bologna Santa</option>
                            <option value="Cattani Giuseppina">Cattani Giuseppina</option>
                            <option value="Cignani Carlo">Cignani Carlo</option>
                            <option value="Clemente V">Clemente V</option>
                            <option value="Clemente VII">Clemente VII</option>
                            <option value="Clemente XI">Clemente XI</option>
                            <option value="Clemente XII">Clemente XII</option>
                            <option value="Colomés Juan Bautista">Colomés Juan Bautista</option>
                            <option value="Copernico Niccolo'">Copernico Niccolo'</option>
                            <option value="Cospi Ferdinando">Cospi Ferdinando</option>
                            <option value="Da Bagnolo Accursio">Da Bagnolo Accursio</option>
                            <option value="Da Medicina Pillio">Da Medicina Pillio</option>
                            <option value="Da Rotterdam Erasmo">Da Rotterdam Erasmo</option>
                            <option value="Da Signa Boncompagno">Da Signa Boncompagno</option>
                            <option value="Dalle Donne Maria">Dalle Donne Maria</option>
                            <option value="D'Andrea Novella">D'Andrea Novella</option>
                            <option value="De' Liuzzi Mondino">De' Liuzzi Mondino</option>
                            <option value="De Romanzi Rolandino">De Romanzi Rolandino</option>
                            <option value="De' Romanzi Rolandino">De' Romanzi Rolandino</option>
                            <option value="Denari Odofredo">Denari Odofredo</option>
                            <option value="Di Canossa Matilde">Di Canossa Matilde</option>
                            <option value="Di Russia Caterina II">Di Russia Caterina II</option>
                            <option value="Dorado Montero Pedro">Dorado Montero Pedro</option>
                            <option value="Dosso Dossi">Dosso Dossi</option>
                            <option value="Duglioli Elena">Duglioli Elena</option>
                            <option value="Elisa Bachiocchi">Elisa Bachiocchi</option>
                            <option value="Enzo Re">Enzo Re</option>
                            <option value="Ercolo Isolani">Ercolo Isolani</option>
                            <option value="Farinelli (Pseudonimo Carlo Maria Michelangelo Nicola Broschi">Farinelli (Pseudonimo Carlo Maria Michelangelo Nicola Broschi</option>
                            <option value="Federico II">Federico II</option>
                            <option value="Fernández de Moratín">Fernández de Moratín</option>
                            <option value="Ferri Enrico">Ferri Enrico</option>
                            <option value="Fioravanti Aristotele">Fioravanti Aristotele</option>
                            <option value="Foscarari Egidio">Foscarari Egidio</option>
                            <option value="Fra Damiano da Bergamo">Fra Damiano da Bergamo</option>
                            <option value="Francesco Zambeccari">Francesco Zambeccari</option>
                            <option value="Gaetana Agnesi Maria">Gaetana Agnesi Maria</option>
                            <option value="Galilei Galileo">Galilei Galileo</option>
                            <option value="Galvani Luigi">Galvani Luigi</option>
                            <option value="Gapare_Nadi">Gapare_Nadi</option>
                            <option value="Garibaldi Giuseppe">Garibaldi Giuseppe</option>
                            <option value="Gesuiti spagnoli">Gesuiti spagnoli</option>
                            <option value="Giorgio Vasari">Giorgio Vasari</option>
                            <option value="Giovanni XXII">Giovanni XXII</option>
                            <option value="Giovanni">Giovanni</option>
                            <option value="Giulio II">Giulio II</option>
                            <option value="Giuseppe Spina">Giuseppe Spina</option>
                            <option value="Giustiniano">Giustiniano</option>
                            <option value="Goethe">Goethe</option>
                            <option value="Gozzadini Bettisia">Gozzadini Bettisia</option>
                            <option value="Graziano">Graziano</option>
                            <option value="Gregorio XIII">Gregorio XIII</option>
                            <option value="Gregorio XVI">Gregorio XVI</option>
                            <option value="Guarini">Guarini</option>
                            <option value="Guglielmini Domenico">Guglielmini Domenico</option>
                            <option value="Irazoqui José María">Irazoqui José María</option>
                            <option value="Irnerio">Irnerio</option>
                            <option value="Jacopo">Jacopo</option>
                            <option value="John Ruskin">John Ruskin</option>
                            <option value="John">John</option>
                            <option value="Lancastre Roger">Lancastre Roger</option>
                            <option value="Lanzi Luigi">Lanzi Luigi</option>
                            <option value="Lasala Manuel">Lasala Manuel</option>
                            <option value="Laura Bassi">Laura Bassi</option>
                            <option value="Leopardi Giacomo">Leopardi Giacomo</option>
                            <option value="Lord Byron">Lord Byron</option>
                            <option value="Luigi Galvani">Luigi Galvani</option>
                            <option value="Magno Carlo">Magno Carlo</option>
                            <option value="Malpighi Marcello">Malpighi Marcello</option>
                            <option value="Malvezzi famiglia">Malvezzi famiglia</option>
                            <option value="Manfredi Eustachio">Manfredi Eustachio</option>
                            <option value="Marconi Guglielmo">Marconi Guglielmo</option>
                            <option value="Maria Grimaldi Francesco">Maria Grimaldi Francesco</option>
                            <option value="Maria Zambeccari Girolamo">Maria Zambeccari Girolamo</option>
                            <option value="Maria Zanotti Francesco">Maria Zanotti Francesco</option>
                            <option value="Marsili Ferdinando Ludovico">Marsili Ferdinando Ludovico</option>
                            <option value="Marsili Ferdinando Luigi">Marsili Ferdinando Luigi</option>
                            <option value="Mazzini Giuseppe">Mazzini Giuseppe</option>
                            <option value="Mezzofanti Giuseppe">Mezzofanti Giuseppe</option>
                            <option value="Minghetti Marco">Minghetti Marco</option>
                            <option value="Monti Filippo">Monti Filippo</option>
                            <option value="Montpensier famiglia">Montpensier famiglia</option>
                            <option value="Morgagni Giovanni Battista">Morgagni Giovanni Battista</option>
                            <option value="Murri Augusto">Murri Augusto</option>
                            <option value="Napoleone">Napoleone</option>
                            <option value="Nebrija_de_Antonio">Nebrija_de_Antonio</option>
                            <option value="Orioli Francesco">Orioli Francesco</option>
                            <option value="Paleotti e Zambeccari Famiglia">Paleotti e Zambeccari Famiglia</option>
                            <option value="Panzacchi Enrico">Panzacchi Enrico</option>
                            <option value="Papa Sisto V">Papa Sisto V</option>
                            <option value="Papa">Papa</option>
                            <option value="Passaggeri Rolandino">Passaggeri Rolandino</option>
                            <option value="Pellegrino da Modena">Pellegrino da Modena</option>
                            <option value="Pepoli Taddeo">Pepoli Taddeo</option>
                            <option value="Petrarca Francesco">Petrarca Francesco</option>
                            <option value="Pignatelli Faustina">Pignatelli Faustina</option>
                            <option value="Pio XI">Pio XI</option>
                            <option value="Pope Adrian III">Pope Adrian III</option>
                            <option value="Ranuzzi Girolamo">Ranuzzi Girolamo</option>
                            <option value="Regina Margherita">Regina Margherita</option>
                            <option value="Riccioli Giovanni Battista">Riccioli Giovanni Battista</option>
                            <option value="Rodríguez Aponte Manuel">Rodríguez Aponte Manuel</option>
                            <option value="Rossini Gioacchino">Rossini Gioacchino</option>
                            <option value="Rubbiani Alfonso">Rubbiani Alfonso</option>
                            <option value="Saffi Aurelio">Saffi Aurelio</option>
                            <option value="Sampieri marchesa">Sampieri marchesa</option>
                            <option value="San Domenico">San Domenico</option>
                            <option value="San Luca Evangelista">San Luca Evangelista</option>
                            <option value="San Petronio">San Petronio</option>
                            <option value="Savorgnan Urbano">Savorgnan Urbano</option>
                            <option value="Spallanzani Lazzaro">Spallanzani Lazzaro</option>
                            <option value="Stendhal CAR CONFLICT">Stendhal CAR CONFLICT</option>
                            <option value="Stendhal">Stendhal</option>
                            <option value="Tagliacozzi Gaspare">Tagliacozzi Gaspare</option>
                            <option value="Talon famiglia">Talon famiglia</option>
                            <option value="Tambroni Clotilde">Tambroni Clotilde</option>
                            <option value="Tartagni Alessandro">Tartagni Alessandro</option>
                            <option value="Tasso Torquato">Tasso Torquato</option>
                            <option value="Tasso">Tasso</option>
                            <option value="Teodosio I">Teodosio I</option>
                            <option value="Tommasini Giacomo">Tommasini Giacomo</option>
                            <option value="Vendagogli Lucia">Vendagogli Lucia</option>
                            <option value="Veratti Giuseppe">Veratti Giuseppe</option>
                            <option value="Villalón Cristóbal de">Villalón Cristóbal de</option>
                            <option value="Visconti">Visconti</option>
                            <option value="Vittorio Emanuele II">Vittorio Emanuele II</option>
                            <option value="Vives Luis">Vives Luis</option>
                            <option value="Volta Alessandro">Volta Alessandro</option>
                            <option value="Voltaire">Voltaire</option>
                            <option value="Zanotti Eustachio">Zanotti Eustachio</option>

                        </Form.Select>
                        </Col>
                        <Col className='col-3'>
                        {/*Artist*/}
                        <Form.Select
                            value={selectedArtist}
                            onChange={(event) => setSelectedArtist(event.target.value)}
                        >
                            <option value="">{t('corpus.all_artists')}</option>
                            <option value="Agnelli Guglielmo">Agnelli Guglielmo</option>
                            <option value="Agostino Carracci">Agostino Carracci</option>
                            <option value="Albani Francesco">Albani Francesco</option>
                            <option value="Alessandro Algardi">Alessandro Algardi</option>
                            <option value="Alfonso Rubbiani">Alfonso Rubbiani</option>
                            <option value="Algardi Alessandro">Algardi Alessandro</option>
                            <option value="Andrea da Fiesole">Andrea da Fiesole</option>
                            <option value="Annibale Carracci">Annibale Carracci</option>
                            <option value="Asinelli Fratelli">Asinelli Fratelli</option>
                            <option value="Bagnacavallo">Bagnacavallo</option>
                            <option value="Barozzi da Vignola Jacopo">Barozzi da Vignola Jacopo</option>
                            <option value="Bassani Battista Giovanni">Bassani Battista Giovanni</option>
                            <option value="Bernini">Bernini</option>
                            <option value="Bistolfi Leonardo">Bistolfi Leonardo</option>
                            <option value="Bolognese Franco">Bolognese Franco</option>
                            <option value="Bolognini">Bolognini</option>
                            <option value="Bononi Carlo">Bononi Carlo</option>
                            <option value="Bramante">Bramante</option>
                            <option value="Buonarroti Michelangelo">Buonarroti Michelangelo</option>
                            <option value="Burrini Giovanni Antonio">Burrini Giovanni Antonio</option>
                            <option value="Calvi Jacopo Alessandro">Calvi Jacopo Alessandro</option>
                            <option value="Cantarini Simone">Cantarini Simone</option>
                            <option value="Canuti Domenico Maria">Canuti Domenico Maria</option>
                            <option value="Caravaggio">Caravaggio</option>
                            <option value="Carracci Agostino">Carracci Agostino</option>
                            <option value="Carracci Annibale">Carracci Annibale</option>
                            <option value="Carracci Fratelli">Carracci Fratelli</option>
                            <option value="Carracci Ludovico">Carracci Ludovico</option>
                            <option value="Cassini Domenico">Cassini Domenico</option>
                            <option value="Cassini">Cassini</option>
                            <option value="Cesi Bartolomeo">Cesi Bartolomeo</option>
                            <option value="Chigniani Carlo">Chigniani Carlo</option>
                            <option value="Cimabue">Cimabue</option>
                            <option value="Colonna Angelo Michele">Colonna Angelo Michele</option>
                            <option value="Correggio">Correggio</option>
                            <option value="Corsini Agostino">Corsini Agostino</option>
                            <option value="Cortellini Girolamo">Cortellini Girolamo</option>
                            <option value="Cossa Francesco del">Cossa Francesco del</option>
                            <option value="Costa Lorenzo">Costa Lorenzo</option>
                            <option value="da Bologna Giovanni">da Bologna Giovanni</option>
                            <option value="Da Pisa Nicola">Da Pisa Nicola</option>
                            <option value="Da Vinci Leonardo">Da Vinci Leonardo</option>
                            <option value="Dall'Arca Nicolò">Dall'Arca Nicolò</option>
                            <option value="De Rossi Properzia">De Rossi Properzia</option>
                            <option value="del Cossa Francesco">del Cossa Francesco</option>
                            <option value="Del Sarto Andrea">Del Sarto Andrea</option>
                            <option value="della Quercia Jacopo">della Quercia Jacopo</option>
                            <option value="Dell'Abate Nicolò">Dell'Abate Nicolò</option>
                            <option value="dell'Arca Niccolò">dell'Arca Niccolò</option>
                            <option value="di Bartolo Andrea">di Bartolo Andrea</option>
                            <option value="Domenichino (pseudonimo Domenico Zampieri)">Domenichino (pseudonimo Domenico Zampieri)</option>
                            <option value="Domenichino">Domenichino</option>
                            <option value="Dürer Albrecht">Dürer Albrecht</option>
                            <option value="Felice Torelli">Felice Torelli</option>
                            <option value="Fontana">Fontana</option>
                            <option value="Formigini">Formigini</option>
                            <option value="Francia Francesco">Francia Francesco</option>
                            <option value="Francia Jacopo">Francia Jacopo</option>
                            <option value="Gandolfi Gaetano">Gandolfi Gaetano</option>
                            <option value="Garofalo">Garofalo</option>
                            <option value="Gessi Francesco">Gessi Francesco</option>
                            <option value="Giambologna">Giambologna</option>
                            <option value="Giordano Luca">Giordano Luca</option>
                            <option value="Giovanni Putti">Giovanni Putti</option>
                            <option value="Graziani Ercole">Graziani Ercole</option>
                            <option value="Guercino">Guercino</option>
                            <option value="Innocenzo da Imola">Innocenzo da Imola</option>
                            <option value="Jacopo della Guercia">Jacopo della Guercia</option>
                            <option value="Jacopo della Quercia">Jacopo della Quercia</option>
                            <option value="Jacopo Negretti detto Palma il Vecchio">Jacopo Negretti detto Palma il Vecchio</option>
                            <option value="Jarmorini Giuseppe">Jarmorini Giuseppe</option>
                            <option value="Joseph Grabinski">Joseph Grabinski</option>
                            <option value="Joshua Reynolds">Joshua Reynolds</option>
                            <option value="Lanfranco Giovanni">Lanfranco Giovanni</option>
                            <option value="Lauretti Tommaso">Lauretti Tommaso</option>
                            <option value="Lelli Ercole">Lelli Ercole</option>
                            <option value="Leonello Spada">Leonello Spada</option>
                            <option value="Levanti Antonio">Levanti Antonio</option>
                            <option value="Lippi Filippo">Lippi Filippo</option>
                            <option value="Lippo Dalmasio">Lippo Dalmasio</option>
                            <option value="Lombardi Alfonso">Lombardi Alfonso</option>
                            <option value="Lucio Massari">Lucio Massari</option>
                            <option value="Ludovico Carracci">Ludovico Carracci</option>
                            <option value="Manfredi Emilio">Manfredi Emilio</option>
                            <option value="Manzolini Giovanni">Manzolini Giovanni</option>
                            <option value="marcantonio franceschini">marcantonio franceschini</option>
                            <option value="Martinelli Vicente">Martinelli Vicente</option>
                            <option value="Martini Giovanni Battista">Martini Giovanni Battista</option>
                            <option value="Mastelletta">Mastelletta</option>
                            <option value="Mazenta">Mazenta</option>
                            <option value="Menganti Alessandro">Menganti Alessandro</option>
                            <option value="Mengazzino">Mengazzino</option>
                            <option value="Minozzi Innocenzio Flaminio">Minozzi Innocenzio Flaminio</option>
                            <option value="Morandi Manzolini Anna">Morandi Manzolini Anna</option>
                            <option value="Muratori Angela Teresa">Muratori Angela Teresa</option>
                            <option value="Nerio Malvezzi">Nerio Malvezzi</option>
                            <option value="Nicola da Pisa">Nicola da Pisa</option>
                            <option value="Oderisi da Gubbio">Oderisi da Gubbio</option>
                            <option value="Palladio">Palladio</option>
                            <option value="Pannolini Francesco">Pannolini Francesco</option>
                            <option value="Parmigianino">Parmigianino</option>
                            <option value="Pasinelli Lorenzo">Pasinelli Lorenzo</option>
                            <option value="Pellegrino Tibaldi">Pellegrino Tibaldi</option>
                            <option value="Perugino">Perugino</option>
                            <option value="Pietro Giordani">Pietro Giordani</option>
                            <option value="Pio' Angelo Gabriello">Pio' Angelo Gabriello</option>
                            <option value="Piò Domenico">Piò Domenico</option>
                            <option value="Pisano Nicola">Pisano Nicola</option>
                            <option value="Primaticcio Francesco">Primaticcio Francesco</option>
                            <option value="Procaccini Ercole il Vecchio">Procaccini Ercole il Vecchio</option>
                            <option value="Properzia de Rossi">Properzia de Rossi</option>
                            <option value="Raffaello">Raffaello</option>
                            <option value="Ramenghi Giovanni Battista">Ramenghi Giovanni Battista</option>
                            <option value="Reni Guido">Reni Guido</option>
                            <option value="Righetti Mario">Righetti Mario</option>
                            <option value="Romano Giulio">Romano Giulio</option>
                            <option value="Rosa Salvatore">Rosa Salvatore</option>
                            <option value="Rosaspina Francesco">Rosaspina Francesco</option>
                            <option value="Rubens">Rubens</option>
                            <option value="Sabatini Lorenzo">Sabatini Lorenzo</option>
                            <option value="Sansovino">Sansovino</option>
                            <option value="Sanzio Raffaello">Sanzio Raffaello</option>
                            <option value="Scuola Bolognese">Scuola Bolognese</option>
                            <option value="Sirani Elisabetta">Sirani Elisabetta</option>
                            <option value="Sirani">Sirani</option>
                            <option value="Spada Lionello">Spada Lionello</option>
                            <option value="Tadolini Francesco">Tadolini Francesco</option>
                            <option value="Tadolini Petronio">Tadolini Petronio</option>
                            <option value="Tassoni Alessandro">Tassoni Alessandro</option>
                            <option value="Terribilia">Terribilia</option>
                            <option value="Tiarini Alessandro">Tiarini Alessandro</option>
                            <option value="Tisio Benvenuto">Tisio Benvenuto</option>
                            <option value="Tiziano">Tiziano</option>
                            <option value="Torregiani Alfonso">Torregiani Alfonso</option>
                            <option value="Triachini Bartolomeo">Triachini Bartolomeo</option>
                            <option value="Tribolo">Tribolo</option>
                            <option value="Tubertini Giuseppe">Tubertini Giuseppe</option>
                            <option value="Van Dyck">Van Dyck</option>
                            <option value="Venturoli Angelo">Venturoli Angelo</option>
                            <option value="Viani Domenico">Viani Domenico</option>
                            <option value="Zanotti Davide">Zanotti Davide</option>                
                        </Form.Select>
                        </Col>
                        <Col className="col-3">
                        {/*City*/}
                        <Form.Select
                            value={selectedCity}
                            onChange={(event) => setSelectedCity(event.target.value)}
                        >
                            <option value="">{t('corpus.all_cities')}</option>
                            <option value="Bazzano">Bazzano</option>
                            <option value="Bologna descrizione">Bologna descrizione</option>
                            <option value="Bologna Etrusca">Bologna Etrusca</option>
                            <option value="Bologna Forcelli">Bologna Forcelli</option>
                            <option value="Bologna topografia">Bologna topografia</option>
                            <option value="Bologna">Bologna</option>
                            <option value="Casalecchio">Casalecchio</option>
                            <option value="Castelfranco">Castelfranco</option>
                            <option value="Ferrara">Ferrara</option>
                            <option value="Forlì">Forlì</option>
                            <option value="Loiano">Loiano</option>
                            <option value="Malalbergo">Malalbergo</option>
                            <option value="Modena">Modena</option>
                            <option value="Parma">Parma</option>
                            <option value="Pianoro">Pianoro</option>
                            <option value="Pietramala">Pietramala</option>
                            <option value="Pistoia">Pistoia</option>
                            <option value="Porretta">Porretta</option>
                            <option value="Ravenna">Ravenna</option>
                            <option value="Valsamoggia">Valsamoggia</option>
                            <option value="Zola Predosa">Zola Predosa</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="col-3">
                        {/*Nature*/}
                        <Form.Select
                            value={selectedNature}
                            onChange={(event) => setSelectedNature(event.target.value)}
                        >
                            <option value="">All Nature</option>
                            <option value="Allevamenti">Allevamenti</option>
                            <option value="Appennino">Appennino</option>
                            <option value="Baco da seta">Baco da seta</option>
                            <option value="Campagna">Campagna</option>
                            <option value="Collina">Collina</option>
                            <option value="Coltivazioni">Coltivazioni</option>
                            <option value="Fenomeni naturalistici">Fenomeni naturalistici</option>
                            <option value="Fiumi">Fiumi</option>
                            <option value="Montagna">Montagna</option>
                            <option value="Monte Paderno">Monte Paderno</option>
                            <option value="Natura">Natura</option>
                            <option value="Parco di Monte Paderno">Parco di Monte Paderno</option>
                            <option value="Piante">Piante</option>
                            <option value="Pianura">Pianura</option>
                        </Form.Select>
                        </Col>
                        <Col className="col-3">
                        {/*Theme*/}
                        <Form.Select
                            value={selectedTheme}
                            onChange={(event) => setSelectedTheme(event.target.value)}
                        >
                            <option value="">All Themes</option>
                            <option value="Arte Musicale">Arte Musicale</option>
                            <option value="Cibo">Cibo</option>
                            <option value="Cittadini di Bologna">Cittadini di Bologna</option>
                            <option value="Congresso">Congresso</option>
                            <option value="Di Culto - Basilica di San Paolo Maggiore">Di Culto - Basilica di San Paolo Maggiore</option>
                            <option value="Donna">Donna</option>
                            <option value="Evento">Evento</option>
                            <option value="Industria">Industria</option>
                            <option value="Persone">Persone</option>
                            <option value="Studenti">Studenti</option>
                            <option value="Università Docenti">Università Docenti</option>
                            <option value="Università">Università</option>
                            <option value="Usi">Usi</option>
                        </Form.Select>
                        </Col>
                        <Col className="col-3">
                        {/*Artwork*/}
                        <Form.Select
                            value={selectedArtwork}
                            onChange={(event) => setSelectedArtwork(event.target.value)}
                        >
                            <option value="">All Artworks</option>
                            <option value="Architettura - Architettura">Architettura - Architettura</option>
                            <option value="Architettura - Arco">Architettura - Arco</option>
                            <option value="Architettura - Bagni di Mario">Architettura - Bagni di Mario</option>
                            <option value="Architettura - Campanile">Architettura - Campanile</option>
                            <option value="Architettura - Capitello">Architettura - Capitello</option>
                            <option value="Architettura - Cimitero">Architettura - Cimitero</option>
                            <option value="Architettura - Colonna dell'Immacolata">Architettura - Colonna dell'Immacolata</option>
                            <option value="Architettura - Colonna di San Domenico">Architettura - Colonna di San Domenico</option>
                            <option value="Architettura - Colonna">Architettura - Colonna</option>
                            <option value="Architettura - Cornice">Architettura - Cornice</option>
                            <option value="Architettura - Cupola">Architettura - Cupola</option>
                            <option value="Architettura - Facciata">Architettura - Facciata</option>
                            <option value="Architettura - Fregio">Architettura - Fregio</option>
                            <option value="Architettura - Mausoleo">Architettura - Mausoleo</option>
                            <option value="Architettura - Meridiana">Architettura - Meridiana</option>
                            <option value="Architettura - Merlatura ghibellina">Architettura - Merlatura ghibellina</option>
                            <option value="Architettura - Monumento">Architettura - Monumento</option>
                            <option value="Architettura - Mura">Architettura - Mura</option>
                            <option value="Architettura - Ordine">Architettura - Ordine</option>
                            <option value="Architettura - Pilastro">Architettura - Pilastro</option>
                            <option value="Architettura - Piramide">Architettura - Piramide</option>
                            <option value="Architettura - Porta Magna">Architettura - Porta Magna</option>
                            <option value="Architettura - Porta">Architettura - Porta</option>
                            <option value="Architettura - Portico di San Luca">Architettura - Portico di San Luca</option>
                            <option value="Architettura - Portico">Architettura - Portico</option>
                            <option value="Architettura - Sarcofago">Architettura - Sarcofago</option>
                            <option value="Architettura - Scalinata">Architettura - Scalinata</option>
                            <option value="Architettura - Soffitto">Architettura - Soffitto</option>
                            <option value="Architettura - Vetrata">Architettura - Vetrata</option>
                            <option value="Arti Figurative - Arti Figurative">Arti Figurative - Arti Figurative</option>
                            <option value="Arti figurative - Decorazione">Arti figurative - Decorazione</option>
                            <option value="Arti figurative - Immagine Madonna Laureatana">Arti figurative - Immagine Madonna Laureatana</option>
                            <option value="Bassorilievo - Bassorilievo">Bassorilievo - Bassorilievo</option>
                            <option value="Colonna - Cippo di Sacerno">Colonna - Cippo di Sacerno</option>
                            <option value="Coro ligneo - Coro ligneo">Coro ligneo - Coro ligneo</option>
                            <option value="Dipinto - David con la testa di Golia">Dipinto - David con la testa di Golia</option>
                            <option value="Dipinto - Dipinto">Dipinto - Dipinto</option>
                            <option value="Dipinto - Effigie Beata Vergine col Bambino">Dipinto - Effigie Beata Vergine col Bambino</option>
                            <option value="Dipinto - Estasi di Santa Cecilia">Dipinto - Estasi di Santa Cecilia</option>
                            <option value="Dipinto - Il Martirio di Sant'Agnese">Dipinto - Il Martirio di Sant'Agnese</option>
                            <option value="Dipinto - Madonna Con Bambino In Trono">Dipinto - Madonna Con Bambino In Trono</option>
                            <option value="Dipinto - Madonna del Rosario">Dipinto - Madonna del Rosario</option>
                            <option value="Dipinto - Morte di San Giuseppe">Dipinto - Morte di San Giuseppe</option>
                            <option value="Dipinto - San Francesco">Dipinto - San Francesco</option>
                            <option value="Dipinto - San Giorgio e il drago">Dipinto - San Giorgio e il drago</option>
                            <option value="Dipinto - San Giovanni Battista si congeda dal padre Zaccaria">Dipinto - San Giovanni Battista si congeda dal padre Zaccaria</option>
                            <option value="Dipinto - San Pietro consacra sant'Apollinare">Dipinto - San Pietro consacra sant'Apollinare</option>
                            <option value="Dipinto - Sansone vittorioso">Dipinto - Sansone vittorioso</option>
                            <option value="Dipinto - Santa Cecilia">Dipinto - Santa Cecilia</option>
                            <option value="Dipinto - Strage degli innocenti">Dipinto - Strage degli innocenti</option>
                            <option value="Dipinto - Trasfigurazione di Gesù Cristo">Dipinto - Trasfigurazione di Gesù Cristo</option>
                            <option value="Dipinto - Vestizione di San Guglielmo">Dipinto - Vestizione di San Guglielmo</option>
                            <option value="Fontana del Gigante">Fontana del Gigante</option>
                            <option value="Grafica - Disegno">Grafica - Disegno</option>
                            <option value="Grafica - Figura">Grafica - Figura</option>
                            <option value="Grafica - Graffiti">Grafica - Graffiti</option>
                            <option value="Grafica - Incisione">Grafica - Incisione</option>
                            <option value="Grafica - Iscrizione">Grafica - Iscrizione</option>
                            <option value="Grafica - Stampa">Grafica - Stampa</option>
                            <option value="Letteratura - Letteratura">Letteratura - Letteratura</option>
                            <option value="Mosaico - Ritratto di Benedetto XIV">Mosaico - Ritratto di Benedetto XIV</option>
                            <option value="Pittura - Affresco">Pittura - Affresco</option>
                            <option value="Pittura - Annunciazione">Pittura - Annunciazione</option>
                            <option value="Pittura - Ascensione">Pittura - Ascensione</option>
                            <option value="Pittura - Assunzione">Pittura - Assunzione</option>
                            <option value="Pittura - Battesimo">Pittura - Battesimo</option>
                            <option value="Pittura - Collezione">Pittura - Collezione</option>
                            <option value="Pittura - Cristo">Pittura - Cristo</option>
                            <option value="Pittura - Crocifissione">Pittura - Crocifissione</option>
                            <option value="Pittura - Estasi">Pittura - Estasi</option>
                            <option value="Pittura - Figura">Pittura - Figura</option>
                            <option value="Pittura - Immacolata">Pittura - Immacolata</option>
                            <option value="Pittura - Madonna">Pittura - Madonna</option>
                            <option value="Pittura - Martirio">Pittura - Martirio</option>
                            <option value="Pittura - Morte">Pittura - Morte</option>
                            <option value="Pittura - Nascita">Pittura - Nascita</option>
                            <option value="Pittura - Nozze">Pittura - Nozze</option>
                            <option value="Pittura - Pittura">Pittura - Pittura</option>
                            <option value="Pittura - Ritratto">Pittura - Ritratto</option>
                            <option value="Pittura - Santi">Pittura - Santi</option>
                            <option value="Pittura - Soggetti Biblici">Pittura - Soggetti Biblici</option>
                            <option value="Pittura - Soggetti Pagani">Pittura - Soggetti Pagani</option>
                            <option value="Pittura - Trasfigurazione">Pittura - Trasfigurazione</option>
                            <option value="Pittura - Trinità">Pittura - Trinità</option>
                            <option value="Pittura - Vergine">Pittura - Vergine</option>
                            <option value="Pittuta - Mosaico">Pittuta - Mosaico</option>
                            <option value="Scultura - Animale">Scultura - Animale</option>
                            <option value="Scultura - Busto">Scultura - Busto</option>
                            <option value="Scultura - Cera anatomica">Scultura - Cera anatomica</option>
                            <option value="Scultura - Cera">Scultura - Cera</option>
                            <option value="Scultura - Decapitazione Di San Paolo">Scultura - Decapitazione Di San Paolo</option>
                            <option value="Scultura - Ercole">Scultura - Ercole</option>
                            <option value="Scultura - Figura">Scultura - Figura</option>
                            <option value="Scultura - Gesso">Scultura - Gesso</option>
                            <option value="Scultura - Legno">Scultura - Legno</option>
                            <option value="Scultura - Madonna">Scultura - Madonna</option>
                            <option value="Scultura - Modello">Scultura - Modello</option>
                            <option value="Scultura - Nettuno">Scultura - Nettuno</option>
                            <option value="Scultura - Scultura">Scultura - Scultura</option>
                            <option value="Scultura - Testa">Scultura - Testa</option>
                            <option value="Statua - Adorazione dei Magi">Statua - Adorazione dei Magi</option>
                            <option value="Statua - Decapitazione di San Paolo">Statua - Decapitazione di San Paolo</option>
                            <option value="Statua - Gallo di S.Pietro">Statua - Gallo di S.Pietro</option>
                            <option value="Statua - Gregorio XIII">Statua - Gregorio XIII</option>
                            <option value="Statua - San Domenico">Statua - San Domenico</option>
                            <option value="Scultura - Monumento a Giosuè Carducci">Scultura - Monumento a Giosuè Carducci</option>
                            <option value="Statua - San Petronio">Statua - San Petronio</option>
                            <option value="Statua - Statua">Statua - Statua</option>
                            <option value="Tomba - Arca Di San Domenico">Tomba - Arca Di San Domenico</option>
                            <option value="Tomba - Ludovico Boccadiferro">Tomba - Ludovico Boccadiferro</option>
                            <option value="Tomba - Tomba">Tomba - Tomba</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <br/>
                </section>
            </Container>
            <br/>
            {/* Rendered data */}
            <div className="entries">
                <label>
                Entries per page:
                <Form.Select id="my-select" value={numEntriesPerPage} onChange={handleNumEntriesPerPageChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </Form.Select>
                </label>
            </div>
            <br/>
            <Table>
                <thead>
                <tr>
                    <th>Fragment</th>
                    <th>Source</th>
                </tr>
                </thead>
                <tbody>
                {currentData.filter((val)=>{
                        if (searchTerm === '') {
                            return val;
                        } else if (
                            val.autore[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.fragment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.bibliographic_link.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                         return val;
                        }  
                    }).map((item, index) => (
                    <tr key={index}>
                    <td>
                        {item.translation_it && showItalian ? (
                        <p>{item.translation_it}</p>
                        ) : (
                        <p className="fragment_font">{item.fragment}</p>
                        )}
                        <div className="row-container">
                            <div className="location-container">
                            <Button variant='outline-dark' onClick={() => handleMarkerClick(item.main_location)}><FaIcons.FaMapMarkerAlt className="map-marker-fragments"/></Button>
                            </div>
                            <div className="button-container">
                            {isBookInFavorites(item) ? (
                                <Button id='bookmark-button' variant='outline-dark' onClick={() => handleRemoveFromBookmarks(item)}>
                                <BsIcons.BsBookmarkFill />
                                &nbsp;Remove from Bookmarks
                                </Button>
                                ) : (
                                <Button id='bookmark-button' variant='outline-dark' onClick={() => handleAddToBookmarks(item)}>
                                <BsIcons.BsBookmark />
                                &nbsp;Add to Bookmarks
                                </Button>
                            )}
                            </div>
                        </div>
                        <br/>
                        {item.translation_it && (
                        <OverlayTrigger placement="right" overlay={disclaimer}>
                            <Button
                            variant="info"
                            size="sm"
                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                            onClick={() => setShowItalian(!showItalian)}
                            >
                            Italian
                            </Button>
                        </OverlayTrigger>
                        )}
                        &nbsp;
                    </td>
                    <td>
                        <p>{item.autore[0]}</p>
                        <p>{item.autore[1]}</p>
                        <p>{item.autore[2]}</p>
                        <p>
                        <HashLink to={item.bibliographic_link}>Link</HashLink>
                        </p>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <div>
                {totalPages > 1 && (
                <Pagination>
                    <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={handlePrevButtonClick}
                    />
                    {displayedPageNumbers.map((pageNumber) => (
                    <Pagination.Item
                        key={pageNumber}
                        active={currentPage === pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Pagination.Item>
                    ))}
                    <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={handleNextButtonClick}
                    />
                </Pagination>
                )}
            </div>
            {selectedFragmentLocation && isMapOpen && ( // Show map overlay when isMapOpen is true and there's a selectedFragmentLocation
        <div className="map-overlay">
            <MapContainer fullscreenControl={true} searchControl={true} center={selectedFragmentLocation} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
                attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                maxZoom={20}
              />
                <Marker position={selectedFragmentLocation} icon={markerIcon}>
                    <Popup>Ciao</Popup>
                </Marker>
            {userLocation && (
                <Marker position={userLocation} icon={currentLocationIcon}>
                  <Popup>
                    <p>You're here</p>
                  </Popup>
                </Marker>
              )}
            </MapContainer>
            <Button className="close-button" variant="info" onClick={handleCloseMap}><GrIcons.GrClose/></Button>
        </div>
      )}
            {/* VISUALIZATION OPTION WITH COLUMNS
            <div className="container fluid">
            {filteredData.filter((val)=>{
                            if (searchTerm === '') {
                                return val;
                            } else if (
                                val.author[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.fragment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.web_link.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }  
                        }).map((item, index) => (
                            <div className='suggested-route'>
                                <section>
                                    <Row>
                                        <Col className='col-9'>
                                            <p>{item.fragment}</p>
                                            <FaIcons.FaBookmark/>
                                            <p><FaIcons.FaMapMarkerAlt/>{item.place.place_name_1.address_1.lat}-{item.place.place_name_1.address_1.lng}</p>
                                        </Col>
                                        <Col className='col-2'>
                                            <p>{item.author[0]}</p> 
                                            <p>{item.author[1]}</p>
                                            <p>{item.author[2]}</p>
                                            <HashLink to={item.web_link}>Link</HashLink>
                                            {/*<p>{item.experience[0]}, {item.experience[1]}</p>
                                            <p>{item.character[0]}, {item.character[1]}, {item.character[2]}</p>
                                        </Col>
                                        <MapCorpus/>
                                    </Row>
                                    <hr/>
                                </section>
                            </div> 
                        ))}
            </div>
            */}
            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Header closeButton>
                <Modal.Title>Help and documentation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>How to navigate the corpus</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <p><HashLink to='/documentation'>Link</HashLink></p>
                </p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Fragments;