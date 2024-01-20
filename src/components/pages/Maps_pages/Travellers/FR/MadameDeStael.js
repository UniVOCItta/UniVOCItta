import React from 'react';
import stael from "../../../../../assets/imgs/travellers/fr/Mme_de_Staël.jpg";
// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"French Travellers"}
  travelers_lang_url={"/maps/travellers/french_travellers"}
  name={"Madame De Staël Holstein"}
  autorName={"De Staël Holstein, Madame"}
  profile_img={stael}
  nationality={"travellers.fr_nationality"}
  lifetime={"1766-1817"}
  occupation={"travellers.fr_Stael_occupation"}
  body_text={"travellers.fr_Stael_text"}
  />
}

export default TravellerPage;