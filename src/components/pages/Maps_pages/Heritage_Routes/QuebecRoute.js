import React from 'react';
import GenericRoute from './GenericRoute';

const QuebecRoute = () => {
  
  const coordinates = [
    [44.4976, 11.3535], // 1. Via delle Belle Arti, 56  
    [44.496880, 11.352433], // 2. Via Zamboni, 33
    [44.49560546875, 11.348681449890137], // 3. Via Zamboni, 20
    [44.494290, 11.346730], // 4. Piazza di Porta Ravegnana 
    [44.49331283569336, 11.34487533569336], // 5. Mercato di Mezzo 
    [44.49373, 11.343064], // 6. Piazza Maggiore 
    [44.492778, 11.343056], // 7. Basilica di San Petronio 
    [44.4918717, 11.3438538], // 8. Piazza Galvani 1 
    [44.4894, 11.3446], // 9. Piazza S. Domenico, 13 
    [44.4892, 11.3398], // 10. Via Tagliapietre, 19 
    [44.492149353027344, 11.3378267288208], // 11. Via Barberia, 4 
    [44.497597, 11.30777], // 12. Via della Certosa, 18 
    [44.487591, 11.305346], // 13. Via di San Luca 419 
    [44.479117, 11.298069], // 14. Via di San Luca, 36 
  ];
  const zooms =[
    20,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]
  const markerContent = [
    "Pinacoteca",
    "Zona universitaria",
    "Palazzo Magnani",
    "Due torri",
    "Mercato di Mezzo",
    "Piazza Maggiore",
    "Basilica di San Petronio",
    "Antica Università",
    "Basilica di San Domenico",
    "Santuario del Corpus Domini",
    "Dipartimento delle Arti",
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
    title:"Pinacoteca - Honoré Beaugrand",
    body:"L'académie des Beaux-Arts contient le Musée ou Pinacoteca, l'une des plus belles collections de tableaux de l'Italie, entr'autres le Martyre, de St. Pierre de Vérone, le Martyre de Ste. Agnès, du Dominiquin ; la Madonna della Pietà de Guido Reni ; la Communion de St. Jérôme, l’Assomption, d'Augustin Carrache, et surtout l'admirable Ste. Cécile, de Raphaël, la merveille de la galerie. La Bibliothèque du Musée est riche en estampes : on y conserve des Paix en argent niellé, du célèbre orfèvre Fr. Francia.",
    p:"Honoré Beaugrand, 1889"
  },
  {
      title:"Pinacoteca - Jean-Baptiste Legacé",
      body:"C’est ici qu'est conservée la Sainte-Cécile de Raphaël, cette œuvre magnifique que tant de fois j’avais admirée dans des photographies, et que je revoyais dans tout l’éclat de ses brillantes couleurs…. Et puis des Dominiquin, des Francia, des Carrache, des Guido…. J’allais d’un tableau à l’autre, dans une exaltation que le peu de temps me restait ne faisait qu’augmenter. Pourquoi faut-il que je m’arrache à tant de beautés ?",
      p:"Jean-Baptiste Lagacé, 1900"
    }
  ],
  //location 2 - Zona Universitaria
  [ 
    {
      title:"Zona universitaria - Honoré Beaugrand",
      body:"L'Université, fondée en 1119, la plus ancienne d'Italie après celle de Salerne, occupe les bâtiments du palais Poggi ; c'est là qu'est installée la bibliothèque publique qui possède 150,000 volumes et 6,000 manuscrits.",
      p:"Honoré Beaugrand, 1889"
    },
    {
      title:"Zona universitaria - Jean Éthier-Blais",
      body:"Bologne n'a pas - et je crois bien, n'a jamais eu - la prétention d'être, comme Florence, une grande ville internationale, centre d'art et de culture qui rayonne sur le monde. L'Université, oui; la ville dans ses palais et son instinct dominateur, non.",
      p:"Jean Éthier-Blais, 1986"
    }
  ],
  //location 3 - Palazzo Magnani
  [ 
    {
      title:"Palazzo Magnani - Jean Éthier-Blais",
      body:"Les fresques des Carraches sont au Palais Magnani (Credito romagnola) dans le salon d'honneur. Ces palais, à Bologne comme à Ferrare, vous donnent envie de vivre aux XV-XVIe siècles. Encore faudrait-il y vivre prince. La cour d'honneur s'orne d'une fontaine feuillue qui évoque Ronsard. Le salon d'honneur est, comme il se doit, au centre de l'étage noble. Les Carraches avaient l'habitude de ces vastes scènes mythologiques. Louis, Augustin, Annibal développent ici, en sept fresques claires, ésotériques, majestueuses, l'épopée de Romulus.",
      p:"Jean Éthier-Blais, 1986"
    },
    {
      title:"Palazzo Magnani - Jean Éthier-Blais",
      body:"On a beaucoup écrit sur ces fresques. Les savants tentent à qui mieux mieux de déceler dans les couleurs ou les lignes la main du cousin ou de l'un des deux frères. Ces savants, on dirait une ronde moliéresque: Dodmer, Cavalli, Wittkower, Mahon, Posner. Portent-ils chapeaux pointus? Avec le Pr. Petroni, qui n'a rien d'un faux savant, je me suis assis devant sec paysages au milieu desquels s'agitent guerriers, lances, épées. Romulus tue le Roi, se réfugie au Capitole, trace les contours de Rome. Les Sabins sont réduits à quia. On sait ce qu'il advint des Sabines. En arrière-plans, ces paysages rêvés, ces villes aux mille tons qui figurent Bologne, et le ciel.",
      p:"Jean Éthier-Blais, 1986"
    },
    {
      title:"Palazzo Magnani - Jean Éthier-Blais",
      body:"Les Bolognais sont fiers des Carraches, qui sont en harmonie avec le caractère secret de la ville. Que soudain éclatent formes et couleurs! Qu'à la magnificence de l'épopée s'ajoutent les vallons et les pics! Il y a une joie profonde à goûter ces plaisirs auxquels l'âme a sa part et cependant interdits à la multitude. L'amitié qui d'instinct m'a lié repose en partie sur cette notion d'exclusivité.",
      p:"Jean Éthier-Blais, 1986"
    }
  ],
  //location 4 - Due torri
  [ 
    {
      title:"Due torri - Eustache Rocheleau",
      body:"En route, je salue au passage les deux Tours Penchées dont le sommet se perd dans les nues. Rien n'est plus saisissant que la vue de ces monuments antiques, hauts de trois cents pieds et inclinés de plusieurs coudées hors de la verticale.",
      p:"Eustache Rocheleau, 1922"
    },
    {
      title:"Due torri - Ringuet",
      body:"Il ne faut demander à Bologne ni le décor de Naples, ni les monuments de Rome, ni la grâce orientale de Venise. Mais qui flâne un peu dans Bologne y découvre une ville calme, aux rues en arcades pittoresques ainsi qu'un musée de fort bonne qualité ; et surtout une atmosphère pleine de charme vétuste. Les palais et les églises en sont de brique couleur ocre. Les deux tours penchées, l’Asinelli et la Garisenda, ont l’air de vieux géants en goguette. Chaque détour vous y apporte quelque chose.",
      p:"Ringuet, 1965"
    },
    {
      title:"Due torri - Jean Éthier-Blais",
      body:"La via Rizzoli mène aux deux tours qui se dressent dans le centre de Bologne comme un témoignage obscur des mœurs du passé. À l'époque de Dante, on en comptait près de deux cents. Le premier poème de Dante leur est consacré. On y surveillait de loin les troupes ennemies, impériales d'abord, papalines ensuite, la République enfin, la démocratie. La roue tourne.",
      p:"Jean Éthier-Blais, 1986"
    },
    {
      title:"Due torri - Dominique Garand",
      body:"Pour couronner le tout, nous avons grimpé dans l’une des deux tours penchées. Beaucoup plus inquiétantes que celle de Pise tant elles paraissent friables et sur le point de s’écrouler ! Une petite visite chez Feltrinelli tout à côté et voici que sonna l’heure de rejoindre Bruno pour un apéritif.",
      p:"Dominique Garand, 2015"
    }
  ],
  //location 5 - Mercato di Mezzo
  [
    {
      title:"Mercato di Mezzo - Dominique Garand",
      body:"Il fallait que nous goutions à son prosciutto, à ses tagliatelle sauce ragù, à la salade qu’elle avait enduite d’une huile de qualité et d’un vinaigre balsamique de Modène au gout raffiné. […] Dès que je goutais un de ses plats, Franca m’en expliquait la provenance, la composition, l’histoire. Un cours accéléré de cuisine bolognaise pour notre visiteur canadien.",
      p:"Dominique Garand, 2015"
    },
  ],
    //location 6 - Piazza Maggiore
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
    },
    {
      title:"Piazza Maggiore - Jean Éthier-Blais",
      body:"La place est remplie de promeneurs qui hésitent, semble-t-il, entre l'église et le café. Ils ne vont nulle part, mais tourneboulent entre San Petronio, le Palais communal, celui du Podestat et la fontaine de Neptune. Pallavicini, Boncompagni, Marescalchi, Bentivoglio, Bianconcini, Sampieri, Bevilacqua, noms de palais, noms de familles.",
      p:"Jean Éthier-Blais, 1986"
    },
    {
      title:"Piazza Maggiore - Jean Éthier-Blais",
      body:"La place est remplie de promeneurs qui hésitent, semble-t-il, entre l'église et le café. Ils ne vont nulle part, mais tourneboulent entre San Petronio, le Palais communal, celui du Podestat et la fontaine de Neptune. Pallavicini, Boncompagni, Marescalchi, Bentivoglio, Bianconcini, Sampieri, Bevilacqua, noms de palais, noms de familles.",
      p:"Jean Éthier-Blais, 1986"
    }
  ],

  //location 7 - Basilica di San Petronio
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
    },
    {
      title:"Basilica di San Petronio - Jean Éthier-Blais",
      body:"San Petronio est immense et se complaît dans sa vastitude. Il a l'espace rayonnant, centré sur le déploiement de la nef comme un homme qui respire en profondeur, ou comme une longue phrase mélodique à la Berlioz, ou comme un paquebot sur la mer. La chaire et le méridien situent cet espace qui, sans eux, paraîtrait impénétrable. Où que l'œil se tourne, il voit. Ce vide est fait, a été conçu, pour le regard de l'homme, en sorte que toutes les autres églises paraîtront encombrées. Aux briques sombres, la lumière donne une vie moelleuse. Quelle église où lire son bréviaire, si l'on était prêtre et si les prêtres lisaient le bréviaire! J'y avance dans le recueillement de l'infini. Des chapelles, je retiens la Pietà d'Onofri (1506), réaliste. Je cherche dans la peinture et la statuaire, à retrouver les traits des êtres de l'époque.",
      p:"Jean Éthier-Blais, 1986"
    },
    {
      title:"Basilica di San Petronio - Jean Éthier-Blais",
      body:"La façade est inachevée, comme à Florence celle de San Lorenzo. Et cet inachèvement donne à San Petronio son allure si manifeste d'éternité.",
      p:"Jean Éthier-Blais, 1986"
    },
    {
      title:"Basilica di San Petronio - Dominique Garand",
      body:"En face de nous, la cathédrale avec sa façade dont la finition, en marbre, ne couvre que la moitié de la surface : – Ils ont manqué de budget, me dit Cristina. – Oui, mais depuis le temps?... – C’est comme ça, on ne refait pas l’histoire. C’est drôle, ces histoires de façades d’églises. À Florence, ils ont bien terminé celle de Santa Croce, plusieurs siècles après la construction de l’église, et aussi celle de Santa Maria del Fiore. Mais celles de Santo Spirito et de San Lorenzo sont laissées à l’état d’ébauches et je serais bien étonné qu’on lance un concours pour leur en concevoir une. Trop tard. Trop de touristes les ont vues comme elles sont, elles apparaissent partout telles que telles dans les guides, alors leur faire un petit maquillage serait une hérésie.",
      p:"Dominique Garand, 2015"
    }
  ],
  //location 8 - Antica Università
  [
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
    },
    {
      title:"Antica Università - Eustache Rocheleau",
      body:"L'après-midi fut consacré à la visite des différents monuments de la ville. Le premier, en tête de la liste, fut la Bibliothèque Communale, autrefois le siège de la première université. Toutes les parties de l'édifice sont ornées des portraits et des armes des anciens professeurs et des étudiants. Lors du VIIIe centenaire de cette université, célébré en 1888, en présence des souverains d'Italie, les représentants de presque toutes les universités du monde, revêtus de leurs costumes du moyen-âge, se réunirent dans cette enceinte. Cet archigymnase renferme un théâtre anatomique dont le plafond est en bois sculpté. Au-dessus de la chaire du professeur, se voit encore une statue en bois, représentant un homme écorché : on dit que c'est dans cet endroit qu'ont été opérées les premières autopsies, sur le cadavre humain.",
      p:"Eustache Rocheleau, 1922"
    },
    {
      title:"Antica Università - Jean Éthier-Blais",
      body:"À l'Université, l'amphithéâtre du XVIe siècle, où l'on disséquait; dans les rues, des palais ignorés des passants. Des noms illustres surgissent et c'est l'histoire de cette admirable ville qui renaît. Bologne est associée à la naissance d'une sympathie intellectuelle qui deviendra une amitié.",
      p:"Jean Éthier-Blais, 1986"
    },
    
  ],
  //location 9 - Basilica di San Domenico
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
    },
    {
      title:"Basilica di San Domenico - Lionel Groulx",
      body:"Tout à l'heure, je m'en vais voir le tombeau de saint Dominique, fondateur des Dominicains. Demain matin, j'espère avoir le bonheur de dire la messe, sur le corps du Saint, et à 10 1/2 heures, nous prendrons le train pour Venise, qui se trouve tout au fond de la mer Adriatique.",
      p:"Lionel Groulx, 1993"
    }
  ],
  //location 10 - Santuario del Corpus Domini
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
    },
    {
      title:"Santuario del Corpus Domini - Lionel Groulx",
      body:"Ce matin, j'ai dit la messe devant S. Catherine de Bologne, encore une Clarisse. La Sainte est miraculeusement conservée. Comme sainte Claire d'Assise, elle est toute noircie, mais elle est assise dans un riche fauteuil, en arrière de l'autel, recouverte d'une robe d'étoffe d'or, une sorte de mitre d'abbesse sur la tête, et l'anneau au doigt. Ses membres ont conservé leur flexibilité. Et ainsi on peut lui remuer les bras, la tête. J'ai pu m'approcher tout près après la messe, et même lui baiser la main. Seuls, les prêtres jouissent de ce privilège.",
      p:"Lionel Groulx, 1993"
    }
  ],
  //location 11 - Dipartimento delle Arti
  [ 
    {
      title:"Dipartimento delle Arti - Dominique Garand",
      body:"Le DAMS, une école assez en vogue à l’époque où enseignait Umberto Eco, j’en avais un peu entendu parler. Mais le plus chouette, c’était de rencontrer des étudiants. Depuis mon arrivée, je n’avais été admis dans aucune fête.",
      p:"Dominique Garand, 2015"
    }
  ],
  //location 12 - Cimitero monumentale della Certosa
  [ 
    {
      title:"Cimitero monumentale della Certosa - Joseph-Octave Plessis",
      body:"Comme il n'est aucune famille de la ville qui n'ait de ses proches dans l'église, dans les chapelles, caveaux, cloîtres ou parterres de la Chartreuse, il en résulte que la commémoration des morts y est célébrée avec un immense concours de peuple. Dès la veille, les cierges de toute grosseur y sont portés par centaines, et quoique le jour ne fut pas fort avancé, lorsque nous y allâmes, les aumôniers nous dirent qu'il y en avait déjà beaucoup de rendus.",
      p:"Joseph-Octave Plessis, 1903"
    }
  ],
  //location 13 - Portico di San Luca
  [ 
    {
      title:"Portico di S. Luca - Jean-Baptiste Lagacé",
      body:"On se croirait presque à Montréal, n’était-ce le nombre incroyable des maisons à portiques. Les trottoirs passent sous les arcades et l'on peut ainsi faire le tour de la ville protégé contre les rayons brûlants du soleil.",
      p:"Jean-Baptiste Lagacé, 1900"
    },
    {
      title:"Portico di S. Luca - Lionel Groulx",
      body:"Plusieurs des grandes rues ici ont des maisons qui s'étendent en arches au-dessus de nos têtes. Jamais besoin de parapluie. Et l'on croirait marcher dans un grand corridor.",
      p:"Lionel Groulx, 1993"
    },
    {
      title:"Portico di S. Luca - Jules-Paul Tardivel",
      body:"Ce qui distingue Bologne ce sont de nombreuses maisons à portiques. Les trottoirs passent sous des arcades. Cela a ses avantages par un temps de pluie ou de grande chaleur, sans doute ; mais par un temps froid comme celui que nous avons ces jours-ci, on cherche le soleil. J'ai vu dans les rues de Bologne de véritables banes de neige de deux ou trois pieds d'épaisseur, tout comme à Québec ou à Montréal, vers la fin de l'hiver.",
      p:"Jules-Paul Tardivel, 1890"
    }

  ],
  //location 14 - Santuario della Madonna di San Luca
  [ 
    {
      title:"Santuario della Madonna di San Luca - Eustache Rocheleau",
      body:"Tout en cheminant lentement et en m'arrêtant devant les curiosités de la ville, me voici bientôt en face d'un immense portique en maçonnerie composé de centaines d'arcades (630), la plupart ornées de peintures et de pieuses inscriptions. Cette galerie qui s'étend sur une ligne de près de quatre mille, monte sur la colline jusqu'à l'église Saint-Luc. ",
      p:"Eustache Rocheleau, 1922 "
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
      init_pos={ {lat: 44.4976, lng: 11.3535} }
      title={"routes.quebec"} 
      text={"routes.quebec_text"} 
      cards={cards}
      intestation={intestation} 
  />

}

export default QuebecRoute;