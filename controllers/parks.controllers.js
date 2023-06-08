const { getAllParks } = require("../models/parks.models");

exports.getParks = (req, res, next) => {
  getAllParks()
    .then((returnedParks) => res.status(200).send(returnedParks))
    .catch((error) => {
      console.error('Error fetching parks:', error);
      res.status(500).send('Internal Server Error');
    });
};
