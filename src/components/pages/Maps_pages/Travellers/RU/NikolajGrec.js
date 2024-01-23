import React from 'react';
import grec from "../../../../../assets/imgs/travellers/ru/Nikolay_Grech.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Russian Travellers"}
  travelers_lang_url={"/maps/travellers/russian_travellers"}
  name={"Nikolaj Ivanovič Greč"}
  autorName={"Greč Nikolaj Ivanovič"}
  profile_img={grec}
  nationality={"travellers.ru_nationality"}
  lifetime={"1787-1867"}
  occupation={"travellers.ru_Grec_occupation"}
  body_text={"travellers.ru_Grec_text"}
/>
}

export default TravellerPage;