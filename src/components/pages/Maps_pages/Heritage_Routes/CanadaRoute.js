import React from 'react';
import GenericRoute from './GenericRoute';

const CanadaRoute = () => {
  
  const coordinates = [
    [44.4976, 11.3535], // 1. Via delle Belle Arti, 56  
    [44.496880, 11.352433], // 2. Via Zamboni 33
    [44.494290, 11.346730], // 3. Piazza di Porta Ravegnana 
    [44.49373, 11.343064], // 4. Piazza Maggiore 
    [44.492778, 11.343056], // 5. Basilica di San Petronio 
    [44.4918717, 11.3438538], // 6. Piazza Galvani 1 
    [44.496184, 11.338319], // 7. Mercato delle Erbe 
    [44.487591, 11.305346], // 8. Via di San Luca 419 
    [44.479117, 11.298069], // 9. Via di San Luca, 36 
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
    "Mercato delle Erbe",
    "Portico di S. Luca",
    "Santuario della Madonna di San Luca",
    // Add more popup content for each coordinate
  ];

  const cards =[
  //location 1 - Pinacoteca
  [
  //elemento 1
    {
      title:"Pinacoteca - Lily Lewis",
      body:"Raphael's “St. Cecelia” holds the place of honour in its penacoteca, or picture gallery. As one by one all the wonderful scenes, contemplated with such passionate love and longing in cold prints and photos, come before us radiant with life and colour, Pygmalion-like, we can scarce suppress a little cry of rapture. The dearest objects of our hearts are warm-cheeked and living now, and the pictured landscape, no more pictured but a glorious reality.",
      p:"Lily Lewis, 1887"
    }, 
    {
        title:"Pinacoteca - William Lyon Mackenzie King",
        body:"Most of the morning was spent at the academy of Fine Arts, a building well arranged for pictures, tho the pictures in it lack arrangement. The most famous picture there is the St. Cecilia of Raphael, tho it is much spoiled it seemed espec’ly [?] the group of angels he pictures as singing in the skies. I like particularly among the many paintings there Guido Reno’s, Crucifixion.",
        p:"William Lyon Mackenzie King, 1900"
      }, 
      {
        title:"Pinacoteca - William Henry Withrow",
        body: "In the art gallery is Raphael's celebrated St. Cecilia listening to the heavenly music in an ecstatic trance; but it failed to impress me very profoundly. As I lingered in an ancient square, a squadron of cavalry, with their long, plumed lances, galloped by a strange contrast of the present with the past.",
        p:"William Henry Withrow, 1881"
      }, 
      {
        title:"Pinacoteca - Grant Allen",
        body:"Sleepy Bologna so mediaeval, so modern, so quaintly jumbled, is immensely interesting; it has also a school of art of its own, which in its earlier age culminated in Francia, and later gave birth to the most annoying and mannered of the sixteenth and seventeenth century painters, such as the Carracci, Guido, and Domenichino, of whose affected and intrinsically vulgar works — painted to suit the taste of Popes and Cardinals — you will see more than enough in the dreary Roman galleries.",
        p:"Grant Allen, 1899"
      }
  ],
  //location 2 - Zona Universitaria
  [ 
    {
      title:"Zona Universitaria - William Lyon Mackenzie King",
      body:"The University is of interest being one of, if not the, oldest university in the world. The present building has been in use now only during this century – its plain, but the situation is in a crowded part of the city and this, like most of the continental universities is wanting in grounds, ample surroundings etc. It was pleasant to see the groups of students, they seemed older on the average that those in the American colleges. I noticed too a few girls in attendance.",
      p:"William Lyon Mackenzie King, 1900"
    }
  ],
  //location 3 - Due torri
  [ 
    {
      title:"Due torri - William Henry Withrow",
      body:"Two leaning towers, quite close together, rise to a height respectively of one hundred and thirty-two, and two hundred and seventy-four feet. The latter, especially, as I sat at its base, seemed to soar aloft like a mast, and looked as if it would topple over on the huxter stalls beneath. Yet for seven centuries and a-half they have both hung poised, as it were, in air.",
      p:"William Henry Withrow, 1881"
    },
    {
      title:"Due torri - William Lyon Mackenzie King",
      body:"On the way I passed the two leaning towers of the city, build of red brick and anything but beautiful. They must have served as watchtower or something of the kind otherwise it is hard to imagine what they were good for.",
      p:"William Lyon Mackenzie King, 1900"
    }, 
    {
        title:"Due torri - Lily Lewis",
        body:"The city of Bologna is disfigured by two of the most bizarre leaning towers one can imagine. Huge cracked chimneys they appear, without the slightest ornamentation.",
        p:"Lily Lewis, 1887"
      }
  ],
  //location 4 - Piazza Maggiore
  [
    {
      title:"Piazza Maggiore - Constance Rudyard Boulton",
      body:"We were loath to leave the unique piazza, surrounded by magnificent palazzos covered with ornamentation, and full of rich color increased by the quaint and wholly delightful blinds drawn over the windows, of a color between orange and terra cotta.",
      p:"Constance Rudyard Boulton, 1896"
    },
    {
      title:"Piazza Maggiore - Constance Rudyard Boulton",
      body:"Naples, my first love, is altogether quaint and picturesque and dirty. Rome and Florence are fatally tainted with modernism, which I suppose is a proof of increasing prosperity for down-trodden Italy burdened with over-whelming taxation; but Bologna seems to a casual observer, to have combined modern ideas and push with its beautiful age more happily than any other city.",
      p:"Constance Rudyard Boulton, 1896"
    },
    {
      title:"Piazza Maggiore - William Henry Withrow",
      body:"Bologna is one of the most quaint and mediaeval looking cities of Italy. It has shared little of the modern progress of ideas of New Italy, and is the centre of a mouldy, reactionary ecclesiasticism; and here, appropriately, the Council of Trent held several of its sessions. It seems to have stood still for centuries while the rest of the world has been moving on.",
      p:"William Henry Withrow, 1881"
    },
    {
        title:"Piazza Maggiore - Sara Jeannette Duncan",
        body:"\"Bologna it is very ecclesiastic.\" Mr. Bellini addressed my other parent, recovering a smile. \"We have produced here six popes. It is the fame of Bologna.\"",
        p:"Sara Jeannette Duncan, 1898"
      },
      {
        title:"Piazza Maggiore - Lily Lewis",
        body:"The forum of Republican and Imperial times, the mediaeval and modern piazza, with few modifications, present the saine scenes of gesticulating, chattering humanity.",
        p:"Lily Lewis, 1887"
      }
  ],
  //location 5 - Basilica di San Petronio
  [
    {
      title:"Basilica di San Petronio - Lily Lewis",
      body:"The Piazza Vittorio Emanuele, a large, paved, open space, has, in common with a score of other piazze, a fountain and picturesque surrounding buildings. Here, on one side, rises the church of St. Petronio, intended to be the largest in Italy, but never finished. Its rough facade presents a very peculiar appearance, much like a wall divested of the marble or plaster destined to line it.",
      p:"Lily Lewis, 1887"
    },
    {
      title:"Basilica di San Petronio - William Henry Withrow",
      body:"The narrow streets, the covered arcades on either side, the numerous old fortress-like palaces, the venerable churches with their lofty campaniles all give a peculiar aspect to the city. In the choir of St. Petronio, a large dilapidated-looking church, begun in 1390, but never finished, Charles V. was crowned in 1530.",
      p:"William Henry Withrow, 1881"
    },
    {
      title:"Basilica di San Petronio - William Lyon Mackenzie King",
      body:"This morning we had breakfast about 8.30 and went out first to the Duomo, to see the St. Petronia the largest church in Bologna, the exterior is not very imposing to save in size and the interior while its proportions are good is not particularly attractive. Trenholme was more taken than I was so I left him to go and see the University.",
      p:"William Lyon Mackenzie King, 1900"
    }
  ],
  //location 6 - Antica Università
  [
    {
      title:"Antica Università - Chester Glass",
      body:"The old University here is a great curiosity and very interesting. Thomas a’Becket was once a professor of jurisprudence here; they had lots of lady professors for all branches of learning, and in the hey-day of its prosperity it had ten thousand students. It had a world-wide celebrity, and received pupils from every quarter.",
      p:"Chester Glass, 1881"
    },
    {
      title:"Antica Università - William Henry Withrow",
      body:"Its University, which I visited, is one of the oldest in the world, founded in 1119. In 1262 it had ten thousand students; it has now only four hundred. It was here that galvanism was discovered by Prof. Galvani, in 1789. It has had several distinguished lady professors, one of whom, Novella d'Andræa, is said to have been so beautiful that she lectured behind a curtain to prevent the distraction of the susceptible minds of the students.",
      p:"William Henry Withrow"
    },
    {
      title:"Antica Università - Lily Lewis",
      body:"Strange enough to discover among these illustrious teachers the effigy of a woman in grave cap and gown. But Madame Mauzolina is not the only fair one who has graced this university with her presence. Clotilda Tambroni (Greek), Laura Bassi (mathematics and physical science), and Novella d'Andrea have all added to its lustre. Curious in a country where there does not seem to be much talk about “the higher education of women.” And these were by no means rough-featured old dames. Indeed, it is said the charms of one of the latter were so dangerous that she was forced to deliver her lectures from behind a curtain!",
      p:"Lily Lewis, 1887"
    },
    {
        title:"Antica Università - Lily Lewis",
        body:"Here Galvani taught, and discovered galvanism in 1789. One may still see the charming little lecture room, preserved intact, where he made his experiments. There exists not, perhaps, a more beautiful anatomical amphitheatre, panelled in carved wood-linden, pine, and cedar of Lebanon.",
        p:"Lily Lewis, 1887"
      },
      {
        title:"Antica Università - Lily Lewis",
        body:"A striking peculiarity of the Archiginnasio is that the brightly-painted arms of noble students entirely cover its walls within, and those of the court. The now deserted halls are devoted to a public library. On a tablet in one of the lecture rooms the inscription is to the effect that Rossini’s “Stabat Mater” was performed here for the first time.",
        p:"Lily Lewis, 1887"
      }
  ],
  //location 7 - Mercato delle Erbe
  [
    {
      title:"Mercato delle Erbe - Chester Glass",
      body:"From Venice we came to Bologna, and ate some of their celebrated sausages, which they call \"mortadella;\" they are as pleasant to eat as one could wish.",
      p:"Chester Glass, 1881"
    },
    {
      title:"Mercato delle Erbe - Sara Jeannette Duncan",
      body:"\"I know nossing, any more than you! Why you speak me always that Bologna sausage! Pazienza! What is it that sausage to make the agreeable conversation!\" \n \"Sir,\" exclaimed the Senator with astonishment and equal heat, \"you don't seem to be aware of it, but at one time the Bologna sausage ruled the world!\"  \n Mr. Bellini, however, could evidently not trust himself to discuss the matter further. He rose precipitately with an outraged, impersonal bow, and left the table, abandoning his biscuit and cheese, his half finished bottle of Rudesheimer and the figs that were to follow, with the indifference of a lofty nature. \n \"I'm sorry I spoiled his dinner,\" said poppa with concern, \"but if a Bologna man can't talk about Bologna sausages, what can he talk about?\"",
      p:"Sara Jeannette Duncan, 1898"
    },
    {
      title:"Mercato delle Erbe - James de Mille",
      body:"The Senator thought that, without exception, Bologna was the best Italian city that he had seen. It had a solid look. The people were not such everlasting fools as the Neapolitans, the Romans, and the Florentines, who thought that the highest end of life was to make pictures and listen to music. They devoted their energies to an article of nourishment which was calculated to benefit the world. He alluded to the famous Bologna Sausage, and he put it to Dick seriously, whether the manufacture of a sausage which was so eminently adapted to sustain life was not a far nobler thing than the production of useless pictures for the pampered tastes of a bloated aristocracy.",
      p:"James de Mille, 1872"
    }
  ],
  //location 8 - Portico di San Luca
  [ 
    {
      title:"Portico di S. Luca - Constance Rudyard Boulton",
      body:"We strolled through the royal collonades which cover the footways of the streets for miles, making the lucky Bolognese–independent of wind or rain or sun, a ceaseless stream of life walking perpetually in the shaded depths of their splendid arches, lengthening out into lovely vistas of distant perspective.",
      p:"Constance Rudyard Boulton, 1896"
    }, 
    {
        title:"Portico di S. Luca - Lily Lewis",
        body:"Arcades are everywhere – to right, to left, and beyond. Indeed, it would be difficult to find an unarcaded street. Picture an indefinite number of lofty, sober-looking edifices, all more or less alike, chilly and uninviting. Go where you will, the inevitable arcade covers the sidewalks. Finally, a despairing sense of imprisonment begins to weight upon the soul, and although one may hitherto “have believed in nothing from the roof upwards,” a wild, undefinable longing is felt – a longing for something above one's head not quite so positive and material as stone and mortar.",
        p:"Lily Lewis, 1887"
      }, 

  ],
  //location 9 - Santuario della Madonna di San Luca
  [ 
    {
      title:"Santuario della Madonna di San Luca - William Lyon Mackenzie King",
      body:"We stand at the top of a small mountain. We were very tired, but having started for it we climbed a path of three miles or more a good part of it flights of stairs to this church, which is a great place for pilgrimages. We thought we wd. never reach the top. On the way up night fell & the lights of the city appeared in the hollow below. Coming down the fireplace lighted the way. At the top we discovered it to be a sort of monastery & the fathers were just looking up the barred windows for the night. We passed a sentinel coming down in the dark. The experience was one of the best we had.",
      p:"William Lyon Mackenzie King, 1900"
    },
  ],
  ]

  const intestation ={
    difficulty:'maps.difficult',
    time:"1h 45min",
    km:"6,9 km"
  }

  return <GenericRoute 
      coordinates={coordinates}  
      zooms={zooms}
      markerContent={markerContent} 
      init_pos={ {lat: 44.49381, lng: 11.33875} } 
      title={"routes.canada"} 
      text={"routes.canada_text"} 
      cards={cards}
      intestation={intestation} 
  />
}

export default CanadaRoute;