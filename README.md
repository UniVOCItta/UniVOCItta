# UniVOCIttà: Voci digitali sull’unicità del patrimonio bolognese
[Homepage](https://univocitta.github.io/UniVOCItta/#) of the project. 

## About 
UniVOCIttà is a digital humanities research project developed by the LBC-CeSLiC unit at the Department of Modern Languages, Literature and Cultures ([LILEC](https://lingue.unibo.it/it)) of the University of Bologna. Launched in July 2022, it builds on the outcomes of the previous [UNICittà](https://site.unibo.it/unicitta/it) project, which focused on compiling a corpus of historical and present testimonies on the renowned University of Bologna.

## Objectives 
The project aims to collect the “voices” of outstanding travellers who passed through the city of Bologna and its surrounding area, promoting an innovative interpretation of its rich tangible and intangible heritage.

## Funding
The project was generously funded by the European Union - NextGeneration EU under the “ALMA IDEA 2022 call - Linea A finanziata a valere sulle risorse del D.M. 737/2021” – UniVOCIttà: Voci digitali sull’unicità del patrimonio bolognese – CUP J45F21002000001.

## Project status
Completed.

## Website structure  
1. Homepage: Navigation menu, permanent bottom navigation bar, and language toggle.
2. The Project pages: Presentation of UniVOCIttà, its aims and goals.
3. The About pages: Project team, institutions, and partners. 
4. Corpus: Annotated multilingual fragments, searchable via filters and query bar. Includes usage instructions.
5. Maps: 
	a. Places: All Bologna locations mentioned in the corpus.
	b. Travellers: Profiles of travellers who visited and wrote about Bologna.
	c. Heritage Routes: Preset thematic routes covering several fields such as museums, environment, gastronomy, etc.
6. Profile: Allows users to save quotes, places, and routes of interest.

# App conversion and build
Using [capacitorjs](https://capacitorjs.com/solution/react)
- change the file 'package.json' and use: "homepage": "https://univocitta.github.io/"
- npm run build --prod
- npx cap sync
- npx cap run ios
- npx cap run android

# Sync & Update
- Before starting working: ./sync.sh 
- After working: ./update.sh

# Push on Github pages
- (only the first time): npm install gh-pages --save-dev
- (only the first time): npm install
- change the file 'package.json' and use: "homepage": "https://univocitta.github.io/UniVOCItta/"
- npm run build
- npm run deploy
- check if everything is ok after at least 10min here: [https://univocitta.github.io/UniVOCItta/](https://univocitta.github.io/UniVOCItta/)

# Data that are not automatized:
- http://localhost:3000/UniVOCItta#/maps/Places
    - src\components\pages\Maps_pages\Places\placesData.js
    - contains img ref, can't be automatized
- http://localhost:3000/UniVOCItta#/maps/Travellers 
    - contains img ref
- http://localhost:3000/UniVOCItta#/maps/Routes
    - contains img ref
- src\components\Body.js
    - carousel_data const Line 38
- src\components\HeroSection.js
    - home page billboard

# Data that can be changed easily
- http://localhost:3000/UniVOCItta#/corpus
    - src\const\database.json
