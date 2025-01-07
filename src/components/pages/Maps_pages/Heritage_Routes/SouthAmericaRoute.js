import React from 'react';
import GenericRoute from './GenericRoute';

const SouthAmericaRoute = () => {
  
    const coordinates = [
        [44.4976, 11.3535], // 1. Via delle Belle Arti, 56  
        [44.496880, 11.352433], // 2. Via Zamboni 33
         [44.49649, 11.35059], // 3. Largo Respighi 1
        [44.494290, 11.346730], // 4. Piazza di Porta Ravegnana 
        [44.4947213, 11.3414033], // 5. Piazza del Nettuno 3 
        [44.49373, 11.343064], // 6. Piazza Maggiore 
        [44.492778, 11.343056], // 7. Basilica di San Petronio 
        [44.4920292, 11.3487155], // 8. Via Santo Stefano 4 
        [44.4894, 11.3446], // 9. Piazza S. Domenico, 13 
        [44.482238, 11.341871], // 10. Piazzale San Michele in Bosco 3
        [44.487946, 11.315295], // 11. Via di Casaglia 3
        [44.479117, 11.298069], // 12. Via di San Luca, 36 
        [44.497597, 11.30777], // 13. Via della Certosa, 18
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
  ]
  const markerContent = [
    "Pinacoteca",
    "Zona universitaria",
    "Teatro Comunale",
    "Due torri",
    "Fontana del Nettuno",
    "Piazza Maggiore",
    "Basilica di San Petronio",
    "Basilica di Santo Stefano",
    "Basilica di San Domenico",
    "Monastero di San Michele in Bosco",
    "Villa Spada",
    "Santuario della Madonna di San Luca",
    "Cimitero monumentale della Certosa",
    // Add more popup content for each coordinate
  ];

  const cards =[
  //location 1 - Pinacoteca
  [
  //elemento 1
    {
      title:"Pinacoteca - Benjamín Vicuña MacKenna",
      body:"Pero Guido Reni reúne en parte aquellos dos tipos sublimes que él ha animado con el soplo de la pasión que bullía en su pecho i exaltaba su jenio. A la forma i a la idea él ha añadido el sentimiento.... Su \"Degollación de los Inocentes\", en la Galeria de Bolonia (que no sé si puede decirse es segunda a la de Roma) es la pintura que después de la \"Transfiguracion\" de Rafael me haya hecho una impresion mas viva i mas honda.",
      p:"Benjamín Vicuña MacKenna, 1856"
    },
    {
        title:"Pinacoteca - Benjamín Vicuña MacKenna",
        body:"En esta galeria estan tambien los tres Caracci, los fundadores de la Escuela de Bolonia i maestros de Guido. Grandes coloristas, sus figuras me han parecido pesadas sin embargo.",
        p:"Benjamín Vicuña MacKenna, 1856"
      },
      {
        title:"Pinacoteca - Ángel Estrada",
        body:"En la Academia se puede estudiar la escuela ecléctica de Bolonia. Los Carraci, Guido Reni, el Albano, el Dominiquino, llenan salas enteras. Entre esas pinturas, casi todas del siglo XVII, se nota, por la exageración de maneras conocidas, una decadencia que busca telas gigantescas para mejor realizarse. La Pietà del Guido es, entre todas, la obra maestra.",
        p:"Ángel Estrada, 1900"
      }
  ],
  //location 2 - Zona Universitaria
  [ 
    {
      title:"Zona Universitaria - Juan Bustamante",
      body:"El lema de su blasón era Libertad; en su seno se cultivó el estudio del derecho romano; la cátedra de su Universidad antigua y célebre, fué ocupada por varias mujeres, una de ellas enseñó la anatomía. Volta descubrió aquí los primeros fenómenos del magnetismo animal, y Galvani los de la electricidad.",
      p:"Juan Bustamante, 1854"
    },
    {
        title:"Zona Universitaria - Gustavo Baz",
        body:"A pocos pasos se encuentra el edificio en que estaba la antigua Universidad; sus claustros están cubiertos con los blasones de los profesores y de los discípulos más notables, unos piulados al fresco, otros esculpidos, otros realzados. Aquella manera de perpetuar los nombres, produce un efecto raro y sorprendente.",
        p:"Gustavo Baz, 1888"
      },
      {
        title:"Zona Universitaria - Eduardo Wilde",
        body:"De vuelta de nuestra visita, emprendimos viaje para Bolonia, ciudad muy nombrada entre los estudiantes por sus pergaminos universitarios, ahora u n poco borrados. Vimos allí iglesias, paseos, villas, plazas y estatuas, consagrando un gran tiempo á la Universidad, más por las noticias referentes á ella que por los méritos actuales de su viejo edificio. En Bolonia honran la ciencia perpetuando la memoria de los hombres que se han distinguido en ella, por medio de estatuas y otros monumentos.",
        p:"Eduardo Wilde, 1892"
      },
      {
        title:"Zona Universitaria - D. Manuel Canuto Restrepo",
        body:"Por muchos siglos la universidad de Bolonia atrajó á sí, estudiantes de todas las naciones, cuyo número llegó hasta doce mil; y tal concurso dió lugar á que se fundaran en dicha ciudad colegios de todas las naciones; pero hoy no existe mas que el de España fundado por el cardenal Egidio Cavilo de Albornoz.",
        p:"D. Manuel Canuto Restrepo, 1871"
      },
  ],
  //location 3 - Teatro comunale
  [ 
    {
      title:"Teatro comunale - Benjamín Vicuña MacKenna",
      body:"El teatro sin embargo es de una construccion tan cómoda i elegante que nos agradó el visitarlo. Ha costado 50,000 pesos i es capaz de contener 1,500 personas. Los palcos tienen la forma de balcones un tanto salientes lo que permite a las damas lucir sus trajes, i la mecánica jeneral es tan bien arreglada i completa que un solo hombre puede levantar la platea al nivel del proscenio por medio de una pa-lanca. Una innovacion singular observé aqui digna talvez de imitarse en estos prosaicos tiempos en los teatros que se construyan, esto es, la construccion de un lugar privado en el estremo de cada hilera de paleos. Hai tambien departamentos destinados al servicio de las señoras. Cuando visitamos este teatro eran las dos de la tarde i nos divertimos viendo a una bailarina ensayar sus piruetas sobre las solitarias tablas.",
      p:"Benjamín Vicuña MacKenna, 1856"
    },
    {
      title:"Teatro comunale - Juan Bustamante",
      body:"El teatro principal no es malo, y vimos representar en él la ópera de Safo: en todas estas ciudades las cantarinas son admirables, y en cada teatro le parece mejor al que es aficionado, y no se puede desperdiciar una noche de estas óperas admirables.",
      p:"Juan Bustamante, 1854"
    }
  ],
   //location 4 - Due torri
   [ 
    {
      title:"Due torri - Eduardo Wilde",
      body:"Dos Torres, una nueva y otra vieja, excesivamente alta la una y á cuyo lado se colocó la otra para servir de término de comparación, fueron las curiosidades que el Guía nos enseñó como las más dignas de llamar nuestra atención. Una de las Torres tuvo la intención de ser inclinada; no lo es sino en apariencia; no está concluida y tiene más de cien metros de altura. Lo admirable de estas torres es su perfecta y absoluta inutilidad, compañeras de causa en esto, de la famosa torre de Eiffel, la más alta del mundo y, sin duda, también la más inútil.",
      p:"Eduardo Wilde, 1892"
    },
    {
      title:"Due torri - Mariano Soler",
      body:"En Bolonia hay dos torres llamadas la de Asinelli y la de Garisendi. Se dice que la primera fué construida en 1109 ó 1119, y la otra algunos años después. La altura de aquella es de 307 pies sin contar la cúpula; está inclinada 3 pies y medio, y se sube á ella por 500 escalones. La torre de Garisendi no tiene masque 144 pies de altura; pero tiene 8 pies y 2 pulgadas de inclinación, de suerte que parece increíble que pueda sostenerse así. Dicese que gran parte de ella ha sido demolida para conservar el resto.",
      p:"Mariano Soler, 1889"
    },
    {
      title:"Due torri - Ángel Estrada",
      body:"Camino de la Academia de Bellas Artes, hallamos la torre Garisenda. Es una torre inclinada como la de Pisa, pero no como aquella, blanca de mármoles y graciosamente vestida de columnatas y labores. Su aspecto es de una sencillez severa, con el brillo rojo de su tinte. El Dante, en el canto XXXI del Infierno, al subir al promontorio con Virgilio, alzado por Anteo, se acuerda de la torre y expresa la sensación que casi siempre produce. «Como al mirar la Garisenda por el lado hacia el que está inclinada, cuando pasa una nube por encima en sentido contrario, parece próxima á derrumbarse, tal me pareció Anteo cuando vi que se inclinaba.»",
      p:"Ángel Estrada, 1900"
    },
    {
      title:"Due torri - Juan Bustamante",
      body:"Llegamos á la ciudad de Bolonia, de 60 mil habitantes, estraña por sus calles, todas con portales: hay una torre elevada hasta 102 varas, tan delgada que parece un palo de buque, y que el buque fuera la ciudad: su centro hueco con escaleras de madera, con 440 escalones. Este edificio es heho de ladrillo, y es tan sencillo que da miedo subir á él. Desde esa torre se ve la campiña fertil y bien cultivada: la catedral, por lo grande es el quinto templo de Europa, pero pobre y sin aliño.",
      p:"Juan Bustamante, 1854"
    },
    {
      title:"Due torri - Gustavo Baz",
      body:"En el camino á la Academia de Bellas Artes, se encuentran las torres. Son dos cubos de ladrillo, uno de cerca de cien metros de altura, inclinado en un metro. Fué construido en 1109 y se llama la Torre Asinelli; la otra, construida á propósito con una inclinación de dos metros al Este, y de una al Sur, se llama la Torre Gorisenda, su altura es de cuarenta metros poco más ó menos y data del siglo XII.",
      p:"Gustavo Baz, 1888"
    },
    {
      title:"Due torri - Gustavo Baz",
      body:"Las verdes laderas de los Apeninos, el color rojizo de aquel amontonamiento de vetustas construcciones, el tinte sombrío de las torres Asinelli y Gorisenda formaban un extraño contraste de colores y de luces.",
      p:"Gustavo Baz, 1888"
    },
    {
      title:"Due torri - José María Monge",
      body:"Mi primera visita fué á las Torres inclinadas, las que, á decir verdad, no me impresionaron mucho, familiarizado como estaba con los grabados de éllas que corren por el mundo. Álzanse en el centro de la ciudad, en la confluencia de cinco calles, que son: la de Castiglione, San Stefano, Maggiore, San Vitale y Luigi Zamboni. La más eminente, construida por la familia Asinelli en 1109, tiene 97 metros de altura, y presenta una inclinación de 1 m. 23 c. La otra, que sólo se eleva á 47 m. 60 c. sobre el piso, avanza 2 m. 50 c. fuera de la perpendicular, y fué erigida en 1110 por los hermanos Garisenda. Como obras de arquitectura nada valen dichas torres, muy inferiores en elegancia á las chimeneas de las fábricas de los E. Unidos y de Europa. En cuanto al efecto que producen, no deja de ser chocante ver á esos dos colosos de ladrillo, contraviniendo á las leyes de la estática, y amenazando sepultar bajo sus moles á los que viven á su alrededor.",
      p:"José María Monge, 1851"
    },
    {
      title:"Due torri - José María Monge",
      body:"Aunque la desnivelación de las Torres es posterior á la época en que fueron edificadas, aquélla data, sin embargo, de muchos siglos, pues Dante en el Canto XXXI del Infierno, compara á Anteo con la Garisenda. Fijándome más y más en los dos extraños monumentos que tenía delante, pensaba en el original aspecto que debió presentar Bolonia, allá por los siglos XII y XIII, cuando en sus calles se erguían unas ciento ochenta de esas construcciones, destinadas á significar la grandeza de las antiguas familias, las que, convirtiéndolas en fortalezas, se batían desde éllas, arrojándose piedras y otros proyectiles. Afortunadamente, los terremotos por una parte, y por otra los decretos municipales, han hecho desaparecer esas extravagancias arquitectónicas; y si la Asinelli y la Garisenda se enseñorean aún en el centro de la ciudad, oponiéndose á las reglas del buen gusto y del ornato público, débese exclusivamente á esa irregularidad que las ha convertido en objetos curiosos, que atraen á aquellos sitios gran número de extranjeros.",
      p:"José María Monge, 1851"
    },
    {
        title:"Due torri - Domingo F. Sarmiento",
        body:"Hay en Bolonia, dicen, 70,000 habitantes y doscientas iglesias, en cada una de las cuales se ostenta alguna obra célebre del arte. No le hablaré á V. de sus torres inclinadas ni de las leyendas que sobre su oríjen se cuentan. Mas me han llamado la atencion los portales ó pórticos corridos que abrigan del sol á los pasantes por todas las calles de la ciudad, construccion que debiera adoptarse en los paises cálidos como los nuestros.",
        p:"Domingo F. Sarmiento, 1851"
      },
  ],
  //location 5 - Fontana del Nettuno
  [
    {
      title:"Fontana del Nettuno - D. Manuel Canuto Restrepo",
      body:"Al frente de este palacio se eleva la fuente del gigante, que es una de las mas bellas de Italia despues de la de Treví en Roma. Fué construida en 1563 por órden de san Carlos Borromeo, que en aquella época el santo prelado ejercia las funciones de legado del Papa en Bolonia. Está adornada de una estátua gicantesca que le da el nombre y representa Neptuno, y es una de las obras maestras del célebre Julian de Bolonia.",
      p:"D. Manuel Canuto Restrepo, 1871"
    },
    {
      title:"Fontana del Nettuno - José María Monge",
      body:"En medio de la Plaza, admírase una fuente monumental llamada de Neptuno, por la estatua de bronce del marino dios que campea en la parte superior. Dicha estatua, que presenta una desnudez repugnante, fué ejecutada por el célebre Juan de Bolonia, ayudado por Zanobi Partigniani : pesa diez mil kilogramos y costó setenta mil escudos de oro. En los ángulos del pedestal, cuatro sirenas en apostura nada decente se oprimen los abultados pechos, de los cuales brotan abundantes chorros de agua. Basta decir, para que se comprenda la impropiedad del monumento que se eleva en un sitio tan frecuentado de la ciudad, que las damas inglesas que á él se acercan, inducidas por los elogios que de aquél hace la Guía que llevan en la mano, apenas alzan los ojos para examinarlo, los bajan ruborizadas, cierran el libro, y pronunciando entre dientes un ¡ shame !, prosiguen su camino, sin atreverse á mirar hacia atrás.",
      p:"José María Monge, 1851"
    },
    {
      title:"Fontana del Nettuno - Ángel Estrada",
      body:"La ville de Bologne est surnommée la Grasse, à raison de la richesse du sol dont elle est environnée. C'est une des plus célèbres d'Italie, par son Université, par les rencontres de Souverains et de Papes qui y ont eu lieu, par deux sessions du Concile de Trente, par le coup de mort qu'y reçut la Pragmatique Sanction de Charles IX, lorsque Léon X et François I y signèrent le Concordat de 1515, enfin par les hommes remarquables qu'elle a produits, notamment les Papes Grégoire XIII et Benoît XIV.",
      p:"Ángel Estrada, 1900"
    }
  ],
  //location 6 - Piazza Maggiore
  [
    {
      title:"Piazza Maggiore - Ángel Estrada",
      body:"La Piazza Maggiore y la Piazza Nettuno, contiguas y rodeadas de viejos palacios y viejas iglesias, forman el corazón de la ciudad.",
      p:"Ángel Estrada, 1900"
    },
    {
      title:"Basilica di San Petronio -José María Monge",
      body:"De las Torres inclinadas, me trasladé á la Plaza de Víctor Emanuel, embellecida con varios edificios, entre los que figuran, el Palacio Comunal, el de los Notarios, el del Podestá, el Pórtico dei Banchi y la Iglesia de San Petronio.",
      p:"José María Monge, 1851"
    }
  ],
  //location 7 - Basilica di San Petronio
  [
    {
      title:"Basilica di San Petronio - José María Monge",
      body:"Al abandonar la Fuente de Neptuno, hice rumbo á la Basílica de San Petronio, el Templo más importante que encierra la ciudad. Ordenada su erección al sacudir los boloñeses el yugo de los Visconti de Milán, proyectóse darle proporciones mayores que las de todas las iglesias conocidas, inclusa la de San Pedro en Roma. La falta de recursos y los acontecimientos políticos hicieron entrever la imposibilidad de llevar á cabo la primitiva idea, y resolvióse entonces utilizar la parte ya construida, con lo cual se logró tener un Templo de dimensiones respetables. La fachada, de estilo germánico, y no terminada aún, ostenta hermosas incrustaciones de mármol y apreciables trabajos esculturales, ejecutados por J. della Quirica, Nic. Tribolo, Alfonso Lombardi, y la célebre Properzia Rossi. El interior, ámplio y majestuoso, decorado con suntuosas Capillas, bellísimos vidrios de colores, estatuas y lienzos de mérito, ofrece un golpe de vista imponente. En dicha Basílica fué coronado, el 24 de Febrero de 1530, el Emperador Carlos V, por el Papa Clemente VII.",
      p:"José María Monge, 1851"
    },
    {
      title:"Basilica di San Petronio - José María Monge",
      body:"En dicha Basílica fué coronado, el 24 de Febrero de 1530, el Emperador Carlos V, por el Papa Clemente VII.",
      p:"José María Monge, 1851"
    },
    {
      title:"Basilica di San Petronio - Benjamín Vicuña MacKenna",
      body:"Nuestra primera visita fué dedicada a la Catedral que era el templo mas vecino del hotel i me hubiera parecido una iglesia indigna de ser la catedral de una capital italiana, si la magnífica iglesia de San Petronio no estuviese cercana para vindicar la merecida gloria de los monumeutos relijiosos de Bolonia. En esta última hay una colosal iglesia que debió ser 100 pies mas grande que San Pedro de Roma, pero la rivalilad de los Pontifices, según nuestro guía, acortó el piano un buen trecho. Tiene un roble, ancho i gracioso estilo, sus columnas son elevadas i esbeltas i todo su conjunto es airoso i despejado. En la principal fachada, aun no concluida, hay grupos de escultura de la edad media, uno de los que es obra de la célebre artista Properzia Rossi que murió de amor...",
      p:"Benjamín Vicuña MacKenna, 1856"
    },
    {
      title:"Basilica di San Petronio - Gustavo Baz",
      body:"La iglesia de San Petronio, concebida bajo un plan que si se hubiera llevado a cabo, la baria la más grande del mundo; pero su nave central, limitada por otras dos más bajas, y sus arcos que afectan un estilo gótico y una sencillez toscana, asemejan á un nave abandonado en un banco de arena; la luz entra á torrentes por las grandes vidrieras desnudas de esos asuntos religiosos que son el secreto de la penumbra melancólica del arte gótico.",
      p:"Gustavo Baz, 1888"
    }
  ],
  //location 8 - Basilica di Santo Stefano
  [
    {
      title:"Basilica di Santo Stefano - Benjamín Vicuña MacKenna",
      body:"Visitamos en seguida la curiosa iglesia de San Estevan, que es mas bien la aglomeracion de siete pequeñas iglesias de variadas formas i significados. Es un dédalo subterráneo de capillas, una de los que representa el Calvario i tiene la forma de un monticulo, otra la casa de Pilato, otra el primer templo de los cristianos, etc. En las gradas del altar mayor de esta última, San Petronio, el patron de Bolonia, dejó estampada la huella no solo de sus penitentes rodillas sino de su barriga, de su frente i de sus manos, tan fervientes eran sus oraciones!.... Cada huella tiene media vara de profundidad i la de la barriga cerca de una vara eu-tera de ancho.... Sin duda el canto o algun moderno sacristan conocia bien el uso del comboide, la cuña para labrar la piedra... Miserables sus percherias tan frecuentes en nuestro culto, que ofenden a la vez a la Divinidad i a la razon!..",
      p:"Benjamín Vicuña MacKenna, 1856"
    }
  ],
  //location 9 - Basilica di San Domenico
  [
    {
      title:"Basilica di San Domenico - Benjamín Vicuña MacKenna",
      body:"Santo Domingo me pareció el templo mas elegante de Bolonia i uno de los mas limpios i bruñidos que yo haya visto, digno en esto de su patron que a guisa de buen sevillano fue un santo mui esmerado en su comporte. La tumba donde reposan las cenizas de Santo Domingo de Guzman, obra maestra del cinsel de Nicolas Pizano, es un sarcófago piramidal de mármol blanco esculpido con las mas esquisitas labores en bajo relieve. Está colocado en el centro de una capilla circular tapizada toda de mármoles i cuya cúpula es uno de los milagros de Guido Reni, el mas grande de los pintores para mí, porque es el pintor del corazon, el poeta del sentimiento, i él arrancaba al suyo sus mas celestes inspiraciones.",
      p:"Benjamín Vicuña MacKenna, 1856"
    },
    {
      title:"Basilica di San Domenico - D. Manuel Canuto Restrepo",
      body:"...pero la de santo Domingo se distingue por las bellas estatuas de Miguel Angel, de Donatel, de Gombardo, y de otros estatuarios de nombre universal: allí se admiran las magníficas pinturas de Guido Reni, los cuadros de Francia y del Guercino; pero no me cansaba yo de ver y admirar una de las mas bellas obras del célebre pintor Luís Carraci, que representa á san Raymundo nadando en el mar tendido en su propia capa.",
      p:"D. Manuel Canuto Restrepo, 1871"
    },
    {
      title:"Basilica di San Domenico - Juan Bustamante",
      body:"El templo de Santo Domingo nada tiene de particular sino el ser lugar donde se educó ese gran Santo.",
      p:"Juan Bustamante, 1854"
    }
  ],
  //location 10 - Chiesa di San Michele in Bosco
  [
    {
      title:"Chiesa di San Michele in Bosco - Gustavo Baz",
      body:"Desde la Villa Real, en el antiguo convento de San Michell in Bosso, se descubre un vasto panorama; la ciudad encerrada en su recinto, con sus puertas, sus torres inclinadas, sus tejados, se veía ocupando el centro de una planicie tras de la cual caía á manera de telón de gasa un nublado gris y opaco.",
      p:"Gustavo Baz, 1888"
    }
  ],
  //location 11 - Villa Spada
  [ 
    {
      title:"Villa Spada - Gustavo Baz",
      body:"El día ha amanecido brillante, el sol derrite la nieve de la noche. Con un cielo sereno y con el encuentro de unos ojos hermosos y expresivos, al momentode salir, se puede augurar bien de una jornada. San Petronio, la Antigua Universidad, la Santa Cecilia de Rafael y algunos cuadros de la escuela boloñesa, una que otra fachada de tantas como hay aquí dignas de notarse; un panorama de la ciudad desde las alturas de la Villa Real, y una representación de la Filie de Madame Angot en italiano, lié aquí en lo que he podido emplear el tiempo.",
      p:"Gustavo Baz, 1888"
    }
  ],
  //location 12 - Santuario della Madonna di San Luca
  [ 
    {
      title:"Santuario della Madonna di San Luca - Ángel Estrada",
      body:"Dejáis la plaza, después de admirar las puertas de Jacopo della Quercia en San Petronio, y la ciudad conquista por el aspecto original que le dan sus aceras, siempre techadas por recovas. Y estas recovas salen fuera de los muros, y ponen el cementerio en comunicación con el centro, y trepan, en galería de una legua, por la colina, hasta el santuario de la Madona de San Lucas.",
      p:"Ángel Estrada, 1900"
    },
    {
      title:"Santuario della Madonna di San Luca - Juan Bustamante",
      body:"San Lucas está á la legua de la ciudad, y se vá por debajo de portales.",
      p:"Juan Bustamante, 1854"
    }
  ],
  //location 13 - Cimitero monumentale della Certosa
  [ 
    {
      title:"Cimitero monumentale della Certosa - Benjamín Vicuña MacKenna",
      body:"Cuando en el Campo Santo de Bolonia me mostraron el cráneo de Guido Reni que los Boloñeses conservan en una urna como su mas preciosa gloria, yo alzé mi sombrero contemplándolo un instante como algo que me hubiera sido querido i a quien debiera ademas de mi admiracion un culto en mi alma!.....",
      p:"Benjamín Vicuña MacKenna, 1856"
    },
    {
      title:"Cimitero monumentale della Certosa - Juan Bustamante",
      body:"El campo Santo es espacioso y el mas ponderado de Italia, con sepulcros costosísimos, que es el último tributo de la vanidad: lo mismo que á todas partes se va á él por portales.",
      p:"Juan Bustamante, 1854"
    },
  ],
  ]

  const intestation ={
    difficulty:'maps.difficult',
    time:"3h 20min",
    km:"13,4 km"
  }

  return <GenericRoute 
      coordinates={coordinates}  
      zooms={zooms}
      markerContent={markerContent} 
      init_pos={ {lat: 44.4976, lng: 11.3535} } 
      title={"routes.southamerica"} 
      text={"routes.southamerica_text"} 
      cards={cards}
      intestation={intestation} 
  />
}

export default SouthAmericaRoute;