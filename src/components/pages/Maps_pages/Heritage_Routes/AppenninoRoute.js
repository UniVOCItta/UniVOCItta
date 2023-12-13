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

const zooms =[
  10,
  15,
  20,
  null,
  null,
  20,
  20
]

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
    title:"Livergnano - C. A. de Baena",
    body:"Cuando salí de Pietra mala pasó por tres lugarillos llamados Escarica el Asino, La Guardia y Liberñano, todos en el Estado del Papa. A las dos de la tarde volví á marchar, pasé por un lugarillo llamado Pionero donde finalizan los Apeninos, y a las seis de la tarde llegué á la ciudad de Bolonia que hay 14 millas.",
    p:"Clemente Antonio de Beana Trollope"
  },
  {
    title:"Livergnano - Stendhal",
    body:"Il y a près de deux ans qu’on s’aperçut avec terreur, à Bologne et à Florence, qu’en suivant la route sur laquelle nous sommes, les voyageurs disparaissaient. Les recherches de deux gouvernements sans nerf n’arrivèrent qu’à cette certitude, c’est que jamais on ne trouvait de dépouilles dans les montagnes de l’Apennin.",
    p:"Stendhal"
  }
],
//location 5
[
  {
    title:"Loiano - A. D. Chancel",
    body:"to Fiorenzola is a very steep way, and to Loyan 14 Miles indifferent good, through the Mountains, both sides are full of chestnut Trees. From thence to Bolonia are counted 16 Miles, half the way we went through the Mountains, but the rest is very pleasant.",
    p:"Alexander D. Chancel"
  },
  {
    title:"Loiano - Montaigne",
    body:"LOYAN, sese milles, petit village assés mal commode. Il n’y a en ce village que deus hosteleries qui sont fameuses entre toutes celles d’Italie, de la trahison qui s’y fait aus passans, de les paistre de belles promesses de toute sorte de commodités, avant qu’ils mettent pied à terre, & s’en mocquer quand ils les tiennent à leur mercy : de quoy il y a des proverbes publics.",
    p:"Michel Eyquem de Montaigne"
  },
  {
    title:"Loiano - J. de Viera y Clavijo",
    body:"Otra posta á Pianura, otra á Layola, otra á Alanjon, y otra posta y media á Bolonia, de buen camino, mas fondoso y bien cultivado. Pasamos el puente del Rio Sabena que se paga, y llegarnos á la Locanda, ó posada del peregrino á las 4 y media de la tarde, en la cual inmediatamente nos cumplimentaron el regente y demas colegiales Españoles de san Clemente, los señores Pignatelis ex-Jesuitas y otr s &cc.",
    p:"José de Viera y Clavijo"
  },
  {
    title:"Loiano - Stendhal",
    body:"Arrivés à Loïano et regardant au nord, nous avons trouvé une vue magnifique : l’œil prend en travers cette fameuse plaine de Lombardie, large de quarante lieues, et qui, en longueur, s’étend de Turin à Venise. J’avouerai qu’on sait cela plus qu’on ne le voit ; mais on aime à chercher tant de villes célèbres au milieu de cette plaine immense et couverte d’arbres comme une forêt. L’Italien aime à faire le cicerone ; le maître de poste de Loïano a voulu me persuader que je voyais la mer Adriatique (19 lieues) : je n’ai point eu cet honneur-là.",
    p:"Stendhal"
  },
  {
    title:"Loiano - P. A. Tolstoj",
    body:"Ис той остари поутру я поехал и приехал в остарию, которая зовется Люяна, от остарии Ляшкала 17 миль италиянских. По той дороге превеликие каменные горы, на которые невозможно было взъехать в каляске; и мой витурин, то есть фурман, нанял мне верховую лошедь, на которой я на те горы взъехал. По тем горам и между гор много лесов; в тех лесах все плодовитые деревья, на которых родятся каштаны.",
    p:"Petr Andreevič Tolstoj"
  }
  ],
//location 6
[
  {
    title:"Osservatorio di Loiano - J. de La Lande",
    body:"M. Perelli, habile Mathématicien qui est à la tête de cet Observatoire, a encore plusieurs beaux instrumens qui lui appartiennent en propre : il a 2800 liv. d'appointement', à la charge de se faire aider par M. Zloppe, jeune Médecin, qui a des connoissances dans le même genre : l'un & l'autre procureront à l'Astronomie, quand ils en voudront prendre la peine, des observations utiles. Il n'y a en Italie que l'Observatoire de Bologne, & celui que l'on a construit dernierement à Milan, qui puissent être comparés à celui de Pise.",
    p:"Jérôme de La Lande"
    }
  ],
  //location 7
[
  {
    title:"Monghidoro - Italy and the Italians",
    body:"Between Le Maschere and Scaricalasino is the highest part of the mountain, called the Giogo; and there the road is rather dangerous, as it hangs over tremendous precipices, without any kind of parapet; the sudden gusts of wind, and the mists which rise frequently in those upper regions are not apt to quiet the alarms of the unexperienced traveler. At Scaricalasino we left the territory of Tuscany, and entered the Papal States; our baggage underwent an examination by the custom house people, and our passports were inspected by the military officer on duty; two tiresome formalities which one must put up with frequently in travelling through Italy, as they occur every time one passes from one state into another, and sometimes twice in the same day. We descended from the Apennines into the fertile plains of the Bolognese, which have given to this city the epithet of Bologna la Grassa. I have seen very little of this place, and I shall state in my next letter the few remarks I have made during my short stay in it.",
    p:"Italy and the Italians"
    }
  ]
]

const intestation ={
  difficulty:'maps.difficult',
  time:"12h",
  km:"50km"
}

  return <GenericRoute 
      coordinates={coordinates} 
      zooms={zooms}
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"Appennino Route"} 
      text={"routes.appennini_text"} 
      cards={cards} 
      intestation={intestation}
  />
}

export default AppenninoRoute;