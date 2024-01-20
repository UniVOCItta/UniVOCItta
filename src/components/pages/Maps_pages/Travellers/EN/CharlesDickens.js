import React from 'react';
import dickens from "../../../../../assets/imgs/travellers/Dickens.jpg";

// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Charles Dickens"}
  autorName={"Dickens, Charles"}
  profile_img={dickens}
  nationality={"travellers.en_nationality"}
  lifetime={"1812-1870"}
  occupation={"travellers.en_Dickens_occupation"}
  body_text={"travellers.en_Dickens_text"}
  />
}
export default TravellerPage;