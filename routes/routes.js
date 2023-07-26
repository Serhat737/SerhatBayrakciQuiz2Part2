//Import required modules and the User model:
const router = require("express").Router();
let User = require("../models/users.model");


const addUser = async () => {
  const newUser = new User({
    name: "Serhat Bayrakci",
    sid: "300364177"
  });

  console.log("checkpoint");

  try {
    await newUser.save();
    console.log("User added!");
  } catch (err) {
    console.error("Error: ", err);
  }
};

addUser();

//Add a new User:
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const sid = req.body.sid;
  // create a new User object 
  const newUser = new User({
    name: "Serhat Bayrakci",
    sid: "300364177"
  });

  console.log("checkpoint");

  // save the new object (newUser)
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;
