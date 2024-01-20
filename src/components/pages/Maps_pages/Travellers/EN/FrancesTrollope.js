import React from 'react';
import trollope from "../../../../../assets/imgs/travellers/en/Frances_Trollope.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Frances Trollope"}
  autorName={"Trollope, Mrs"}
  profile_img={trollope}
  nationality={"travellers.en_nationality"}
  lifetime={"1780-1863"}
  occupation={"travellers.en_Trollope_occupation"}
  body_text={"travellers.en_Trollope_text"}
  />
}

export default TravellerPage;