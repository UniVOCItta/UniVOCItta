import React from 'react';
import starke from "../../../../../assets/imgs/travellers/en/Mariana_Starke.webp";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Mariana Starke"}
  autorName={"Starke, Richard et Mariana"}
  profile_img={starke}
  nationality={"travellers.en_nationality"}
  lifetime={"1762-1838"}
  occupation={"travellers.en_Starke_occupation"}
  body_text={"travellers.en_Starke_text"}
  />
}

export default TravellerPage;