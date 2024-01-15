import React from 'react';
import GenericRoute from './GenericRoute';

const SanLucaRoute = () => {
  
  const coordinates = [
    [44.490515, 11.32989], // 1. Porta Saragozza
    [44.490121, 11.310978], // 2. Arco del Meloncello
    [44.487591, 11.305346], // 3. Punto Panoramico Salita San Luca
    [44.479117, 11.298069], // 4. Santuario della Madonna di San Luca
  ];
  const zooms =[
    null,
    null,
    null,
    null,
    null
  ]
  const markerContent = [
    "Porta Saragozza",
    "Arco del Meloncello",
    "Punto Panoramico Salita San Luca",
    "Santuario della Madonna di San Luca",
    // Add more popup content for each coordinate
  ];

  const cards =[
  //location 1 - Porta Saragozza
  [
  //elemento 1
    {
      title:"Porta Saragozza - Charles de Brosses",
      body:"Les portiques dont je vous parle sont fort larges, pavés de briques, et douze personnes de front peuvent y marcher à couvert et à leur aise ; mais, comme si ce n’eût pas été assez d’en garnir toute la ville, on en a construit un autre au dehors, qui, commençant à une des portes, va, grimpant jusque sur le sommet d’une montagne assez haute, se terminer à une petite église, où la dévotion est fréquente.",
      p:"Charles de Brosses, 1739"
    },
    {
      title:"Porta Saragozza - Émile Polonceau",
      body:"j'entreprends aussitôt l'excursion à la montagne della Guardia; après avoir traversé plusieurs rues j'arrive à la porte Sarragosse, nom que les Français lui ont donné. Puis je gravis à couvert sous six cent soixante-quatorze arcades qui se succèdent (je les ai comptées), la montée est ingénieusement adoucie par des degrés peu élevés avec des intervalles en bandes plates comme moyens de repos, ou soulagement de la fatigue;",
      p:"Émile Polonceau, 1835"
    },
    {
      title:"Porta Saragozza - Pío Baroja",
      body:"Bolonia, a juzgar por su plano, debe tener la forma de un pentágono irregular, rodeado de murallas. Desde lo alto de cualquiera de las dos torres inclinadas que se levantan en la plaza, debe verse este pentágono, que limitan muro rectos con sus puertas. Por cierto que uno de ellos se llama Mura di Porta Saragozza.",
      p:"Pío Baroja, 1949"
    },
  ],
  //location 2 - Arco del Meloncello
  [ 
    {
      title:"Arco del Meloncello - Noémie Dondel du Faouëdic",
      body:"Comme tous les étrangers, nous avons fait notre pèlerinage à la madonna di san Luca : on monte toujours pendant plus d’une lieue ; aussi, la vue s’embellit-elle à chaque pas, j’allais dire à chaque arcade ; car, figurez-vous que ces Bolonais, avec leur manie d’arcade, ne se sont pas contentés de celles dont leurs rues sont bordées de tous côtés, ce qui donne à la ville un aspect sombre et tout-à-fait à part ; mais qu’ils ont construit un portique de 640 arcades, qui commence en dehors de la porte de Saragosse, pour conduire uniquement au susdit pèlerinage. Il n'y a même pas quelques maisons pour lui donner raison d'être. Non, c'est un chemin en galerie couverte, qui dure cinq kilomètres.",
      p:"Noémie Dondel du Faouëdic, 1875"
    },
    {
      title:"Arco del Meloncello -  Frances Milton Trollope",
      body:"This singular erection is the pious labour of the citizens of Bologna, every class contributing a sum of money towards it; as we learnt by inscriptions placed at intervals between the arches, stating, that such and such a number of them had been erected at the cost of the tailors, or the tinkers, or the shoe-makers, or the servants, of the town .... not a trade or profession of any kind being omitted.",
      p:"Frances Milton Trollope, 1842"
    },
    {
      title:"Arco del Meloncello - Esq. Edward Wright",
      body:"This Portico was built by voluntary Contributions; many of the Arches were done wholly at the Expence of the Nobility, and are distinguished by the Arms of the Builder, which are painted  within them, and are repeated in every Arch where the same Person built several. The meanest Artificers, the Ostlers in Inns, and other Servants, have also done their Quota, which is likewise distinguish'd by Inscriptions, and some Device under each Arch instead of a Coat of Arms.",
      p:"Esq. Edward Wright, 1764"
    },
    {
      title:"Arco del Meloncello - José M. López de Ecala y Zubiría",
      body:"la famosa iglesia de Ntra. Sra. de san Lucas, que aunque situada sobre una montaña á mucha distancia, se comunica con la ciudad por cierta galería de seiscientas noventa varas y hasta quinientos escalones. Por tan costoso y singular camino, al abrigo del sol y del agua, se sube al celebrado santuario, para venerar á una milagrosa vírgen pintada sobre madera por el mismo san Lucas, que hizo bien en dejar el oficio.",
      p:"José M. López de Ecala y Zubiría, 1849"
    },
    {
      title:"Arco del Meloncello - Konstantin Paulovič",
      body:"Наконецъ, оставивши этотъ споръ, я замѣтилъ ему, что женскій монастырь и огромный крытый переходъ, или галлерея, признаваемые имъ за чудесное произведеніе, не содержать въ себя никакого чуда, и какъ и слышалъ, они построены просто благотворительными приношеніями гражданъ, безъ всякаго чуда, естественными силами. А именно, въ половимѣ XVII вѣка, одна молодая дѣвица, удалившись отъ суетной городской жизни, поселилась на этой горѣ отшельницею и тамъ умерла. Въ память ея благочестивой жизни, набожные жители Болоиьи, послѣ ея смерти, соорудили, частными приношеиіямп, этотъ женскій монастырь сь церковію и помѣестили въ ней чудотворную древнюю икону Апост. Луки. А для удобнѣйшаго путешествія гражданъ изъ города въ монастырь, построили потомъ на аркахъ со сводами огромнѣйшій крытый ходъ, или корридоръ.",
      p:"Konstantin Paulovič, 1846"
    }
  ],
  //location 3 - Punto Panoramico Salita San Luca
  [ 
    {
      title:"Punto Panoramico Salita San Luca - Basile Joseph Ducos",
      body:"Au sommet du coteau élevé qui domine la ville de Bologne, est bâtie une église où l’on conserve précieusement un portrait de la Vierge, renommé pour les miracles qu’on lui attribue, et qui passe pour avoir été peint par saint Luc lui-même., patron de cette basilique et des bar- bouilleurs. Un portique long d’une demi-lieue, et composé de six cent cinquante arcades, y conduit.",
      p:"Basile Joseph Ducos, 1829"
    },
    {
      title:"Punto Panoramico Salita San Luca - Frances Milton Trollope",
      body:"We turned that corner and perceived another long reach of arches, towering before us at an angle of about forty-five degrees, and then again turning out of sight. But we were persevering people, exemplary in the patient endurance of fatigue, and pretty considerably ardent in the pursuit of what we wished to see ; .... so, on we went, on, on, on ; up, up, up, under these terrible arcades, which seemed, as if by wicked magic, to be long drawn out, longer and steeper, the more we toiled. And often did the party stop and take panting counsel together, as to whether it were wisest to turn back or to proceed; but the onward voices carried it; and it was good at that moment to remember that when the poet says “Hope leads us on,” he adds “nor leaves us when we die; ” an assurance particularly consolatory at a moment when the act of going on seemed so very likely to end in dying.... But it takes an immense quantity of burning sun and steep climbing to kill a party of English sight-seers; and, strange to say, we found ourselves under the last of six hundred and forty arches which had stretched over above two miles of excessively steep ground, not only alive, but sufficiently in possession of our senses to be conscious that the atmosphere of suffocating heat, through which we had climbed up this sheltering hill, was changed upon our thus reaching the top of it into a tempest of wind before which it was exceedingly difficult to stand.",
      p:"Frances Milton Trollope, 1842"
    },
    {
      title:"Punto Panoramico Salita San Luca - John Owen, 1796",
      body:"A portico of three miles conducts the pilgrim to this object of adoration. This portico has considerable beauty, and still more convenience, as it affords at once the means of shelter and of rest. It was raised by voluntary contribution ; six hundred and forty-eight arcades compose the whole range ; all of which were built at different periods by the zealous devotion of private persons, or different corporations, and they were constructed in reference to each other, so as now to compose an uniform piazza to the entrance of the church, adorned with frescoes, some of which have no small merit.",
      p:"John Owen, 1796"
    },
    {
      title:"Punto Panoramico Salita San Luca - Cristóbal de Villalón",
      body:"Subido en una montañica que está fuera de Bolonia, en donde hay un monasterio, se ve el mejor campo de dehesas, grados y heredades, llano como un tablero de ajedrez, a todas partes que miren, que hay en la Europa.",
      p:"Cristóbal de Villalón, 1505-1581"
    }
  ],
  //location 4 - Mercato di Mezzo
  [
    {
      title:"Santuario della Madonna di San Luca - Charles de Brosses",
      body:"On ne fait voir la Madone qu’avec grand’peine. Il a fallu dire, pour avoir ce bonheur, que nous étions venus en pèlerinage tout exprès. Elle est couverte de volets garnis de velours ; plus, d’un rideau à travers lequel, par un trou garni d’une glace, on la voit peinte sur le bois, et qui pis est détestablement peinte et fort laide.",
      p:"Charles de Brosses, 1739"
    },
    {
      title:"Santuario della Madonna di San Luca - Charles de Brosses",
      body:"On la porte solennellement en procession une fois l’an à Bologne. Misson prétend que si on ne l’y apportait pas, elle y viendrait toute seule ; j’ai quelque peine à le croire.",
      p:"Charles de Brosses, 1739"
    },
    {
      title:"Santuario della Madonna di San Luca - Marianne Colston",
      body:"The image of the virgin, which is there venerated, is said to have been painted by St. Luke, and brought from a church at Constantinople. Some other legends are, I believe, attached to its history, for such has been the veneration of the Bolognese for it, that, by public contribution, a noble church has been erected as the Madonna's abode ; and not content with this proof of devotion, their zeal has raised a piazza of 660 arches, extending three miles in length. This piazza presents a singular appearance, seen from a distance, winding round and round the steep ascent till it joins the church, which it thus unites to the town. All classes contributed, according to their ability, towards this work of devotion, and the piazza certainly affords a most refreshing shelter from the heat of the sun; though one is at a loss to know why this herculean labour should have been rendered necessary, by placing the church on this almost inaccessible eminence. The painter, and the lover of nature will, indeed, not repine ; for, when the summit is reached, the spectator enjoys a view delightful and surprising. On one side, fine ranges of the Appenines are seen rising one above the other, resembling the sea in a storm, when the ridges of the waves are viewed in all directions, rolling and tumbling over each other. On the other side, in the midst of an extensive plain of almost unparalleled fertility, lies the city of Bologna, with all its towers and churches. The church of St. Luke is in the form of a Greek cross, and supported by fine pillars of the composite order. The altar is so enriched with gold, and precious stones, that it cost 56,000 francs. The pillars which support it are marble, of the Ionic order. The picture of the Madonna is incased in a splendid shrine of the most superb diamonds, emeralds, sapphires, rubies, topazes, amethysts, etc. The crown of the Madonna cost 2000 piastres; it is richly set with brilliants and other precious stones. This Madonna is at present far richer in jewellery than that of Loretto, which last never recovered the greater part of the treasures taken from her by the French. The monastery belonging to this church, was suppressed by these same devastators.",
      p:"Marianne Colston, 1823"
    },
    {
      title:"Santuario della Madonna di San Luca - José de Viera y Clavijo",
      body:"Hoy hicimos nuestra visita á la Madona de san Lucas, cuya imagen es el objeto de la mayor devocion de los Boloñeses. El santuario está fuera de la ciudad sobre una grande altura, y es convento de religiosas dominicas. Subese á él por una larga galería ó pórtico de tres millas, en cuyo tránsito, siempre á cubierto de la lluvia y el sol, se encuentran algunas capillitas y pinturas al fresco. La iglesia es moderna y muy aseada.",
      p:"José de Viera y Clavijo, 1849"
    },
    {
      title:"Santuario della Madonna di San Luca - Rеjngol'd Niberg",
      body:"Въ четырехъ верстахъ отъ Болоніи находится женскій монастырь, построенный на горѣ во имя Богородицы. Въ немъ находится и чудотворная ея икона, писанная на деревѣ какъ говорятъ Св. Лукою (Madonna di St. Lucca). Она хранится въ особой кіотѣ надъ алтаремъ и украшена весьма многими драгоценными камнями, приношеніемъ Пеллегриновъ. Видѣть сію икону можно во время заказныхъ молебствій , ибо тогда кіота сія отворяется. Въ этой церкви всегда много Пеллегриновъ, нетерпѣливо ожидающихъ прибытія любопытнаго путешественника, который бы доетавилъ имъ случай поклониться чудотворной иконѣ. Монастырь соединенъ съ городомъ посредствомъ крытаго хода, стоящаго величайшихъ издержекъ. Онъ состоитъ изъ 654 сводовъ. Иль монастыря открывается весьма обширный видъ живописныхъ Болонскихъ окрестностей равно какъ и самаго города и Аппенинскихъ горъ,а при ясной погодѣ можно даже видѣть оттуда простыми глазами башню города Модены.",
      p:"Rеjngol'd Niberg, 1831"
    }
  ],
  ]

  const intestation ={
    difficulty:'maps.intermediate',
    time:"40 min",
    km:"2,5 km"
  }

  return <GenericRoute 
      coordinates={coordinates}  
      zooms={zooms}
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"routes.san_luca"} 
      text={"routes.san_luca_text"} 
      cards={cards}
      intestation={intestation} 
  />
}

export default SanLucaRoute;