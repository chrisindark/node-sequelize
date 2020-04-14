const path = require('path');
var dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
  dotenv.config({
    path: path.resolve(process.cwd(), '.env.production')
  });
} else {
  dotenv.config();
}

var {
  getQcTrail, getQcTrailCount,
  getQcAccepted, getQcDeclined,
  updateQcTrail
} = require('./utils');

const init = async () => {
  var totalCount = await getQcTrailCount();
  var acceptedSuccess = 0;
  var rejectedSuccess = 0;
  var noStatusSuccess = 0;
  console.log("==============", totalCount);

  // for (var i = 0; i < 10; ++i) {
  //   // (async function (i) {
  //   var trailList = await getQcTrail(i);
  //   if (trailList.length > 0) {
  //     var trail = trailList[0];

  //     if (trail.statusId === 4) {
  //       let acceptedTrailList = await getQcAccepted(trail.trailId);
  //       if (acceptedTrailList.length > 0) {
  //         var acceptedTrail = acceptedTrailList[0];
  //         var updatedQcTrail = await updateQcTrail(acceptedTrail.trailId, acceptedTrail.createdAt, acceptedTrail.updatedAt);
  //         // console.log("successful accepted", i, acceptedTrail.trailId);
  //         ++acceptedSuccess;
  //       }
  //     } else if (trail.statusId === 3) {
  //       let declinedTrailList = await getQcDeclined(trail.trailId);
  //       if (declinedTrailList.length > 0) {
  //         var declinedTrail = declinedTrailList[0];
  //         var updatedQcTrail = await updateQcTrail(declinedTrail.trailId, declinedTrail.createdAt, declinedTrail.updatedAt);
  //         // console.log("successful rejected", i, declinedTrail.trailId);
  //         ++rejectedSuccess;
  //       }
  //     } else {
  //       var updatedQcTrail = await updateQcTrail(
  //         trail.trailId,
  //         new Date('2020-04-01T00:00:00.000Z'),
  //         new Date('2020-04-01T00:00:00.000Z')
  //       );
  //       // console.log("successful", i, trail.trailId);
  //       ++noStatusSuccess;
  //     }
  //   }

  //   console.log("==============", i, acceptedSuccess, rejectedSuccess, noStatusSuccess);

  //   // })(i);
  // }
};

init();
