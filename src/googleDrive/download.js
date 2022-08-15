const { drive } = require('./config')
const { publicFolderId } = require('./constant')

// drive.files.list(
//   {
//     pageSize: 10,
//     fields: "nextPageToken, files(id, name)",
//   },
//   (err, res) => {
//     if (err) return console.log("The API returned an error: " + err);
//     const files = res.data.files;
//     console.log(files);
//   }
// );


const getFileId = (fileName) => {
  return new Promise((resolve, reject) => {
    drive.files.list({
      fields: 'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',
      q: `fullText contains '${fileName}'`
    },
      (err, res) => {
        if (err) {
          console.log("error in find file " + err)
          return reject ('error in find file')
        }
        const file = res.data.files[0];
        console.log("file: " + file)
        if (file) {
          resolve(file.id)
        }
        else {
          return reject ('file not exist')
        }

      })
  })
}

const downloadFile = (fileId) => {
  // const fileId = realFileId;
  //var dest = fs.createWriteStream("./hago.ipa");

  console.log("fileId: " + fileId)

  return new Promise((resolve, reject) => {

    return drive.files.get({
      fileId: fileId,
      alt: 'media',
    }, { responseType: "stream" },
      (err, res) => {
        if (err) {
          console.log("error in download file: " + err)
          return reject("error in download file")
        }
        console.log("res: ")
        resolve(res.data)
      })

  })

}


exports.downloadFile = downloadFile;
exports.getFileId = getFileId