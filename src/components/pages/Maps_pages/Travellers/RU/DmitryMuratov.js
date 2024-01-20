import React from 'react';
import real_muratov from "../../../../../assets/imgs/travellers/ru/muratov.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Russian Travellers"}
  travelers_lang_url={"/maps/travellers/russian_travellers"}
  name={"Pavel Pavlovič Muratov"}
  autorName={"Muratov, Pavel Pavlovič"}
  profile_img={real_muratov}
  nationality={"travellers.ru_nationality"}
  lifetime={"1881-1950"}
  occupation={"travellers.ru_Muratov_occupation"}
  body_text={"travellers.ru_Muratov_text"}
/>
}

export default TravellerPage;