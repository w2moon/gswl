// import log4js from "log4js";
// log4js.configure({
//   appenders: { normal: { type: "Console" } },
//   categories: {
//     <%= name %>: { appenders: ["normal"], level: "debug" },
//     default: { appenders: ["normal"], level: "debug" }
//   }
// });
import * as log4js from "@log4js2/core";

log4js.configure({
  appenders: ["Console"],
  layout: "[%d] [%p] %c - %m %ex",
  loggers: [
    {
      level: log4js.LogLevel.INFO,
      tag: "<%= name %>"
    }
  ],
  virtualConsole: false
});

/**
 * 获得对应模块的logger
 * @param name 名字只能是指定的这些字符串，并且要在configure中对名字作出配置
 */
export function getLogger(name: "<%= name %>") {
  return log4js.getLogger(name);
}
