import React from 'react';
import bazin from "../../../../../assets/imgs/travellers/fr/Rene_Bazin.jpg";
// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"French Travellers"}
  travelers_lang_url={"/maps/travellers/french_travellers"}
  name={"René Bazin"}
  autorName={"Bazin, René"}
  profile_img={bazin}
  nationality={"travellers.fr_nationality"}
  lifetime={"1853-1932"}
  occupation={"travellers.fr_Bazin_occupation"}
  body_text={"travellers.fr_Bazin_text"}
  />
}

export default TravellerPage;