import React from 'react';
import burgos from "../../../../../assets/imgs/travellers/es/Cármen_de_Burgos_y_Seguí.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"Spanish Travellers"}
  travelers_lang_url={"/maps/travellers/spanish_travellers"}
  name={"Carmen de Burgos"}
  autorName={"Burgos, Carmen de"}
  profile_img={burgos}
  nationality={"travellers.es_nationality"}
  lifetime={"1867-1932"}
  occupation={"travellers.es_Burgos_occupation"}
  body_text={"travellers.es_Burgos_text"}
  />
}

export default TravellerPage;