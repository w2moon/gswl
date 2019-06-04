import chalk from "chalk";
import _ from "lodash";
import ora from "ora";
import prompts from "prompts";
import { getLogger } from "../logger";

const logger = getLogger("<%= name %>");

export default async (template: string, args: { [index: string]: string }) => {
  const res = await prompts({
    type: "text",
    name: "name",
    message: `新${template}项目名称`
  });
  logger.info(`输入了新项目名称${res.name}`);

  const spanner = ora(`   正在构建...... `);
  spanner.start();
  setTimeout(() => {
    spanner.succeed(chalk(`构建成功`));
  }, 3000);
};
