import taine from "../../../../../assets/imgs/travellers/fr/Hippolyte_Taine.jpg";
import React from 'react';
// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"French Travellers"}
  travelers_lang_url={"/maps/travellers/french_travellers"}
  name={"Hyppolite Taine"}
  autorName={"Taine, Hippolyte"}
  profile_img={taine}
  nationality={"travellers.fr_nationality"}
  lifetime={"1828-1893"}
  occupation={"travellers.fr_Taine_occupation"}
  body_text={"travellers.fr_Taine_text"}
  />
}
export default TravellerPage;