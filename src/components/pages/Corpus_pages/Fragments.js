import React, { useState, useEffect, useRef } from "react";
import '../../../App.css';
import { HashLink } from 'react-router-hash-link';
//Bootstrap
import { Row, Col, Container, Table, Button, Tooltip, OverlayTrigger, Modal, Form, Dropdown, DropdownButton, DropdownToggle, InputGroup, Pagination } from 'react-bootstrap';
// JSON data
import test from './database.json'
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
        const [showItalian, setShowItalian] = useState(false);
        const [selectedLanguageButton, setSelectedLanguageButton] = useState("");


        const filteredData = test.filter((item) => {
            if (selectedLanguage && item.language !== selectedLanguage) {
                return false;
            }
            if (selectedLanguageButton && item.language !== selectedLanguageButton) {
                return false;
            }
            if (selectedPlaceType && (item.place[0] !==selectedPlaceType && item.place[1] !==selectedPlaceType && item.place[2] !==selectedPlaceType)) {
                return false;            
            }
            if (selectedAuthor && (item.author[0] !== selectedAuthor && item.author[1] !== selectedAuthor && item.author[2] !== selectedAuthor)) {
                return false;
            }
            if (selectedPeriod && (item.period[0] !== selectedPeriod && item.period[1] !== selectedPeriod && item.period[2] !== selectedPeriod)) {
                return false;
            }
            if (selectedExperience && (item.experience[0] !== selectedExperience && item.experience[1] !== selectedExperience)) {
                return false;
            }
            if (selectedCharacter && (item.character[0] !== selectedCharacter && item.character[1] !== selectedCharacter && item.character[2] !== selectedCharacter)) {
                return false;
            }
            if (selectedArtist && (item.artist[0] !== selectedArtist && item.artist[1] !== selectedArtist && item.artist[2] !== selectedArtist)) {
                return false;
            }
            if (selectedCity && item.city !== selectedCity) {
                return false 
            }
            if (selectedTheme && item.topic !== selectedTheme) {
                return false;
            }

            return true;
        });
        const [currentPage, setCurrentPage] = useState(1);
        const [numEntriesPerPage, setNumEntriesPerPage] = useState(5);

        // Calculate the total number of pages
        const totalPages = Math.ceil(filteredData.length / numEntriesPerPage);

        // Get the current page's data
        const currentData = filteredData.slice(
            (currentPage - 1) * numEntriesPerPage,
            currentPage * numEntriesPerPage
        );

        // Handle page navigation
        const handlePageChange = (newPage) => {
            setCurrentPage(newPage);
        };

        // Handle number of entries per page change
        const handleNumEntriesPerPageChange = (e) => {
            setNumEntriesPerPage(parseInt(e.target.value));
            setCurrentPage(1); // Reset to the first page
        }; 

        // Handle "Previous" button click
        const handlePrevButtonClick = () => {
            setCurrentPage(currentPage - 1);
        };

        // Handle "Next" button click
        const handleNextButtonClick = () => {
            setCurrentPage(currentPage + 1);
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
                                    <option value="Historic-cultural">Historic-cultural</option>
                                    <option value="Library">Library</option>
                                    <option value="Museum">Museum</option>
                                    <option value="Outdoors">Outdoors</option>
                                    <option value="Palace">Palace</option>
                                    <option value="Worship">Place of worship</option>
                                    <option value="Porticoes">Porticoes</option>
                                    <option value="Square">Square</option>
                                    <option value="University">University</option>

                                </Form.Select>
                                <Form.Select
                                    value={selectedAuthor}
                                    onChange={(event) => setSelectedAuthor(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_authors')}</option>
                                    <option value="Anna, Lady Miller">Lady Miller</option>
                                    <option value="Marta Cavazza">Marta Cavazza</option>
                                    <option value="John Moore">John Moore</option>
                                    <option value="Carlo Sarti">Carlo Sarti</option>
                                    <option value="Francesco Poppi">Francesco Poppi</option>
                                    <option value="Fabrizio Bonoli">Fabrizio Bonoli</option>
                                    <option value="Andrea Gualandi">Andrea Gualandi</option>
                                </Form.Select>
                
                                <Form.Select
                                    value={selectedPeriod}
                                    onChange={(event) => setSelectedPeriod(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_period')}</option>
                                    <option value="1088">1088</option>
                                    <option value="13th century">{t('corpus.13_century')}</option>
                                    <option value="14th century">{t('corpus.14_century')}</option>
                                    <option value="15th century">{t('corpus.15_century')}</option>
                                    <option value="16th century">{t('corpus.16_century')}</option>
                                    <option value="17th century">{t('corpus.17_century')}</option>
                                    <option value="18th century">{t('corpus.18_century')}</option>
                                    <option value="19th century">{t('corpus.19_century')}</option>
                                    <option value="20th century">{t('corpus.20_century')}</option>
                                    <option value="21st century">{t('corpus.21_century')}</option>
                                </Form.Select>
                        
                                <Form.Select
                                    value={selectedExperience}
                                    onChange={(event) => setSelectedExperience(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_experience')}</option>
                                    <option value="Awe">Awe</option>
                                    <option value="Joy">Joy</option>
                                    <option value="Anger">Anger</option>
                                    <option value="Fear">Fear</option>
                                    <option value="Disgust">Disgust</option>
                                    <option value="Sadness">Sadness</option>
                                </Form.Select>
                        
                                <Form.Select
                                    value={selectedCharacter}
                                    onChange={(event) => setSelectedCharacter(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_characters')}</option>
                                    <option value="Eustachio Manfredi">Eustachio Manfredi</option>
                                    <option value="Benedetto XIV">Benedetto XIV</option>
                                    <option value="Ferdinando Luigi Marsili">Ferdinando Luigi Marsili</option>
                                    <option value="Voltaire">Voltaire</option>
                                    <option value="Laura Bassi">Laura Bassi</option>
                                </Form.Select>
        
                                <Form.Select
                                    value={selectedArtist}
                                    onChange={(event) => setSelectedArtist(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_artists')}</option>
                                    <option value="Name">Name</option>
                                    <option value="Name">Name</option>
                                    <option value="Name">Name</option>
                                    <option value="Name">Name</option>
                                    <option value="Name">Name</option>
                                </Form.Select>
                      
                                <Form.Select
                                    value={selectedCity}
                                    onChange={(event) => setSelectedCity(event.target.value)}
                                >
                                    <option value="">{t('corpus.all_cities')}</option>
                                    <option value="Bazzano">Bazzano</option>
                                    <option value="Bologna">Bologna</option>
                                    <option value="Casalecchio">Casalecchio</option>
                                    <option value="Ferrara">Ferrara</option>
                                    <option value="Loiano">Loaino</option>
                                    <option value="Malalabergo">Malalabergo</option>
                                    <option value="Modena">Modena</option>
                                    <option value="Parma">Parma</option>
                                    <option value="Piacenza">Piacenza</option>
                                    <option value="Panoro">Panoro</option>
                                    <option value="Pietramala">Pietramala</option>
                                    <option value="Pistoia">Pistoia</option>
                                    <option value="Porretta">Porretta</option>
                                    <option value="Ravenna">Ravenna</option>
                                    <option value="Valsamoggia">Valsamoggia</option>
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
                            <option value="Historic-cultural">Historic-cultural</option>
                            <option value="Library">Library</option>
                            <option value="Museum">Museum</option>
                            <option value="Outdoors">Outdoors</option>
                            <option value="Palace">Palace</option>
                            <option value="Worship">Place of worship</option>
                            <option value="Porticoes">Porticoes</option>
                            <option value="Square">Square</option>
                            <option value="University">University</option>

                        </Form.Select>
                        </Col>
                        {/*Author*/}
                        <Col className='col-3'>
                        <Form.Select
                            value={selectedAuthor}
                            onChange={(event) => setSelectedAuthor(event.target.value)}
                        >
                            <option value="">{t('corpus.all_authors')}</option>
                            <option value="Anna, Lady Miller">Lady Miller</option>
                            <option value="Marta Cavazza">Marta Cavazza</option>
                            <option value="John Moore">John Moore</option>
                            <option value="Carlo Sarti">Carlo Sarti</option>
                            <option value="Francesco Poppi">Francesco Poppi</option>
                            <option value="Fabrizio Bonoli">Fabrizio Bonoli</option>
                            <option value="Andrea Gualandi">Andrea Gualandi</option>
                        </Form.Select>
                        </Col>
                        <Col className='col-3'>
                        {/*Period*/}
                        <Form.Select
                            value={selectedPeriod}
                            onChange={(event) => setSelectedPeriod(event.target.value)}
                        >
                            <option value="">{t('corpus.all_period')}</option>
                            <option value="1088">1088</option>
                            <option value="13th century">{t('corpus.13_century')}</option>
                            <option value="14th century">{t('corpus.14_century')}</option>
                            <option value="15th century">{t('corpus.15_century')}</option>
                            <option value="16th century">{t('corpus.16_century')}</option>
                            <option value="17th century">{t('corpus.17_century')}</option>
                            <option value="18th century">{t('corpus.18_century')}</option>
                            <option value="19th century">{t('corpus.19_century')}</option>
                            <option value="20th century">{t('corpus.20_century')}</option>
                            <option value="21st century">{t('corpus.21_century')}</option>
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
                            <option value="Awe">Awe</option>
                            <option value="Joy">Joy</option>
                            <option value="Anger">Anger</option>
                            <option value="Fear">Fear</option>
                            <option value="Disgust">Disgust</option>
                            <option value="Sadness">Sadness</option>
                        </Form.Select>
                        </Col>
                        <Col className='col-3'>
                        {/*Character*/}
                        <Form.Select
                            value={selectedCharacter}
                            onChange={(event) => setSelectedCharacter(event.target.value)}
                        >
                            <option value="">{t('corpus.all_characters')}</option>
                            <option value="Eustachio Manfredi">Eustachio Manfredi</option>
                            <option value="Benedetto XIV">Benedetto XIV</option>
                            <option value="Ferdinando Luigi Marsili">Ferdinando Luigi Marsili</option>
                            <option value="Voltaire">Voltaire</option>
                            <option value="Laura Bassi">Laura Bassi</option>
                        </Form.Select>
                        </Col>
                        <Col className='col-3'>
                        {/*Artist*/}
                        <Form.Select
                            value={selectedArtist}
                            onChange={(event) => setSelectedArtist(event.target.value)}
                        >
                            <option value="">{t('corpus.all_artists')}</option>
                            <option value="Name">Name</option>
                            <option value="Name">Name</option>
                            <option value="Name">Name</option>
                            <option value="Name">Name</option>
                            <option value="Name">Name</option>
                        </Form.Select>
                        </Col>
                        <Col className="col-3">
                        <Form.Select
                            value={selectedCity}
                            onChange={(event) => setSelectedCity(event.target.value)}
                        >
                            <option value="">{t('corpus.all_cities')}</option>
                            <option value="Bazzano">Bazzano</option>
                            <option value="Bologna">Bologna</option>
                            <option value="Casalecchio">Casalecchio</option>
                            <option value="Ferrara">Ferrara</option>
                            <option value="Loiano">Loaino</option>
                            <option value="Malalabergo">Malalabergo</option>
                            <option value="Modena">Modena</option>
                            <option value="Parma">Parma</option>
                            <option value="Piacenza">Piacenza</option>
                            <option value="Panoro">Panoro</option>
                            <option value="Pietramala">Pietramala</option>
                            <option value="Pistoia">Pistoia</option>
                            <option value="Porretta">Porretta</option>
                            <option value="Ravenna">Ravenna</option>
                            <option value="Valsamoggia">Valsamoggia</option>
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
                            val.author[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.fragment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.web_link.toLowerCase().includes(searchTerm.toLowerCase())
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
                        <p>{item.author[0]}</p>
                        <p>{item.author[1]}</p>
                        <p>{item.author[2]}</p>
                        <p>
                        <HashLink to={item.web_link}>Link</HashLink>
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
                    {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item
                        key={index}
                        active={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
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