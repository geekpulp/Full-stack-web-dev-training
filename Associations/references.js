'strict'
const mongoose = require( "mongoose" );

mongoose.connect( "mongodb://localhost/blog_demo_2" );

//POST - title, content

const postSchema = new mongoose.Schema( {
  title: String,
  content: String
} )

//USER - email, name

const userSchema = new mongoose.Schema( {
  email: String,
  name: String,
  posts: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  } ]
} );

const User = mongoose.model( "User", userSchema );



const Post = mongoose.model( "Post", postSchema );

User.findOne( {
  email: "emma@geekpulp.co.nz"
} ).populate( "post" ).exec( function( err, user ) {
  if ( err ) {
    console.log( err );
  } else {
    console.log( user );
  }
} );



// Post.create( {
//   title: "How to cook the best burger pt. 4",
//   content: "bfdg/lvlndfklfvnkldbjskvbjs"
// }, function( err, post ) {
//   User.findOne( {
//     email: "emma@geekpulp.co.nz"
//   }, function( err, foundUser ) {
//     if ( err ) {
//       console.log( err );
//     } else {
//       foundUser.posts.push( post );
//       foundUser.save( function( err, data ) {
//         if ( err ) {
//           console.log( err );
//         } else {
//           console.log( data );
//         }
//       } )
//     }
//   } )
//   console.log( post );
// } );


// User.create( {
//   email: "emma@geekpulp.co.nz",
//   name: "Emma Young"
// } );

//
// User.findOne( {
//   name: "Anna Williams"
// }, function( err, user ) {
//   if ( err ) {
//     console.log( err );
//   } else {
//     user.posts.push( {
//       title: "Monkeys",
//       content: "So many monkeys"
//     } );
//     user.save( function( err, user ) {
//       if ( err ) {
//         console.log( err );
//       } else {
//         console.log( user );
//       }
//     } )
//   }
// } );

// var newUser = new User( {
//   email: "anna@geekpulp.co.nz",
//   name: "Anna Williams"
// } );
//
// newUser.posts.push( {
//   title: "some stuff",
//   content: "SOme stuff about stuff"
// } )
//
// newUser.save( function( err, user ) {
//   if ( err ) {
//     console.log( err );
//   } else {
//     console.log( user );
//   }
// } );

// var newPost = new Post( {
//   title: "You dont know jack",
//   content: "Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Life finds a way. Just my luck, no ice. Checkmate... Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."
// } );
//
// newPost.save( function( err, post ) {
//   if ( err ) {
//     console.log( err );
//   } else {
//     console.log( post );
//   }
// } );