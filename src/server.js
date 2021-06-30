const express = require("express");
const serverless = require("serverless-http");
const router = require("./routers/test.js");

// Main API
const api = express();

//Middleware
api.use(express.json()); // support json encoded bodies
api.use(express.urlencoded({ extended: true }));

//Routes
api.use("/test", router.testRouter);

// API used for development
module.exports.start = () => {
    const port = 3000;
    // eslint-disable-next-line no-unused-vars
    let server = api.listen(port, () => {
        console.log("Express API is listening on port 3000.");
    });
};
//Serverless API used for production
module.exports.handler = serverless(api);
