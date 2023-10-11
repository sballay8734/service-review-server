const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("../config/keys")

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken)
      console.log("refresh token", refreshToken)
      console.log("profile", profile)
    }
  )
)
