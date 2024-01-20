import React from 'react';
import moratin from "../../../../../assets/imgs/travellers/es/Leandro_Fern…ndez_Morat�n.jpg";

import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Spanish Travellers"}
  travelers_lang_url={"/maps/travellers/spanish_travellers"}
  name={"Leandro Fernández de Moratín"}
  autorName={"Fernández de Moratín"}
  profile_img={moratin}
  nationality={"travellers.es_nationality"}
  lifetime={"1760-1828"}
  occupation={"travellers.es_Moratin_occupation"}
  body_text={"travellers.es_Moratin_text"}
  />
}

export default TravellerPage;