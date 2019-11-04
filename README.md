# liri-node-app
This is LIRI a Spotify enhanced interface that allows users within the command line.
Using the API Spotify, bandsintown and OMDB will alow the user to get and pull information about  song and artist information.
As an Example you run this from the command line




Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.


Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.


node_modules
.DS_Store
.env

Make a JavaScript file named keys.js.


Inside keys.js your file will look like this:

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret



This file will be used by the dotenv package to set what are known as environment variables to the global process.env object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github — keeping our API key information private.


If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to work.




Make a file called random.txt.


Inside of random.txt put the following in with no extra characters or white space:

spotify-this-song,"I Want it That Way"





Make a JavaScript file named liri.js.


At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:


require("dotenv").config();

Add the code required to import the keys.js file and store it in a variable.

  var keys = require("./keys.js");


You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);




Make it so liri.js can take in one of the following commands:


concert-this


spotify-this-song


movie-this


do-what-it-says





