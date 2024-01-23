import React from 'react';
import herzen from "../../../../../assets/imgs/travellers/ru/Herzen.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Russian Travellers"}
  travelers_lang_url={"/maps/travellers/russian_travellers"}
  name={"Aleksandr Herzen"}
  autorName={"Aleksandr Herzen"} //not found
  profile_img={herzen}
  nationality={"travellers.ru_nationality"}
  lifetime={"1812-1870"}
  occupation={"travellers.ru_Herzen_occupation"}
  body_text={"travellers.ru_Herzen_text"}
/>
}

export default TravellerPage;