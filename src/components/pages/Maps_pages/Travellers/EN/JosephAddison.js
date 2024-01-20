import React from 'react';
import addison from "../../../../../assets/imgs/travellers/en/Josep_Addison.jpg";

import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Joseph Addison"}
  autorName={"Addison, Joseph"}
  profile_img={addison}
  nationality={"travellers.en_nationality"}
  lifetime={"1672-1719"}
  occupation={"travellers.en_Addison_occupation"}
  body_text={"travellers.en_Addison_text"}
  />
}

export default TravellerPage;