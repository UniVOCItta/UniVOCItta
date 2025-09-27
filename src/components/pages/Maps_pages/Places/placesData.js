const PlacesData = 
[
   {
       "id": 0,
       "name": "A Name",
       "address": "address",
       "lat": "a number",
       "lng": "a number",
       "category": "a category",
       "description": "Lorem ipsum dolor sit amet",
       "founded": "0000",
       "style": "style",
       "img": require('../../../../assets/imgs/routes/unibo_1.jpg'),
       "fragments": {
           "1": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "2": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
           "3": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       }
   },
   {
        "id": 1,
        "name": "Basilica di San Petronio",
        "address": "Piazza Galvani, 5",
        "lat": "44.492778",
        "lng": "11.343611",
        "category": "Place of worship",
        "description": "The Basilica of San Petronio is a minor basilica and church of the Archdiocese of Bologna. It dominates Piazza Maggiore. The basilica is dedicated to the patron saint of the city, Saint Petronius, who was the bishop of Bologna in the fifth century.",
        "founded": "1390",
        "style": "Italina Gothic",
        "img": require('../../../../assets/imgs/routes/unibo_1.jpg'),
        "fragments": {
            "1": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "2": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "3": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
   },
   {
        "id": 2,
        "name": "The basilica of Santo Stefano",
        "address": "Piazza Santo Stefano",
        "lat": "44.491985",
        "lng": "11.348727",
        "category": "Place of worship",
        "description": "The basilica of Santo Stefano encompasses a complex of religious edifices in the city of Bologna, Italy. Located on Piazza Santo Stefano, it is locally known as Sette Chiese and Santa Gerusalemme.",
        "founded": "IV century",
        "style": "Paleocristiano, romanico, gotico",
        "img": require('../../../../assets/imgs/routes/unibo_1.jpg'),
        "fragments": {
            "1": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "2": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "3": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    },
    {
        "id": 3,
        "name": "The Sanctuary of the Madonna of San Luca",
        "address": "address",
        "lat": "44.48",
        "lng": "11.298",
        "category": "Place of worship",
        "description": "The Sanctuary of the Madonna of San Luca is a basilica church sited atop a forested hill, Colle or Monte della Guardia, some 300 metres above the city plain, just south-west of the historical centre of the city",
        "founded": "1194",
        "style": "Baroque",
        "img": require('../../../../assets/imgs/routes/unibo_1.jpg'),
        "fragments": {
            "1": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "2": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "3": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    },
    {
        "id": 4,
        "name": "The Basilica of Saint Francis",
        "address": "address",
        "lat": "a number",
        "lng": "a number",
        "category": "Place of worship",
        "description": "The Basilica of Saint Francis is a historic church in the city of Bologna. Founded in the 13th century, it has been the property of the Conventual Franciscan friars since then.",
        "founded": "XIII century",
        "style": "Romanesque",
        "img": require('../../../../assets/imgs/routes/unibo_1.jpg'),
        "fragments": {
            "1": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "2": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "3": "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    }
]
  // Places array 
  const places = [
    {
      id: 0,
      title: 'Archiginnasio di Bologna',
      category: 'University',
      img: require('../../../../assets/imgs/places/archiginnasio_Wwikiwalter.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Originally the main building of the University of Bologna, it now houses the Archiginnasio Municipal Library and the Anatomical Theatre. Its halls, corridors and stairways are decorated with around 6,000 coats of arms of past students.',
      location: [44.49205, 11.343406],
      copyright: 'Wwikiwalter, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Wwikiwalter, via Wikimedia Commons'
    },
    {
      id: 1,
      title: 'Basilica di San Bartolomeo e Gaetano',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/chiesa_bartolomeo_gaetano_Barbi.jpg'),
      path: '/coming', 
      description: 'A Roman Catholic church in a Renaissance style located in the heart of the city.',
      location: [44.494167, 11.347222],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 2,
      title: 'Basilica di San Domenico',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/arca_San-Domenico_Barbi.jpg'),
      path: '/coming', 
      description: 'One of the city’s major churches, it houses the tomb of Saint Dominic, founder of the Order of Preachers. His remains rest in the Arca San Domenico, a shrine designed by Nicola Pisano in 1264.',
      location: [44.489444, 11.344722],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 4,
      title: 'Basilica di San Francesco',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/san_francesco_tombe_Andrea_Samaritani.jpg'),
      path: '/coming', 
      description: 'A historic church founded in the 13th century and property of the Conventual Franciscan Friars.',
      location: [44.494913, 11.335046],
      copyright: 'Foto di Andrea Samaritani',
      copyright_text: 'Foto di Andrea Samaritani',
    },
    {
      id: 5,
      title: 'Basilica di San Petronio',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/san_petronio_Alexandra_Dan.jpg'),
      path: '/coming', 
      description: 'Bologna’s largest church, it is dedicated to the city’s patron saint and dominates Piazza Maggiore. This vast Gothic masterpiece is renowned for its unfinished façade and for the famous meridian engraved on its floor by the astronomer Cassini.',
      location: [44.492778, 11.343056],
      copyright: 'Foto di Alexandra Dan',
      copyright_text: 'Foto di Alexandra Dan'
    },
    {
      id: 6,
      title: 'Basilica di Santo Stefano',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/piazza_santo_stefano_Vanni_Lazzari.jpg'),
      path: '/coming', 
      description: 'Known as the Sette Chiese (‘Seven Churches‘), this religious complex is a maze of chapels, cloisters, and courtyards. It brings together seven churches of varying forms, sizes and periods, dating from the fourth to the seventeenth century.',
      location: [44.491985, 11.348727],
      copyright: 'Vanni Lazzari, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Vanni Lazzari, via Wikimedia Commons'
    },
    {
      id: 7,
      title: 'Basilica di Santa Maria dei Servi',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/santa_maria_servi_DavideAlberani_CC_4.0.jpg'),
      path: '/coming', 
      description: 'Founded in 1346, this historic church is dedicated to the Blessed Virgin Mary. In front, the elegant Portico dei Servi frames its façade.',
      location: [44.491822, 11.35219],
      copyright: 'Davide Alberani, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Davide Alberani, via Wikimedia Commons',
      
    },
    {
      id: 8,
      title: 'Chiesa parrocchiale Corpus Domini',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/chiesa_corpus_domini_BolognaBo.jpg'),
      path: '/coming', 
      description: 'Built in 1478, this Roman Catholic church houses the body of Saint Catherine of Bologna (Santa Caterina de’ Vigri), who founded the first Clares convent in Bologna.',
      location: [44.4938107, 11.3387500],
      copyright: 'Bologna.Bo, <https://www.bologna.bo/>',
      copyright_text: '©Bologna.Bo, https://www.bologna.bo'
    },
    {
      id: 9,
      title: 'Chiesa del Sacro Cuore di Gesù',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/chiesa_sacro_cuore_BeWeB.jpg'),
      path: '/coming', 
      description: 'A 20th-century parish church located just outside the centre of Bologna. It is one of the most populated parishes in the city.',
      location: [44.507778, 11.346789],
      copyright: 'BeWeB, <https://beweb.chiesacattolica.it/>',
      copyright_text: '©BeWeB, https://beweb.chiesacattolica.it'
    },
    {
      id: 10,
      title: 'Chiesa di San Giovanni in Monte',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/chiesa_san_giovanni_monte_Barbi.jpg'),
      path: '/coming', 
      description: 'A 15th-century church with three naves, notable for the Eagle at its entrance, sculpted by Nicolò dell’Arca around 1481.',
      location: [44.490828, 11.348263],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 11,
      title: 'Chiesa di San Gregorio dei Mendicanti',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/complesso_san_gregorio_BolognaOnline.jpg'),
      path: '/coming', 
      description: 'A former Benedictine monastery built in the 12th century. The monumental complex is today a public and hospital healthcare facility.',
      location: [44.495889, 11.339333],
      copyright: 'Bologna Online',
      copyright_text: '©Bologna Online'
    },
    {
      id: 12,
      title: 'Cimitero monumentale della Certosa',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/certosa_wikidata_Bissire.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A former Carthusian monastery converted into the city’s monumental cemetery in 1801, it houses impressive family tombs and a church with paintings by notable artists like Elisabetta Sirani. The extensive cloisters and covered porticos are filled with sepulchral monuments and remarkable neoclassical artworks.',
      location: [44.497597, 11.30777],
      copyright: 'Bissire, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Bissire, via Wikimedia Commons'
    },
    {
      id: 13,
      title: 'Monastero di San Michele in Bosco',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/chiostro_SanMichele_Barbi.jpg'),
      path: '/coming', 
      description: 'A religious complex including a Church and an Olivetan monastery, now home to the Rizzoli Orthopedic Institute. Standing upon a hill, it offers a charming view of Bologna and the surrounding countryside.',
      location: [44.481468, 11.341932],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 14,
      title: 'Museo Giovanni Capellini',
      category: 'Museum',
      img: require('../../../../assets/imgs/places/museo_capellini_Oscar_Ferrari_IMG_025.jpg'),
      path: '/coming', 
      description: 'One of the scientific museums of the University Museum Network of Bologna, named after the university’s first geology professor. It houses collections of rocks, plants, and fossils.',
      location: [44.4967, 11.3519],
      copyright: '©Università di Bologna/Oscar Ferrari',
      copyright_text: '©Università di Bologna/Oscar Ferrari'
    },
    {
      id: 15,
      title: 'Museo Luigi Cattaneo',
      category: 'Museum',
      img: require('../../../../assets/imgs/places/museo_cattaneo_Oscar_Ferrari.jpg'),
      path: '/coming', 
      description: 'Part of the University Museum Network of Bologna, it features a collection of wax models and preparations used for studying the human anatomy in the 18th and 19th century.',
      location: [44.49855, 11.355008],
      copyright: '©Università di Bologna/Oscar Ferrari',
      copyright_text: '©Università di Bologna/Oscar Ferrari'
    },
    {
      id: 16,
      title: 'Museo Mineralogia - Luigi Bombicci',
      category: 'Museum',
      img: require('../../../../assets/imgs/places/museo_mineralogia_Antonio_Todero.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Named after Professor Luigi Bombicci, this museum of the University of Bologna displays 142 meteorites, over 1,000 ornamental stones, minerals, precious gems, diamonds, and much more.',
      location: [44.498208, 11.355501],
      copyright: 'Foto di Antonio Todero',
      copyright_text: 'Foto di Antonio Todero'
    },
    {
      id: 17,
      title: 'Museo Renzo Savini',
      category: 'Museum',
      img: require('../../../../assets/imgs/places/casa_museo_renzo_savini_BolognaWelcome.jpg'),
      path: '/maps/places/singleplace', 
      description: 'An outstanding example of 1960s architecture, the house displays a diverse collection of artworks and objects, alongside original furnishings by renowned Italian designers such as Gio Ponti and Tobia Scarpa, reflecting the era’s iconic ',
      location: [44.4938100, 11.3387503],
      copyright: 'Bologna Welcome, <https://www.bolognawelcome.com/it>',
      copyright_text: '©Bologna Welcome, <https://www.bolognawelcome.com/it>'
    },
    {
      id: 18,
      title: 'Museo della Specola',
      category: 'Museum',
      img: require('../../../../assets/imgs/places/specola_UNIBO.jpg'),
      path: '/coming', 
      description: 'Housed in the Torre della Specola, built between 1712 and 1726 at Palazzo Poggi, this University Museum display a wide range of historical astronomical instruments, such as armillary spheres, wooden telescopes, clocks and navigational and topographical tools. ',
      location: [44.49669, 11.35247],
      copyright: '© Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    {
      id: 19,
      title: 'Orto Botanico di Bologna',
      category: 'Park',
      img: require('../../../../assets/imgs/places/orto_botanico_Umberto_Mossetti.jpg'),
      path: '/maps/places/singleplace', 
      description: 'One of the oldest botanic gardens in Europe, the University of Bologna’s Garden and Herbarium were founded in the 16th century for students to study medicinal plants. Today, it features a greenhouse and a rich collection of plants.',
      location: [44.50068, 11.35351],
      copyright: 'Foto di Umberto Mossetti',
      copyright_text: 'Foto di Umberto Mossetti'
    },
    {
      id: 20,
      title: 'Osservatorio Stazione di Loaino',
      category: 'Other',
      img: require('../../../../assets/imgs/places/osservatorio_loiano_INAF.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Located 37 km from Bologna, this Astronomical Park features an observing station with two telescopes, a planetarium, a didactic hall, a Solar System model, a Cosmic Calendar, and a solar clock.',
      location: [44.500833, 11.356944],
      copyright: 'INAF (Istituto Nazionale di Astrofisica), <https://www.oas.inaf.it/it//>',
      copyright_text: '©INAF (Istituto Nazionale di Astrofisica), https://www.oas.inaf.it/it//'
    },
    {
      id: 21,
      title: 'Palazzo Aldrovandi',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_aldrovandi_Fabrizio_Garrisi_CC_4.0.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A notable example of a Rococo senatorial palace begun in 1725 under the patronage of Cardinal Pompeo Aldrovandi. Its Baroque façade combines white Istrian stone with red brickwork, while the interiors feature frescoes depicting the history of the Aldrovandi family. The palace once held a collection of marble busts and reliefs, later transferred to the British Museum in London.',
      location: [44.497563, 11.341739],
      copyright: 'Fabrizio Garrisi, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Fabrizio Garrisi, via Wikimedia Commons'
    },
    {
      id: 22,
      title: 'Palazzo Caprara',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_caprara_Barbi.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A historic palace in Bologna with approximately two hundred rooms, it now serves as the seat of the Prefecture. The ground floor features Ludovico Carracci’s ‘Allegory of Fortitude’, while a rich collection of Bolognese school paintings was lost during World War II. In 1805 it hosted Napoleon, who purchased the building the following year.',
      location: [44.493969, 11.340146],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 23,
      title: 'Palazzo d’Accursio',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_accursio_Andrea_Samaritani.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Located in Piazza Maggiore, it is Bologna’s Town Hall. Above its 16th-century portal stands a bronze statue of Pope Gregory XII. The palace is also home to the Civic Art Collection on the second floor, featuring paintings from the Middle Ages to the 19th century.',
      location: [44.49386, 11.34228],
      copyright: 'Foto di Andrea Samaritani',
      copyright_text: 'Foto di Andrea Samaritani'
    },
    {
      id: 24,
      title: 'Palazzo del Podestà',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_podest…_UNIBO.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A civil building in Piazza Maggiore, erected in the 13th century to serve as the seat of the podestà and its officials. Rising above the large architectural complex is the Torre dell’Arengo, Bologna’s civic bell tower, which stands 47 meters tall.',
      location: [44.494236, 11.343253],
      copyright: '©Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    {
      id: 25,
      title: 'Palazzo Fantuzzi',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_fantuzzi_Barbi.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A Renaissance palace built in 1521, it was the main residence of the noble Fantuzzi family. Known as the ‘Palace of the Elephants,’ its name refers to the carved elephants with towers above the corner niches, which form the family’s senatorial coat of arms. ',
      location: [44.494275, 11.35044],
      copyright: '©Guido Barbi, <https://www.guidobarbi.it/>',
      copyright_text: 'Foto di Guido Barbi, https://www.guidobarbi.it'
    },
    {
      id: 26,
      title: 'Palazzo Hercolani',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_hercolani_cortile_Antonio_Cesari.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Now home to the Political Science Department of the University of Bologna, Palazzo Hercolani is a large late 18th-century palace. Inside, it features a monumental staircase adorned with stucco statues of mythological subjects and numerous frescoed rooms.',
      location: [44.491276, 11.353963],
      copyright: '©Università di Bologna/Antonio Cesari',
      copyright_text: '©Università di Bologna/Antonio Cesari'
    },
    {
      id: 27,
      title: 'Palazzo Malvezzi',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_malvezzi_cortile_Antonio_Cesari.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Built from 1560, Palazzo Malvezzi was the residence of the aristocratic Malvezzi family. Renowned for its frescoed ceilings, it also features elegant carved and gilded double doors on the piano nobile, originally designed by Francesco Cocchi and now preserved at the Cooper Hewitt Museum in New York. ',
      location: [44.495316, 11.348363],
      copyright: '©Università di Bologna/Antonio Cesari',
      copyright_text: '©Università di Bologna/Antonio Cesari'
    },
    {
      id: 28,
      title: 'Palazzo Poggi',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_poggi_studenti_UNIBO.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Located in the heart of the university district, it houses the rectorate of the University of Bologna. At the ground floor is the Aula Carducci, where the poet Giosuè Carducci taught Italian literature. The first floor is home to the Museo di Palazzo Poggi, displaying the valuable collection of the Institute of Sciences, founded in 1711 by Luigi Ferdinando Marsili. ',
      location: [44.496599, 11.351678],
      copyright: '©Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    {
      id: 29,
      title: 'Palazzo Ranuzzi',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_ranuzzi_Musei_Civici_Bologna.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A Baroque palace that now houses the Court of Appeal of Bologna. It features a spectacular Rococo staircase completed in 1695 and numerous piano nobile rooms decorated with frescoes by prominent artists such as Marco Antonio Franceschini and Felice Giani.',
      location: [44.488349, 11.343177],
      copyright: '©Musei Civici Bologna, <http://www.museibologna.it/>',
      copyright_text: '©Musei Civici Bologna, http://www.museibologna.it/'
    },
    {
      id: 30,
      title: 'Palazzo Sampieri',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_sampieri_Unknown.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A historic building in central Bologna, Palazzo Sampieri features frescoes depicting biblical and mythological scenes by Annibale, Ludovico, and Agostino Carracci, founders of the renowned Accademia degli Incamminati in Bologna.',
      location: [44.493418, 11.348761],
      copyright: 'Biblioteca Salaborsa, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons',
      copyright_text: 'Biblioteca Salaborsa, via Wikimedia Commons'
    },
    {
      id: 31,
      title: 'Palazzo Sanuti Bevilacqua Degli Ariosti',
      category: 'Palace',
      img: require('../../../../assets/imgs/places/palazzo_sanuti_Alex_Roudy.jpg'),
      path: '/maps/places/singleplace', 
      description: 'A 15th-century palace with a rusticated façade, it features a remarkable courtyard with two loggias. In 1547, Pope Paul III moved some sessions of the Council of Trent to this palace for a period of two years.',
      location: [44.490518, 11.341253],
      copyright: '©Alex Roudoy',
      copyright_text: 'Foto di Alex Roudoy'
    },
    {
      id: 32,
      title: 'Piazza di Porta Ravegnana',
      category: 'Square',
      img: require('../../../../assets/imgs/places/piazza_ravegnana_free.jpg'),
      path: '/maps/places/singleplace', 
      description: 'An iconic square in the heart of Bologna, dominated by the famous Two Towers at its centre.',
      location: [44.494459, 11.3470278],
      copyright: 'free'
    },
    {
      id: 33,
      title: 'Piazza Maggiore',
      category: 'Square',
      img: require('../../../../assets/imgs/places/piazza_maggiore_Pasquali_Federico.jpg'),
      path: '/maps/places/singleplace', 
      description: 'The principal square of Bologna, serving as the historic and social heart of the city. It is encircled by many significant administrative and religious buildings, including the Basilica of San Petronio, Palazzo d’Accursio, Palazzo del Podestà, and Palazzo dei Notai.',
      location: [44.49373, 11.343064],
      copyright: 'Foto di Federico Pasquali',
      copyright_text: 'Foto di Federico Pasquali'
    },
    {
      id: 34,
      title: 'Piazza Malpighi',
      category: 'Square',
      img: require('../../../../assets/imgs/places/piazza_malpighi_scatti_di_gusto.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Named after the 17th-century physician and anatomist Marcello Malpighi, this square is a meeting point of several major streets in Bologna and features the Column of the Immaculate Virgin Mary, realized in 1683 to a design by Guido Reni.',
      location: [44.49501, 11.33638],
      copyright: 'Scatti di gusto, <https://www.scattidigusto.it/>',
      copyright_text: '©Scatti di gusto, https://www.scattidigusto.it/ '
    },
    {
      id: 35,
      title: 'Piazza San Domenico',
      category: 'Square',
      img: require('../../../../assets/imgs/places/piazza_san_domenico_Vanni_Lazzari_CC_4.0.jpg'),
      path: '/maps/places/singleplace', 
      description: 'This square is dominated by the eponymous Basilica of San Domenico and its adjoining convent. It is paved with river cobblestones and features two monumental Gothic arches as well as two columns topped with statues, one of which supports a bronze statue of St. Dominic.',
      location: [44.48972, 11.34446],
      copyright: 'Vanni Lazzari, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Common',
      copyright_text: 'Foto di Vanni Lazzari, via Wikimedia Common'
    },
    {
      id: 36,
      title: 'Pinacoteca Nazionale di Bologna',
      category: 'Museum',
      img: require('../../../../assets/imgs/places/pinacoteca_Gueraldo_Anna_Chiara.jpg'),
      path: '/maps/places/singleplace', 
      description: 'It houses one of Italy’s most important collections of Emilian paintings, ranging from the 13th to 18th centuries. Highlights include Raphael’s Santa Cecilia, Guido Reni’s Massacre of the Innocents, and masterpieces by other renowned artists like the Carracci, Elisabetta Sirani and Guercino.',
      location: [44.4977, 11.353469],
      copyright: 'Foto di Anna Chiara Gueraldo',
      copyright_text: 'Foto di Anna Chiara Gueraldo'
    },
    {
      id: 37,
      title: 'Porta San Vitale',
      category: 'Historical',
      img: require('../../../../assets/imgs/places/porta_san_vitale_wikidata.jpg'),
      path: '/maps/places/singleplace', 
      description: 'First erected in 1286, it is a historic city gate in Bologna, originally part of the medieval walls. It features characteristic brickwork and served as an important access point to the city from the eastern side.',
      location: [44.493889, 11.356944],
      copyright: 'Anita.malina, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Anita.malina, via Wikimedia Commons'
    },
    {
      id: 38,
      title: 'Porta Saragozza',
      category: 'Historical',
      img: require('../../../../assets/imgs/places/porta_saragozza_EvelinaRibarova_Wikimedia.jpg'),
      path: '/maps/places/singleplace', 
      description: 'This historic gate is famous as the starting point of the Portico di San Luca, the long covered walkway leading up to the Sanctuary of the Madonna di San Luca.',
      location: [44.490515, 11.32989],
      copyright: 'EvelinaRibarova, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di EvelinaRibarova, via Wikimedia Commons'
    },
    {
      id: 39,
      title: 'Portico dei Servi',
      category: 'Porticoes',
      img: require('../../../../assets/imgs/places/Chiostro_del_portico_dei_servi_AnniediGiugno_Wikidata.jpg'),
      path: '/maps/places/singleplace', 
      description: 'One of the earliest masonry porticoes in Bologna, as well as the widest. It stands in front of the Church of Santa Maria dei Servi and holds the record for the longest construction period, begun in 1393 and completed only in 1855.',
      location: [44.492157, 11.3516986],
      copyright: 'AnniediGiugno, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di AnniediGiugno, via Wikimedia Commons'
    },
    {
      id: 40,
      title: 'Rettorato',
      category: 'University',
      img: require('../../../../assets/imgs/places/rettorato_palazzo_poggi_Antonio_Cesari.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. MANCANTE',
      location: [44.496599, 11.351678],
      copyright: '©Università di Bologna/Antonio Cesari',
      copyright_text: '©Università di Bologna/Antonio Cesari '
    },
    {
      id: 41,
      title: 'Santuario della Madonna di San Luca',
      category: 'Worship',
      img: require('../../../../assets/imgs/places/san_luca_wikipedia_Nebbius.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Located in Via Zamboni 33 inside Palazzo Poggi, it houses the office of the University of Bologna’s Rector, currently Giovanni Molari.',
      location: [44.479117, 11.298069],
      copyright: 'Puscas Vadim  (Nebbius), CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',
      copyright_text: 'Foto di Puscas Vadim  (Nebbius), via Wikimedia Commons',
    },
    {
      id: 42,
      title: 'Due Torri',
      category: 'Tower',
      img: require('../../../../assets/imgs/places/bologna_torri.jpg'),
      path: '/maps/places/singleplace', 
      description: 'Built between 1109 and 1119, the two square brick towers, Asinelli and Garisenda, are famous for their distinctive lean, making them iconic symbols of Bologna and one of the city’s main attractions.',
      location: [44.494127, 11.346712],
      copyright: 'Free'
    },
    {
      id: 43,
      title: 'Stazione di Bologna Centrale',
      category: 'Other',
      img: require('../../../../assets/imgs/places/stazione_Simone_Brunacci.jpg'),
      path: '/maps/places/singleplace', 
      description: 'The main railway station of Bologna and a site of memory: the clock above the façade is forever stopped at 10:25, marking the time of the terrorist bombing of 2 August 1980, known as the Strage di Bologna (‘Bologna massacre‘).',
      location: [44.505833, 11.341667],
      copyright: 'Foto di Simone Brunacci',
      copyright_text: 'Foto di Simone Brunacci'
    },
    {
      id: 44,
      title: 'Via Zamboni',
      category: 'Historical',
      img: require('../../../../assets/imgs/places/via_zamboni_UNIBO.jpg'),
      path: '/maps/places/singleplace', 
      description: 'About one kilometer long, it is the heart of the university district, linking the Two Towers to Porta San Donato. Along its length stand many of the University of Bologna’s historic buildings, including libraries, departments, and Palazzo Poggi.',
      location: [44.4967, 11.3519],
      copyright: '© Università di Bologna',
      copyright_text: '©Università di Bologna'
    },
    // ... more place objects ...
  ];
export {PlacesData,places};