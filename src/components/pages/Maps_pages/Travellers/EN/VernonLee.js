import React from 'react';
import lee from "../../../../../assets/imgs/travellers/en/Vernone_Lee-Violet_Page.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Vernon Lee"}
  autorName={"Lee, Vernon"}
  profile_img={lee}
  nationality={"travellers.en_nationality"}
  lifetime={"1856-1935"}
  occupation={"travellers.en_Lee_occupation"}
  body_text={"travellers.en_Lee_text"}
  />
}

export default TravellerPage;