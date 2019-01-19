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

movies.forEach( function ( element ) {
    if ( element.hasWatched === true ) {
        console.log( "You have watched " + element.title + " - " + element.rating + " stars" )
    } else {
        console.log( "You have not watched " + element.title + " - " + element.rating + " stars" )
    }
} );