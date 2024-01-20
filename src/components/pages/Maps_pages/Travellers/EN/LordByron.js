import React from 'react';
import byron from "../../../../../assets/imgs/travellers/en/Lord_Byron.jpg";
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"English Travellers"}
  travelers_lang_url={"/maps/travellers/english_travellers"}
  name={"Lord Byron"}
  autorName={"Lord Byron"}
  profile_img={byron}
  nationality={"travellers.en_nationality"}
  lifetime={"1788-1824"}
  occupation={"travellers.en_Byron_occupation"}
  body_text={"travellers.en_Byron_text"}
  />
}

export default TravellerPage;