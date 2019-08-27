const mime = require("mime");
const keyFilename = "./firebase_key.json";
const projectId = "scrapy-74bd7";
const bucketName = "scrapy-74bd7.appspot.com";

const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
  projectId,
  keyFilename
});

const bucket = storage.bucket(bucketName);

const filePath = "./amazonLists/productData.json";
const uploadTo = "amazon_scrapes/productData.json";
const fileMime = mime.getType(filePath);

async function uploadFirebaseFile() {
  bucket.upload(
    filePath,
    {
      destination: uploadTo,
      public: true,
      metadata: { contentType: fileMime, cacheControl: "public, max-age=300" }
    },
    function(err, file) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(createPublicFileURL(uploadTo));
    }
  );

  function createPublicFileURL(storageName) {
    return `http://storage.googleapis.com/${bucketName}/${encodeURIComponent(
      storageName
    )}`;
  }
}

module.exports = uploadFirebaseFile;
