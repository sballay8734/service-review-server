const passport = require("passport")

// must now export these functions and call with app
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome!")
  })

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  )

  app.get("/auth/google/callback", passport.authenticate("google"))
}
