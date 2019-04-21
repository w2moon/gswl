#!/usr/bin/env node
import program from "commander";
import * as pkg from "../package.json";
import { getLogger } from "./logger";

const logger = getLogger("<%= name %>");
program.version(pkg.version).usage("<command> [options]");

program
  .command("init (template)")
  .description("创建新新项目")
  .alias("i")
  .option("-n, --name [name]", "template name")
  .action((template, args) => {
    logger.info("init" + template + "   " + args.name);
  });
program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
