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
import MuseumRoute from './components/pages/Maps_pages/Heritage_Routes/MuseumRoute';
import Travellers from './components/pages/Maps_pages/Travellers';
import EnglishTravellers from './components/pages/Maps_pages/Travellers/EnglishTravellers';
import FrenchTravellers from './components/pages/Maps_pages/Travellers/FrenchTravellers';
import SpanishTravellers from './components/pages/Maps_pages/Travellers/SpanishTravellers';
import RussianTravellers from './components/pages/Maps_pages/Travellers/RussianTravellers';
import TravellerPage from './components/pages/Maps_pages/Travellers/TravellerPage';
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
                  <Route  path='/maps/travellers' element={<Travellers/>}/>
                    <Route path='maps/travellers/english_travellers' element={<EnglishTravellers/>}/>
                    <Route path='maps/travellers/french_travellers' element={<FrenchTravellers/>}/>
                    <Route path='maps/travellers/spanish_travellers' element={<SpanishTravellers/>}/>
                    <Route path='maps/travellers/russian_travellers' element={<RussianTravellers/>}/>
                    <Route path='maps/travellers/maps/travellerpage' element={<TravellerPage/>}/>  
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