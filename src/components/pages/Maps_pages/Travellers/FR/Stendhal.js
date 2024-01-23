import React from 'react';
import stendhal from "../../../../../assets/imgs/travellers/fr/Stendhal.jpg";

// Translation
import GenericTravellerPage from '../GenericTravellerPage';

function TravellerPage() {
  return <GenericTravellerPage
  travelers_lang={"French Travellers"}
  travelers_lang_url={"/maps/travellers/french_travellers"}
  name={"Stendhal"}
  autorName={"Stendhal"}
  profile_img={stendhal}
  nationality={"travellers.fr_nationality"}
  lifetime={"1783-1842"}
  occupation={"travellers.fr_Stendhal_occupation"}
  body_text={"travellers.fr_Stendhal_text"}
  />
}

export default TravellerPage;