import React from 'react';
import browning from "../../../../../assets/imgs/travellers/en/Robert_Browning.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Robert Browning"}
  autorName={"Browning, Robert"}
  profile_img={browning}
  nationality={"travellers.en_nationality"}
  lifetime={"1812-1889"}
  occupation={"travellers.en_Browning_occupation"}
  body_text={"travellers.en_Browning_text"}
  />
}

export default TravellerPage;