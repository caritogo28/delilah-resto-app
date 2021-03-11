// Authentications
const { Router } = require("express");
const router = Router();
const passport = require("passport");
const pool = require("../database");
const { isLoggedIn, isNotLoggedIn, isAdmin, verifyAdmin, verifyUser, isUser } = require("../lib/auth");

const jwt = require("jsonwebtoken");

router.get("/signup", isNotLoggedIn, (req, res) => {
  res.send("SignUp");
});

router.post("/signup", isNotLoggedIn, passport.authenticate("local.signup", { session: false }), async (req, res, next) => {
  res.json({
    message: "Sign Up Successful",
    user: req.user,
  });
});

router.get("/signin", isNotLoggedIn, (req, res) => {
  res.json({ signIn: "SignIn - Login" });
});

router.post("/signin", async (req, res, next) => {
  passport.authenticate("local.signin", async (err, user, info) => {
    try {
      req.login(user, { session: false }, async (err) => {
        if (err) {
          return next(err);
        }
        const body = { _id: user.username, password: user.password };
        const token = jwt.sign({ user: body }, "top_secret");
        return res.json({ token });
      });
    } catch (e) {
      return next(e);
    }
  })(req, res, next);
});

router.get("/profile", isUser, async (req, res, next) => {
  const data = await pool.query("SELECT * FROM users WHERE username = ?", [req.user.user._id]);
  res.json({
    data,
    message: "You did it!",
  });
});

// LogOut
router.get("/logout", isLoggedIn, (req, res) => {
  req.logOut();
  res.redirect("/signin");
});

module.exports = router;
