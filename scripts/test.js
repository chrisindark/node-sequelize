const csvtojson = require('csvtojson');


const init = async () => {
  readCsv();
};

const csvFilePath = '/home/christopher/test.csv';

let trailList;
trailList = [];
const readCsv = async () => {
  csvtojson({
    // noheader: true,
    delimiter: [","]
  }).fromFile(csvFilePath)
    .then(async (jsonObj) => {
      // console.log(jsonObj);
      for (let i = 0; i < jsonObj.length; ++i) {
        // console.log(i);
        // console.log();
        trailList.push(jsonObj[i]['trailId']);
        // break;
      }
      let trailStr = trailList.join(",");
      console.log(trailStr);
    });
};


init();
