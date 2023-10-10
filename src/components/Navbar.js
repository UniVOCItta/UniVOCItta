import React, { useRef, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import './Navbar.css';
// Router-dom
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import { Dropdown } from 'react-bootstrap';
//Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as TfiIcons from 'react-icons/tfi';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
// Imgs
import logo from '../assets/imgs/logo_white.png';
import italy from '../assets/imgs/italy_flag.png';
import england from '../assets/imgs/english_flag.png';
import france from '../assets/imgs/french_flag.png';
import spain from '../assets/imgs/spanish_flag.png';
import russia from '../assets/imgs/russian_flag.png';
// Translation
import LocaleContext from '../LocaleContext';
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const Nav = styled.div`
  background: #272626;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 8;
`;

const SidebarNav = styled.nav`
  background: #272626;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 12;
`;

const SidebarWrap = styled.div`
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  
  &::-webkit-scrollbar-track {
    background: #272626;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #272626;
    border-radius: 10px;
    height: 2px;
  }
`;


const SidebarLink = styled(HashLink)`
  display: flex;
  color: #f3f3f3;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #934141;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: #f3f3f3;
`;

const DropdownLink = styled(HashLink)`
  background: #272626;
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;
  &:hover {
    background: #934141;
    cursor: pointer;
  }
`;
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
    },
    {
      title: t('sidebar.project'), 
      path: '#0',
      icon: <FaIcons.FaGlobe />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: 'UniVOCIttà',
          path: '/project', 
          icon: <FaIcons.FaRegLightbulb />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.aim'), 
          path: '/project/#aim',
          icon: <AiIcons.AiOutlineAim />
        }
      ]
    },
    {
      title: t('sidebar.about'),
      path: '#0',
      icon: <FaIcons.FaGraduationCap/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: t('sidebar.team'),
          path: '/about/#team',
          icon: <FaIcons.FaUserGraduate />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.partners'),
          path: '/about/#partners',
          icon: <FaIcons.FaUniversity />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.contacts'),
          path: '/about/#contacts',
          icon: <FaIcons.FaEnvelope />
        }
      ]
    },
    {
      title: t('sidebar.corpus'),
      path: '#0',
      icon: <FaIcons.FaBook />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: t('sidebar.overview'),
          path: '/corpus',
          icon: <FaIcons.FaBook />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.languages'),
          path: '/corpus/#languages',
          icon: <FaIcons.FaLanguage />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.query'),
          path: '/corpus/#query',
          icon: <FaIcons.FaSearch />
        }
      ]
    },
    {
      title: t('sidebar.maps'),
      path: '#0',
      icon: <FaIcons.FaMapMarkerAlt />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: t('sidebar.overview'),
          path: '/maps',
          icon: <RiIcons.RiEarthFill />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.places'),
          path: '/maps/places',
          icon: <FaIcons.FaBuilding />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.routes'),
          path: '/maps/routes',
          icon: <FaIcons.FaRoute />,
          cName: 'sub-nav'
        },
        {
          title: t('sidebar.travellers'),
          path: '/maps/travellers',
          icon: <FaIcons.FaUsers />
        }
      ]
    
    }
  ];

  const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
      <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </>
    );
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <div className="logo_space">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="language">
            <Dropdown className="language_option">
              <Dropdown.Toggle className="lang_toggle" variant="dark" id="dropdown-basic">
                <TfiIcons.TfiWorld /> &nbsp;{t('language')}
              </Dropdown.Toggle>
              <Dropdown.Menu className="lang_menu">
                <Dropdown.Item className="lang" href="#" onClick={() => changeLocale('it')}>
                  <img src={italy} alt="flag" width="15" height="10"/>&nbsp;{t('it')}
                </Dropdown.Item>
                <Dropdown.Item className="lang" href="#" onClick={() => changeLocale('en')}>
                  <img src={england} alt="flag" width="15" height="10"/>&nbsp;{t('en')}
                </Dropdown.Item>
                <Dropdown.Item className="lang" href="#" onClick={() => changeLocale('fr')}>
                  <img src={france} alt="flag" width="15" height="10"/>&nbsp;{t('fr')}
                </Dropdown.Item>
                <Dropdown.Item className="lang" href="#" onClick={() => changeLocale('es')}>
                  <img src={spain} alt="flag" width="15" height="10"/>&nbsp;{t('es')}
                </Dropdown.Item>
                <Dropdown.Item className="lang" href="#" onClick={() => changeLocale('ru')}>
                  <img src={russia} alt="flag" width="15" height="10"/>&nbsp;{t('ru')}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar} ref={menuRef}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;