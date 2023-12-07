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
// Translation
import { useTranslation } from "react-i18next";

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
const markerIcons =generateIcons(7);

const coordinates = [
  [44.479117, 11.298120], // 1. Santuario della Madonna di San Luca
  [44.4434, 11.3576], // 2. Rastignano - Carteria di Sesto
  [44.383333, 11.333333], // 3. Pianoro
  [44.325736, 11.332990], // 4. Livergnano 
  [44.266667, 11.316567], // 5. Loiano 
  [44.259153, 11.334404], // 6. Osservatorio di Loiano
  [44.216667, 11.316667] // 7 Monghidoro
];

const markerContent = [
  "Santuario della Madonna di San Luca",
  "Rastignano - Carteria di Sesto",
  "Pianoro",
  "Livergnano",
  "Loiano",
  "Osservatorio di Loiano",
  "Monghidoro"
  // Add more popup content for each coordinate
];

function convertCoordinatestoMarkers(coords,m_icons,m_content){
  return coords.map((coord, idx) => (
    <Marker position={coord} key={idx} icon={m_icons[idx]}>
      <Popup>
        <div>
          {/*<h4>Location {idx + 1}</h4>*/}
          <p>{m_content[idx]}</p>
        </div>
      </Popup>
    </Marker>
  ));
}


const GeneralRoute = () => {
  const markers = convertCoordinatestoMarkers(coordinates,markerIcons,markerContent)
  const path = <Polyline positions={coordinates} color="black" weight={3} opacity={0.3}  />;

  const [center, setCenter] = useState({ lat: 44.49381, lng: 11.33875 });
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
              <h2>Appennino Route</h2>
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
          <p>Pittoreschi borghi, paradisi nascosti, natura protagonista indiscussa: l'Appennino vicino a Bologna regala esperienze davvero uniche, un viaggio tra bellezze naturalistiche, paesaggistiche, architettoniche e archeologiche.</p>
          <Row className='routes-icons'>
            <Col>
              <RiIcons.RiTimerLine className='routes-icon'/><span>&nbsp;12 h</span>
            </Col>
            <Col>
              <GiIcons.GiPathDistance className='routes-icon'/><span>&nbsp;50 km</span>
            </Col>
            <Col>
              <GiIcons.GiFootsteps className='routes-icon'/><span>&nbsp;{t('maps.difficult')}</span>
            </Col>
          </Row>
          <br/>
          <div className='fragments-list'>
              <Row className="no-gutters">
                <Col id='scrollable-col'>
                  <h3>&nbsp;ITINERARY</h3>
                  <Card className='card-title-routes'>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>San Luca - F. Trollope</strong></h5>
                      <p className="fragment_font">"The situation of this church and convent is one very rarely equalled for isolated grandeur of elevation. The abruptness of the ascent gives the view of the city and surrounding country unbroken by any intervening objects in the foreground. It was like looking at a landscape at the Diorama."</p>
                      <p>Frances Trollope</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>San Luca - A. G. Glagolev</strong></h5>
                      <p className="fragment_font">"Болонья лежитъ при подошвѣ Аппенинскихъ горъ и окружена живописными окрестностями. […] Изъ окрестностей Болоньи достойна примѣчанія церковь Мадонны делла-Гвардія. Она стоитъ на скатѣ Апеннинской горы, на которую ведетъ огромный портикъ, состоящій изъ 700 аркадъ и простирающійся на пространствѣ трехъ Иіиаліянскихъ миль или 4 Русскихъ верстъ."</p>
                      <p>Andrej Gavrilovič Glagolev</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={mast} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Rastignano - Madame de Reck</strong></h5>
                      <p className="fragment_font">"Le pays, autour de Bologne est sain : l'hiver y est rude à cause des Apennins, mais aussi l'air, dans cette saison, est plus pur encore. Le sol qui est très fertile, donne abondamment du vin, du blé, des noix, du chanvre, du lin, du tabac et des fruits de toute espèce."</p>
                      <p>Madame de Reck</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={ustica} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Pianoro - M. Dunbar</strong></h5>
                      <p className="fragment_font">"From Lojano to Pianoro, the descent is very abrupt, requiring additional drags upon the wheels. The views here, from various points of the road, are exceedingly striking."</p>
                      <p>Margaret Dunbar</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Pianoro - J. de La Lande </strong></h5>
                      <p className="fragment_font">"Pianoro est un village situé à 2 lieues de Bologne sur la Savena, riviere qui passe à côté de la ville, vers l'Orient."</p>
                      <p>Jérôme de La Lande</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Livergnano - C. A. de Baena</strong></h5>
                      <p className="fragment_font">"Cuando salí de Pietra mala pasó por tres lugarillos llamados Escarica el Asino, La Guardia y Liberñano, todos en el Estado del Papa. A las dos de la tarde volví á marchar, pasé por un lugarillo llamado Pionero donde finalizan los Apeninos, y a las seis de la tarde llegué á la ciudad de Bolonia que hay 14 millas."</p>
                      <p>Clemente Antonio de Beana Trollope</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Livergnano - Stendhal</strong></h5>
                      <p className="fragment_font">"Il y a près de deux ans qu’on s’aperçut avec terreur, à Bologne et à Florence, qu’en suivant la route sur laquelle nous sommes, les voyageurs disparaissaient. Les recherches de deux gouvernements sans nerf n’arrivèrent qu’à cette certitude, c’est que jamais on ne trouvait de dépouilles dans les montagnes de l’Apennin."</p>
                      <p>Stendhal</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - A. D. Chancel</strong></h5>
                      <p className="fragment_font">"to Fiorenzola is a very steep way, and to Loyan 14 Miles indifferent good, through the Mountains, both sides are full of chestnut Trees. From thence to Bolonia are counted 16 Miles, half the way we went through the Mountains, but the rest is very pleasant."</p>
                      <p>Alexander D. Chancel</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - Montaigne</strong></h5>
                      <p className="fragment_font">"LOYAN, sese milles, petit village assés mal commode. Il n’y a en ce village que deus hosteleries qui sont fameuses entre toutes celles d’Italie, de la trahison qui s’y fait aus passans, de les paistre de belles promesses de toute sorte de commodités, avant qu’ils mettent pied à terre, & s’en mocquer quand ils les tiennent à leur mercy : de quoy il y a des proverbes publics."</p>
                      <p>Michel Eyquem de Montaigne</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - J. de Viera y Clavijo</strong></h5>
                      <p className="fragment_font">"Otra posta á Pianura, otra á Layola, otra á Alanjon, y otra posta y media á Bolonia, de buen camino, mas fondoso y bien cultivado. Pasamos el puente del Rio Sabena que se paga, y llegarnos á la Locanda, ó posada del peregrino á las 4 y media de la tarde, en la cual inmediatamente nos cumplimentaron el regente y demas colegiales Españoles de san Clemente, los señores Pignatelis ex-Jesuitas y otr s &cc."</p>
                      <p>José de Viera y Clavijo</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - Stendhal</strong></h5>
                      <p className="fragment_font">"Arrivés à Loïano et regardant au nord, nous avons trouvé une vue magnifique : l’œil prend en travers cette fameuse plaine de Lombardie, large de quarante lieues, et qui, en longueur, s’étend de Turin à Venise. J’avouerai qu’on sait cela plus qu’on ne le voit ; mais on aime à chercher tant de villes célèbres au milieu de cette plaine immense et couverte d’arbres comme une forêt. L’Italien aime à faire le cicerone ; le maître de poste de Loïano a voulu me persuader que je voyais la mer Adriatique (19 lieues) : je n’ai point eu cet honneur-là."</p>
                      <p>Stendhal</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - P. A. Tolstoj</strong></h5>
                      <p className="fragment_font">"Ис той остари поутру я поехал и приехал в остарию, которая зовется Люяна, от остарии Ляшкала 17 миль италиянских. По той дороге превеликие каменные горы, на которые невозможно было взъехать в каляске; и мой витурин, то есть фурман, нанял мне верховую лошедь, на которой я на те горы взъехал. По тем горам и между гор много лесов; в тех лесах все плодовитые деревья, на которых родятся каштаны."</p>
                      <p>Petr Andreevič Tolstoj</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Osservatorio di Loiano - J. de La Lande</strong></h5>
                      <p className="fragment_font">"M. Perelli, habile Mathématicien qui est à la tête de cet Observatoire, a encore plusieurs beaux instrumens qui lui appartiennent en propre : il a 2800 liv. d'appointement', à la charge de se faire aider par M. Zloppe, jeune Médecin, qui a des connoissances dans le même genre : l'un & l'autre procureront à l'Astronomie, quand ils en voudront prendre la peine, des observations utiles. Il n'y a en Italie que l'Observatoire de Bologne, & celui que l'on a construit dernierement à Milan, qui puissent être comparés à celui de Pise."</p>
                      <p>Jérôme de La Lande</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Monghidoro - Italy and the Italians</strong></h5>
                      <p className="fragment_font">"Between Le Maschere and Scaricalasino is the highest part of the mountain, called the Giogo; and there the road is rather dangerous, as it hangs over tremendous precipices, without any kind of parapet; the sudden gusts of wind, and the mists which rise frequently in those upper regions are not apt to quiet the alarms of the unexperienced traveler. At Scaricalasino we left the territory of Tuscany, and entered the Papal States; our baggage underwent an examination by the custom house people, and our passports were inspected by the military officer on duty; two tiresome formalities which one must put up with frequently in travelling through Italy, as they occur every time one passes from one state into another, and sometimes twice in the same day. We descended from the Apennines into the fertile plains of the Bolognese, which have given to this city the epithet of Bologna la Grassa. I have seen very little of this place, and I shall state in my next letter the few remarks I have made during my short stay in it."</p>
                      <p>Italy and the Italians</p>
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
                    {userLocation && (
                        <Marker position={userLocation} icon={currentLocationIcon}>
                          <Popup>
                            <p>You're here</p>
                          </Popup>
                        </Marker>
                      )}
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
                    {userLocation && (
                        <Marker position={userLocation} icon={currentLocationIcon}>
                          <Popup>
                            <p>You're here</p>
                          </Popup>
                        </Marker>
                      )}
                  </MapContainer>
                </Col>
                <Col id='scrollable-col'>
                  <h3>&nbsp;ITINERARY</h3>
                  <Card className='card-title-routes'>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>San Luca - F. Trollope</strong></h5>
                      <p className="fragment_font">"The situation of this church and convent is one very rarely equalled for isolated grandeur of elevation. The abruptness of the ascent gives the view of the city and surrounding country unbroken by any intervening objects in the foreground. It was like looking at a landscape at the Diorama."</p>
                      <p>Frances Trollope</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>San Luca - A. G. Glagolev</strong></h5>
                      <p className="fragment_font">"Болонья лежитъ при подошвѣ Аппенинскихъ горъ и окружена живописными окрестностями. […] Изъ окрестностей Болоньи достойна примѣчанія церковь Мадонны делла-Гвардія. Она стоитъ на скатѣ Апеннинской горы, на которую ведетъ огромный портикъ, состоящій изъ 700 аркадъ и простирающійся на пространствѣ трехъ Иіиаліянскихъ миль или 4 Русскихъ верстъ."</p>
                      <p>Andrej Gavrilovič Glagolev</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={mast} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Rastignano - Madame de Reck</strong></h5>
                      <p className="fragment_font">"Le pays, autour de Bologne est sain : l'hiver y est rude à cause des Apennins, mais aussi l'air, dans cette saison, est plus pur encore. Le sol qui est très fertile, donne abondamment du vin, du blé, des noix, du chanvre, du lin, du tabac et des fruits de toute espèce."</p>
                      <p>Madame de Reck</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={ustica} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Pianoro - M. Dunbar</strong></h5>
                      <p className="fragment_font">"From Lojano to Pianoro, the descent is very abrupt, requiring additional drags upon the wheels. The views here, from various points of the road, are exceedingly striking."</p>
                      <p>Margaret Dunbar</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Pianoro - J. de La Lande </strong></h5>
                      <p className="fragment_font">"Pianoro est un village situé à 2 lieues de Bologne sur la Savena, riviere qui passe à côté de la ville, vers l'Orient."</p>
                      <p>Jérôme de La Lande</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Livergnano - C. A. de Baena</strong></h5>
                      <p className="fragment_font">"Cuando salí de Pietra mala pasó por tres lugarillos llamados Escarica el Asino, La Guardia y Liberñano, todos en el Estado del Papa. A las dos de la tarde volví á marchar, pasé por un lugarillo llamado Pionero donde finalizan los Apeninos, y a las seis de la tarde llegué á la ciudad de Bolonia que hay 14 millas."</p>
                      <p>Clemente Antonio de Beana Trollope</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Livergnano - Stendhal</strong></h5>
                      <p className="fragment_font">"Il y a près de deux ans qu’on s’aperçut avec terreur, à Bologne et à Florence, qu’en suivant la route sur laquelle nous sommes, les voyageurs disparaissaient. Les recherches de deux gouvernements sans nerf n’arrivèrent qu’à cette certitude, c’est que jamais on ne trouvait de dépouilles dans les montagnes de l’Apennin."</p>
                      <p>Stendhal</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - A. D. Chancel</strong></h5>
                      <p className="fragment_font">"to Fiorenzola is a very steep way, and to Loyan 14 Miles indifferent good, through the Mountains, both sides are full of chestnut Trees. From thence to Bolonia are counted 16 Miles, half the way we went through the Mountains, but the rest is very pleasant."</p>
                      <p>Alexander D. Chancel</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - Montaigne</strong></h5>
                      <p className="fragment_font">"LOYAN, sese milles, petit village assés mal commode. Il n’y a en ce village que deus hosteleries qui sont fameuses entre toutes celles d’Italie, de la trahison qui s’y fait aus passans, de les paistre de belles promesses de toute sorte de commodités, avant qu’ils mettent pied à terre, & s’en mocquer quand ils les tiennent à leur mercy : de quoy il y a des proverbes publics."</p>
                      <p>Michel Eyquem de Montaigne</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - J. de Viera y Clavijo</strong></h5>
                      <p className="fragment_font">"Otra posta á Pianura, otra á Layola, otra á Alanjon, y otra posta y media á Bolonia, de buen camino, mas fondoso y bien cultivado. Pasamos el puente del Rio Sabena que se paga, y llegarnos á la Locanda, ó posada del peregrino á las 4 y media de la tarde, en la cual inmediatamente nos cumplimentaron el regente y demas colegiales Españoles de san Clemente, los señores Pignatelis ex-Jesuitas y otr s &cc."</p>
                      <p>José de Viera y Clavijo</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - Stendhal</strong></h5>
                      <p className="fragment_font">"Arrivés à Loïano et regardant au nord, nous avons trouvé une vue magnifique : l’œil prend en travers cette fameuse plaine de Lombardie, large de quarante lieues, et qui, en longueur, s’étend de Turin à Venise. J’avouerai qu’on sait cela plus qu’on ne le voit ; mais on aime à chercher tant de villes célèbres au milieu de cette plaine immense et couverte d’arbres comme une forêt. L’Italien aime à faire le cicerone ; le maître de poste de Loïano a voulu me persuader que je voyais la mer Adriatique (19 lieues) : je n’ai point eu cet honneur-là."</p>
                      <p>Stendhal</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Loiano - P. A. Tolstoj</strong></h5>
                      <p className="fragment_font">"Ис той остари поутру я поехал и приехал в остарию, которая зовется Люяна, от остарии Ляшкала 17 миль италиянских. По той дороге превеликие каменные горы, на которые невозможно было взъехать в каляске; и мой витурин, то есть фурман, нанял мне верховую лошедь, на которой я на те горы взъехал. По тем горам и между гор много лесов; в тех лесах все плодовитые деревья, на которых родятся каштаны."</p>
                      <p>Petr Andreevič Tolstoj</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Osservatorio di Loiano - J. de La Lande</strong></h5>
                      <p className="fragment_font">"M. Perelli, habile Mathématicien qui est à la tête de cet Observatoire, a encore plusieurs beaux instrumens qui lui appartiennent en propre : il a 2800 liv. d'appointement', à la charge de se faire aider par M. Zloppe, jeune Médecin, qui a des connoissances dans le même genre : l'un & l'autre procureront à l'Astronomie, quand ils en voudront prendre la peine, des observations utiles. Il n'y a en Italie que l'Observatoire de Bologne, & celui que l'on a construit dernierement à Milan, qui puissent être comparés à celui de Pise."</p>
                      <p>Jérôme de La Lande</p>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Monghidoro - Italy and the Italians</strong></h5>
                      <p className="fragment_font">"Between Le Maschere and Scaricalasino is the highest part of the mountain, called the Giogo; and there the road is rather dangerous, as it hangs over tremendous precipices, without any kind of parapet; the sudden gusts of wind, and the mists which rise frequently in those upper regions are not apt to quiet the alarms of the unexperienced traveler. At Scaricalasino we left the territory of Tuscany, and entered the Papal States; our baggage underwent an examination by the custom house people, and our passports were inspected by the military officer on duty; two tiresome formalities which one must put up with frequently in travelling through Italy, as they occur every time one passes from one state into another, and sometimes twice in the same day. We descended from the Apennines into the fertile plains of the Bolognese, which have given to this city the epithet of Bologna la Grassa. I have seen very little of this place, and I shall state in my next letter the few remarks I have made during my short stay in it."</p>
                      <p>Italy and the Italians</p>
                    </Card.Body>
                  </Card>
                </Col>
        </div>
    </div>
    </>
  )
}

export default AppenninoRoute;