const passport = require("passport")

const authRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello!")
  })

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  )

  app.get("/auth/google/callback", passport.authenticate("google"))
}

module.exports = authRoutes
