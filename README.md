# UniVOCItta
[Homepage](https://univocitta.github.io/UniVOCItta/#) del progetto.

## About - Ciao!! 
UniVOCIttà è un progetto del Dipartimento di Lingue, Letterature e Culture Moderne ([LILEC](https://lingue.unibo.it/it)) dell'Università di Bologna.
Il progetto, iniziato a luglio 2022, deriva da risultati ottenuti da un progetto precedente, [UNICittà](https://site.unibo.it/unicitta/it) che si concentrava sulla costituzione di un corpus di testimonianze del passato.

## Obiettivo 
Raccogliere le voci di figure letterarie e viaggiatori che sono passati per Bologna e che sono in grado di promuovere una diversa ed innovativa interpretazione del ricco patrimonio della città di Bologna.

## Stato del progetto
In corso.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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
- check if evrything is ok after at least 10min here: [https://univocitta.github.io/UniVOCItta/](https://univocitta.github.io/UniVOCItta/)

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