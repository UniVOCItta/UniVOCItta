import React from 'react';
import cervantes from "../../../../../assets/imgs/travellers/es/miguel_cervantes.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Spanish Travellers"}
  travelers_lang_url={"/maps/travellers/spanish_travellers"}
  name={"Miguel de Cervantes"}
  autorName={"Cervantes Saavedra, Miguel de"}
  profile_img={cervantes}
  nationality={"travellers.es_nationality"}
  lifetime={"1547-1616"}
  occupation={"travellers.es_Cervantes_occupation"}
  body_text={"travellers.es_Cervantes_text"}
  />
}

export default TravellerPage;