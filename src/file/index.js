const path = require("path");
const FileType = require("file-type");
// https://www.npmjs.com/package/file-type

const pathConfig = require("../../path-config");

/**
 * 获取文件后缀名(带原点)
 * 示例：
 *  extname('abc.TXT') => '.txt'
 *  extname('abc.') => '.'
 *  extname('abc') => ''
 * @param {String} filename 文件名
 * @returns 存在返回小写后缀名, 否则返回''
 */
export function extname(filename) {
  if (typeof filename === "string") {
    const i = filename.lastIndexOf(".");
    if (i > -1) {
      return filename.substring(i).toLocaleLowerCase();
    }
  }
  return "";
}

/**
 * 使用 file-type 模块获取文件类型
 */
async function testFileType() {
  const filePath = path.join(pathConfig.ASSETS, "Example.jpg");
  console.log(filePath);

  const filetypes = await FileType.fromFile(filePath);
  console.log(filetypes);
  // { ext: 'jpg', mime: 'image/jpeg' }
}
