const chai = require("chai");
const axios = require("axios");

const testURL = "http://localhost:3000";

describe("Testing test route", () => {
    it("GET Route", async () => {
        await axios
            .get(testURL + "/test", {
                headers: { "content-type": "application/json" },
                body: { message: "Hola from Mocha" },
            })
            .then(
                (response) => {
                    chai.assert.equal(response.status, 201, "201=201");
                },
                (error) => {
                    console.log(error);
                }
            );
    });
});
