import React from 'react';
import montaigne from "../../../../../assets/imgs/travellers/fr/Michel_de_Montaigne.jpg";

// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"French Travellers"}
  travelers_lang_url={"/maps/travellers/french_travellers"}
  name={"Michel de Montaigne"}
  autorName={"Montaigne, Michel de"}
  profile_img={montaigne}
  nationality={"travellers.fr_nationality"}
  lifetime={"1533-1592"}
  occupation={"travellers.fr_Montaigne_occupation"}
  body_text={"travellers.fr_Montaigne_text"}
  />
}
export default TravellerPage;