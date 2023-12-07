import React from 'react';
import GenericRoute from './GenericRoute';

const AppenninoRoute = () => {
  
const coordinates = [
  [44.479117, 11.298120], // 1. Santuario della Madonna di San Luca
  [44.4434, 11.3576], // 2. Rastignano - Carteria di Sesto
  [44.383333, 11.333333], // 3. Pianoro
  [44.325736, 11.332990], // 4. Livergnano 
  [44.266667, 11.316567], // 5. Loiano 
  [44.259153, 11.334404], // 6. Osservatorio di Loiano
  [44.216667, 11.316667] // 7 Monghidoro
];

const markerContent = [
  "Santuario della Madonna di San Luca",
  "Rastignano - Carteria di Sesto",
  "Pianoro",
  "Livergnano",
  "Loiano",
  "Osservatorio di Loiano",
  "Monghidoro"
  // Add more popup content for each coordinate
];

const cards =[
  //location 1
  [
  //elemento 1
  {
    title:"San Luca - F. Trollope",
    body:"The situation of this church and convent is one very rarely equalled for isolated grandeur of elevation. The abruptness of the ascent gives the view of the city and surrounding country unbroken by any intervening objects in the foreground. It was like looking at a landscape at the Diorama.",
    p:"Frances Trollope"
  },
  //elemento 2
  {
    title:"San Luca - A. G. Glagolev",
    body:"Болонья лежитъ при подошвѣ Аппенинскихъ горъ и окружена живописными окрестностями. […] Изъ окрестностей Болоньи достойна примѣчанія церковь Мадонны делла-Гвардія. Она стоитъ на скатѣ Апеннинской горы, на которую ведетъ огромный портикъ, состоящій изъ 700 аркадъ и простирающійся на пространствѣ трехъ Иіиаліянскихъ миль или 4 Русскихъ верстъ.",
    p:"Andrej Gavrilovič Glagolev"
  }
],
//location 2
[ 
  {
    title:"Rastignano - Madame de Reck",
    body:"Le pays, autour de Bologne est sain : l'hiver y est rude à cause des Apennins, mais aussi l'air, dans cette saison, est plus pur encore. Le sol qui est très fertile, donne abondamment du vin, du blé, des noix, du chanvre, du lin, du tabac et des fruits de toute espèce.",
    p:"Madame de Reck"
  }
],
//location 3
[ 
  {
    title:"Pianoro - M. Dunbar",
    body:"From Lojano to Pianoro, the descent is very abrupt, requiring additional drags upon the wheels. The views here, from various points of the road, are exceedingly striking.",
    p:"Margaret Dunbar"
  },
  {
    title:"Pianoro - J. de La Lande",
    body:"Pianoro est un village situé à 2 lieues de Bologne sur la Savena, riviere qui passe à côté de la ville, vers l'Orient.",
    p:"Jérôme de La Lande"
  }
],
//location 4
[
  {
  title:"x",
  body:"y",
  p:"z"
  }
],
//location 5
[
  {
    title:"x",
    body:"y",
    p:"z"
    }
  ],
//location 6
[
  {
    title:"x",
    body:"y",
    p:"z"
    }
  ],
  //location 7
[
  {
    title:"x",
    body:"y",
    p:"z"
    }
  ]
]

  return <GenericRoute 
      coordinates={coordinates} 
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"Appennino Route"} 
      text={"routes.appennini_text"} 
      cards={cards} 
  />
}

export default AppenninoRoute;