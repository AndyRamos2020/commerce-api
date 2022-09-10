const AWS = require("aws-sdk");
const fs = require("fs");

async function uploadFile(fileName, pathfile, bucket = "restserver-files") {
  const s3 = new AWS.S3({
    params: {
      Bucket: bucket,
      Key: fileName,
    },
  });

  const stream = fs.createReadStream(pathfile);

  await s3.upload({ Body: stream }).promise();
}

module.exports = {
  uploadFile,
};
