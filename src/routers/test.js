const express = require("express");
// const testRouter = require("../controllers/test.js");

const router = express.Router(); // Handles all routes starting with /test

router.route("/").get((req, res) => {
    console.log("Got GET request at /test");
    res.status(201).send({
        message: "Hola from get",
    });
});

module.exports.testRouter = router;
