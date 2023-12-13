import React from 'react';
import portrait from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
// Router-dom
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function TravellerPage() {
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
          <HashLink smooth to="/maps/travellers" id='crumb'>
          Travellers
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Traveller Page</Breadcrumb.Item>
    </Breadcrumb>
      <h1>Name</h1>
      <img src={portrait} className='traveller-page'></img>
      <div className='traveller-description'>
        <p><strong>Nationality</strong>: A Nationality</p>
        <p><strong>Lifetime</strong>: 0000-0000</p>
        <p><strong>Occupation</strong>: Something</p>
        <p><strong>Visited Bologna in</strong>: 0000/something century</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum [<HashLink to='https://en.wikipedia.org/wiki/Count_von_Count'>Wikipedia</HashLink>]</p>
        <h4>Fragments</h4>
        <ul className='traveller-fragments'>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</li>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</li>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default TravellerPage;