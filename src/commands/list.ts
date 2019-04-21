import chalk from "chalk";
import templates from "../../templates/index.json";
import { getLogger } from "../logger";
const logger = getLogger("app");

export default () => {
  if (templates.length === 0) {
    console.log(chalk.yellow("模版列表为空"));
  } else {
    console.log("模版列表，初始化项目: gswl init <name>\n");
    templates.forEach(t => {
      console.log(chalk.green(t.name) + " - " + t.desc);
    });
  }
};
