import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';
import { auth } from '../../../firebase';
// Link
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import { Breadcrumb, Button, ListGroup } from 'react-bootstrap';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
// Translation
// import { useTranslation } from "react-i18next";

function Settings() {
  const { logout, user, favorites, setFavorites, bookmarks, setBookmarks } = UserAuth();
  const navigate = useNavigate();

  const handleCancelProfile = async () => {
    try {
      // If the user is not logged in, don't attempt to delete the account
      if (!user) {
        return;
      }

      // Sign out the user
      await logout();

      // Delete the user account from Firebase Authentication
      await auth.deleteUser(user.uid);

      // Clear the saved favorites and bookmarks from localStorage
      localStorage.removeItem('favorites');
      localStorage.removeItem('bookmarks');

      // Reset the local state to clear favorites and bookmarks in the UI
      setFavorites([]);
      setBookmarks([]);

      // Redirect the user to the homepage
      navigate('/');

    } catch (error) {
      console.error('Error canceling profile:', error);
      // Handle any errors during profile cancellation if needed
    }
  };

  // Translation 
  // const { t } = useTranslation();

  // Rest of the component...

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
          <Breadcrumb.Item active>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Settings</h1>
        <ListGroup>
          <ListGroup.Item><Link className='profile-link' to={'../signin/profile/details'}><FaIcons.FaCog className='main-icon'/></Link>&nbsp; &nbsp;PROFILE DETAILS</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'#'}><RiIcons.RiLockPasswordLine className='secondary-icon'/></Link>&nbsp; &nbsp;Password e sicurezza</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'../signin/profile/favorites'}><MdIcons.MdPassword className='secondary-icon'/></Link>&nbsp; &nbsp;Favourites</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'../signin/profile/bookmarks'}><FaIcons.FaCog className='secondary-icon'/></Link>&nbsp; &nbsp; Bookmarks</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'https://www.bolognawelcome.com/it/strutture-ricettive'}><FaIcons.FaCog className='secondary-icon'/></Link>&nbsp; &nbsp; Plan your trip</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'../signin/profile/settings'}><FaIcons.FaCog className='main-icon'/></Link>&nbsp; &nbsp;SETTINGS</ListGroup.Item>
        </ListGroup>
        <Button onClick={handleCancelProfile}>Cancel Profile</Button>
        {/* Add other settings/options as needed */}
      </div>
    </>
  );
}

export default Settings;