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

const markerIcons = [
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/1.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/2.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/3.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/4.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/5.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  new L.Icon({
    iconUrl: require('../../../../assets/imgs/maps-icons/6.png'),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -46],
  }),
  // Add more icons for each coordinate
];

const coordinates = [
  [44.496599, 11.351678], // 1. Accademia delle Scienze 
  [44.496599, 11.351778], // 2. Zona Universitaria, Palazzo Poggi e Rettorato 
  [44.492778, 11.343056], // 3 Basilica di San Petronio
  [44.492222, 11.343611], // 4 Teatro Anatomico (Biblioteca dell'Archiginnasio)
  [44.4892, 11.3397], // 5 Santuario Del Corpus Domini
  [44.497597, 11.30777] // 6 Cimitero della Certosa
];

const markerContent = [
  "Accademia delle Scienze",
  "Zona Universitaria, Palazzo Poggi e Rettorato",
  "Basilica di San Petronio",
  "Teatro Anatomico (Biblioteca dell'Archiginnasio",
  "Santuario del Corpus Domini",
  "Cimitero della Certosa",
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

const WomenRoute = () => {
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
          <Breadcrumb.Item active>Women Route</Breadcrumb.Item>
        </Breadcrumb>
          <div className="row align-items-center">
            <div className="col-md-9">
              <h2>Women Route</h2>
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
          <p>Bologna è ricca di donne che hanno dato il loro contributo al progresso artistico, alla divulgazione scientifica, alla strategia politica e al benessere sociale della città. Unite tutte da un unico fil rouge, la passione, che veicola da sempre l’animo femminile.</p>
          <Row className='routes-icons'>
            <Col>
              <RiIcons.RiTimerLine className='routes-icon'/><span>&nbsp;1h 30m</span>
            </Col>
            <Col>
              <GiIcons.GiPathDistance className='routes-icon'/><span>&nbsp;6km</span>
            </Col>
            <Col>
              <GiIcons.GiFootsteps className='routes-icon'/><span>&nbsp;{t('maps.intermediate')}</span>
            </Col>
          </Row>
          <br/>
          <div className='fragments-list'>
              <Row className="no-gutters">
                <Col id='scrollable-col'>
                  <h3>&nbsp;ITINERARY</h3>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Accademia delle Scienze - Voltaire</strong></h5>
                      <p className="fragment_font">"Io volevo fare il viaggio di Bologna, e dire un giorno a i miei cittadini, ho veduto la signora Bassi, ma privato de quest' onore, mi sia lecito almeno di mettere ai suoi piedi questo filosofico omaggio e di riverire l'onor del suo secolo e delle donne. Non cè una Bassi in Londra, e io sarei molto più felice d'essere aggregato alla sua Accademia di Bologna, che a quella degli inglesi, benché ella habbia prodotto un Newton."</p>
                      <p>Voltaire</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={mast} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Accademia delle Scienze - Charles de Brosses</strong></h5>
                      <p className="fragment_font">"Il ne faut pas oublier madame Laura Bassi, professeur en philosophie, laquelle a été reçue et a pris le bonnet de docteur en pleine université. Aussi en porte-t-elle la robe et l'hermine quand elle va faire des leçons publiques ; ce qui n'arrive que rarement et à certains jours solennels seulement ; parce qu'on n'a pas jugé qu'il fût décent qu'une femme montrât ainsi chaque jour, à tout venant, les choses cachées de la nature."</p>
                      <p>Charles de Brosses</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={ustica} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Accademia delle Scienze - Anne-Marie Lepage Fiquet du Boccage</strong></h5>
                      <p className="fragment_font">"L'après-midi nous vîmes l'Institut, où l'on m'a fait la grace de m'admettre ; ma gloire est grande ; il n'y a que trois femmes, la studieuse Laura Bassi, qui y professe la Physique, dont elle donne des cours publics en latin, la fameuse Géometre Agnesi, retirée dans un Couvent à Milan, et l'illustre Princesse de Collombrano, Napolitaine. La Marquise du Châtelet, aussi digne d'en être que je le suis peu, étoit de cette Académie des Sciences, fondée par Théodose le jeune, la plus ancienne, la plus riche de l'Europe."</p>
                      <p>Anne-Marie Lepage Fiquet du Boccage</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Jules Janin</strong></h5>
                      <p className="fragment_font">"Bologne se souvient encore d'une autre jeune fille, Novella d'Andrea, si savante qu'elle enseignait le droit canon, et si belle qu'elle cachait sa tête derrière un voile de laine. Pauvres grands artistes qui, malgré leur silence et leur génie, restaient au fond du cœur de simples femmes, avec leurs passions, leur terreur, leurs croyances, leurs faiblesses et leur amour?"</p>
                      <p>Jules Janin</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Maximiliam Joseph vom Lamberg</strong></h5>
                      <p className="fragment_font">"Une connoissance que je cultiverai encore avec plaisir, c'est celle de Mad. Laura Bassi connue sous le nom de Dotterassa : quoi qu'en dise une Dame auteur, qu'on n'amuse pas longtemps les femmes avec de l'esprit, celle-ci n'aime exactement que la Société de ceux qui en ont beaucoup."</p>
                      <p>Maximiliam Joseph von Lamberg</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Anonimo</strong></h5>
                      <p className="fragment_font">"J’ai eu plusieurs fois l’occasion de m’entretenir, de même que tous les Anglois qui sont ici, avec la célébre LAURA BASSI, Doctoresse en Philosophie, & Aggrégée à l’Université. Plusieurs ont de la peine à croire jusques où va le Genie de cette Fille, qui devant le Légat, des Magistrats & l’Université, soutint il y a quelque tems, en Latin & publiquement, toutes fortes de Disputes Académiques. Pour honorer son mérite singulier, on lui fit présent d’une Couronne d’argent, en forme de Couronne de Laurier ; & d’une Médaille. Elle fut revêtue & titrée du Doctorat, & reçue dans l’Université avec un Salaire, & pourtant à l’heure qu’il est, elle n’a que vingt ans."</p>
                      <p>Anonimo</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Anonimo</strong></h5>
                      <p className="fragment_font">"Elle a le visage tant soit peu picoté, doux, serieux & modeste. Des yeux noirs vifs, mais fermes, & composés sans affectation ou vanité apparente. La mémoire heureuse, le jugement solide, & l’imagination prompte. Elle me parla Latin coulamment une heure de suite, avec grâce & netteté. Elle est fort entendue dans la Metaphysique, mais elle goûte plus la Physique Moderne, & particulièrement l’Angloise. Elle me paroît très- versée dans tous les Systêmes, du moins elle m’a savamment répondu sur la Végetation, l’origine des Fontaines, le Flux & Reflux de la Mer, la Lumière, les Couleurs, les Sons, les mouvements des Planêtes, & plusieurs autres matiéres. Elle étudie actuellement les Mathématiques, pour se mettre en état de lire la Philosophie NEWTONIENNE."</p>
                      <p>Anonimo</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Gabriel-François Coyer</strong></h5>
                      <p className="fragment_font">"J'ai vu la Signora Laura Bassi, qui fait la langue d'Homère, qui parle Latin comme Cicéron, qui argumente à toute les thèses d'éclat, qui donne tous les ans un cours de Physique expérimentale à l'institut ; et qui, avec tout cela, a fait quatre enfans, dont elle n'a pas négligé l'éducation. Que dires vous de cette Mascula Sapho ? Son mari serait peut-être humilié d'avoir une femme si savante, s'il ne l'était pas lui-même."</p>
                      <p>Gabriel-François Coyer</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Charles de Rémusat</strong></h5>
                      <p className="fragment_font">"Bologne est une des villes qui ont vu naître le plus de femmes de savoir et de talent. L’université en a eu pour professeurs ; on cite encore Matilde Tambroni, Laura Bassi, Teresa Muratori, Elisabeth Sirani."</p>
                      <p>Charles de Rémusat</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Noémie Dondel du Faouëdic</strong></h5>
                      <p className="fragment_font">"Plusieurs publicistes et jurisconsultes distingués ont vu le jour à Bologne, – c'est à cette fameuse Université que la belle Maria Agnesi professait les mathémathiques ; initiée de bonne heure à l’étude des hautes sciences, par son père, elle y fit de tels progrès, qu'en 1750, le pape Benoit XIV, l'autorisa à succéder à son savant professeur, dans son cours public. Ses écrits publiés en latin ont eu les honneurs d'une traduction française."</p>
                      <p>Noémie Dondel du Faouëdic</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Jérôme de Lalande</strong></h5>
                      <p className="fragment_font">"Les femmes même se sont distinguées à Bologne par leur science. En 1366, Novella Lignani, en 1380, Bettizia Gozzadini, et Madalena Bonsignori professerent dans l'Université de Bologne ; actuellement encore Madame Laura Bassi depuis 1733, y remplit avec distinction une place de Professeur ; cette sçavante fait chez elle des cours de Physique expérimentale, et j'ai eu le plaisir d'assister à ses expériences."</p>
                      <p>Jérôme de Lalande</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Samuel Lorenzo Knapp</strong></h5>
                      <p className="fragment_font">"Maria Cajetana Agnesi, an Italian lady of great learning, was born at Milan, March 16th, 1718. Her inclinations, from her earliest youth, led her to the study of science; and at an age when young persons of her sex attend only to frivolous pursuits, she had made such astonishing progress in mathematics, that when, in 1750, her father, professor in the university of Bologna, was unable to continue his lectures, from infirm health, she obtained permission from the pope, Benedict XIV., to fill his chair. Before this, at the early age of nineteen, she had supported one hundred and ninety-one theses, which were published, in 1738, under the title "Propositiones Philosophies." She was mistress of Latin, Greek, Hebrew, French, German, and Spanish."</p>
                      <p>Samuel Lorenzo Knapp</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - John Carne</strong></h5>
                      <p className="fragment_font">"Bologna can boast at various times of female professors. In the fourteenth century, Novella di Andrea used to supply her father's place in the chair of canon law, and, as she was young and handsome, she is said to have had a curtain before her, that the attention of the students might not be distracted. In the last century, Laura Bassi taught philosophy; and still more lately, the celebrated Clotilde Tambroni, Greek; and at the present moment there are two female professors, one of law and the other of surgery."</p>
                      <p>John Carne</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Juan Andrés</strong></h5>
                      <p className="fragment_font">"...dos mugeres singulares, la célebre Doctora Laura Bassi, en quien competían una profunda doctrina , bastante para hacer lucir á qualquier hombre, y una admirable modestia, y la Señora Ana Morandi viuda de Manzolini, famosa por su habilidad de trabajar en cera las partes anatómicas, y por las lecciones públicas que daba de anotomia ;"</p>
                      <p>Juan Andrés</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Pedro Antonio de Alarcón</strong></h5>
                      <p className="fragment_font">"Una de estas doctoras, llamada Novella, heredó la cátedra de su padre en 1360; pero era tan joven y tan linda, que se veia obligada á esplicar detrás de una cortina, á fin de que sus hechizos no distrajeran al auditorio. También han dejado nombre la profesora de griego Clotilde Tambroni y la gran matemática y latina Gaetana Agresi, asombro y envidia de los primeros sabios de Milan."</p>
                      <p>Pedro Antonio de Alarcón</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Benito Pérez Galdós</strong></h5>
                      <p className="fragment_font">"En el siglo XIV fué maestra en aquellas cátedras “Novella d’Andreu”, que explicaba sus lecciones oculta detrás de una cortina para que los alumnos no se distrajeran con la extremada belleza de la profesora. Otra que tal, llamada Laura Bassi, explicó matemáticas y física; Manzolina dió varios cursos de anatomía, y aún en nuestro siglo enseñó, nada menos que el griego, Clotilde Tromboni."</p>
                      <p>Benito Pérez Galdós</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Petr Andreevič Tolstoj</strong></h5>
                      <p className="fragment_font">"Женской народ в Болони изрядной, благообразной, платье носят власно так, как римлянки. В Болони честные и богатые люди, и жены их, и девицы ездят в коретах изрядных и в калясках на добрых лошедях, и уборы у них коретные изрядные; а пеши честные люди, и жены их, и дочери не ходят ик имеют то под зазором."</p>
                      <p>Petr Andreevič Tolstoj</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Bolonskij Universitet, Dizionario Brokgauz & Efron</strong></h5>
                      <p className="fragment_font">"Свою любовь к занятиям юриспруденцией Аккурсий передал и детям, а дочь его, Дота д’Аккорсо, удостоенная университетом степени доктора прав и допущенная к публичному преподаванию, была первая из женщин, упоминаемая в летописях университета. За ней последовали другие женщины-юристки, как Битгизия, Гоццацини, Новелла д’Андреа и др."</p>
                      <p>Bolonskij Universitet, Dizionario Brokgauz & Efron</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - V.I. Nemirovič- Dančenko</strong></h5>
                      <p className="fragment_font">"Одна изъ нихъ, Новелла д`Андреа, въ XIV вѣкѣ была не только чудомъ науки, но и женщины совершенствомъ красоты. Чтобы слушатели не забывали первую ради второй, она читала свои лекціи за занавѣсомъ, скрытая отъ ихъ взоровъ."</p>
                      <p>V.I. Nemirovič- Dančenko</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Prokop’ev N.Ja.</strong></h5>
                      <p className="fragment_font">"Известность таланта Анны Манцолини в литье анатомических моделей распространилась по всей Европе, и она была приглашена ко двору Екатерины II, а также к другим королевским дворам."</p>
                      <p>Prokop’ev N.Ja.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Jumangulov V.Ja.</strong></h5>
                      <p className="fragment_font">"В 1878 году были напечатаны письма Екатерины II 1774-1796 годов к барону Мельхиору Гримму с пояснительными примечаниями Якова Грота. В письме от 4 августа 1776 года, отправленном из Царского села, императрица сообщала: “Что касается портрета и бюста превосходной мастерицы из Болоньи, то они у меня в Петергофе; бюст стоит на моем столе и все меня спрашивают: “Кто это?”, а я, чтобы обескуражить докучливых вопрошателей, говорю: “Это моя бабушка”."</p>
                      <p>Jumangulov V.Ja.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Basilica di San Petronio - Jules Janin</strong></h5>
                      <p className="fragment_font">"Puis vous entrez dans les églises, dans l'église Sainte-Pétrone, dont les portes se sentent du voisinage de Florence:  une de ses portes fut sculptée par une belle personne du quinzième siècle, Properzia de Rossi, morte d'amour! Dans cette église il y avait une statue de Jules II, par Michel-Ange; mais le peuple de Bologne, moins habile que celui de Florence, a brisé la statue de Michel-Ange."</p>
                      <p>Jules Janin</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Teatro Anatomico - Lady Sydney Morgan</strong></h5>
                      <p className="fragment_font">"But Bologna, of all the Italian Republics, seems to have the longest retained her learned women, and to have most venerated the powers of female intellect. The chairs of the university, down to the present day, have been occasionally filled by female professors. To the Maddalena Bonsignori, and Bettizia Gozzani, who mounted the cap and gown in the middle ages, succeeded the fair Doctors, Laura Bassi, Professor of Physic, and Madonna Manzolina, Lecturer on Anatomy, of more recent times. The late Signora Clotilda Tamborini, joint Professor of Greek with the Abate Mezzofante, had only vacated her chair by death, a short time before we arrived at Bologna;"</p>
                      <p>Lady Sydney Morgan</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Santuario del Corpus Domini - Eustache Rocheleau</strong></h5>
                      <p className="fragment_font">"Après la visite de l'archigymnase, nous entrons à l'église du Corpus Christi, dépendant du monastère des Clarisses qui l'avoisine. C'est là que se conserve le corps de sainte Catherine de Bologne, ancienne abbesse, entourée d'honneur et de vénération après avoir édifié son couvent et la ville par l'éclat de ses vertus et le retentissement de ses miracles."</p>
                      <p>Eustache Rocheleau</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Santuario del Corpus Domini - Jean-Baptiste Legacé</strong></h5>
                      <p className="fragment_font">"Non seulement saine Catherine fut une grande sainte ; mais elle fut encore musicienne, peintre, écrivain et sut ainsi aimer Dieu et chanter ses louanges par l’Art, cette voix puissante qui trouve des accents presque divins, quand il est entièrement consacré à entraîner les âmes hors des bourbiers terrestres pour les faire monter jusqu’à l’idéale beauté. Et je comprends maintenant comment sainte Catherine a pu être le trésor enflammé qui a embrasé son époque, de l’amour divin."</p>
                      <p>Jean-Baptiste Legacé</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Cimitero della Certosa - Jules Janin</strong></h5>
                      <p className="fragment_font">"Seulement, pour pénétrer sous ces arcades consacrées au repos éternel, il vous faut traverser la vieille église des Chartreux et quelques petits fragments de l'ancien cloître, où se lisent encore les noms de Canali, de Cesi, de Louis Carrache et de la jeune Élisabeth Sirani, l'élève du Guide, aussi grand peintre que la jeune Properzia de Rossi était un grand statuaire; car Bologne a donné le jour à plus d'un talent féminin excellent."</p>
                      <p>Jules Janin</p>
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
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={specola} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Accademia delle Scienze - Voltaire</strong></h5>
                      <p className="fragment_font">"Io volevo fare il viaggio di Bologna, e dire un giorno a i miei cittadini, ho veduto la signora Bassi, ma privato de quest' onore, mi sia lecito almeno di mettere ai suoi piedi questo filosofico omaggio e di riverire l'onor del suo secolo e delle donne. Non cè una Bassi in Londra, e io sarei molto più felice d'essere aggregato alla sua Accademia di Bologna, che a quella degli inglesi, benché ella habbia prodotto un Newton."</p>
                      <p>Voltaire</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={mast} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Accademia delle Scienze - Charles de Brosses</strong></h5>
                      <p className="fragment_font">"Il ne faut pas oublier madame Laura Bassi, professeur en philosophie, laquelle a été reçue et a pris le bonnet de docteur en pleine université. Aussi en porte-t-elle la robe et l'hermine quand elle va faire des leçons publiques ; ce qui n'arrive que rarement et à certains jours solennels seulement ; parce qu'on n'a pas jugé qu'il fût décent qu'une femme montrât ainsi chaque jour, à tout venant, les choses cachées de la nature."</p>
                      <p>Charles de Brosses</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={ustica} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Accademia delle Scienze - Anne-Marie Lepage Fiquet du Boccage</strong></h5>
                      <p className="fragment_font">"L'après-midi nous vîmes l'Institut, où l'on m'a fait la grace de m'admettre ; ma gloire est grande ; il n'y a que trois femmes, la studieuse Laura Bassi, qui y professe la Physique, dont elle donne des cours publics en latin, la fameuse Géometre Agnesi, retirée dans un Couvent à Milan, et l'illustre Princesse de Collombrano, Napolitaine. La Marquise du Châtelet, aussi digne d'en être que je le suis peu, étoit de cette Académie des Sciences, fondée par Théodose le jeune, la plus ancienne, la plus riche de l'Europe."</p>
                      <p>Anne-Marie Lepage Fiquet du Boccage</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Jules Janin</strong></h5>
                      <p className="fragment_font">"Bologne se souvient encore d'une autre jeune fille, Novella d'Andrea, si savante qu'elle enseignait le droit canon, et si belle qu'elle cachait sa tête derrière un voile de laine. Pauvres grands artistes qui, malgré leur silence et leur génie, restaient au fond du cœur de simples femmes, avec leurs passions, leur terreur, leurs croyances, leurs faiblesses et leur amour?"</p>
                      <p>Jules Janin</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Maximiliam Joseph vom Lamberg</strong></h5>
                      <p className="fragment_font">"Une connoissance que je cultiverai encore avec plaisir, c'est celle de Mad. Laura Bassi connue sous le nom de Dotterassa : quoi qu'en dise une Dame auteur, qu'on n'amuse pas longtemps les femmes avec de l'esprit, celle-ci n'aime exactement que la Société de ceux qui en ont beaucoup."</p>
                      <p>Maximiliam Joseph von Lamberg</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Anonimo</strong></h5>
                      <p className="fragment_font">"J’ai eu plusieurs fois l’occasion de m’entretenir, de même que tous les Anglois qui sont ici, avec la célébre LAURA BASSI, Doctoresse en Philosophie, & Aggrégée à l’Université. Plusieurs ont de la peine à croire jusques où va le Genie de cette Fille, qui devant le Légat, des Magistrats & l’Université, soutint il y a quelque tems, en Latin & publiquement, toutes fortes de Disputes Académiques. Pour honorer son mérite singulier, on lui fit présent d’une Couronne d’argent, en forme de Couronne de Laurier ; & d’une Médaille. Elle fut revêtue & titrée du Doctorat, & reçue dans l’Université avec un Salaire, & pourtant à l’heure qu’il est, elle n’a que vingt ans."</p>
                      <p>Anonimo</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Anonimo</strong></h5>
                      <p className="fragment_font">"Elle a le visage tant soit peu picoté, doux, serieux & modeste. Des yeux noirs vifs, mais fermes, & composés sans affectation ou vanité apparente. La mémoire heureuse, le jugement solide, & l’imagination prompte. Elle me parla Latin coulamment une heure de suite, avec grâce & netteté. Elle est fort entendue dans la Metaphysique, mais elle goûte plus la Physique Moderne, & particulièrement l’Angloise. Elle me paroît très- versée dans tous les Systêmes, du moins elle m’a savamment répondu sur la Végetation, l’origine des Fontaines, le Flux & Reflux de la Mer, la Lumière, les Couleurs, les Sons, les mouvements des Planêtes, & plusieurs autres matiéres. Elle étudie actuellement les Mathématiques, pour se mettre en état de lire la Philosophie NEWTONIENNE."</p>
                      <p>Anonimo</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Gabriel-François Coyer</strong></h5>
                      <p className="fragment_font">"J'ai vu la Signora Laura Bassi, qui fait la langue d'Homère, qui parle Latin comme Cicéron, qui argumente à toute les thèses d'éclat, qui donne tous les ans un cours de Physique expérimentale à l'institut ; et qui, avec tout cela, a fait quatre enfans, dont elle n'a pas négligé l'éducation. Que dires vous de cette Mascula Sapho ? Son mari serait peut-être humilié d'avoir une femme si savante, s'il ne l'était pas lui-même."</p>
                      <p>Gabriel-François Coyer</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Charles de Rémusat</strong></h5>
                      <p className="fragment_font">"Bologne est une des villes qui ont vu naître le plus de femmes de savoir et de talent. L’université en a eu pour professeurs ; on cite encore Matilde Tambroni, Laura Bassi, Teresa Muratori, Elisabeth Sirani."</p>
                      <p>Charles de Rémusat</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Noémie Dondel du Faouëdic</strong></h5>
                      <p className="fragment_font">"Plusieurs publicistes et jurisconsultes distingués ont vu le jour à Bologne, – c'est à cette fameuse Université que la belle Maria Agnesi professait les mathémathiques ; initiée de bonne heure à l’étude des hautes sciences, par son père, elle y fit de tels progrès, qu'en 1750, le pape Benoit XIV, l'autorisa à succéder à son savant professeur, dans son cours public. Ses écrits publiés en latin ont eu les honneurs d'une traduction française."</p>
                      <p>Noémie Dondel du Faouëdic</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Jérôme de Lalande</strong></h5>
                      <p className="fragment_font">"Les femmes même se sont distinguées à Bologne par leur science. En 1366, Novella Lignani, en 1380, Bettizia Gozzadini, et Madalena Bonsignori professerent dans l'Université de Bologne ; actuellement encore Madame Laura Bassi depuis 1733, y remplit avec distinction une place de Professeur ; cette sçavante fait chez elle des cours de Physique expérimentale, et j'ai eu le plaisir d'assister à ses expériences."</p>
                      <p>Jérôme de Lalande</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Samuel Lorenzo Knapp</strong></h5>
                      <p className="fragment_font">"Maria Cajetana Agnesi, an Italian lady of great learning, was born at Milan, March 16th, 1718. Her inclinations, from her earliest youth, led her to the study of science; and at an age when young persons of her sex attend only to frivolous pursuits, she had made such astonishing progress in mathematics, that when, in 1750, her father, professor in the university of Bologna, was unable to continue his lectures, from infirm health, she obtained permission from the pope, Benedict XIV., to fill his chair. Before this, at the early age of nineteen, she had supported one hundred and ninety-one theses, which were published, in 1738, under the title "Propositiones Philosophies." She was mistress of Latin, Greek, Hebrew, French, German, and Spanish."</p>
                      <p>Samuel Lorenzo Knapp</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - John Carne</strong></h5>
                      <p className="fragment_font">"Bologna can boast at various times of female professors. In the fourteenth century, Novella di Andrea used to supply her father's place in the chair of canon law, and, as she was young and handsome, she is said to have had a curtain before her, that the attention of the students might not be distracted. In the last century, Laura Bassi taught philosophy; and still more lately, the celebrated Clotilde Tambroni, Greek; and at the present moment there are two female professors, one of law and the other of surgery."</p>
                      <p>John Carne</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Juan Andrés</strong></h5>
                      <p className="fragment_font">"...dos mugeres singulares, la célebre Doctora Laura Bassi, en quien competían una profunda doctrina , bastante para hacer lucir á qualquier hombre, y una admirable modestia, y la Señora Ana Morandi viuda de Manzolini, famosa por su habilidad de trabajar en cera las partes anatómicas, y por las lecciones públicas que daba de anotomia ;"</p>
                      <p>Juan Andrés</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Pedro Antonio de Alarcón</strong></h5>
                      <p className="fragment_font">"Una de estas doctoras, llamada Novella, heredó la cátedra de su padre en 1360; pero era tan joven y tan linda, que se veia obligada á esplicar detrás de una cortina, á fin de que sus hechizos no distrajeran al auditorio. También han dejado nombre la profesora de griego Clotilde Tambroni y la gran matemática y latina Gaetana Agresi, asombro y envidia de los primeros sabios de Milan."</p>
                      <p>Pedro Antonio de Alarcón</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Benito Pérez Galdós</strong></h5>
                      <p className="fragment_font">"En el siglo XIV fué maestra en aquellas cátedras “Novella d’Andreu”, que explicaba sus lecciones oculta detrás de una cortina para que los alumnos no se distrajeran con la extremada belleza de la profesora. Otra que tal, llamada Laura Bassi, explicó matemáticas y física; Manzolina dió varios cursos de anatomía, y aún en nuestro siglo enseñó, nada menos que el griego, Clotilde Tromboni."</p>
                      <p>Benito Pérez Galdós</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Petr Andreevič Tolstoj</strong></h5>
                      <p className="fragment_font">"Женской народ в Болони изрядной, благообразной, платье носят власно так, как римлянки. В Болони честные и богатые люди, и жены их, и девицы ездят в коретах изрядных и в калясках на добрых лошедях, и уборы у них коретные изрядные; а пеши честные люди, и жены их, и дочери не ходят ик имеют то под зазором."</p>
                      <p>Petr Andreevič Tolstoj</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Bolonskij Universitet, Dizionario Brokgauz & Efron</strong></h5>
                      <p className="fragment_font">"Свою любовь к занятиям юриспруденцией Аккурсий передал и детям, а дочь его, Дота д’Аккорсо, удостоенная университетом степени доктора прав и допущенная к публичному преподаванию, была первая из женщин, упоминаемая в летописях университета. За ней последовали другие женщины-юристки, как Битгизия, Гоццацини, Новелла д’Андреа и др."</p>
                      <p>Bolonskij Universitet, Dizionario Brokgauz & Efron</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - V.I. Nemirovič- Dančenko</strong></h5>
                      <p className="fragment_font">"Одна изъ нихъ, Новелла д`Андреа, въ XIV вѣкѣ была не только чудомъ науки, но и женщины совершенствомъ красоты. Чтобы слушатели не забывали первую ради второй, она читала свои лекціи за занавѣсомъ, скрытая отъ ихъ взоровъ."</p>
                      <p>V.I. Nemirovič- Dančenko</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Prokop’ev N.Ja.</strong></h5>
                      <p className="fragment_font">"Известность таланта Анны Манцолини в литье анатомических моделей распространилась по всей Европе, и она была приглашена ко двору Екатерины II, а также к другим королевским дворам."</p>
                      <p>Prokop’ev N.Ja.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Zona Universitaria, Palazzo Poggi e Rettorato - Jumangulov V.Ja.</strong></h5>
                      <p className="fragment_font">"В 1878 году были напечатаны письма Екатерины II 1774-1796 годов к барону Мельхиору Гримму с пояснительными примечаниями Якова Грота. В письме от 4 августа 1776 года, отправленном из Царского села, императрица сообщала: “Что касается портрета и бюста превосходной мастерицы из Болоньи, то они у меня в Петергофе; бюст стоит на моем столе и все меня спрашивают: “Кто это?”, а я, чтобы обескуражить докучливых вопрошателей, говорю: “Это моя бабушка”."</p>
                      <p>Jumangulov V.Ja.</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Basilica di San Petronio - Jules Janin</strong></h5>
                      <p className="fragment_font">"Puis vous entrez dans les églises, dans l'église Sainte-Pétrone, dont les portes se sentent du voisinage de Florence:  une de ses portes fut sculptée par une belle personne du quinzième siècle, Properzia de Rossi, morte d'amour! Dans cette église il y avait une statue de Jules II, par Michel-Ange; mais le peuple de Bologne, moins habile que celui de Florence, a brisé la statue de Michel-Ange."</p>
                      <p>Jules Janin</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Teatro Anatomico - Lady Sydney Morgan</strong></h5>
                      <p className="fragment_font">"But Bologna, of all the Italian Republics, seems to have the longest retained her learned women, and to have most venerated the powers of female intellect. The chairs of the university, down to the present day, have been occasionally filled by female professors. To the Maddalena Bonsignori, and Bettizia Gozzani, who mounted the cap and gown in the middle ages, succeeded the fair Doctors, Laura Bassi, Professor of Physic, and Madonna Manzolina, Lecturer on Anatomy, of more recent times. The late Signora Clotilda Tamborini, joint Professor of Greek with the Abate Mezzofante, had only vacated her chair by death, a short time before we arrived at Bologna;"</p>
                      <p>Lady Sydney Morgan</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Santuario del Corpus Domini - Eustache Rocheleau</strong></h5>
                      <p className="fragment_font">"Après la visite de l'archigymnase, nous entrons à l'église du Corpus Christi, dépendant du monastère des Clarisses qui l'avoisine. C'est là que se conserve le corps de sainte Catherine de Bologne, ancienne abbesse, entourée d'honneur et de vénération après avoir édifié son couvent et la ville par l'éclat de ses vertus et le retentissement de ses miracles."</p>
                      <p>Eustache Rocheleau</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Santuario del Corpus Domini - Jean-Baptiste Legacé</strong></h5>
                      <p className="fragment_font">"Non seulement saine Catherine fut une grande sainte ; mais elle fut encore musicienne, peintre, écrivain et sut ainsi aimer Dieu et chanter ses louanges par l’Art, cette voix puissante qui trouve des accents presque divins, quand il est entièrement consacré à entraîner les âmes hors des bourbiers terrestres pour les faire monter jusqu’à l’idéale beauté. Et je comprends maintenant comment sainte Catherine a pu être le trésor enflammé qui a embrasé son époque, de l’amour divin."</p>
                      <p>Jean-Baptiste Legacé</p>
                    </Card.Body>
                  </Card>
                  <br/>
                  <Card>
                    <Card.Body className='card-body-routes'>
                      {/*<img src={pinacoteca} alt='da inserire' className='routes-img-small'></img>*/}
                      <h5><strong>Cimitero della Certosa - Jules Janin</strong></h5>
                      <p className="fragment_font">"Seulement, pour pénétrer sous ces arcades consacrées au repos éternel, il vous faut traverser la vieille église des Chartreux et quelques petits fragments de l'ancien cloître, où se lisent encore les noms de Canali, de Cesi, de Louis Carrache et de la jeune Élisabeth Sirani, l'élève du Guide, aussi grand peintre que la jeune Properzia de Rossi était un grand statuaire; car Bologne a donné le jour à plus d'un talent féminin excellent."</p>
                      <p>Jules Janin</p>
                    </Card.Body>
                  </Card>
                </Col>
        </div>
    </div>
    </>
  )
}

export default WomenRoute;