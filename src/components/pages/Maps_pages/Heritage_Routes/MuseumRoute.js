import React from 'react';
import GenericRoute from './GenericRoute';

const MuseumRoute = () => {

  const coordinates = [
    [44.4976, 11.3535], // 1. Pinacoteca - Via delle Belle Arti, 56  
    [44.4966752, 11.3524753], // 2. Museo della Specola – Via Zamboni, 33 
    [44.4966137, 11.3525987], // 3. Museo di Palazzo Poggi – via Zamboni, 33
    [44.4925888, 11.3466190], // 4. Palazzo Pepoli – Museo della Storia di Bologna
    [44.4918717, 11.3438538], // 5. Archiginnasio e Teatro Anatomico
    [44.4927149, 11.3438605], // 6. Museo Civico Archeologico 

  ];
  const zooms = [
    20,
    null,
    null,
    null,
    null,
    null
  ]
  const markerContent = [
    "Pinacoteca",
    "Museo della Specola",
    "Museo di Palazzo Poggi",
    "Palazzo Pepoli – Museo della Storia di Bologna",
    "Archiginnasio e Teatro Anatomico",
    "Museo Civico Archeologico",
    // Add more popup content for each coordinate
  ];

  const cards = [
    //location 1 - Pinacoteca
    [
      //elemento 1
      {
        title: "Pinacoteca - Catharine Maria Sedgwick",
        body: "The \"Academy of the Fine Arts\" here contains one of the best galleries of pictures in the world. They are the master-pieces of the first masters, and what masters they were! I feel now more than ever what nonsense it is to write about these pictures, since, with all I have read about them, I find I had no conception of their power-none worth having of the painter's divine art. I make it a rule, in these galleries, not to go bewildering myself about from room to room, but to confine my attention to the best pictures; and I have adhered to my rule to-day, hardly glancing even at the pictures of the three Caracci, all natives of Bologna.",
        p: "Catharine Maria Sedgwick, 1841"
      },
      {
        title: "Pinacoteca – Arthur Guthrie",
        body: "We saw the famous picture gallery and its principal glory, Raphael's St. Cecilia and the rooms devoted to Francia, Guido Reni, the Carraccis, and the other masters of the Bolognese school. We also saw with interest the canvases of the women painters of Bologna; the work of Elizabeth Sirani, perhaps the greatest Mistress in this school of painters, holding its own beside the masterpieces of her brother artists. In culture and scholarship, as well as in art, the women of Bologna have done wonderful things.",
        p: "Arthur Guthrie, 1909"
      },
      {
        title: "Pinacoteca - George Stillman Hillard",
        body: "In Bologna alone, so far as my observation goes, can the genius of Guido be appreciated. That a man who could paint as he did should have painted as he did, can only be explained by his dissipated habits, and the needy condition in which they kept him. Entering the gallery with the expectation of meeting again the languid voluptuousness into which he so often declines, I was amazed at the power and grandeur which are here stamped upon his canvas. The Victory of Samson is a noble work. The solitary figure in the foreground, it is true, is not so much a strong man as a seraph. There are no powerful muscles in the frame, and no evidence of exhaustion in the attitude. He has slain his foes by an effort of the will, and not by strength of arm. But the lightness, grace, and expression of the form, and the character of the distant landscape, touched with the rays of early morning, are most admirable. The Crucifixion is a work of solemn and pathetic beauty. A dark landscape, a few figures struggling with love, adoration, and despair, are all the elements which art can use in dealing with such a subject, and Guido has here managed them with great power and great judgment. Of the numberless pictures of the Crucifixion, I should put this at the head, so far as my memory serves me, for dignity, pathos, and truth. No other artist gives to the scene such intense and overpowering reality. The Massacre of the Innocents did not seem to me to quite deserve its great reputation.",
        p: "George Stillman Hillard, 1867"
      },
      {
        title: "Pinacoteca - Sara Jane Lippincott",
        body: "There is a fine picture gallery here, particularly rich in Guidos and Domenichinos, to which we have paid a brief, tantalizing visit. Here is the famous St. Cecilia of Raphael, a lovely picture, breathing more of the holy ecstasy of music than any thing I have ever beheld. But the grandest picture in this collection, and, I am sure, one of the grandest in the world, is the Madonna della Pieta of Guido. It represents the mother of Christ, with two angels, mourning over the body of the Savior.",
        p: "Sara Jane Lippincott, 1854"
      },
      {
        title: "Pinacoteca - Mrs. Trollope",
        body: "I believe I felt half ashamed, and in a certain degree mortified, as I stood in the Bolognese gallery , and remembered how long I had lived without my mind's ever having conceived the idea that such canvass could exist. \"My newness was shocking to me!\". ... Of course I do not mean that I was absolutely ignorant of the names of these transcendent master-pieces, or that I did not know that in the gallery of Bologna I should find the Sta. Cecilia of Raphael .... that Domenichino was seen there to perfection.... that the Caracci race were there found in truth at home .... or that Guido's Madonna della Pietà was there: ... all this I had heard, and pretty well remembered;... but if I had never heard a single syllable on the subject, I could scarcely have been more electrified than I was in the presence of these wonders.",
        p: "Mrs. Trollope, 1842"
      },
      {
        title: "Pinacoteca - Jules Janin",
        body: "Ainsi, j'errais au hasard sous ces arcades, j'entrais au hasard dans ces écoles; par hasard aussi j'entrai dans la galerie de tableaux, muette comme tout le reste. Et faut-il que cette terre d'Italie soit remplie de chefs-d’œuvre, puisqu'au fond de cette ville de Bologne, sombre et silencieuse, brille d'un éclat sans égal, entre les tableaux des trois Carrache et les toiles du Dominiquin, et le saint François du Guide, et la sainte Cécile de Raphaël!",
        p: "Jules Janin, 1839"
      },
      {
        title: "Pinacoteca - Louis Viardot",
        body: "Lorsqu'on entre pour la première fois dans la Pinacothèque, et qu'on est tout ébloui par ce coloris éclatant, ces prodigieux effets de clair-obscur familiers aux Bolonais, le tableau de Raphaël, avec sa couleur un peu sombre et briquetée, ne cause pas d'abord toute l'admiration qu'il doit inspirer. C'est au retour, lorsqu'on a vu les Galeries de Florence, les Chambres du Vatican, lorsqu'on a fait connaissance avec toute l'œuvre du divin jeune homme, et qu'on s'est bien pénétré des sublimes beautés de sa manière, c'est alors qu'on lui rend pleine justice et qu'on reconnaît son incontestable supériorité, même entre les plus belles œuvres de Guide et de Dominiquin.",
        p: "Louis Viardot, 1859"
      },
      {
        title: "Pinacoteca - Jules et Edmond de Goncourt",
        body: "Au Musée, « la Sainte Cécile » de Raphaël. En voyant ce tableau, toute mon enfance m'est revenue. J'ai revu tout à coup le livre de messe de ma mère, qui avait en tête la méchante gravure en taille-douce des paroissiens, représentant la Sainte, qui lui avait donné son nom, et je retrouvais, dans le souvenir de mes yeux, la douce figure de ma mère, penchée sur le vieux maroquin rouge du livre écorné, et me montrant l'image, que je n'aimais pas plus, que je n'aime aujourd'hui le tableau.",
        p: "Jules et Edmond de Goncourt, 1894"
      },
      {
        title: "Pinacoteca - José de Lasa",
        body: "La Pinacoteca de Bolonia es una de las mejores de Italia, no tan solo porque en ella se admiran, algunos de los mejores cuadros de los más grandes maestros, sino que tambien porque es una especie de monumento nacional, por el gran número de cuadros de la escuela bolonesa que posee.",
        p: "José de Lasa, 1873"
      },
      {
        title: "Pinacoteca - José M. Monge",
        body: "Si los padecimientos físicos amargaron los primeros días de mi permanencia en Bolonia, las gratas horas que acabo de pasar entre tantas bellezas artísticas, compensan aquellas amarguras, y derraman en mi alma un dulce consuelo y una viva satisfacción.No sin pena me separé de un sitio en el que hubiera deseado quedarme más tiempo, y me fui al Hotel para ocuparme, por la centésima vez, de los fastidiosos preparativos de viaje.",
        p: "José M. Monge, 1851"
      },
      {
        title: "Pinacoteca - Benito Pérez Galdós",
        body: "Guercino, los dos Carraci y el Dominiquino, tienen en esta galería algunos de sus mejores lienzos, distinguiéndose por la amplitud de la composición, lo bien tratados que están los paños, la excelente agrupación de las figuras y el sentimiento más bien teatral que místico que en ellas domina.",
        p: "Benito Pérez Galdós, 1890"
      },
      {
        title: "Pinacoteca - José M. León y Domínguez",
        body: "En la Pinacoteca ó Galería de cuadros, se encierran los mejores lienzos que antes se hallaban en los conventos suprimidos. Repito lo que antes he manifestado. No trato de llamar la atencion hácia ninguno de los trescientos cincuenta y cuatro cuadros que allí pueden admirarse, porque todos son dignos de mérito.",
        p: "José M. León y Domínguez, 1876"
      },
      {
        title: "Pinacoteca - Niberg Rеjngol'd",
        body: "Академія художествъ. (Academia delle belle arti.) Занимаетъ прежде бывшій Іезуитскій монастырь. Въ ней хранятся лучшія картины Болонской школы, отличающіяся особенно чувествомъ и граціею. Всѣ сіи картины взяты были въ Парижъ, но въ 1815 году возвращены опять въ Болонію.",
        p: "Niberg Rеjngol'd, 1831"
      },
      {
        title: "Pinacoteca - Vladimir Ivanovič Nemirovič-Dančenko",
        body: "Уѣхать изъ Болоньи, не побывавъ въ Пинакотекѣ ея и не сдѣлавъ визита находящейся тамъ св. Цециліи Рафаэля, было-бы весьма странно. Никто не дѣлаетъ этого и, разумѣется, читатель ожидаетъ отъ меня описанія моихъ восторговъ по поводу этого знаменитаго шедевра великаго мастера. Съ удовольствіемъ бы исполнилъ это, но въ оба раза, когда я посѣщалъ городъ, я не видѣлъ ни Пинакотеки, ни св. Цециліи. Такъ Рафаэль за мною можетъ считать недоимку, а скучнымъ и торжественнымъ диѳирамбомъ я еще успѣю надоѣсть вамъ.",
        p: "Vladimir Ivanovič Nemirovič-Dančenko, 1896"
      },


    ],
    //location 2 – Museo della Specola
    [
      {
        title: "Museo della Specola – John Murray",
        body: "At the top of the building of the University is the Observatory, containing some good astronomical instruments. The view from the terrace of its tower is most extensive, and no traveller should leave Bologna without ascending to it, which is easily done on application to the Custode of the University.",
        p: "John Murray, 1857"
      },
      {
        title: "Museo della Specola - Randal William MacGavock",
        body: "On the third day we entered Bologna, or the city of sausages, an ancient sombre-looking place, under a brilliant sky, with heavy arcades over the footways of the older streets, and lighter and more cheerful archways in the newer portions of the town. From the Observatory, situated near the centre of the city, we had an excellent view of the many fine churches-the tall leaning towers, built of brick, and inclining crosswise as if they were bowing stiffly to each other, and the broad plains in the environs, bounded by the lofty range of the distant Apennines.",
        p: "Randal William MacGavock, 1854"
      },
      {
        title: "Museo della Specola – Lady Miller",
        body: "The observatory called here the Specola, is a high tower, well furnished with astronomical and mathematical instruments.",
        p: "Lady Miller, 1777"
      },
      {
        title: "Museo della Specola - Jérôme de La Lande",
        body: " L'OBSERVATOIRE, la Specola, est une grande tour très-élevée et très-commode, garnie de bons instrumens : le Pape Benoît XIV, donna 2000 scudi ou 10667 liv. pour contribuer à renouveller cet Observatoire dans le genre moderne : on y voit un quart- de cercle mural, une lunette méridienne ou instrument des passages, et plusieurs autres instrumens considérables, sous la garde de M. Eustache Zanotti, qui y fait de très bonnes observations.",
        p: "Jérôme de La Lande, 1769"
      },

      {
        title: "Museo della Specola - André Thouin",
        body: "Bologne possède un observatoire. Il est situé dans le Muséum et consiste en une tour divisée par étages très-élevés, contenant, ainsi que quelques pièces voisines, des instruments d'astronomie, nombreux et répétés dans les mêmes espèces, mais ou perfectionnés, ou fabriqués par divers mécaniciens habiles, ou offrant des différences en raison de la date plus ou moins éloignée de leur construction.",
        p: "André Thouin, 1841"
      },

      {
        title: "Museo della Specola - André Thouin",
        body: "Le sommet de l'observatoire forme une esplanade de quinze à vingt pieds de large. Elle domine de plus de moitié de sa hauteur les édifices les plus élevés de la ville, excepté quelques clochers et la tour des Azinelli. L'horizon n'a de bornes que celles de la vallée dans un coin de laquelle Bologne est bâtie. D'un côté, on touche du doigt la chaîne de l'Apennin; de l'autre, on voit les montagnes de Vérone qui font partie de la chaîne des Alpes.",
        p: "André Thouin, 1841"
      },
      {
        title: "Museo della Specola – Jean de La Roche",
        body: "L'Observatoire est une Tour fort élevée ; on voit dans les étages qui la composent, une quantité considérable d'Instrumens des meilleurs maîtres à l'usage des observations astronomiques.",
        p: "Jean de La Roche, 1783"
      },
      {
        title: "Museo della Specola - Antoine-Claude Valery",
        body: "L'Observatoire élevé par le général comte Marsigli, dans le palais qui porte son nom, subsiste encore ; il constate les goûts, la passion et les habitudes scientifiques de cet homme illustre et modeste.",
        p: "Antoine-Claude Valery, 1835"
      },
      {
        title: "Museo della Specola - José de Viera y Clavijo",
        body: "Vista la biblioteca, pasamos á la sala de dióptrica, en la cual se trabajan diferentes especies de vidrios ópticos, cuyas matrices y moldes con las correspondientes máquinas nos mostró el artífice. De aqui subimos al observatorio ó especula, que es una torre harto elevada, y construida con gallardía.",
        p: "José de Viera y Clavijo, 1849"
      }
    ],
    //location 3 - Museo di Palazzo Poggi
    [
      {
        title: "Museo di Palazzo Poggi – Sir James Edward Smith",
        body: "Bologna possesses a very famous public academy, called the Palazzo dell'Instituto, where all the sciences are taught gratis. Here is an ample Museum, Library, and apparatus for Natural Philosophy. The plaster models of gravid uteri, with almost all possible situations and cases done from nature, are very good, though less beautiful than the anatomical models at Florence.",
        p: "Sir James Edward Smith, 1793"
      },
      {
        title: "Museo di Palazzo Poggi – John Chetwode Eustace",
        body: "Almost all these halls and apartments are adorned with pictures and paintings in fresco, on the walls and ceilings, and form one of the most magnificent abodes ever consecrated to the arts and sciences. I have already observed, that regular instructions are given to young painters in the hall of the academy; I must here add, that professors attend and deliver lectures gratis, at stated periods, to all students, on the different arts, in their respective halls. Bologna owes this superb establishment to one of its citizens, General Count Marsigli, who, after having passed many years in the Imperial service, returned to his native country, and devoted the remainder of his days, his talents, and his fortune, to the propagation of the arts and sciences, in its bosom. He bestowed upon the city his valuable collections of every kind, and by his exertions formed a society of men of the first talents and reputation, in each art and science, which assumed the name of the Instituto di Bologna.",
        p: "John Chetwode Eustace, 1815"
      },
      {
        title: "Museo di Palazzo Poggi – Robert Gray",
        body: "The Instituto must, however, be noticed: among many curious helps to science, which its numerous rooms contain, we saw the fine collection of astronomical instruments purchased from the effects of Lord Cowper, and the admirable wax representations of anatomical subjects, particularly of the parts of the head. If the whole body were delineated with the same accuracy as were the parts which we saw, and were generally introduced, it might supersede the necessity of exhibiting dead bodies in anatomical schools, which are always obtained with difficulty, and viewed with horror or disgust. We were disposed to make some comparison in favour of the English ladies, when we observed with what sang-froid some Italian women, who accompanied us in the rooms of the instituto, examined the monsters and nudities exposed to view.",
        p: "Robert Gray, 1794"
      },
      {
        title: "Museo di Palazzo Poggi – James Wilson",
        body: "The anatomical school is on a good footing, and the preparations of the human body numerous and well executed. There is a fac simile in wax of the gigantic head of a Bolognese, whose dimensions I am afraid to mention from memory, as it may betray me into an error.",
        p: "James Wilson, 1820"
      },
      {
        title: "Museo di Palazzo Poggi – Honoré Beaugrand",
        body: "L'Université, fondée en 1119, la plus ancienne d'Italie après celle de Salerne, occupe les bâtiments du palais Poggi ; c'est là qu'est installée la bibliothèque publique qui possède 150,000 volumes et 6,000 manuscrits.",
        p: "Honoré Beaugrand, 1889"
      },

      {
        title: "Museo di Palazzo Poggi – Gabriel-François Coyer",
        body: "Je sors d'un labyrinthe de sciences : Physique expérimentale, Géométrie, Astronomie, Méchanique, Chymie, Anatomie, Histoire Naturelle, les Arts encore, Architecture, Peinture, Sculpture ; chaque Faculté à son siège dans un vaste édifice avec tous les instrumens qui lui son propres, et un Professeur de réputation. C'est ce qu'on appelle l' Institut de Bologne.",
        p: "Gabriel-François Coyer, 1775"
      },
      {
        title: "Museo di Palazzo Poggi – André Thouin",
        body: "Cet Institut de Bologne est une sorte d'encyclopédie de presque toutes les connaissances humaines.",
        p: "André Thouin, 1841"
      },
      {
        title: "Museo di Palazzo Poggi – Jean de La Roche",
        body: "Il n'existe en aucun endroit de l'Europe un établissement qui embrasse, qui réunisse plus de genres d'étude à la fois, que celui que l'on appelle proprement à Bologne L'INSTITUT. Ce Palais, d'abord très considérable, s'est successivement étendu, augmenté ; & c'est aujourd'hui le plus vaste bâtiment que l'amour des sciences & des arts ait encore élevé. Le caractère de la décoration en général, est d'un très-bon genre : rien n'est mieux pensé que la distribution ; il y règne une harmonie du plus grand mérite.",
        p: "Jean de La Roche, 1783"
      },
      {
        title: "Museo di Palazzo Poggi – José de Viera y Clavijo",
        body: "Hoy recorrimos con suma complacencia nuestra el magnifico palacio del Instituto de Bolonia, arquitectura del Tibaldi, edificio vasto, claro y hermoso, que se puede considerar como un templo consagrado á las ciencias y artes.",
        p: "José de Viera y Clavijo, 1849"
      },
      {
        title: "Museo di Palazzo Poggi – Juan Andrés",
        body: "El Instituto, aun después de tantas fábricas semejantes erigidas en casi todas las Ciudades , es obra ciertamente única en Italia , y tal vez en toda Europa. Otras Ciudades superan sin duda alguna en uno, ú otro ramo particular, pero creo que todas deben ceder en el complexo de tantas cosas, y que en ninguna se podrá hallar igual agregado.",
        p: "Juan Andrés, 1786"
      },
      {
        title: "Museo di Palazzo Poggi – Konstantin Paulovič",
        body: "При всемъ томъ Болонскій Университетъ, по причинѣ хорошихъ и богатыхъ музеевъ, кабинетовъ и драгоцѣнныхъ собраніи всякаго рода учебныхъ пособій и рѣдкостей, можетъ до-нынѣ почиаться достойнымъ представителемъ образованіи, alma studiorum, по крайней мѣрѣ своею края.",
        p: "Konstantin Paulovič, 1846"
      },
      {
        title: "Museo di Palazzo Poggi – Prokop’ev Nikolaj, Nazmutdinova Veronika, Nasonov Vladimir",
        body: "Манцолини также создала два портретных восковых бюста, оба в настоящее время выставляются в Палаццо Погги в Болонье. Одним из них является автопортрет, в котором она изображает себя на работе, во время рассечения человеческого мозга, а другой — её мужа, занимающегося аналогичной деятельностью.",
        p: "Prokop’ev Nikolaj, Nazmutdinova Veronika, Nasonov Vladimir, 2017"
      },
      


    ],

    //location 4 - Palazzo Pepoli – Museo della Storia di Bologna
    [
      {
        title: "Palazzo Pepoli – Museo della Storia di Bologna - Lady Miller",
        body: " The Pallazzo Pepoli is richly furnished: there are some good fresco paintings on the cielings and cornices, &c. by Columna di Catuti, Donato Creti, and Graziani; also some aërian perspective, by Spaniroli. The most remarkable object here is a clock of perpetual motion; the ball runs over a picture of Cupids, by Albani. This picture is placed horizontally upon the top of the inside of the clock, a looking-glass in a floping inclination reflects it, and the Cupids appear in the glass playing at ball.",
        p: "Lady Miller, 1777"
      },
      {
        title: "Palazzo Pepoli – Museo della Storia di Bologna - George Edmund Street",
        body: "The Pepoli Palace has some old brickwork and a Ghibelline battlement of unusually picturesque outline.",
        p: "George Edmund Street, 1874"
      },
      {
        title: "Palazzo Pepoli – Museo della Storia di Bologna – Edward Hutton",
        body: "It is well to follow the Via Castiglione a little way to see the great castellated Palazzo dei Pepoli, a building of 1344, with its fine court and colonnade.",
        p: "Edward Hutton, 1913"
      },
      {
        title: "Palazzo Pepoli – Museo della Storia di Bologna – Charles Nicolas Cochin",
        body: "Palazzo Pepoli. On y cite des fresques de Colomna, de Canuti, de Donato Creti, & de Graziani. Ces maîtres, quoique bons, ne sont pas tous du premier ordre.",
        p: "Charles Nicolas Cochin, 1991"
      }


    ],
    //location 5 - Archiginnasio e Teatro Anatomico
    [
      {
        title: "Archiginnasio e Teatro Anatomico - Erastus Cornelius Benedict",
        body: "As we stood in the anatomical theatre –seats for about two hundred–we could not help thinking how strange it would look to American or English eyes to see a lady demonstrating from the cadaver the structure of the human body, to a mixed class of medical students, gentlemen and ladies.",
        p: "Erastus Cornelius Benedict, 1860"
      },
      {
        title: "Archiginnasio e Teatro Anatomico - Jules Janin",
        body: "Ce qui s'est passé dans cette ville inerte ne saurait se croire; elle a tout tenté, même la magie. Cette ville, qui n'a pas aujourd'hui une voix pour se plaindre, elle parlait jadis aux esprits infernaux. La première fois que le médecin ouvrit un cadavre pour apprendre dans les entrailles de ce mort les secrets de la vie, le médecin et le cadavre étaient de Bologne.",
        p: "Jules Janin, 1839"
      },
      {
        title: "Archiginnasio e Teatro Anatomico - Charles de Brosses",
        body: "La plus belle partie des écoles (scuole) est le théâtre d’anatomie, de la main d’Antonio Levante ; c’est une pièce superbe, faite en amphithéâtre, où les spectateurs sont assis.",
        p: "Charles de Brosses, 1858"
      },
      {
        title: "Archiginnasio e Teatro Anatomico - Eustache Rocheleau",
        body: "Cet archigymnase renferme un théâtre anatomique dont le plafond est en bois sculpté. Au-dessus de la chaire du professeur, se voit encore une statue en buis, représentent un homme écorché : on dit que c'est dans cet endroit qu'ont été opérées les premières autopsies, sur le cadavre humain.",
        p: "Eustache Rocheleau, 1922"
      },
      {
        title: "Archiginnasio e Teatro Anatomico - José de Lasa",
        body: "el Archiginmsio, construido por el arquitecto Terribilia, y que es notable no más que por su rareza, pues su adorno exterior lo forma la reunion de todos los escudos de armas de la mayor parte de las naciones.",
        p: "José de Lasa, 1873"
      },
      {
        title: "Archiginnasio e Teatro Anatomico - Pedro A. de Alarcón",
        body: "La Universidad vieja me hace el efecto del cráter frió de un antiguo volcan. —Ella fue, durante la poética barbarie de los tiempos medios, la única luz que alumbraba la alta Italia, y otros muchos pueblos de Europa volvían anhelantes los anublados ojos hacia sus vivos resplandores. Hoy la habita el silencio.",
        p: "Pedro A. de Alarcón, 1861"
      },
      {
        title: "Archiginnasio e Teatro Anatomico - José de Viera y Clavijo",
        body: "Todos los claustros altos y bajos, están plagados de escudos de armas, é inscripciones en memoria de varones esclarecidos que fueron allí profesores, cuales han sido, Bartulo, Baldo, Sepulveda ócc. Las clases son buenas y bien pintadas, sobresaliendo entre ellas, el teatro anatómico, por sus bellas luces, y las estatuas de los profesores mas célebres, como Murgañi.",
        p: "José de Viera y Clavijo, 1849"
      },
      {
        title: "Archiginnasio e Teatro Anatomico - Jurij Stepanovič Nečaev-Mal’cov, Ivan Vladimirovič Cvetaev",
        body: "Зашел я в Archiginnasio, где помещается теперь публичная библиотека и где 14 с лишком лет назад, на 800-летнем юбилее университета, я был обручаем, при получении диплома почетного доктора филологии, каким-то историческим большим и толстым кольцом XIV в. с этим учреждением, в двух-трех шагах от возвышения, на котором сидели король Умберт, королева Маргарита и наследный принц, тогда еще мальчик. Открытый дворик этого исторического палаццо, задернутый тентом, обращен был в колоссальный зал; в двух его этажах (2-й образовывали окружающие большие галереи) тогда собралась вся интеллигенция и богатая Болонья посмотреть и на иностранных депутатов, явившихся на праздник в академических разноцветных костюмах; один пожилой американец прибыл даже в каком-то мехе, несмотря на сильную жару тех дней. Знаменитый Carducci произносил историческую речь.",
        p: "Jurij Stepanovič Nečaev-Mal’cov, Ivan Vladimirovič Cvetaev, 2010"
      }

    ],
    //location 6 - Museo Civico Archeologico 
    [
      {
        title: "Museo Civico Archeologico - Edward Hutton",
        body: "The excellent Museo Civico is not so disappointing as the Accademia for it does not promise so much. It contains, too, what I suppose is one of the finest collections of Etruscan antiquities in existence, but for me it holds but two things of real delight, I mean the two reliefs of Jacopo della Quercia, the first a relief of the Birth of the Virgin in Sala xv, the other a relief of the Madonna and Child in Sala XVI.",
        p: "Edward Hutton, 1913"
      },
      {
        title: "Museo Civico Archeologico - Dan Fellows Platt",
        body: "The Museum of Antiquities near S. Petronio is interesting for its Etruscan remains and for a fine head of Athena, which Furtwangler plausibly contends had a Pheidian original. ",
        p: "Dan Fellows Platt, 1908"
      },
      {
        title: "Museo Civico Archeologico - Jacque Vontade",
        body: "Dans le musée Civico , il y a un curieux marbre grec, une tête de Pallas, je crois. La déesse hellénique ressemble extraordinairement à l'une de ces belles Anglaises dont, encore qu'on leur trouve « le type grec », on sait, au premier regard, qu'elles sont anglaises et que leurs ascendants furent tous anglais. La dame de marbre a dans les modelés, et l'expression aussi, je ne sais quoi de contemporain qui étonne. J'aimerais apprendre d'où elle vient, mais son cartouche ne le dit pas, et le gardien ne possède aucune lumière sur ce sujet. Cependant il me révèle avec fierté que Gabriele d'Annunzio a beaucoup écrit sur ce buste. Est-ce vrai ?",
        p: "Jacque Vontade, 1914"
      },
      {
        title: "Museo Civico Archeologico - Jurij Stepanovič Nečaev-Mal’cov, Ivan Vladimirovič Cvetaev",
        body: "Museo Civico Болоньи интересен для этрускологов и палеонтологов. Для античной скульптуры он сделался знаменит головою Афины, в которой гениальный Фуртвенглер узнал копию со статуи ф и ди я «Лемносская Афина», два торса которой в копиях сохранились в Albertinurne Дрездена. Фуртвенглер заказал гипсовый слепок с этой головы и шеи - и гипс как нельзя лучше вошел в отверстие дрезденского торса. С тех пор принадлежность этих двух частей к одной статуе признана в ученом мире всеми. Разногласие существует только в том, действительно ли этот мрамор римской эпохи представляет собою копию фидиева изваяния указанного наименования.",
        p: "Jurij Stepanovič Nečaev-Mal’cov, Ivan Vladimirovič Cvetaev, 2010"
      }
    ]
  ]
  const intestation = {
    difficulty: 'maps.easy',
    time: "35min",
    km: "2,4km"
  }

  return <GenericRoute
    coordinates={coordinates}
    zooms={zooms}
    markerContent={markerContent}
    init_pos={{lat: 44.4976, lng: 11.3535}}
    title={"routes.museum"}
    text={"routes.museum_text"}
    cards={cards}
    intestation={intestation}
  />
}

export default MuseumRoute;