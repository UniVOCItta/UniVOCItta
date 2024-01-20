import React from 'react';
import glagolev from "../../../../../assets/imgs/travellers/ru/Alexandr_Glagolev.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Russian Travellers"}
  travelers_lang_url={"/maps/travellers/russian_travellers"}
  name={"Andrej Gavrilovič Glagolev"}
  autorName={"Glagolev Andrej Gаvrilovič"}
  profile_img={glagolev}
  nationality={"travellers.ru_nationality"}
  lifetime={"1793-1844"}
  occupation={"travellers.ru_Glagolev_occupation"}
  body_text={"travellers.ru_Glagolev_text"}
/>
}

export default TravellerPage;