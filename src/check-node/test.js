const pkg = require(`../../package.json`);
const chalk = require("chalk");

// 需要在 package.json 文件中配置 engines
console.log(
  chalk.blue("\r\nneed node version:\r\n", JSON.stringify(pkg.engines) + "\r\n")
);

// 检查运行的node环境，版本不支持就停止
require(`./checknode`)(pkg);

console.log(chalk.green("node版本检测通过"));
