import React from 'react';
import baroja from "../../../../../assets/imgs/travellers/es/Pío_Baroja.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Spanish Travellers"}
  travelers_lang_url={"/maps/travellers/spanish_travellers"}
  name={"Pío Baroja"}
  autorName={"Baroja, Pío"}
  profile_img={baroja}
  nationality={"travellers.es_nationality"}
  lifetime={"1872-1956"}
  occupation={"travellers.es_Baroja_occupation"}
  body_text={"travellers.es_Baroja_text"}
/>
}
export default TravellerPage;