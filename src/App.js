import React, {Suspense, useState} from 'react';
import './App.css';
// Router-dom
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
// Components
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Project from './components/pages/Project_pages/Project';
import About from './components/pages/About_pages/About';
import Corpus from './components/pages/Corpus_pages/Corpus';
import Maps from './components/pages/Maps_pages/Maps';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import Profile from './components/pages/Profile_pages/Profile';
import Places from './components/pages/Maps_pages/Places';
import SinglePlace from './components/pages/Maps_pages/Places/SinglePlace';
import HeritageRoutes from './components/pages/Maps_pages/HeritageRoutes';
import RouteDetails from './components/pages/Maps_pages/Heritage_Routes/RouteDetails';
//Routes 
import MuseumRoute from './components/pages/Maps_pages/Heritage_Routes/MuseumRoute';
import WomenRoute from './components/pages/Maps_pages/Heritage_Routes/WomenRoute';
import AppenninoRoute from './components/pages/Maps_pages/Heritage_Routes/AppenninoRoute';
//Travellers 
import Travellers from './components/pages/Maps_pages/Travellers';
import EnglishTravellers from './components/pages/Maps_pages/Travellers/EnglishTravellers';
import FrenchTravellers from './components/pages/Maps_pages/Travellers/FrenchTravellers';
import SpanishTravellers from './components/pages/Maps_pages/Travellers/SpanishTravellers';
import RussianTravellers from './components/pages/Maps_pages/Travellers/RussianTravellers';
import TravellerPage from './components/pages/Maps_pages/Travellers/TravellerPage';
//EN 
import CharlesDickens from './components/pages/Maps_pages/Travellers/EN/CharlesDickens';
import FrancesTrollope from './components/pages/Maps_pages/Travellers/EN/FrancesTrollope';
import JosephAddison from './components/pages/Maps_pages/Travellers/EN/JosephAddison';
import LordByron from './components/pages/Maps_pages/Travellers/EN/LordByron';
import MarianaStarke from './components/pages/Maps_pages/Travellers/EN/MarianaStarke';
import RichardBurton from './components/pages/Maps_pages/Travellers/EN/RichardBurton';
import RobertBrowning from './components/pages/Maps_pages/Travellers/EN/RobertBrowning';
import VernonLee from './components/pages/Maps_pages/Travellers/EN/VernonLee';
// FR
import GoncourtBrothers from './components/pages/Maps_pages/Travellers/FR/BrothersGoncourt';
import HyppoliteTaine from './components/pages/Maps_pages/Travellers/FR/HyppolyteTaine';
import JeromeLande from './components/pages/Maps_pages/Travellers/FR/JeromedeLaLande';
import MadameDeStael from './components/pages/Maps_pages/Travellers/FR/MadameDeStael';
import MicheldeMontaigne from './components/pages/Maps_pages/Travellers/FR/MicheldeMontaigne';
import ReneBazin from './components/pages/Maps_pages/Travellers/FR/ReneBazin';
import Stendhal from './components/pages/Maps_pages/Travellers/FR/Stendhal';
// ES
import BenitoGaldos from './components/pages/Maps_pages/Travellers/ES/BenitoPerezGaldos';
import CarmendeBurgos from './components/pages/Maps_pages/Travellers/ES/CarmenBurgos';
import CristobaldeVillalon from './components/pages/Maps_pages/Travellers/ES/CristobaldeVillalon';
import LeandroMoratin from './components/pages/Maps_pages/Travellers/ES/LeandroMoratin';
import MigueldeCervantes from './components/pages/Maps_pages/Travellers/ES/MigueldeCervantes';
import PedrodeAlarcon from './components/pages/Maps_pages/Travellers/ES/PedrodeAlarcon';
import PioBaroja from './components/pages/Maps_pages/Travellers/ES/PioBaroja';
// RU
import AleksandrGlagolev from './components/pages/Maps_pages/Travellers/RU/AleksandrGlagolev';
import AleksandrHerzen from './components/pages/Maps_pages/Travellers/RU/AleksandrHerzen';
import DenisFonzivin from './components/pages/Maps_pages/Travellers/RU/DenisFonzivin';
import DmitryMuratov from './components/pages/Maps_pages/Travellers/RU/DmitryMuratov';
import NikolajGrec from './components/pages/Maps_pages/Travellers/RU/NikolajGrec';
import PetrAndreevicTolstoj from './components/pages/Maps_pages/Travellers/RU/PetrAndreevicTolstoj';
// Other imports 
import ProfileDetails from './components/pages/Profile_pages/ProfileDetails';
import Signin from './components/pages/Profile_pages/Signin';
import Signup from './components/pages/Profile_pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import FavoritesPage from './components/pages/Profile_pages/Favorites';
import BookmarksPage from './components/pages/Profile_pages/Bookmarks';
import Settings from './components/pages/Profile_pages/Settings';
import Documentation from './components/Documentation';
// Temporary Coming Soon
import ComingSoon from './components/ComingSoon';
//Translation imports
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import Loading from './components/Loading';
import { I18nextProvider } from 'react-i18next';


function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return (
    <>
    <I18nextProvider i18n={i18n}>
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
        <HashRouter>
          {/*<ScrollToTop/>*/}
          <Navbar />
          <AuthContextProvider>
            <Routes>
              <Route  path='/' element={<Home/>}/>
              <Route  path='/project' element={<Project/>}/> {/*Use path #0 qui e nel data se non voglio che quando clicco si apra tutto e non solo il dropdown*/}
                  <Route path='/project/univocitta' element={<h2/>}/>
                  <Route path='/project/aim' element={<h2/>}/>
              <Route  path='/about' element={<About/>}/>
                  <Route path='/about/team>' element={<h2/>}/>
                  <Route path='/about/partners>' element={<h2/>}/>
                  <Route path='/about/contacts>' element={<h2/>}/>
              <Route  path='/corpus' element={<Corpus/>}/>
                  <Route path='/corpus/languages>' element={<h2/>}/>
                  <Route path='/corpus/query>' element={<h2/>}/>
              <Route  path='/maps' element={<Maps/>}/>
                  <Route  path='/maps/places' element={<Places/>}/>
                    <Route  path='/maps/places/singleplace' element={<SinglePlace/>}/>
                  <Route  path='/maps/routes' element={<HeritageRoutes/>}/>
                    <Route path="/maps/routedetails/:id" component={RouteDetails} />
                    <Route  path='/maps/museum' element={<MuseumRoute/>}/>
                    <Route  path='/maps/women' element={<WomenRoute/>}/>
                    <Route  path='/maps/appennino' element={<AppenninoRoute/>}/>
                  <Route  path='/maps/travellers' element={<Travellers/>}/>
                    <Route path='maps/travellers/english_travellers' element={<EnglishTravellers/>}/>
                    <Route path='maps/travellers/french_travellers' element={<FrenchTravellers/>}/>
                    <Route path='maps/travellers/spanish_travellers' element={<SpanishTravellers/>}/>
                    <Route path='maps/travellers/russian_travellers' element={<RussianTravellers/>}/>
                    <Route path='maps/travellers/travellerpage' element={<TravellerPage/>}/>  
                      {/*EN travellers*/}
                      <Route path='maps/travellers/en/dickens' element={<CharlesDickens/>}/>   
                      <Route path='maps/travellers/en/trollope' element={<FrancesTrollope/>}/> 
                      <Route path='maps/travellers/en/addison' element={<JosephAddison/>}/> 
                      <Route path='maps/travellers/en/byron' element={<LordByron/>}/> 
                      <Route path='maps/travellers/en/starke' element={<MarianaStarke/>}/> 
                      <Route path='maps/travellers/en/burton' element={<RichardBurton/>}/> 
                      <Route path='maps/travellers/en/browning' element={<RobertBrowning/>}/> 
                      <Route path='maps/travellers/en/lee' element={<VernonLee/>}/> 
                      {/*FR travellers*/}
                      <Route path='maps/travellers/fr/goncourt' element={<GoncourtBrothers/>}/>   
                      <Route path='maps/travellers/fr/taine' element={<HyppoliteTaine/>}/> 
                      <Route path='maps/travellers/fr/lande' element={<JeromeLande/>}/> 
                      <Route path='maps/travellers/fr/destael' element={<MadameDeStael/>}/> 
                      <Route path='maps/travellers/fr/montaigne' element={<MicheldeMontaigne/>}/> 
                      <Route path='maps/travellers/fr/bazin' element={<ReneBazin/>}/>
                      <Route path='maps/travellers/fr/stendhal' element={<Stendhal/>}/>
                      {/*ES travellers*/}
                      <Route path='maps/travellers/es/galdos' element={<BenitoGaldos/>}/>   
                      <Route path='maps/travellers/es/burgos' element={<CarmendeBurgos/>}/> 
                      <Route path='maps/travellers/es/villalon' element={<CristobaldeVillalon/>}/> 
                      <Route path='maps/travellers/es/moratin' element={<LeandroMoratin/>}/> 
                      <Route path='maps/travellers/es/cervantes' element={<MigueldeCervantes/>}/> 
                      <Route path='maps/travellers/es/alarcon' element={<PedrodeAlarcon/>}/> 
                      <Route path='maps/travellers/es/baroja' element={<PioBaroja/>}/>
                      {/*RU travellers*/}
                      <Route path='maps/travellers/ru/glagolev' element={<AleksandrGlagolev/>}/>  
                      <Route path='maps/travellers/ru/herzen' element={<AleksandrHerzen/>}/>  
                      <Route path='maps/travellers/ru/fonzivin' element={<DenisFonzivin/>}/> 
                      <Route path='maps/travellers/ru/muratov' element={<DmitryMuratov/>}/> 
                      <Route path='maps/travellers/ru/grec' element={<NikolajGrec/>}/> 
                      <Route path='maps/travellers/ru/tolstoj' element={<PetrAndreevicTolstoj/>}/>  
              <Route  path='/signup' element={<Signup/>}/>
              <Route  path='/signin' element={<Signin/>}/>
                <Route  path='/signin/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/> {/*needs to be protected route*/}
                <Route  path='/signup/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/> {/*needs to be protected route*/}
                <Route  path='/signin/profile/details' element={<ProtectedRoute><ProfileDetails/></ProtectedRoute>}/>
                <Route path="/signin/profile/favorites" element={<FavoritesPage/>} />
                <Route path="/signin/profile/bookmarks" element={<BookmarksPage/>} />
                <Route path="/signin/profile/settings" element={<Settings/>} />
                {/*Coming soon*/}
              <Route  path='/coming' element={<ComingSoon/>}/>
              <Route path='/documentation' element={<Documentation/>}/>
            </Routes>
            </AuthContextProvider>
            {/*<MovieList movies={moviesData} />*/}
          <Footer/>
          <Bottom/>
        </HashRouter>
      </Suspense>
    </LocaleContext.Provider>
    </I18nextProvider>
    </>
  );
}

export default App;