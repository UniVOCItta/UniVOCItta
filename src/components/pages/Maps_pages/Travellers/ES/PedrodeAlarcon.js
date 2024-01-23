import React from 'react';
import alarcon from "../../../../../assets/imgs/travellers/es/Pedro_Antonio_de_Alarcón.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Spanish Travellers"}
  travelers_lang_url={"/maps/travellers/spanish_travellers"}
  name={"Pedro A. de Alarcón"}
  autorName={"Alarcón, Pedro A. de"}
  profile_img={alarcon}
  nationality={"travellers.es_nationality"}
  lifetime={"1833-1891"}
  occupation={"travellers.es_Alarcon_occupation"}
  body_text={"travellers.es_Alarcon_text"}
  />
}

export default TravellerPage;