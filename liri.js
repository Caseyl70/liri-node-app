//dependancies
require("dotenv").config();
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var command = process.argv[2]; // concert-this, spotify-this-song, movie-this, do-what-it-says.
var searchTerm = process.argv.slice(3).join(" "); //Should create a new array containing what we want it to slice.
var spotify = new Spotify(keys.spotify);

// console.log(searchTerm);

// functions
function concertThis(term) {
    term = term.split(" ").join("+")
    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp").then(function (result) {
        console.log(result.data[0].venue.name);
        console.log(result.data[0].venue.city);
        console.log(moment(result.data[0].datetime).format("MM/DD/YYYY"));

    });

}
function spotifyThisSong(term) {
    spotify.search({ type: 'track', query: term }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0].album.artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].external_urls.spotify);
        console.log(data.tracks.items[0].album.name);



    });
}
function movieThis(term) {
    axios.get("http://www.omdbapi.com/?y=&plot=short&apikey=trilogy&t=" + term).then(function (result) {
        console.log(result.data.Title);
        console.log(result.data.Year);
        console.log(result.data.imdbRating);
        console.log(result.data.Ratings[1].Value);
        console.log(result.data.Country);
        console.log(result.data.Language);
        console.log(result.data.Plot);
        console.log(result.data.Actors);
    });
}
function doWhatItSays() {
    fs.readFile("./random.txt", { encoding: "utf-8" }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songName = data.split(",");
      appLogic(songName[0], songName[1]);
    });

}

// App Logic
function appLogic(command, searchTerm) {

    if (command === "concert-this") {
        concertThis(searchTerm);
    } else if (command === "spotify-this-song") {
        spotifyThisSong(searchTerm);
    } else if (command === "movie-this") {
        movieThis(searchTerm);
    } else if (command === "do-what-it-says") {
        doWhatItSays();
    } else {
        console.log("Try concert-this, spotify-this-song, movie-this, or do-what-it-says.");
    }
}
appLogic(command, searchTerm);


