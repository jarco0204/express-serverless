/**
 * Function that tests GET to /test
 * @param {*} req
 * @param {*} res
 */
module.exports.getTest = (req, res) => {
    console.log(req);
    res.status(201).send({
        message: "Hola from get",
    });
};

/**
 * Function that tests POST to /test
 * @param {*} req
 * @param {*} res
 */
module.exports.postTest = (req, res) => {
    console.log(req);
    res.status(200).send({
        message: "Hola from post",
    });
};
