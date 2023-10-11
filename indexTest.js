// implement the entire OAuth process in a single file (here) like you originally had in index.js
// Then refactor into other files

// hints below (do without hints after successfully doing it with hints) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import statements (you'll need express, passport, GoogleStrategy, and keys)

// declare app

// passport/googleStrat config

// routes

// listen

// ANSWER IS BELOW

// const express = require("express")
// const passport = require("passport")
// const GoogleStrategy = require("passport-google-oauth20").Strategy
// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("./config/keys")

// const app = express()

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback"
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log("access token", accessToken)
//       console.log("refresh token", refreshToken)
//       console.log("profile", profile)
//     }
//   )
// )

// // Routes **********************************************************************
// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"]
//   })
// )

// app.get("/auth/google/callback", passport.authenticate("google"))

// const PORT = process.env.PORT || 5000
// app.listen(PORT)
