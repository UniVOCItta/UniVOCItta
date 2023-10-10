import React from 'react';
import './Footer.css';
// Router-dom
import { Link } from 'react-router-dom';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Icons 
import * as FaIcons from 'react-icons/fa';
// Translation
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
    <div className='footer-container'> 
    <Row>
      <Col>
        <h2 className='footer-title-1'>UniVOCIttà</h2>
          <Row>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li><Link className='fa-footer' to='https://www.facebook.com/profile.php?id=100091523413697'><FaIcons.FaFacebook/></Link></li>
              <li><Link className='fa-footer' to='https://www.instagram.com/univocitta/'><FaIcons.FaInstagram/></Link></li>
              <li><Link className='fa-footer' to='https://github.com/UniVOCItta/UniVOCItta'><FaIcons.FaGithub/></Link></li>
            </ul>
          </Row>
      </Col>
      <Col>
        <h2 className='footer-title'>{t('footer.about')}</h2>
          <Row>
            <Link className='footer-links' to='../project/#aim'>{t('sidebar.aim')}</Link>
            <Link className='footer-links' to='../about/#team'>{t('sidebar.team')}</Link>
            <Link className='footer-links' to='../about/#contacts'>{t('sidebar.contacts')}</Link>
          </Row>
      </Col>
      <Col>
        <h2 className='footer-title'>{t('footer.more')}</h2>
          <Row>
            <Link className='footer-links' to='https://www.iubenda.com/privacy-policy/33140351'>Privacy Policy</Link>
            <Link className='footer-links' to='#'><FaIcons.FaCookieBite/>Cookie Policy</Link>
            <Link className='footer-links' to='/documentation'>{t('footer.documentation')}</Link>
          </Row>
      </Col>
    </Row>
    <hr className='footer-line'/>
    <small className="copyright">&copy; UniVOCIttà, 2023</small>
    </div>
    </>
  )
}

export default Footer