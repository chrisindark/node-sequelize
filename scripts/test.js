const csvtojson = require('csvtojson');

const { models } = require("./index");
let sequelize = models.sequelize;

const readCsv = async () => {
  let csvFilePath = `${__dirname}/../csv/read/test.csv`;

  csvtojson({
    // noheader: true,
    delimiter: [","]
  }).fromFile(csvFilePath)
    .then(async (jsonObj) => {
      // console.log(jsonObj);
      for (let i = 0; i < jsonObj.length; ++i) {
        // console.log(i);
        // break;
      }
    });
};

const init = async () => {
  readCsv();
};

init();
