var models = require('../models');
var sequelize = models.sequelize;

const updateQcTrail = (trailId, createdAt, updatedAt) => {
  return sequelize.query(
    `
    UPDATE qcTrail
    SET
    createdAt = '${createdAt.toISOString()}',
    updatedAt = '${updatedAt.toISOString()}'
    WHERE trailId = ${trailId}
    `, { type: sequelize.QueryTypes.UPDATE })
    .then(function (trailList) {
      // console.log("updateQcTrail ===>", trailList);
      return trailList;
    });
};

const getQcDeclined = (trailId) => {
  return sequelize.query('SELECT * FROM qcDeclined where trailId = ' + trailId + ' LIMIT 1', { type: sequelize.QueryTypes.SELECT })
    .then(function (trailList) {
      // console.log("getQcDeclined ===>", trailList);
      return trailList;
    });
};

const getQcAccepted = (trailId) => {
  return sequelize.query('SELECT * FROM qcAccepted where trailId = ' + trailId + ' LIMIT 1', { type: sequelize.QueryTypes.SELECT })
    .then(function (trailList) {
      // console.log("getQcAccepted ===>", trailList);
      return trailList;
    });
};

const getQcTrail = (offset) => {
  return sequelize.query('SELECT * FROM qcTrail LIMIT 1 OFFSET ' + offset, { type: sequelize.QueryTypes.SELECT })
    .then(function (trailList) {
      // console.log("getQcTrail ===>", trailList);
      return trailList;
    });
};

const getQcTrailCount = () => {
  return sequelize.query('SELECT Count(id) as totalCount FROM qcTrail', { type: sequelize.QueryTypes.SELECT })
    .then(function (totalCount) {
      // console.log("getQcTrailCount ===>", totalCount);
      return totalCount;
    });
};

module.exports = {
  getQcTrail,
  getQcTrailCount,
  getQcAccepted,
  getQcDeclined,
  updateQcTrail
};
