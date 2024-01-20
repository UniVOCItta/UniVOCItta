import React from 'react';
import brothers_goncourt from "../../../../../assets/imgs/travellers/fr/Goncourt_brothers.jpg";

// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"French Travellers"}
  travelers_lang_url={"/maps/travellers/french_travellers"}
  name={"Jules and Edmond de Goncourt"}
  autorName={"Goncourt, Jules et Edmond de"}
  profile_img={brothers_goncourt}
  nationality={"travellers.fr_nationality"}
  lifetime={"1822-1896 - 1830-1870"}
  occupation={"travellers.fr_Goncourt_occupation"}
  body_text={"travellers.fr_Goncourt_text"}
  />
}

export default TravellerPage;