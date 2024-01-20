import lalande from "../../../../../assets/imgs/travellers/fr/Jérôme_de_La_Lande.jpg";
import React from 'react';
// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"French Travellers"}
  travelers_lang_url={"/maps/travellers/french_travellers"}
  name={"Jérôme de la Lande"}
  autorName={"La Lande, Jêrome de"}
  profile_img={lalande}
  nationality={"travellers.fr_nationality"}
  lifetime={"1732-1807"}
  occupation={"travellers.fr_Lande_occupation"}
  body_text={"travellers.fr_Lande_text"}
  />
}

export default TravellerPage;