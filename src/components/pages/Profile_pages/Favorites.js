import React from 'react'
import '../../../App.css';
import { UserAuth } from '../../../context/AuthContext';
// Router
import { HashLink } from 'react-router-hash-link';
// Bootstrap 
import { Breadcrumb, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
// Translation
import { useTranslation } from "react-i18next";

const FavoritesPage = () => {
  const { favorites } = UserAuth();

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
          <Breadcrumb.Item active>Favorites</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Favorites</h1>
          {favorites.length > 0 ? (
            <div>
              {favorites.map((item) => (
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroupItem><HashLink smooth to="/maps/places"><p style={{color: 'black'}} key={item.id}>{/* Render each favorite item */}{item.title}</p></HashLink></ListGroupItem>
                  </ListGroup>
                </Card>
              ))}
            </div>
          ) : (
            <p>No favorites added yet.</p>
          )}
      </div>
    </>
  );
};

export default FavoritesPage;