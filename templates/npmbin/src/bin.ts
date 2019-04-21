#!/usr/bin/env node
import program from "commander";
import * as pkg from "../package.json";
import init from "./commands/init";
import { configure } from "./logger";
program
  .version(pkg.version)
  .usage("<command> [options]")
  .option("-v, --verbose", "显示详细执行过程");

program.on("option:verbose", () => configure("debug"));

program
  .command("init (template)")
  .description("创建新模版项目")
  .alias("i")
  .option("-n, --name [name]", "项目名称")
  .action(init);

program.parse(process.argv);
if (program.args.length === 0) {
  program.help();
}
