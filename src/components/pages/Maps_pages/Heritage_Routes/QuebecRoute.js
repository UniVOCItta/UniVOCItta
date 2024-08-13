import React from 'react';
import GenericRoute from './GenericRoute';

const QuebecRoute = () => {
  
  const coordinates = [
    [44.4976, 11.3535], // 1. Via delle Belle Arti, 56  
    [44.496880, 11.352433], // 2. Via Zamboni 33
    [44.494290, 11.346730], // 3. Piazza di Porta Ravegnana 
    [44.49373, 11.343064], // 4. Piazza Maggiore 
    [44.492778, 11.343056], // 5. Basilica di San Petronio 
    [44.4918717, 11.3438538], // 6. Piazza Galvani 1 
    [44.4894, 11.3446], // 7. Piazza S. Domenico, 13 
    [44.4892, 11.3398], // 8. Via Tagliapietre, 19 
    [44.497597, 11.30777], // 9. Via della Certosa, 18 
    [44.487591, 11.305346], // 10. Via di San Luca 419 
    [44.479117, 11.298069], // 11. Via di San Luca, 36 
  ];
  const zooms =[
    null,
    null,
    null,
    null,
    null
  ]
  const markerContent = [
    "Pinacoteca",
    "Zona universitaria",
    "Due torri",
    "Piazza Maggiore",
    "Basilica di San Petronio",
    "Antica Università",
    "Basilica di San Domenico",
    "Santuario del Corpus Domini",
    "Cimitero monumentale della Certosa",
    "Portico di S. Luca",
    "Santuario della Madonna di San Luca",
    // Add more popup content for each coordinate
  ];

  const cards =[
  //location 1 - Pinacoteca
  [
  //elemento 1
    {
      title:"Pinacoteca - Jean-Baptiste Legacé",
      body:"C’est ici qu'est conservée la Sainte-Cécile de Raphaël, cette œuvre magnifique que tant de fois j’avais admirée dans des photographies, et que je revoyais dans tout l’éclat de ses brillantes couleurs…. Et puis des Dominiquin, des Francia, des Carrache, des Guido…. J’allais d’un tableau à l’autre, dans une exaltation que le peu de temps me restait ne faisait qu’augmenter. Pourquoi faut-il que je m’arrache à tant de beautés ? ",
      p:"Jean-Baptiste Lagacé, 1900"
    }
  ],
  //location 2 - Zona Universitaria
  [ 
    {
      title:"Zona Universitaria - Béchard, Marguerite",
      body:"Selon les références, l'Université de Bologne est la plus ancienne ou la seconde en Europe (1119). Elle compte aujourd'hui 50,000 étudiants, soit le dixième de la population de la ville.",
      p:"Marguerite Béchard, 1975"
    }
  ],
  //location 3 - Due torri
  [ 
    {
      title:"Due torri - Ringuet",
      body:"Il ne faut demander à Bologne ni le décor de Naples, ni les monuments de Rome, ni la grâce orientale de Venise. Mais qui flâne un peu dans Bologne y découvre une ville calme, aux rues en arcades pittoresques ainsi qu'un musée de fort bonne qualité ; et surtout une atmosphère pleine de charme vétuste. Les palais et les églises en sont de brique couleur ocre. Les deux tours penchées, l’Asinelli et la Garisenda, ont l’air de vieux géants en goguette. Chaque détour vous y apporte quelque chose.",
      p:"Ringuet, 1965"
    },
    {
      title:"Due torri - Eustache Rocheleau",
      body:"En route, je salue au passage les deux Tours Penchées dont le sommet se perd dans les nues. Rien n'est plus saisissant que la vue de ces monuments antiques, hauts de trois cents pieds et inclinés de plusieurs coudées hors de la verticale.",
      p:"Eustache Rocheleau, 1922"
    }
  ],
  //location 4 - Piazza Maggiore
  [
    {
      title:"Piazza Maggiore - Joseph-Octave Plessis",
      body:"le légat occupe celui du gouvernement, auprès de l'église collégiale de S. Pétrone. Ce saint, ancien évêque de la même ville, est représenté par une statue de marbre, assise au-dessus de la principale entrée de ce palais. Elle y figure assez mal avec celle de Neptune, qui surmonte une belle fontaine, placée à une distance à peu près égale de la collégiale et du palais.",
      p:"Joseph-Octave Plessis, 1903"
    },
    {
      title:"Piazza Maggiore - Joseph-Octave Plessis",
      body:"Aussi raconte-t-on que Charles Quint, devant avoir une entrevue dans ce palais, avec le pape Paul III, y monta tout uniment à cheval, et il faut avouer que ces escaliers conviendraient mieux à des chevaux qu'à des gens de pied.",
      p:"Joseph-Octave Plessis, 1903"
    },
    {
      title:"Piazza Maggiore - Joseph-Octave Plessis",
      body:"La ville de Bologne est surnommée la Grasse, à raison de la richesse du sol dont elle est environnée. C'est une des plus célèbres d'Italie, par son Université, par les rencontres de Souverains et de Papes qui y ont eu lieu, par deux sessions du Concile de Trente, par le coup de mort qu'y reçut la Pragmatique Sanction de Charles IX, lorsque Léon X et François I y signèrent le Concordat de 1515, enfin par les hommes remarquables qu'elle a produits, notamment les Papes Grégoire XIII et Benoît XIV.",
      p:"Joseph-Octave Plessis, 1903"
    }
  ],
  //location 5 - Basilica di San Petronio
  [
    {
      title:"Basilica di San Petronio - Eustache Rocheleau",
      body:"En continuant notre pèlerinage, nous nous dirigeons vers l'église Saint-Pétrone, patron de la ville. C'est la plus belle et la plus vaste église de Bologne. Ses nefs larges et éclairées, son dôme gracieux, ses riches autels latéraux lui donnent un caractère imposant et grandiose.",
      p:"Eustache Rocheleau, 1922"
    },
    {
      title:"Basilica di San Petronio - Eustache Rocheleau",
      body:"Plusieurs souvenirs historiques se rattachent à cette église, entr'autres le couronnement de Charles-Quint par le pape Clément VII ; puis la prédication de saint Augustin aux Bolonais dans une chaire que l'on nous montre encore.",
      p:"Eustache Rocheleau, 1922"
    },
    {
      title:"Basilica di San Petronio - Eustache Rocheleau",
      body:"Sur le pavé de la nef gauche, l'on trouve une bande de cuivre sur laquelle est tracée la fameuse méridienne du savant Cassini. A l'une des colonnes de la nef centrale est adossée une grande horloge portant deux cadrans dont l'un marque l'heure astronomique et l'autre, l'heure italienne ; il est peut-être bon de noter que les Italiens ne divisent pas comme nous leur cadran en douze heures, mais en vingt-quatre heures : de sorte qu'on entend dire couramment : vingt heures ou vingt-deux heures pour signifier huit ou dix heures du soir.",
      p:"Eustache Rocheleau, 1922"
    },
    {
      title:"Basilica di San Petronio - Joseph-Octave Plessis",
      body:"Sur le pavé de cette collégiale, est tracée la fameuse méridienne du savant Cassini, dans le milieu d'une longue bande de cuivre placée tout exprès au niveau du pavé. Du côté où est cette méridienne, se trouve aussi une belle horloge ayant dans un même pilier de l'église, à six ou huit pieds au-dessus du pavé, deux cadrans, dont l'un donne l'heure astronomique, l'autre l'heure italienne. Car il faut savoir que les Italiens ne divisent pas leur cadran en 12 heures, comme le nôtre, mais en 24, et qu'ils ne comptent pas à partir de midi ou minuit, comme nous faisons, mais d'un coucher de soleil à l'autre, et, comme le soleil se couche plus tôt ou plus tard, suivant qu'il est plus ou moins éloigné de l'Équateur, il en résulte que le commencement de leurs 24 heures, et par conséquent leur midi, sont sujets à de grandes variations.",
      p:"Joseph-Octave Plessis, 1903"
    }
  ],
  //location 6 - Antica Università
  [
    {
      title:"Antica Università - Eustache Rocheleau",
      body:"L'après-midi fut consacré à la visite des différents monuments de la ville. Le premier, en tête de la liste, fut la Bibliothèque Communale, autrefois le siège de la première université. Toutes les parties de l'édifice sont ornées des portraits et des armes des anciens professeurs et des étudiants. Lors du VIIIe centenaire de cette université, célébré en 1888, en présence des souverains d'Italie, les représentants de presque toutes les universités du monde, revêtus de leurs costumes du moyen-âge, se réunirent dans cette enceinte. Cet archigymnase renferme un théâtre anatomique dont le plafond est en bois sculpté. Au-dessus de la chaire du professeur, se voit encore une statue en bois, représentant un homme écorché : on dit que c'est dans cet endroit qu'ont été opérées les premières autopsies, sur le cadavre humain.",
      p:"Eustache Rocheleau, 1922"
    },
    {
      title:"Antica Università - Jean-Baptiste Lagacé",
      body:"Ce qui me frappe en parcourant les larges galeries, c’est le nombre incroyable d’écussons qui décorent les murs ; les plafonds, les murs, les colonnes, jusqu’au pavé, en sont couverts. Je m’informe et voici ce qu’on m'apprend. Chaque groupe d’étudiants nommait chaque année un chef et ce chef avait le droit de faire peindre ou sculpter sur les murs de l’Université l’écusson de sa maison ; les professeurs en faisaient autant.",
      p:"Jean-Baptiste Lagacé, 1900"
    },
    {
      title:"Antica Università - Jean-Baptiste Lagacé",
      body:"Dans la salle d’anatomie, où furent faites les premières études sur le cadavre, je remarque le buste de Rossini ; je demande pourquoi le grand musicien est ici. C’est dans cette salle, paraît-il, que fut donnée la première audition du Stabat Mater de ce maître. Je vous avoue que l’on aurait pu choisir un endroit plus convenable pour une semblable fête musicale. Mais, il ne faut pas oublier que nous sommes en Italie ! ",
      p:"Jean-Baptiste Lagacé, 1900"
    },
    {
      title:"Antica Università - Joseph-Octave Plessis",
      body:"Le cardinal Légat voulant procurer à l'évêque de Québec la connaissance d'un homme extraordinaire, avait pris dans la voiture l'abbé Mezzofante, professeur de langues orientales à l'Université. C'est quelque chose d'étonnant que la facilité avec laquelle cet ecclésiastique, qui paraît être âgé de 40 ans ou environ, se met dans la tête toutes les langues qu'il veut apprendre. Par exemple, il n'a jamais été ni en France, ni en Angleterre. Néanmoins, soit qu'il parle anglais ou français, c'est avec une pureté de langage et une exactitude de prononciation qui ferait croire qu'il a passé la moitié de sa vie dans un de ces royaumes, et la moitié dans l'autre.",
      p:"Joseph-Octave Plessis, 1903"
    },
    {
      title:"Antica Università - Joseph-Octave Plessis",
      body:"Décidé à partir le lendemain, l'évêque de Québec alla, le soir, à travers une forte et grosse pluie, prendre congé du cardinal archevêque, auquel il ne manqua pas, dans leur courte conversation, de faire mention du plaisir avec lequel il avait vu l'abbé Mezzofante. 'Il a beaucoup de mérite, répondit Son Eminence ; malheureusement il est fils d'un menuisier.' L'évêque ne l'en trouvait que plus estimable ; mais la noblesse a une autre manière de voir.",
      p:"Joseph-Octave Plessis, 1903"
    }
  ],
  //location 7 - Basilica di San Domenico
  [
    {
      title:"Basilica di San Domenico - Ringuet",
      body:"C’est ainsi que j'entrai dans l’église Saint-Dominique. En fait, je n’ignorais pas qu'il s’y trouvait, dans une chapelle latérale, un tombeau dont « un personnage est attribué à Michel-Ange jeune homme ». Bon prétexte à visite. Il faisait à ce moment un soleil doux, un soleil d'hiver aussi frais que la brise en canicule. Dans cette église ancienne, sa lumière remplissait la nef d’un miel blond savoureux.",
      p:"Ringuet, 1965"
    },
    {
      title:"Basilica di San Domenico - Ringuet",
      body:"A l’intérieur, personne. Personne, que cette étrange présence du passé que l’on sent toujours nous environner dans les vieux sanctuaires. Le silence y est un bruissement quasi perceptible à l'oreille. C’est qu'il est fait de l'accumulation, pendant les siècles, des pas feutrés et des prières chuchotées par les générations de dévotes. La poussière qui est accrochée aux murs est une poussière vivante. Seul dans une église moderne, on est seul vraiment, durement. Tandis que dans cette église de Bologne, comme d’ailleurs dans beaucoup d’autres où je passai, j'étais seul parmi une multitude. Mes pas résonnaient sur les dalles que d’innombrables genoux avaient creusées.",
      p:"Ringuet, 1965"
    },
    {
      title:"Basilica di San Domenico - Eustache Rocheleau",
      body:"Une belle fresque peinte dans l'abside rappelle le gracieux miracle du pain apporté par les Anges, dont le couvent attenant à l'église fut l'heureux témoin. Un jour, dit la légende, le procureur du monastère vint dire à saint Dominique qu'il n'y avait plus rien à la maison pour dîner, si ce n'est deux pains. A cette nouvelle, Dominique parut ravi. Il ordonna au procureur de partager le peu qu'il y avait en quarante portions, selon le nombre de religieux, et de faire sonner le repas à l'heure accoutumée. En entrant au réfectoire, chacun trouva à sa place une bouchée de pain.",
      p:"Eustache Rocheleau, 1922"
    }
  ],
  //location 8 - Santuario del Corpus Domini
  [
    {
      title:"Santuario del Corpus Domini  - Joseph-Octave Plessis",
      body:"Ce spectacle l'eût singulièrement frappé, s'il ne se fût immédiatement rappelé que l'on conservait dans cette église le corps de sainte Catherine, surnommée de Bologne, religieuse professe du même couvent, morte en 1463 et canonisée en 1712. Il ne manqua pas d'entrer dans cette chapelle après la messe, pour examiner de plus près ce saint corps. C'est quelque chose d'admirable que sa conservation.",
      p:"Joseph-Octave Plessis, 1903"
    },
    {
      title:"Santuario del Corpus Domini  - Jean-Bapiste Lagacé",
      body:"On nous fait pénétrer dans une petite chapelle et là, sous un baldaquin d’or, entouré de lampes et de cierges, au milieu de la profusion de l’art italien, nous apercevons la Sainte, assise sur un trône, enveloppée dans de magnifiques vêtements de soie. Sa tête est couronnée de fleurs et de diamants, sa main droite ornée de bijoux tient une croix tandis que sa gauche est posée sur un livre ouvert. La chair du visage, des mains et des pieds est devenue noire, à l’exception d’un endroit sous la lèvre inférieure qui est demeuré plus blanc. En face de ce corps de femme, touché par la mort et noirci par le temps, on est saisi d’une étrange émotion, mélange de crainte et d’horreur ; car, je l’avoue franchement, je n’aime pas cette exhibition. Je préférerais de beaucoup m’agenouiller devant un tombeau que devant ce cadavre…",
      p:"Jean-Bapiste Lagacé, 1900"
    },
    {
      title:"Santuario del Corpus Domini - Eustache Rocheleau",
      body:"Jusqu'ici, nous avons vu beaucoup de corps soi-disant conservés : celui de la Vén. Mère Marat, de sainte Marguerite-Marie, de saint Charles Borromée, de saint Ambroise, des saints Gervais et Protais, de sainte Catherine de Gênes, etc... Mais tous ces corps n'ont pas été préservés comme celui-ci de la corruption du tombeau. Plusieurs n'ont que le squelette à découvert ou enduit de cire. Quant à celui de sainte Catherine de Bologne, il est impossible de nier que sa conservation soit un miracle perpétué.",
      p:"Eustache Rocheleau, 1922"
    }
  ],
  //location 9 - Cimitero monumentale della Certosa
  [ 
    {
      title:"Cimitero monumentale della Certosa - Joseph-Octave Plessis, 1903",
      body:"Comme il n'est aucune famille de la ville qui n'ait de ses proches dans l'église, dans les chapelles, caveaux, cloîtres ou parterres de la Chartreuse, il en résulte que la commémoration des morts y est célébrée avec un immense concours de peuple. Dès la veille, les cierges de toute grosseur y sont portés par centaines, et quoique le jour ne fut pas fort avancé, lorsque nous y allâmes, les aumôniers nous dirent qu'il y en avait déjà beaucoup de rendus.",
      p:"Joseph-Octave Plessis, 1903"
    }
  ],
  //location 10 - Portico di San Luca
  [ 
    {
      title:"Portico di S. Luca - Jean-Baptiste Lagacé",
      body:"On se croirait presque à Montréal, n’était-ce le nombre incroyable des maisons à portiques. Les trottoirs passent sous les arcades et l'on peut ainsi faire le tour de la ville protégé contre les rayons brûlants du soleil. ",
      p:"Jean-Baptiste Lagacé, 1900"
    }
  ],
  //location 11 - Santuario della Madonna di San Luca
  [ 
    {
      title:"Santuario della Madonna di San Luca - Eustache Rocheleau",
      body:"Tout en cheminant lentement et en m'arrêtant devant les curiosités de la ville, me voici bientôt en face d'un immense portique en maçonnerie composé de centaines d'arcades (630), la plupart ornées de peintures et de pieuses inscriptions. Cette galerie qui s'étend sur une ligne de près de quatre mille, monte sur la colline jusqu'à l'église Saint-Luc. ",
      p:"Eustache Rocheleau, 1922 "
    },
    {
      title:"Santuario della Madonna di San Luca - Michel Régnier",
      body:"Elle possède également 35km de rues à arcades et portiques (les célèbres porticos). Les arcades vont même jusqu’à gravir les collines, ainsi le portico di San Luca e Meloncello, grimpe, rampe sur les collines, pendant deux kilomètres pour arriver à la basilique de San Luca.",
      p:"Michel Régnier, 1974 "
    },
  ],
  ]

  const intestation ={
    difficulty:'maps.difficult',
    time:"2 h",
    km:"8,5 km"
  }

  return <GenericRoute 
      coordinates={coordinates}  
      zooms={zooms}
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"routes.quebec"} 
      text={"routes.quebec_text"} 
      cards={cards}
      intestation={intestation} 
  />
}

export default QuebecRoute;