import React from 'react';
import { useParams } from 'react-router-dom';
import routes from './routes';
import { Badge } from 'react-bootstrap';

const RouteDetails = () => {
  const { id } = useParams();
  const route = routes.find((route) => route.id === id);
  const { title, time, km, path, img, text, more, tag } = route;

  return (
    <div>
      <h1>{route.title}</h1>
      <h2>Ciao</h2>
      <p>{time}</p>
      <p>{km}</p>
      <p>{path}</p>
      <img src={img} alt={title} />
      <p>{text}</p>
      <p>{more}</p>
      <div className='tag-buttons'>
        <Badge pill bg="primary"  disabled>{tag.tag_1}</Badge>{' '}
        <Badge pill bg="primary"  disabled>{tag.tag_2}</Badge>{' '}
        <Badge pill bg="primary"  disabled>{tag.tag_3}</Badge>{' '}
      </div>
    </div>
  );
};

export default RouteDetails;