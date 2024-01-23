import React from 'react';
import burton from "../../../../../assets/imgs/travellers/en/Richard_Frances_Burton.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Richard Burton"}
  autorName={"Burton, Richard Francis"}
  profile_img={burton}
  nationality={"travellers.en_nationality"}
  lifetime={"1821-1890"}
  occupation={"travellers.en_Burton_occupation"}
  body_text={"travellers.en_Burton_text"}
  />
}

export default TravellerPage;