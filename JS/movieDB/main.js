var movies = [ {
        title: "Spiderman - Into the spider verse",
        hasWatched: true,
        rating: 4
    },
    {
        title: "Star Wars",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Avengers Infinity War",
        hasWatched: false,
        rating: 3
    }
]

movies.forEach( function ( movie ) {
    console.log( buildString( movie ) );
} );

function buildString( movie ) {
    if ( movie.hasWatched === true ) {
        var result = "You have watched " + movie.title + " - " + movie.rating + " stars";
        return result;
    } else {
        var result = "You have not watched " + movie.title + " - " + movie.rating + " stars"
        return result;
    }
}