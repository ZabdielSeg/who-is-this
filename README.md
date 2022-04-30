## Clone the repo

- Fork this repo
- Clone this repo

## Instructions

### 1.- Initialize the project

After forking and cloning the project, you will have to install all the dependencies:

```shell
$ npm install
```

To run the app:

```shell
$  npm start
```

### 2.- Set enviroment variables
Create a `.env.development` document in which \
`REACT_APP_NOMADA_KEY` needs your Nomada API key to be able to make requests and \
`REACT_APP_MOVIE_API_KEY` needs your API key to retreive a celebrity's information.
You can see the details here: [https://developers.themoviedb.org/3/getting-started](https://developers.themoviedb.org/3/getting-started)

#### Now you are ready to start. 🚀

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You may also see any lint errors in the console. \

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.