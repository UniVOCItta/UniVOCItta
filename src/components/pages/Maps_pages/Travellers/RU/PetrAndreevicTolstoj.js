import React from 'react';
import tolstoj from "../../../../../assets/imgs/travellers/ru/Tolstoy_Petr_Andreevic.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Russian Travellers"}
  travelers_lang_url={"/maps/travellers/russian_travellers"}
  name={"Pëtr Andreevič Tolstoj"}
  autorName={"Tolstoj Petr Alekseevič"}
  profile_img={tolstoj}
  nationality={"travellers.ru_nationality"}
  lifetime={"1645-1729"}
  occupation={"travellers.ru_Tolstoj_occupation"}
  body_text={"travellers.ru_Tolstoj_text"}
/>
}

export default TravellerPage;