const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const SECRET_CODE = "fdsvdsvdfgvdfsgvdsgvds";
const salt = 10;
const { User } = require("../models/UserSchema");
router.post("/signin", async (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).send("User not exist!");
      } else {
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.status(401).send("Invalid Password");
        } else {
          const token = jwt.sign(
            { id: user._id, name: user.name },
            SECRET_CODE
          );
          res
            .status(200)
            .send({ message: "User loggedin successsfully", token: token });
        }
      }
    })
    .catch(() => {});
});
router.post("/register", async (req, res) => {
  //encrypt password
  bcrypt.genSalt(salt, (saltErr, saltValue) => {
    if (saltErr) {
      res.status(401).send("Unable to process");
    } else {
      bcrypt.hash(req.body.password, saltValue, (hashErr, hashValue) => {
        if (hashErr) {
          res.status(401).send("Unable to process");
        } else {
          User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            profession: req.body.profession,
            password: hashValue,
          })
            .then((User) => {
              res.status(200).send(`${User.name} created succesfully`);
            })
            .catch((err) => {
              res.status(400).send(err.message);
            });
        }
      });
    }
  });
});
module.exports = router;
