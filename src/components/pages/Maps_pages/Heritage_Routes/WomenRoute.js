import React from 'react';
import GenericRoute from './GenericRoute';

const WomenRoute = () => {
  
  const coordinates = [
    [44.496599, 11.351678], // 1. Accademia delle Scienze 
    [44.496599, 11.351778], // 2. Zona Universitaria, Palazzo Poggi e Rettorato 
    [44.492778, 11.343056], // 3 Basilica di San Petronio
    [44.492222, 11.343611], // 4 Teatro Anatomico (Biblioteca dell'Archiginnasio)
    [44.4892, 11.3397], // 5 Santuario Del Corpus Domini
    [44.497597, 11.30777] // 6 Cimitero della Certosa
  ];
  const zooms =[
    20,
    20,
    18,
    18,
    14.8,
    14.5
  ]
  const markerContent = [
    "Accademia delle Scienze",
    "Zona Universitaria, Palazzo Poggi e Rettorato",
    "Basilica di San Petronio",
    "Teatro Anatomico (Biblioteca dell'Archiginnasio",
    "Santuario del Corpus Domini",
    "Cimitero della Certosa",
    // Add more popup content for each coordinate
  ];

  const cards =[
  //location 1 - Accademia delle Scienze
  [
  //elemento 1
    {
      title:"Accademia delle Scienze - Voltaire",
      body:"Io volevo fare il viaggio di Bologna, e dire un giorno a i miei cittadini, ho veduto la signora Bassi, ma privato de quest' onore, mi sia lecito almeno di mettere ai suoi piedi questo filosofico omaggio e di riverire l'onor del suo secolo e delle donne. Non cè una Bassi in Londra, e io sarei molto più felice d'essere aggregato alla sua Accademia di Bologna, che a quella degli inglesi, benché ella habbia prodotto un Newton.",
      p:"Voltaire"
    },
    //elemento 2
    {
      title:"Accademia delle Scienze - Charles de Brosses",
      body:"Il ne faut pas oublier madame Laura Bassi, professeur en philosophie, laquelle a été reçue et a pris le bonnet de docteur en pleine université. Aussi en porte-t-elle la robe et l'hermine quand elle va faire des leçons publiques ; ce qui n'arrive que rarement et à certains jours solennels seulement ; parce qu'on n'a pas jugé qu'il fût décent qu'une femme montrât ainsi chaque jour, à tout venant, les choses cachées de la nature.",
      p:"Charles de Brosses"
    },
    {
      title:"Accademia delle Scienze - Anne-Marie Lepage Fiquet du Boccage",
      body:"L'après-midi nous vîmes l'Institut, où l'on m'a fait la grace de m'admettre ; ma gloire est grande ; il n'y a que trois femmes, la studieuse Laura Bassi, qui y professe la Physique, dont elle donne des cours publics en latin, la fameuse Géometre Agnesi, retirée dans un Couvent à Milan, et l'illustre Princesse de Collombrano, Napolitaine. La Marquise du Châtelet, aussi digne d'en être que je le suis peu, étoit de cette Académie des Sciences, fondée par Théodose le jeune, la plus ancienne, la plus riche de l'Europe.",
      p:"Anne-Marie Lepage Fiquet du Boccage"
    }
  ],
  //location 2 - Zona Universitaria
  [ 
    {
      title:"Zona Universitaria, Palazzo Poggi e Rettorato - Jules Janin",
      body:"Bologne se souvient encore d'une autre jeune fille, Novella d'Andrea, si savante qu'elle enseignait le droit canon, et si belle qu'elle cachait sa tête derrière un voile de laine. Pauvres grands artistes qui, malgré leur silence et leur génie, restaient au fond du cœur de simples femmes, avec leurs passions, leur terreur, leurs croyances, leurs faiblesses et leur amour?",
      p:"Jules Janin"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Maximiliam Joseph vom Lamberg",
      body: "Une connoissance que je cultiverai encore avec plaisir, c'est celle de Mad. Laura Bassi connue sous le nom de Dotterassa : quoi qu'en dise une Dame auteur, qu'on n'amuse pas longtemps les femmes avec de l'esprit, celle-ci n'aime exactement que la Société de ceux qui en ont beaucoup.",
      p: "Maximiliam Joseph von Lamberg"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Anonimo",
      body: "J’ai eu plusieurs fois l’occasion de m’entretenir, de même que tous les Anglois qui sont ici, avec la célébre LAURA BASSI, Doctoresse en Philosophie, & Aggrégée à l’Université. Plusieurs ont de la peine à croire jusques où va le Genie de cette Fille, qui devant le Légat, des Magistrats & l’Université, soutint il y a quelque tems, en Latin & publiquement, toutes fortes de Disputes Académiques. Pour honorer son mérite singulier, on lui fit présent d’une Couronne d’argent, en forme de Couronne de Laurier ; & d’une Médaille. Elle fut revêtue & titrée du Doctorat, & reçue dans l’Université avec un Salaire, & pourtant à l’heure qu’il est, elle n’a que vingt ans.",
      p: "Anonimo"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Anonimo",
      body: "Elle a le visage tant soit peu picoté, doux, serieux & modeste. Des yeux noirs vifs, mais fermes, & composés sans affectation ou vanité apparente. La mémoire heureuse, le jugement solide, & l’imagination prompte. Elle me parla Latin coulamment une heure de suite, avec grâce & netteté. Elle est fort entendue dans la Metaphysique, mais elle goûte plus la Physique Moderne, & particulièrement l’Angloise. Elle me paroît très- versée dans tous les Systêmes, du moins elle m’a savamment répondu sur la Végetation, l’origine des Fontaines, le Flux & Reflux de la Mer, la Lumière, les Couleurs, les Sons, les mouvements des Planêtes, & plusieurs autres matiéres. Elle étudie actuellement les Mathématiques, pour se mettre en état de lire la Philosophie NEWTONIENNE.",
      p: "Anonimo"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Gabriel-François Coyer",
      body: "J'ai vu la Signora Laura Bassi, qui fait la langue d'Homère, qui parle Latin comme Cicéron, qui argumente à toute les thèses d'éclat, qui donne tous les ans un cours de Physique expérimentale à l'institut ; et qui, avec tout cela, a fait quatre enfans, dont elle n'a pas négligé l'éducation. Que dires vous de cette Mascula Sapho ? Son mari serait peut-être humilié d'avoir une femme si savante, s'il ne l'était pas lui-même.",
      p: "Gabriel-François Coyer"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Charles de Rémusat",
      body: "Bologne est une des villes qui ont vu naître le plus de femmes de savoir et de talent. L’université en a eu pour professeurs ; on cite encore Matilde Tambroni, Laura Bassi, Teresa Muratori, Elisabeth Sirani.",
      p: "Charles de Rémusat"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Noémie Dondel du Faouëdic",
      body: "Plusieurs publicistes et jurisconsultes distingués ont vu le jour à Bologne, – c'est à cette fameuse Université que la belle Maria Agnesi professait les mathémathiques ; initiée de bonne heure à l’étude des hautes sciences, par son père, elle y fit de tels progrès, qu'en 1750, le pape Benoit XIV, l'autorisa à succéder à son savant professeur, dans son cours public. Ses écrits publiés en latin ont eu les honneurs d'une traduction française.",
      p: "Noémie Dondel du Faouëdic"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Jérôme de Lalande",
      body: "Les femmes même se sont distinguées à Bologne par leur science. En 1366, Novella Lignani, en 1380, Bettizia Gozzadini, et Madalena Bonsignori professerent dans l'Université de Bologne ; actuellement encore Madame Laura Bassi depuis 1733, y remplit avec distinction une place de Professeur ; cette sçavante fait chez elle des cours de Physique expérimentale, et j'ai eu le plaisir d'assister à ses expériences.",
      p: "Jérôme de Lalande"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Samuel Lorenzo Knapp",
      body: "Maria Cajetana Agnesi, an Italian lady of great learning, was born at Milan, March 16th, 1718. Her inclinations, from her earliest youth, led her to the study of science; and at an age when young persons of her sex attend only to frivolous pursuits, she had made such astonishing progress in mathematics, that when, in 1750, her father, professor in the university of Bologna, was unable to continue his lectures, from infirm health, she obtained permission from the pope, Benedict XIV., to fill his chair. Before this, at the early age of nineteen, she had supported one hundred and ninety-one theses, which were published, in 1738, under the title 'Propositiones Philosophies'. She was mistress of Latin, Greek, Hebrew, French, German, and Spanish.",
      p: "Samuel Lorenzo Knapp"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - John Carne",
      body: "Bologna can boast at various times of female professors. In the fourteenth century, Novella di Andrea used to supply her father's place in the chair of canon law, and, as she was young and handsome, she is said to have had a curtain before her, that the attention of the students might not be distracted. In the last century, Laura Bassi taught philosophy; and still more lately, the celebrated Clotilde Tambroni, Greek; and at the present moment there are two female professors, one of law and the other of surgery.",
      p: "John Carne"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Juan Andrés",
      body: "...dos mugeres singulares, la célebre Doctora Laura Bassi, en quien competían una profunda doctrina , bastante para hacer lucir á qualquier hombre, y una admirable modestia, y la Señora Ana Morandi viuda de Manzolini, famosa por su habilidad de trabajar en cera las partes anatómicas, y por las lecciones públicas que daba de anotomia ;",
      p: "Juan Andrés"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Pedro Antonio de Alarcón",
      body: "Una de estas doctoras, llamada Novella, heredó la cátedra de su padre en 1360; pero era tan joven y tan linda, que se veia obligada á esplicar detrás de una cortina, á fin de que sus hechizos no distrajeran al auditorio. También han dejado nombre la profesora de griego Clotilde Tambroni y la gran matemática y latina Gaetana Agresi, asombro y envidia de los primeros sabios de Milan.",
      p: "Pedro Antonio de Alarcón"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Benito Pérez Galdós",
      body: "En el siglo XIV fué maestra en aquellas cátedras “Novella d’Andreu”, que explicaba sus lecciones oculta detrás de una cortina para que los alumnos no se distrajeran con la extremada belleza de la profesora. Otra que tal, llamada Laura Bassi, explicó matemáticas y física; Manzolina dió varios cursos de anatomía, y aún en nuestro siglo enseñó, nada menos que el griego, Clotilde Tromboni.",
      p: "Benito Pérez Galdós"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Petr Andreevič Tolstoj",
      body: "Женской народ в Болони изрядной, благообразной, платье носят власно так, как римлянки. В Болони честные и богатые люди, и жены их, и девицы ездят в коретах изрядных и в калясках на добрых лошедях, и уборы у них коретные изрядные; а пеши честные люди, и жены их, и дочери не ходят ик имеют то под зазором.",
      p: "Petr Andreevič Tolstoj"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Bolonskij Universitet, Dizionario Brokgauz & Efron",
      body: "Свою любовь к занятиям юриспруденцией Аккурсий передал и детям, а дочь его, Дота д’Аккорсо, удостоенная университетом степени доктора прав и допущенная к публичному преподаванию, была первая из женщин, упоминаемая в летописях университета. За ней последовали другие женщины-юристки, как Битгизия, Гоццацини, Новелла д’Андреа и др.",
      p: "Bolonskij Universitet, Dizionario Brokgauz & Efron"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - V.I. Nemirovič- Dančenko",
      body: "Одна изъ нихъ, Новелла д`Андреа, въ XIV вѣкѣ была не только чудомъ науки, но и женщины совершенствомъ красоты. Чтобы слушатели не забывали первую ради второй, она читала свои лекціи за занавѣсомъ, скрытая отъ ихъ взоровъ.",
      p: "V.I. Nemirovič- Dančenko"
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Prokop’ev N.Ja.",
      body: "Известность таланта Анны Манцолини в литье анатомических моделей распространилась по всей Европе, и она была приглашена ко двору Екатерины II, а также к другим королевским дворам.",
      p: "Prokop’ev N.Ja."
    },
    {
      title: "Zona Universitaria, Palazzo Poggi e Rettorato - Jumangulov V.Ja.",
      body: "В 1878 году были напечатаны письма Екатерины II 1774-1796 годов к барону Мельхиору Гримму с пояснительными примечаниями Якова Грота. В письме от 4 августа 1776 года, отправленном из Царского села, императрица сообщала: “Что касается портрета и бюста превосходной мастерицы из Болоньи, то они у меня в Петергофе; бюст стоит на моем столе и все меня спрашивают: “Кто это?”, а я, чтобы обескуражить докучливых вопрошателей, говорю: “Это моя бабушка”.",
      p: "Jumangulov V.Ja."
    }
  ],
  //location 3 - San Petronio
  [ 
    {
      title:"Basilica di San Petronio - Jules Janin",
      body:"Puis vous entrez dans les églises, dans l'église Sainte-Pétrone, dont les portes se sentent du voisinage de Florence:  une de ses portes fut sculptée par une belle personne du quinzième siècle, Properzia de Rossi, morte d'amour! Dans cette église il y avait une statue de Jules II, par Michel-Ange; mais le peuple de Bologne, moins habile que celui de Florence, a brisé la statue de Michel-Ange.",
      p:"Jules Janin"
    }
  ],
  //location 4 - Teatro Anatomico
  [
    {
      title:"Teatro Anatomico - Lady Sydney Morgan",
      body:"But Bologna, of all the Italian Republics, seems to have the longest retained her learned women, and to have most venerated the powers of female intellect. The chairs of the university, down to the present day, have been occasionally filled by female professors. To the Maddalena Bonsignori, and Bettizia Gozzani, who mounted the cap and gown in the middle ages, succeeded the fair Doctors, Laura Bassi, Professor of Physic, and Madonna Manzolina, Lecturer on Anatomy, of more recent times. The late Signora Clotilda Tamborini, joint Professor of Greek with the Abate Mezzofante, had only vacated her chair by death, a short time before we arrived at Bologna;",
      p:"Lady Sydney Morgan"
    }
  ],
  //location 5 - Santuario del Corpus Domini 
  [
    {
      title: "Santuario del Corpus Domini - Eustache Rocheleau",
      body: "Après la visite de l'archigymnase, nous entrons à l'église du Corpus Christi, dépendant du monastère des Clarisses qui l'avoisine. C'est là que se conserve le corps de sainte Catherine de Bologne, ancienne abbesse, entourée d'honneur et de vénération après avoir édifié son couvent et la ville par l'éclat de ses vertus et le retentissement de ses miracles.",
      p: "Eustache Rocheleau"
    },
    {
      title: "Santuario del Corpus Domini - Jean-Baptiste Legacé",
      body: "Non seulement saine Catherine fut une grande sainte ; mais elle fut encore musicienne, peintre, écrivain et sut ainsi aimer Dieu et chanter ses louanges par l’Art, cette voix puissante qui trouve des accents presque divins, quand il est entièrement consacré à entraîner les âmes hors des bourbiers terrestres pour les faire monter jusqu’à l’idéale beauté. Et je comprends maintenant comment sainte Catherine a pu être le trésor enflammé qui a embrasé son époque, de l’amour divin.",
      p: "Jean-Baptiste Legacé"
    }
  ],
  //location 6 - Cimitero della Certosa
  [
    {
      title: "Cimitero della Certosa - Jules Janin",
      body: "Seulement, pour pénétrer sous ces arcades consacrées au repos éternel, il vous faut traverser la vieille église des Chartreux et quelques petits fragments de l'ancien cloître, où se lisent encore les noms de Canali, de Cesi, de Louis Carrache et de la jeune Élisabeth Sirani, l'élève du Guide, aussi grand peintre que la jeune Properzia de Rossi était un grand statuaire; car Bologne a donné le jour à plus d'un talent féminin excellent.",
      p: "Jules Janin"
    }
  ]
  ]

  const intestation ={
    difficulty:'maps.intermediate',
    time:"1h 30m",
    km:"6km"
  }

  return <GenericRoute 
      coordinates={coordinates} 
      zooms={zooms} 
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"routes.women"} 
      text={"Bologna è ricca di donne che hanno dato il loro contributo al progresso artistico, alla divulgazione scientifica, alla strategia politica e al benessere sociale della città. Unite tutte da un unico fil rouge, la passione, che veicola da sempre l’animo femminile."} 
      cards={cards}
      intestation={intestation} 
  />
}

export default WomenRoute;