const express = require("express");
const router = express.Router();

const {getUsers, createUser, getUser, deleteUser, updateUser} = require("../controllers/users.js");

router.route("/")
    .get(getUsers)
    .post(createUser)

router.route("/:id")
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router;