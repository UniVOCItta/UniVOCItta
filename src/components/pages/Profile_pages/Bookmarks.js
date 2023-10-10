import React from 'react'
import '../../../App.css';
import { UserAuth } from '../../../context/AuthContext';
// Router
import { HashLink } from 'react-router-hash-link';
// Bootstrap 
import { Breadcrumb } from 'react-bootstrap';
// Translation
import { useTranslation } from "react-i18next";

const BookmarksPage = () => {
  const { bookmarks } = UserAuth();

  // Translation 
  const { t } = useTranslation();

  return (
    <>
      <div className='container-fluid'>
        <Breadcrumb>
          <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
          <Breadcrumb.Item>
            <HashLink smooth to="/signin/profile" id='crumb'>
            Profile
            </HashLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Bookmarks</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Bookmarks</h1>
          {bookmarks.length > 0 ? (
            <ul>
              {bookmarks.map((item) => (
                <li style={{color: 'black'}} key={item.id}>{/* Render each favorite item */}{item.fragment}</li>
              ))}
            </ul>
          ) : (
            <p>No bookmarks added yet.</p>
          )}
      </div>
    </>
  );
};

export default BookmarksPage;