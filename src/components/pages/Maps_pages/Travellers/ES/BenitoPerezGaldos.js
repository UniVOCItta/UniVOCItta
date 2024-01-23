import React from 'react';
import galdos from "../../../../../assets/imgs/travellers/es/Benito_Pérez_Galdós.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Spanish Travellers"}
  travelers_lang_url={"/maps/travellers/spanish_travellers"}
  name={"Benito Pérez Galdós"}
  autorName={"Pérez Galdós, Benito"}
  profile_img={galdos}
  nationality={"travellers.es_nationality"}
  lifetime={"1843-1920"}
  occupation={"travellers.es_Galdos_occupation"}
  body_text={"travellers.es_Galdos_text"}
  />
}
export default TravellerPage;