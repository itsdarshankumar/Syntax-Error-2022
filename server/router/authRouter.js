const router = require("express").Router();
const req = require("express/lib/request");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const con = require("../../database.js");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/google/redirect",
      clientID:
        "491254375872-lpq8k42ilh12jggqmd4pd6r4sttpd6qm.apps.googleusercontent.com",
      clientSecret: process.env.CLIENT_SECRET,
    },
    (req, accessToken, refreshToken, profile, done) => {
      process.nextTick(function () {
        console.log("passport callback function fired");
        console.log(profile.emails[0].value);
        const email = profile.emails[0].value;

        con.query(
          `SELECT * FROM user WHERE email_id="${email}"`,
          (err, rows) => {
            if (!err) {
              if (rows[0] === undefined) {
                con.query(
                  "INSERT INTO user (username, email_id) VALUES (''," +
                    con.escape(email) +
                    ")",
                  function (err, result) {
                    if (err) throw err;
                    console.log("User database updated");
                  }
                );
              } else {
                console.log(rows[0]);
              }
            } else throw err;
          }
        );
        return done(null, profile);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

module.exports = router;