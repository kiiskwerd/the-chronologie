# Chronologie Project Startup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Github Pages Deployment

1. push to main branch working application

1. install github pages as a dev dependency
#### `npm install gh-pages --save-dev`

1. open `package.json` and make the following changes:
>   `"homepage": "https://myusername.github.io/guide-react-gh-pages"`

#### update exisiting scripts:

>   `"scripts": {`

>   `"predeploy": "npm run build",`

>   `"deploy": "gh-pages -d build",`

>   `"start": "react-scripts start",`

>   `"build": "react-scripts build",`

>   `}`

1. deploy the app 
#### `npm run deploy`

