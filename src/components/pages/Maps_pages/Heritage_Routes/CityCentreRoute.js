import React from 'react';
import GenericRoute from './GenericRoute';

const CityCentreRoute = () => {
  
  const coordinates = [
    [44.494290, 11.346730], // 1. Piazza di Porta Ravegnana
    [44.494223, 11.342651], // 2. Piazza del Nettuno 
    [44.49373, 11.343064], // 3. Piazza Maggiore
    [44.492778, 11.343056], // 4. Basilica di San Petronio
    [44.492686, 11.343492], // 5. Via dell'Archiginnasio
  ];

  const zooms =[
    null,
    null,
    null,
    null,
    null
  ]

  const markerContent = [
    "Piazza di Porta Ravegnana",
    "Piazza del Nettuno",
    "Piazza Maggiore",
    "Basilica di San Petronio",
    "Via dell'Archiginnasio",
    // Add more popup content for each coordinate
  ];

  
  const cards =[
  //location 1 - Piazza di Porta Ravegnana
  [
  //elemento 1
    {
      title:"Due torri - Prosper Fontaine",
      body:"Tous les anciens monuments, un grand nombre du moins, palais, églises, habitations diverses, construits au moyen âge, sont encore debout et dans leur état primitif. Ils forment un fort beau décor que complètent les deux tours penchées, l’Asinelli et la Garisanda. Ces tours ne sont pas des œuvres d’art, comme la tour de Pise, et pourtant, je ne sais pourquoi, à cause de ce caractère particulier peut-être, leur inclinaison ne choque pas, au contraire l’œil aime à les rencontrer.",
      p:"Prosper Fontaine, 1898"
    },
    //elemento 2
    {
      title:"Due torri - Arthur Guthrie",
      body:"We found ourselves looking up at the Torre Asinelli and the Torre Garisenda, noticing their sad deflections from uprightness; one to the extent of four feet, and the other as much as eight feet from the perpendicular. Our minds were neither improved nor impressed by these things: I fear we drifted to frivolity, and to the composition of things which everyone ought to know : 'Bologna's sausages are fat,' we said, 'and its towers lean.'",
      p:"Arthur Guthrie, 1906"
    },
    {
      title:"Due torri - Pedro A de Alarcón",
      body:"Al encontrarme debajo de ellas, esperimento un vértigo y un espanto que no puedo dominar. Paréceme que me amenazan, que se mueven, que se caen sobre mí, que van á aniquilarme. Yo no comprendo como hay quien viva en las casas que se levantan en torno de estas dos espadas de Damocles. Ni menos me esplico como Asinelli y Garisenda se tienen de pie, ó sea sobre un solo pie, hace tantos cientos de años!",
      p:"Pedro A de Alarcón, 1861"
    },
    {
      title:"Due torri - Nemirovič Dančenko",
      body:"Въ 'доброе' старое время каждое благородное семейство для самозащиты около дома, гдѣ оно жило, строило башню. Таковы были нравы, что осторожность но мѣшала. Такимъ образомъ, фамилія Азинелли воздвигнула въ 1109 году эту стройную громаду на 98 метровъ вышины. Сама-ли она потомъ сдѣлала наклонъ на полтора метра или это было задумано ея авторомъ, такъ какъ падающія башни были въ модѣ,- я не знаю. Одни говорятъ одно, другіе другое, но съ ея верхушки, куда вы доходите по 449 ступенямъ, изъ которыхъ однѣ расшатаны, а другія провалились, открывается такой чудный видъ, что вы готовы признать Азинелли однимъ изъ величайшихъ архитекторовъ въ мірѣ.",
      p:"Nemirovič Dančenko, 1896"
    },
    {
      title:"Due torri - Konstantin Paulovič",
      body:"Я послѣдовалъ за моимъ провожатымъ, который привелъ меня осматривать двѣ довольно интересныя, наклоненныя башни города Болоньи, стоящія отдѣльно отъ прочихъ строеній, одна подлѣ другой, называемыя по именамъ своихъ строителей. Первая высокая и тонкая башня, называемая Азинелли, torre degli Asinelli, вышиною, какъ утверждаютъ, слишкомъ въ 300 футовъ, если не больше, съ не очень примѣтнымъ наклоненіемъ ( менѣе четырехъ футовъ ) отъ перпендикулярной линіи. Она служила когда-то, кань утверждаютъ, для астрономическихъ наблюденій, и стоитъ на средник города. Отсюда открываются хорошіе виды въ разныя стороны.",
      p:"Konstantin Paulovič, 1846"
    },
    {
      title:"Due torri - Vladimir Ivanovič Nemirovič-Dančenko",
      body:"Разсказываютъ о двухъ болоньскихъ гражданахъ, которые изъ отчаянія, что ихъ древняя республика гибнетъ, забрались на Гаризенду и бросились съ ея кровли внизъ. Съ этихъ поръ Болонья дѣлается центромъ дѣятельности карбонаровъ, очагомъ партіи итальянскаго объединенія и свободы. Каждый изъ городовъ этой страны, выросшій на почвѣ совершенно обособленныхъ льготъ и конституцій, могъ помириться съ утратою ихъ не иначе, какъ свободно признавъ себя частью цѣлой Италіи, войдя въ составъ ея. Не проходило года, чтобы Болонья не возставала.",
      p:"Vladimir Ivanovič Nemirovič-Dančenko, 1896"
    }
  ],
  //location 2 - Piazza del Nettuno
  [ 
    {
      title:"Fontana del Nettuno - Charles de Brosses",
      body:"Quoi qu'il en soit, on va de là, par une longue rue, à la place principale, ornée de la plus belle fontaine de marbre et de bronze que j’aie encore vue. C’est un Neptune colossal, accompagné de quatre petits Amours montés sur autant de dauphines, et plus bas de quatre grandes figures de femmes, qui jettent incessamment de l'eau fraîche par le bout des mamelles ; mais les jets d'eau sont si petits et si menus, que cette belle fontaine en en est toute défigurée : elle est du dessin de Jean de Bologne.",
      p:"Charles de Brosses, 1739"
    },
    {
      title:"Fontana del Nettuno - Édouard de Sain",
      body:"La Fontaine de Neptune, œuvre de Jean de Bologne, est au contraire une œuvre des plus remarquables, et dont nous avons le droit d'être fiers, car Jean de Bologne devrait s'appeler plutôt Jean de Douai. S'il a enrichi Bologne et Florence, sans compter Rome, des merveilles dues à son ciseau, il n'en est pas moins français par la naissance, et on peut admirer au Louvre un groupe signé de lui.",
      p:"Édouard de Sain, 1879"
    },
    {
      title:"Fontana del Nettuno - Jean Baptiste Marie Guidi",
      body:"Les meurs, dit-on, y sont très - pures, & le précepte de Juvenal, maxima debetur puero reverentia est exactement suivi par les mères à l'égard de leurs filles : elles ne manquent jamais de leur faire baisser les yeux lorsqu'elles passent devant le Neptune de la fontaine, dont la vigueur & la force est démontrée par des preuves contraires à l'honnêteté : je crouverois bien plus simple de recourir un Ferblantier avec une feuille de vigne, il le mettroit dans l'état de décence convenable.",
      p:"Jean Baptiste Marie Guidi, 1783"
    },
    {
      title:"Fontana del Nettuno - Lady Anna Miller Riggs",
      body:"In the Piazza Maggiore is a large fountain, by the celebrated sculptor Giovani di Bologna; all the figures are in bronze: the most: elevated (and which gives the group a pyramidical form when taken all together) is that of Neptune; he is landing with one foot upon a dolphin; one hand bears the trident, the other is stretched out from him. At the four corners of the plinth that sustains Neptune, are little children sitting, who appear to be guiding dolphins placed at the bottom of the angles of the pedestal; upon these dolphins ride four syrens, who press the water out of their breasts; it springs out also from the mouths of the dolphins, and falling into large shells, escapes from them into a bason, from which is a descent of three broad steps. The Neptune is in a most majestic attitude; he appears to be of middle age. The anatomy is finely rendered; the proportions perfect, the attitude noble and full of spirit; his countenance expresses more fierceness than pride. It is worth remarking, that from every point of view he appears to equal advantage. The Sirens are graceful, though not without expressing a consciousness of their charms, which they seem endeavouring to display to the best advantage. The children are natural, and the dolphins appear active and lively.",
      p:"Lady Anna Miller Riggs, 1741-1781"
    },
    {
      title:"Fontana del Nettuno - Lady Augusta MacGrefor Holmes",
      body:"The Neptune of John of Bologna holds a place once occupied by a statue, by Raphael, of Pope Julius the Second, and raised by his command shortly after his first conquest of Bologna, in 1406, but the pope was represented with so haughty an aspect, and in so menacing an attitude, that the original of the statue had hardly quitted them, when the indignant Bolognese struck it down.",
      p:"Lady Augusta MacGrefor Holmes, 1842"
    },
    {
      title:"Fontana del Nettuno - Pedro A. de Alarcón",
      body:"hágome conducir á la Plaza Mayor, situada en el centro de Bolonia. Esta plaza es sumamente bella. Fórmanla la basílica de San Petronio, el Palacio Público y el Palacio del Podestá. En medio de ella hay una magnífica fuente de Neptuno, obra del famoso escultor Juan de Bologna.—En esta fuente son de notar cuatro hermosas sirenas desnudas que se oprimen con ambas manos las voluptuosas y abultadas formas de su seno, hasta hacerles brotar raudales de agua.",
      p:"Pedro A. de Alarcón, 1861"
    },
    {
      title:"Fontana del Nettuno - José M. Monge",
      body:"Basta decir, para que se comprenda la impropiedad del monumento que se eleva en un sitio tan frecuentado de la ciudad, que las damas inglesas que á él se acercan, inducidas por los elogios que de aquél hace la Guía que llevan en la mano, apenas alzan los ojos para examinarlo, los bajan ruborizadas, cierran el libro, y pronunciando entre dientes un ¡ shame !, prosiguen su camino, sin atreverse á mirar hacia atrás.",
      p:"José M. Monge, 1887"
    },
    {
      title:"Fontana del Nettuno - Pavel Pavlovič Muratov",
      body:"Весело и шумно бьет прекрасный фонтан Нептуна на ее главной площади, окруженной живописными старинными дворцами. На эту площадь выходит огромный неотделанный фасад самой большой из болонских церквей, Сан Петронио.",
      p:"Pavel Pavlovič Muratov, 1994"
    },
    {
      title:"Fontana del Nettuno - Andrej Mudrov",
      body:" в XVIII веке болонские моралисты требовали снести возведенный  на пьяцца Мадджоре скульптором Джамболонья фонтан, в центре которого  высится фигура Нептуна (прозванная здесь,  как и аналогичная скульптура  во Флоренции,  Гигантом ), поскольку слышали, как во время исповеди женщины признавались, что “своим  видом она во многом способствовала их впадению  в грех”",
      p:"Andrej Mudrov, 2012"
    }
  ],
  //location 3 - Piazza Maggiore
  [ 
    {
      title:"Piazza Maggiore - Lady Sydney Morgan and Sir Thomas Charles Morgan",
      body:"The PIAZZA DEL GIGANTE, the Forum of Bologna in the middle ages, has been the site of many curious scenes and important political events. It is environed by buildings of great antiquity, and much historical interest, — by the church of St. Petronius (where Emperors were crowned by Popes, and where the Council of Trent held its most famous sessions in 1548); by the PALAZZO PUBBLICO (the residence of Papal legates and Republican Gonfalonieri, with its stairs by Bramante, and its statues by the “MICHAEL ANGELO INCOGNITO”); by the PALAZZO DEL PODESTA, the ancient seat of municipal authority, and thence called the Palazzo del vecchio commune); and by the Torazzo, a huge tower, supported by columns, where Pope John the Twenty-third held a conclave in the fifteenth century, and where the archives of the city are still preserved.",
      p:"Lady Sydney Morgan and Sir Thomas Charles Morgan, 1821"
    },
    {
      title:"Piazza Maggiore - Manuel Pérez-Villamil",
      body:"Al recorrer toda la dilatada via di Galliera, por debajo de los anchos soportales que dan á las calles de Bolonia aspecto original y grandioso; al desembocar despues en la Plaza Mayor, foro de la ciudad en la Edad Media, que conserva en sus edificios la fisonomía severa y sombría de la antigua arquitectura toscana; al pasar por junto á los muros de la iglesia de San Petronio, grandiosa basílica que recuerda los tiempos heróicos de Bolonia, y en cuyos ladrillos puede leerse su historia",
      p:"Manuel Pérez-Villamil, 1877"
    },
    {
      title:"Piazza Maggiore - Benito Pérez Galdós",
      body:"El Palacio Municipal y el del Podestá son bastante bellos, pero incompletos, en parte restaurados, en parte sin concluir. La plaza en que están, frente á la hermosa y no concluida fachada de San Petronio, se halla decorada con una estátua moderna de Victor Manuel, y con la antigua y soberbia fuente de Neptuno, obra de Juan de Bolonia.",
      p:"Benito Pérez Galdós, 1890"
    },
    {
      title:"Piazza Maggiore - David Nikogosjan",
      body:"я попал на центральную площадь Болоньи — piazza Maggiore, где находится ратуша и дворец подесты (наемного воеводы). Я был несказанно удивлен, обнаружив, что верхний карниз этих древних (ХV век) зданий украшены зубцами, точь в точь копирующими зубцы стен Московского Кремля, до боли знакомыми каждому «homo sovetikus».",
      p:"David Nikogosjan, 1993"
    },
    {
      title:"Piazza Maggiore - Richard Francis Burton",
      body:"There is a something in the presence of Bologna that softens the soul; a venerable aspect appealing to sentiments which men do not wear upon the sleeve; a solemnity of vast half-ruined hall, and of immense deserted arcade; a pathetic vista of unfinished church and closed palace, relics of the poetical Past which have projected themselves into the prosaic Present. You learn with pleasure that you can lose your way in the long, labyrinthine streets and alleys, wynds and closes—such contrasts with the painful rectangular regularity of Mannheim, New York, and Buenos Ayres.",
      p:"Richard Francis Burton, 1876"
    }
  ],
  //location 4 - Basilica di San Petonio
  [
    {
      title:"Basilica di San Petronio - Jean-Marie Roland de La Platière",
      body:"San Petronino, plus grand encore que la cathédrale, mais dans le genre gothique, célèbre par le couronnement de Charles-Quint, par les assemblées des Peres du Concile de Trente après que la peste les eût chassés de cette ville, est encore fameux par la Méridienne de Cassini, qu'on restaure en ce moment où l'on repave l'Eglise, & qu'on y fait beaucoup d'autres réparations.",
      p:"Jean-Marie Roland de La Platière, 1777"
    },
    {
      title:"Basilica di San Petronio - Prosper Fontaine",
      body:"L’extérieur de Saint-Pétrone est sans beauté ; on n’en a pas achevé la façade dont la partie inférieure seule est revêtue de marbres et sculptée. L’encadrement des trois portes se distingue par sa magnificence. Jacopo della Quercia a exécuté de sa propre main les sculptures de la porte du milieu. Il travailla pendant douze ans à cette œuvre et y mit tous ses soins. Elle comprend quinze bas-reliefs et une statue de la Vierge.",
      p:"Prosper Fontaine, 1898"
    },
    {
      title:"Basilica di San Petronio - Lady Sydney Morgan and Sir Thomas Charles Morgan",
      body:"Saint Petronius was a popular saint in Bologna, where he arrived from Constantinople in the fifth century. His temple,  remarkable for the simple grandeur of its style, was a most magnificent work for the age in which it was constructed (1390); but, as usual, it remains unfinished; and while its altars dazzle, and its chapels blaze, the holes are  still  to  be  seen  in  its  coarse  brick facade, where scaffoldings were placed in the fourteenth century.",
      p:"Lady Sydney Morgan and Sir Thomas Charles Morgan, 1821"
    },
    {
      title:"Basilica di San Petronio - Lady Augusta MacGrefor Holmes",
      body:"The church of St. Petronio, though unfinished, and likely to remain so, has an imposing aspect, and is of ancient date, as commenced in 1590. It possesses its patron saint’s entire body, the head, which only was wanting, having been bestowed by Pope Benoit the Fourteenth. The presence of this relic caused a strange mistake on the part of the learned German Meibomius, who, believing all the works of the satirical writer Petronius preserved at Bologna, made a long journey thither to behold his manuscripts, and was greatly disappointed when led to the shrine. In this church was Charles the Fifth, the emperor, crowned king of Lombardy by Clement the Seventh;—kissing the same papal foot he had before held captive, and creating, after the ceremony, two hundred knights, in the list of whom are included the names of several noble families still existing in Bologna.",
      p:"Lady Augusta MacGrefor Holmes, 1842"
    },
    {
      title:"Basilica di San Petronio - Arthur Guthrie",
      body:"We saw San Petronio, a church that was designed to be the biggest church in the world, greater even than St. Peter's in Rome, but only the nave was completed",
      p:"Arthur Guthrie, 1906"
    },
    {
      title:"Basilica di San Petronio - Pedro A. de Alarcón",
      body:"la iglesia favorita de los boloñeses, asi como la mas ilustre y bella de la ciudad, es indudablemente la basílica de San Petronio, patron de Bolonia. Esta iglesia fue votada por aclamación popular cuando Bolonia se declaró independiente el siglo XIV, y para edificarla, empezaron por derribar ocho iglesias que habia agrupadas en un mismo punto. El plan era construir un templo mayor que todos los conocidos hasta entonces; y á la verdad que hubiera sido inmenso, á no haberse abandonado la obra",
      p:"Pedro A. de Alarcón, 1861"
    },
    {
      title:"Basilica di San Petronio - Pedro A. de Alarcón",
      body:"y sin embargo, San Petronio es la iglesia mas grande de Bolonia, y una de las mayores que he visitado en parte alguna.—Su estilo es gótico italiano. La fachada no está tampoco concluida; pero ostenta preciosidades esculturales y arquitectónicas dignas de prolijo estudio. Las puertas sobre todo son verdaderos prodigios. Sobre una de ellas,—¡qué tenacidad!—hubo en algun tiempo una magnifica estatua de bronce del papa Julio II, modelada por Miguel Angel.",
      p:"Pedro A. de Alarcón, 1861"
    },
    {
      title:"Basilica di San Petronio - Vladimir Ivanovič Nemirovič-Dančenko",
      body:"Хотя для возведения ее сломано было несколько других церквей и приготовлена была для нее обширная площадь, вынуждены были стеною завершить хоральную часть первоначального плана с тем, чтобы никогда не продолжить ее. Но если бы этот смелый план болонским населением был исполнен, то S. Petronio был бы, кажется, на 34 метра длиннее св. Петра в Риме. Но позднейшие поколения не только не разделили взглядов своих честолюбивых предков, но и как бы предали свой, и в неполном виде величественный, храм значительному забвению. Лишь отдельные лица и фамилии в разные времена устраивали капеллы в боковых нефах этой церкви, но город, и община, и целая болонская округа, в течение 4-х с лишком столетий не позаботились даже построить приличных входных дверей. В блистательной раме главного портала работы Якопо делла Кверча и в двух боковых дверях главного фасада, украшенных обильными по числу действующих персонажей [скульптурами] Триболо, доселе существуют дешевые, наскоро сколоченные, окрашенные темно-зеленой краской двери, каковых по их убожеству не допустил бы в своем доме ни один мало-мальски состоятельный житель этого города. Внутри этого храма в ранний час солнечного дня ныне было много света, не то что во флорентинских церквах. Но, как нарочно, где светло, там не оказалось таких предметов искусства, которые необходимы для нашего собрания. Лишь в одной из капелл левого нефа я встретил весьма интересные скамьи для хора, исполненные из дерева в готическом стиле. Скамьи эти сплошные, без разделений и ручек, как это обыкновенно делается в хоральных частях храмов. Хорошо было бы, думалось мне, украсить готическими скамьями один уголок зала Средних веков.",
      p:"Vladimir Ivanovič Nemirovič-Dančenko, 1846"
    },
    {
      title:"Basilica di San Petronio -  Vladimir Ivanovič Nemirovič-Dančenko",
      body:"Одно изъ самыхъ грандіозныхъ сооруженій Болоньи - храмъ св. Петронія съ своимъ необшитымъ фасадомъ. Есть что-то величавое въ этихъ линіяхъ, что-то молитвенное, внушающее вамъ неподдѣльное чувство благоговѣнія. Видимо, художникъ, создавшій эту громаду, не стѣснялся ни временемъ, ни пространствомъ, ни издержками. Св. Петроній въ Болоньѣ такъ же широко задуманъ и выполненъ, какъ въ музыкальномъ мірѣ циклъ Нибелунговъ Вагнера. Чтобъ понять мое сравненіе, чтобы не смѣяться надъ нимъ, нужно пріѣхать сюда и стать посреди этой площади, передъ этою мрачною и гигантскою массою камня.",
      p:"Vladimir Ivanovič Nemirovič-Dančenko, 1896"
    },
  ],
  //location 5 - Via dell'Archiginnasio 
  [
    {
      title:"Antica Università - Pedro A. de Alarcón",
      body:"Cerca de la Plaza Mayor está la Universidad vieja (ó sea el Archigimnasio), una de las mas antiguas de Italia.—La Universidad nueva, sumamente notable por los museos y gabinetes de ciencias físicas y matemáticas que encierra, se halla en un hermoso palacio construido en el siglo XVI en la Strada di San Donato.",
      p:"Pedro A. de Alarcón, 1861"
    },
    {
      title:"Antica Università - Filippov Sergej Nikitič",
      body:"Къ лучшимъ улицамъ принадлежитъ via dell’Archiginnasio, гдѣ самые великолѣпные магазины—подъ аркадами. Центръ города—двѣ смежныя площади: Пьяцца Витторіо Эмануэле и Пьяцца Нэттуно.",
      p:"Filippov Sergej Nikitič, 1907"
    }
  ]
  ]

  const intestation ={
    difficulty:'maps.easy',
    time:"10 min",
    km:"650 m"
  }

  return <GenericRoute 
      coordinates={coordinates} 
      zooms={zooms}
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"Alla scoperta dei luoghi simbolo di Bologna"} 
      text={"Alla scoperta dei luoghi simbolo di Bologna....."} 
      cards={cards}
      intestation={intestation}
  />
}

export default CityCentreRoute;