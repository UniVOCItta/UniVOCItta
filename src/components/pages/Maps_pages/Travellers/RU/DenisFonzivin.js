import React from 'react';
import fonzivin from "../../../../../assets/imgs/travellers/ru/Denis_Fonvizin2.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Russian Travellers"}
  travelers_lang_url={"/maps/travellers/russian_travellers"}
  name={"Denis Ivanovič Fonvizin"}
  autorName={"Fonvizin Denis Ivanovič"}
  profile_img={fonzivin}
  nationality={"travellers.ru_nationality"}
  lifetime={"1745-1792"}
  occupation={"travellers.ru_Fonzivin_occupation"}
  body_text={"travellers.ru_Fonzivin_text"}
/>
}

export default TravellerPage;