const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  mongoURI
} = require("../config/keys")
const mongoose = require("mongoose")

const User = mongoose.model("users")

const whiteListedEmails = ["shawnballay1@gmail.com"]

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      mongoURI: mongoURI,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      const userEmail = profile.emails[0].value

      if (whiteListedEmails.includes(userEmail)) {
        // below is not sent and persisted in database (just exists in JS world)
        // new User({ googleID: profile.id })
        // to get it to persist to DB we need to call function .save()
        new User({ googleID: profile.id }).save()
      } else {
        return done(null, false, {
          message: "Access Denied: This email has not been whitelisted"
        })
      }
    }
  )
)
