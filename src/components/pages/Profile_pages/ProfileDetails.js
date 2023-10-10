import React from 'react';
import '../../../App.css';
import Accordion from 'react-bootstrap/Accordion';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import { FloatingLabel, Form, Breadcrumb } from 'react-bootstrap';
// Translation
import { useTranslation } from "react-i18next";

function ProfileDetails() {

  // Translation 
  const { t } = useTranslation();

  return (
    <>
    <div className='container-fluid'>
      <Breadcrumb>
        <Breadcrumb.Item>
          <HashLink smooth to="/profile" id='crumb'>
          Profile
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Profile Details</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Profile Details</h1>
      {/*
      <Accordion  defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header >Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      */}


      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      

    </div>
    </>
  )
}

export default ProfileDetails