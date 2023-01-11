const path = require("path");
const FileType = require("file-type");
// https://www.npmjs.com/package/file-type

const pathConfig = require("../../path-config");

(async () => {
  const filePath = path.join(pathConfig.ASSETS, "Example.jpg");
  console.log(filePath);

  const filetypes = await FileType.fromFile(filePath);
  console.log(filetypes);
  // { ext: 'jpg', mime: 'image/jpeg' }
})();
