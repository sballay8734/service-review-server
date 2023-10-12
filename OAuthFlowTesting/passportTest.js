const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("../config/keys")

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    (accessToken) => {
      console.log(accessToken)
    }
  )
)
