import React from 'react';
import portrait from "../../../../../assets/imgs/travellers/Portrait_placeholder.png";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Spanish Travellers"}
  travelers_lang_url={"/maps/travellers/spanish_travellers"}
  name={"Cristóbal de Villalón"}
  autorName={"de Villalón, Cristóbal"}
  profile_img={portrait}
  nationality={"travellers.es_nationality"}
  lifetime={"1501- ?"}
  occupation={"travellers.es_Villalon_occupation"}
  body_text={"travellers.es_Villalon_text"}
  />
}

export default TravellerPage;