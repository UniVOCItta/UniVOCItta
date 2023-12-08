import React, { useState, useEffect } from 'react';
import '../../../App.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// Bootstrap
import { Breadcrumb, Badge, Row, Col, Button } from 'react-bootstrap';
// Icons
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
// Imgs
import placeholder from '../../../assets/imgs/placeholder.png';
// Reusable elements
import ScrollToTop from '../../ScrollToTop';
// Experiment
//import routes from "./Heritage_Routes/routes";
import RouteDetails from './Heritage_Routes/RouteDetails';
// Translation
import { t } from 'i18next';
// Favorites/UserAuth
import { UserAuth } from '../../../context/AuthContext';


const HeritageRoutes = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  }; 

  const handleShowAll = () => {
    setSelectedCategory(null);
  };

  const routes =  [
    {
      id: 0,
      category: "Women",
      title: "Women Route",
      time: "1h 30min",
      km: "6km",
      path: t('maps.intermediate'),
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../assets/imgs/routes/bassi_docufilm.jpg'),
      copyright: "Unibo",
      more: <a href='https://react-icons.github.io/react-icons/search?q=facebook'>"Find out more"</a>,
      link: "/maps/women",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
    },
    {
      id: 1,
      category: "Nature",
      title: "Appennino Route",
      time: "12h",
      km: "50km",
      path: t('maps.difficult'),
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../assets/imgs/routes/appennino.jpg'),
      copyright: "Wwikiwalter, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
      more: "Find out more",
      link: "/maps/appennino",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
    },
    {
      id: 2,
      category: "Museum",
      title: "Museum Route",
      time: ".. min",
      km: "..km",
      path: t('maps.easy'),
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../assets/imgs/routes/pinacoteca_Gueraldo_Anna_Chiara.jpg'),
      copyright: "Foto di Anna Chiara Gueraldo",
      more: "Find out more",
      link: "/maps/museum",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
    },
    {
      id: 3,
      category: "University",
      title: "City Centre Route",
      time: ".. min",
      km: "..km",
      path: t('maps.easy'),
      img: require('../../../assets/imgs/routes/archiginnasio_Wwikiwalter.jpg'),
      copyright: "Wwikiwalter, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      more: "Find out more",
      link: "/maps/city_centre",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      },
    },
    {
      id: 4,
      category: "Food",
      title: "Food Route",
      time: ".. min",
      km: "..km",
      path: t('maps.easy'),
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../assets/imgs/routes/tortellini_Angelo_Muratore.jpg'),
      copyright: "Angelo.Muratore, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
      more: "Find out more",
      link: "/maps/food",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
    },
    {
      id: 5,
      category: "University",
      title: "A title",
      time: "..min",
      km: "..km",
      path: t('maps.easy'),
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../assets/imgs/routes/archiginnasio_Wwikiwalter.jpg'),
      copyright: "Wwikiwalter, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
      more: "Find out more",
      link: "/maps/appennino",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
    },
  ];

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
        <Breadcrumb.Item active>{t('maps.routes_title')}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='routes'>{t('maps.routes_title')}</h1>
        <p>{t('maps.routes_text')}</p>
    </div>
    
        <section className='heritage-routes'>
          <div className='container-fluid'>
            <div className='suggested'>
              <br/>
              <h2>{t('maps.suggested_routes')}</h2>
              <hr/>
              <div className='routes-filter-buttons'>
                <Button variant='dark' className={`routes-filter ${selectedCategory === 'Women' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Women')}>Women</Button> {/*NON FUNZIONA */}
                <Button variant='dark' className={`routes-filter ${selectedCategory === 'University' ? 'active' : ''}`} onClick={() => handleCategoryFilter('University')} >University</Button> {/*NON FUNZIONA */}
                <Button variant='dark' className={`routes-filter ${selectedCategory === 'Museum' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Museum')} >Museums</Button>
                <Button variant='dark' className={`routes-filter ${selectedCategory === 'Food' ? 'active' : ''}`} onClick={() => handleCategoryFilter('Food')}>Food</Button>
                <Button variant='outline-secondary' className={`routes-filter ${selectedCategory === null ? 'active' : ''}`} onClick={handleShowAll}>All</Button>
                <br/>
                {/* ADDITIONAL FILTERS
                <Dropdown className='routes_filters'>
                    <Dropdown.Toggle variant="light" id="dropdown-basic"><IoIcons.IoMdOptions/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='lang_menu'>
                    </Dropdown.Menu>
                </Dropdown>
                */}
              </div>
              <br/>
              {routes
            .filter((route) => selectedCategory ? route.category === selectedCategory : true)
            .map((route) => {
                return (
                <>
              <div className='suggested-route' key={route.id}>
                  <h3>{route.title}</h3>
                  <Row className='routes-icons'>
                    <Col>
                      <RiIcons.RiTimerLine className='routes-icon'/><span>&nbsp;{route.time}</span>
                    </Col>
                    <Col>
                      <GiIcons.GiPathDistance className='routes-icon'/><span>&nbsp;{route.km}</span>
                    </Col>
                    <Col>
                      <GiIcons.GiFootsteps className='routes-icon'/><span>&nbsp;{route.path}</span>
                    </Col>
                  </Row>
                  <img className='side-img'src={`${route.img}`}></img>
                  <p>{route.text}</p>
                  <p style={{textAlign: 'right'}}>Find out more&nbsp;<Link to={`${route.link}`}><BsIcons.BsFillArrowRightCircleFill className="more-icon" /></Link></p>
                  {/*
                  <p style={{textAlign: 'right', fontSize:"8pt"}}><Link to={'../maps/singleroute'}>Temporary Link</Link></p>
                  <p style={{textAlign: 'right', fontSize:"8pt"}}><Link to={`../maps/routedetails/${route.id}`}>Temporary Automatic Route Link</Link></p>
                  <p style={{textAlign: 'right', fontSize:"8pt"}}><Link to={'../maps/routes/prova'}>LANGUAGE PROVA</Link></p>
                  */}
                  <div className='tag-buttons'>
                    <Badge pill bg="primary"  disabled>{route.tag.tag_1}</Badge>{' '}
                    <Badge pill bg="primary"  disabled>{route.tag.tag_2}</Badge>{' '}
                    <Badge pill bg="primary"  disabled>{route.tag.tag_3}</Badge>{' '}
                  </div>
              </div> 
              <br/>
              </>   
              )  
              })}  
            </div>
          </div>
        </section>
        </>
  )
}
export default HeritageRoutes 
