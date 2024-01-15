import React from 'react';
import GenericRoute from './GenericRoute';

const FoodRoute = () => {
  
  const coordinates = [
    [44.496184, 11.338319], // 1. Mercato delle Erbe
    [44.494519, 11.344689], // 2. Via Rizzoli 
    [44.493726, 11.346537], // 3. Piazza della Mercanzia
    [44.494222, 11.345222], // 4. Mercato di Mezzo
    [44.49373, 11.343064], // 5. Piazza Maggiore
  ];
  const zooms =[
    null,
    null,
    null,
    null,
    null
  ]
  const markerContent = [
    "Mercato delle Erbe",
    "Via Rizzoli",
    "Piazza della Mercanzia",
    "Mercato di Mezzo",
    "Piaggia Maggiore",
    // Add more popup content for each coordinate
  ];

  const cards =[
  //location 1 - Mercato delle Erbe
  [
  //elemento 1
    {
      title:"Mercato delle Erbe - Noémie Dondel du Faouëdic",
      body:"Revenons au positif de la vie. Le saucisson est aussi bon qu'on nous l'avait dit, et les épiciers ont à toutes leurs devantures des bouquets dont le coloris ne se fane jamais, pas plus que le parfum ne s'évapore, car on ne les respire pas ces bouquets, on les mange ; ils se composent de pruneaux, figues, raisins, amandes même, tout cela bien coordonné, bien arrondi, et tenant par je ne sais quel procédé, comme un groupe de fleurs dans un étui de papier blanc découpé et dentelé.",
      p:"Noémie Dondel du Faouëdic, 1875"
    },
    {
      title:"Mercato delle Erbe - Jérôme de La Lande",
      body:"Cette ville est encore renommée en Italie pour les Maccaroni, pour les Savonnettes fines et odoriférantes, les Fleurs artificielles en soie, les Fruits imités en cire, dans lesquels on met quelquefois des gants blancs de peau, de la plus grande finesse : les Cervelats et les Mortadelles, especes de gros saucissons, d'un très bon goût ; on dit que les Ouvriers qui y travaillent sont de Modêne. Les Liqueurs fines, telles que le Rossolis, ou Rossolio di anesino, c'est-à-dire, l'huile rouge qui se fait avec l'anis étoilé : le Cotignac, le Cotognate, et autres confitures, de même que la Thériaque de Bologne, sont recherchées dans toute l'Italie.",
      p:"Jérôme de La Lande, 1769"
    },
    {
      title:"Mercato delle Erbe - Jean-Marie Roland de La Platière",
      body:"Les mûriers peu communs dans les environs de Modène, deviennent plus abondants aux approches de Bologne ; on y fait du vin blanc bien plus que de rouge ; & les fruits se montrent en plus grande quantité.",
      p:"Jean-Marie Roland de La Platière, 1777"
    },
    {
      title:"Mercato delle Erbe - Lady Anna Miller Riggs",
      body:"The Macaroni made here is highly esteemed. Provisions for the table of all kinds are excellent; hog-meat remarkably good; the Bologna sausages and mortadellas, also the carvellas, are, I believe, the best in Europe; the hogs are of the large breed; their hair fiery red. The liqueurs, particularly those of the manufacture of Giachimo Gnudi, are famous, and sent, as also the sausages; to most parts of Europe; the rosa sola, or rosselia di anesino is the best. All kinds of confectionaries are made in great perfection; the cotognati, or jelly of quince, is particularly fine. I have got the receipts for all the kinds of sausages, the liqueurs, and the cotognati. Their grapes are excellent, which they have the art of preserving for eight or nine months, in such perfection as to appear newly gathered.",
      p:"Lady Anna Miller Riggs (1741-1781)"
    },
    {
      title:"Mercato delle Erbe - Vicente Blasco Ibáñez",
      body:"Y el tren sigue su marcha. Queda atrás Bolonia con su famosa universidad, sus palacios de la vieja aristocracia y sus fábricas de salchichones y mortadellas",
      p:"Vicente Blasco Ibáñez, 1896"
    },
    {
      title:"Mercato delle Erbe - Andrej Mudrov",
      body:"Здесь, среди прочих деликатесов, были изобретены ставшие известными во всем мире “мортаделла”, “тальятелле” и “тортелини”. Первая появилась благодаря монахам, которые однажды  растолкли в ступе свиное мясо и затем поместили его для сохранности в “чулок” из кишки.",
      p:"Andrej Mudrov, 2012"
    },
    {
      title:"Mercato delle Erbe - Konstantin Paulovič",
      body:"Напротивъ того, въ Болоньи расхваливаютъ пріѣзжимъ иностранцамь здѣшніе колбасы, mortadelli, идушистое мыло, о славѣ коихъ а слышалъ въ Болоньи въ первый разъ въ жизни.",
      p:"Konstantin Paulovič, 1846"
    }
  ],
  //location 2 - Via Rizzoli (Curiosità)
  [ 
    {
        title:"Curiosità - Charles de Brosses",
        body:"Je m’étonne fort que les plus belles villes que j’aie encore vues dans ce pays n’aient pas de promenades publiques qui vaillent celles de nos moindres petites villes. Le lieu on se promène ici est infâme ; cependant, faute d’autres ; il est tous les soirs assez fréquenté. Je ne puis digérer cette manière de se promener en carrosses, rangés la file les uns des autres, sans avancer ni reculer.",
        p:"Charles de Brosses, 1739"
    },
    {
        title:"Curiosità - Charles de Brosses",
        body:"Quant à la façon de se vêtir, les femmes se mettent à la françoise et mieux que nulle part ailleurs. On leur envoie journellement de grandes poupées vêtues de pied en cap, à la dernière mode, et elles ne portent point de babioles qu’elles ne les fassent venir de Paris. Les bourgeois portent le jupon noir, le pourpoint de même, un manteau, un rabat d’une demi-aune de long et une perruque nouée.",
        p:"Charles de Brosses, 1739"
    },
    {
        title:"Curiosità - Charles de Brosses",
        body:"Les femmes du peuple, quand elles sortent, s’enveloppent, de la ceinture en bas, d’une pièce de taffetas noir, et de la ceinture en haut, y compris la tête, d’un vilain voile ou écharpe de pareille étoffe, qui leur cache le visage ; c’est une vraie populace de fantômes.",
        p:"Charles de Brosses, 1739"
    },
    {
        title:"Curiosità - Leandro Fernández de Moratín",
        body:"Las boloñesas gastan basquiña y mantilla negra, y ésta muy estrecha, tanto, que apenas las llega a media espalda.",
        p:"Leandro Fernández de Moratín, 1867"
    },
    {
        title:"Curiosità - Inessa Fedina, 2013",
        body:"Вот такое старинное место, Словно звуки торжественной мессы…",
        p:"Inessa Fedina, 2013"
    },
    {
        title:"Curiosità - Pavel Pavlovič Muratov",
        body:"На теперешнего путешественника Болонья производит впечатление города, где хорошо отдохнуть от слишком усердных скитаний по музеям и церквам. После всяких чудес Падуи и Феррары и перед тем, что обещает Флоренция, здесь можно прожить несколько дней без особых художественных волнений, но и без всякой скуки. В Болонье есть что-то легкое, веселящее глаз, приятно несложное. Это город счастливых и здоровых людей. Его окружают тучнейшие в Италии житницы и виноградники, дающие прославленное вино. Никакое другое место не может сравниться с Болоньей по изобилию, разнообразию и дешевизне всевозможной снеди, и итальянцы недаром называют ее 'жирная Болонья' - 'Bologna la grassa'.",
        p:"Pavel Pavlovič Muratov, 1994"
    }
  ],
  //location 3 - Piazza della Mercanzia (Usi e Costumi)
  [ 
    {
        title:"Usi e costumi - Charles de Rémusat",
        body:"Les nouvelles de Bandinello et de Boccace trouveraient ici leur théâtre naturel, et si lord Byron aimait tant cette ville, c’est que le drame pathétique de Parisina aurait pu s’y jouer. Les mœurs romantiques se sont, j’en ai peur, envolées de Bologne comme de partout ; mais cependant il règne encore dans ces murs une certaine originalité. Dans les rangs inférieurs, la coiffure et le mantelet des femmes, l’oisiveté des hommes, immobiles ou qu’on voit errer sous les plis d’un long manteau, indiquent un peuple qui se défend de l’activité industrielle et de l’imitation de Paris.",
        p:"Charles de Rémusat, 1861"
    },
    {
        title:"Usi e costumi - Gregorio de Iribas y Sánchez",
        body:"No sé en cuantas fondas de la Paz habremos estado en Italia. Se conoce que los hosteleros aborrecen la guerra, terrible para su industria; y, en una ú otra forma, les gusta asociar á sus establecimientos la idea de la paz: el que nos albergó llevaba el título del «Águila nera et pace»; y para hacer más sensible el rótulo, tenía pintada una hermosa águila negra llevando en el corvo pico un ramo de oliva.",
        p:"Gregorio de Iribas y Sánchez, 1897"
    },
    {
        title:"Usi e costumi - Viktor Ivanovič Rutenburg",
        body:"Огромное количество школяров, достаточно богатых, которые приезжали в город со слугами, с лошадьми и били широко, изменяли лицо города, весь то него жизни, вносили своего рода хозяйственный переворот. Город был полон день гамии получал выгоды от продажи товаров этим чужеземцам. Появились новые формы городской культурные безналички я роскоши, образовывались новые дороги, строились новые дома. Вместо деревянных каменные, нередко дворцового типа. Город из римского поселения менее чем за два века превратился в крупный центр",
        p:"Viktor Ivanovič Rutenburg, 1986"
    }
  ],
  //location 4 - Mercato di Mezzo
  [
    {
        title:"Mercato di Mezzo - René Bazin",
        body:"Bologne la Grasse ! Bologne la Docte ! Ce sont les deux épithètes qu'un accote à ce nom célèbre. De la première, je dirai peu de chose, si ce n'est qu’elle est justifiée par la fertilité des campagnes de Bologne, par la réputation de sa mortadelle et de ses macaronis, surtout par un certain air opulent et florissant que n'ont pas beaucoup de cités italiennes. C'est proprement une ville contente d'elle-même.",
        p:"René Bazin, 1891"
    },
    {
        title:"Mercato di Mezzo - Margaret Juliana Dunbar",
        body:"Mr. Beckford calls Bologna 'a city of puppy dogs and sausages,' It was probably this remark that made us curious to experiment upon the latter. Accordingly, when the waiter brought in tea, we ordered a portion of the renowned condiment. Alas for unsophisticated palates! The smell alone was nearly enough — the first mouthful was more than enough ; and ere a second was even contemplated, we changed our plates, and sent the vile combination of raw meat and garlic in disgrace from the room!",
        p:"Margaret Juliana Dunbar, 1853"
    },
    {
        title:"Mercato di Mezzo - John Evelyn",
        body:"This Citty is famous also for sausages; and here is sold greate quantities of Parmegiano cheese, with Botargo, Caviare, &c. which makes some of their shops perfume ye streetes with no agreeable smell.",
        p:"John Evelyn, 1819"
    },
    {
        title:"Mercato di Mezzo - José de Lasa",
        body:"La ciudad de Bolonia, hoy una de tantas del reino uno de Italia, era la segunda poblacion ó capital de los Estados de la Iglesia; hoy carece en absoluto de importancia; tan solo dos cosas llaman hoy la atencion en Bolonia: las torres inclinadas, y las mortadellas y cotichini, ó sean dos clases de salchichones.",
        p:"José de Lasa, 1873"
    },
    {
        title:"Mercato di Mezzo - Tolstoj Petr Alekseevič",
        body:"Хлеб и всякой харч, лрыба и мясом и всякая живность в Болони недорого, дешевле венецкаго. В Болонии всяких фруктов много и зело дешево, а паче всего много луку великаго и зело дешев, во многие италиянские места из Болони лук отвозят.",
        p:"Tolstoj Petr Alekseevič, 1992"
    }
  ],
  //location 5 - Piazza Maggiore 
  [
    {
        title:"Piazza Maggiore - Madame De Staël Holstein",
        body:"On avait annoncé pour deux heures après midi, une éclipse de soleil à Bologne, le peuple se rassembla sur la place publique pour la voir, et impatient de ce qu’elle tardait, il l’appelait impétueusement comme un acteur qui se fait attendre ; enfin elle commença : et comme le temps nébuleux empêchait qu’elle ne produisît un grand effet, il se mit à la siffler à grand bruit, trouvant que le spectacle ne répondait pas à son attente.",
        p:"Madame De Staël Holstein, 1807"
    },
    {
        title:"Piazza Maggiore - Jérôme de La Lande",
        body:"Les étrangers ont aussi occasion d'y remarquer le caractere libre et enjoué des Dames de Bologne : on les y voit accompagnées de leurs Cicisbées, et quelquefois donner leurs mains à baiser à ceux qui aspirent à le devenir, sans que les Italiens trouvent cela extraordinaire. On ne peut trouver de caracteres plus ouverts que ceux des Bolonois ; ils sont bons amis, et implacables ennemis, ils poussent la franchise à l'excès. Ils sont industrieux, grands parleurs et faisant montre de beaucoup de sçavoir.",
        p:"Jérôme de La Lande, 1769"
    }
  ]
  ]

  const intestation ={
    //Questo è da modificare è copiato da quello dell'appennino <---------
    difficulty:'maps.easy',
    time:"17 m",
    km:"1,2 km"
  }

  return <GenericRoute 
      coordinates={coordinates}  
      zooms={zooms}
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"routes.food"} 
      text={"routes.food_text"} 
      cards={cards}
      intestation={intestation} 
  />
}

export default FoodRoute;