import React, { useState, useEffect, useRef } from "react";
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {filterOnlyByAuthor} from "./travelersUtils";
import { UserAuth } from "../../../../context/AuthContext";
import { useTranslation } from "react-i18next";
import * as BsIcons from 'react-icons/bs';
//Bootstrap
import { Tooltip,Table, Button, OverlayTrigger } from 'react-bootstrap';

function GenericTravellerPage({
  travelers_lang,
  travelers_lang_url,
  // breadcrumb_active,
  name,
  nationality,
  lifetime,
  occupation,
  body_text,
  profile_img,
  autorName
}) {
  
  const { t } = useTranslation(); 
  const { user, bookmarks, addToBookmarks, updateBookmarksStorage, removeFromBookmarks } = UserAuth();
  const [showItalian, setShowItalian] = useState(false);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));    
  }, [bookmarks]); 

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 

  const disclaimer = (
      <Tooltip id="tooltip-disclaimer" style={{ fontSize: '0.6rem' }}>
          Visualize the Italian translation
      </Tooltip>
  );

  const isBookInFavorites = (book) => {
    return bookmarks.some((favBook) => favBook.id === book.id);
  }; 
  const handleAddToBookmarks = (book) => {
    if (user) {
      addToBookmarks(book);
      updateBookmarksStorage();
    } else {
      const loginUrl = '/signin'; // Replace with the actual URL of your login page
      window.location.href = loginUrl;
    }
  };

  const handleRemoveFromBookmarks = (book) => {
    if (user) {
      removeFromBookmarks(book);
      updateBookmarksStorage();
    }
  };
  const fragments= filterOnlyByAuthor(autorName);
  return (
    <>
    <div className='container-fluid'>
    <Breadcrumb>
        <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps" id='crumb'>
          {t('maps.maps')}
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps/travellers" id='crumb'>
          {t('maps.travellers_button')}
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to={travelers_lang_url} id='crumb'>
           {travelers_lang}
          </HashLink>
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item active>{breadcrumb_active}</Breadcrumb.Item> */}
    </Breadcrumb>
      <h1>{name}</h1>
      <img src={profile_img} className='traveller-page'></img>
      <div className='traveller-description'>
        <p><strong>Nationality: </strong>{t(nationality)}</p>
        <p><strong>Lifetime: </strong>{lifetime}</p>
        <p><strong>Occupation: </strong>{t(occupation)}</p>
        <p dangerouslySetInnerHTML={{ __html: t(body_text)}}></p>
        {fragments.length>0
        &&
        <>
        <h4>Fragments</h4>
        {/* <ul className='traveller-fragments'>
          {filterOnlyByAuthor().map((el,i)=>{
            return <li key={"tf_"+i}>{el}</li>
          })}
        </ul> */}
        <Table>
                <thead>
                <tr>
                    <th>{t('corpus.fragment')}</th>
                    <th>{t('corpus.source')}</th>
                </tr>
                </thead>
                <tbody>
                {fragments.map((item, index) => (
                    <tr key={index}>
                    <td>
                        {item.translation_it && showItalian ? (
                        <p>{item.translation_it}</p>
                        ) : (
                        <p className="fragment_font">{item.fragment}</p>
                        )}
                        {/* <div className="row-container">
                            <div className="button-container">
                            {isBookInFavorites(item) ? (
                                <Button id='bookmark-button' variant='outline-dark' onClick={() => handleRemoveFromBookmarks(item)}>
                                <BsIcons.BsBookmarkFill />
                                &nbsp;{t('corpus.remove_bookmark')}
                                </Button>
                                ) : (
                                <Button id='bookmark-button' variant='outline-dark' onClick={() => handleAddToBookmarks(item)}>
                                <BsIcons.BsBookmark />
                                &nbsp;{t('corpus.add_bookmark')}
                                </Button>
                            )}
                            </div>
                        </div> */}
                        <br/>
                        {item.translation_it && (
                        <OverlayTrigger placement="right" overlay={disclaimer}>
                            <Button
                            variant="info"
                            size="sm"
                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                            onClick={() => setShowItalian(!showItalian)}
                            >
                            {t('it')}
                            </Button>
                        </OverlayTrigger>
                        )}
                        &nbsp;
                    </td>
                    <td>
                        <p>{item.autore[0]}</p>
                        <p>{item.autore[1]}</p>
                        <p>{item.autore[2]}</p>
                        <p>
                        <HashLink to={item.bibliographic_link}>Link</HashLink>
                        </p>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
        }
      </div>
    </div>
    </>
  )
}

export default GenericTravellerPage;