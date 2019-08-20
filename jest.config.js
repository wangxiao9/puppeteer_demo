// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const r = require('./puppeteer_enviroment')
module.exports = {
  "globalSetup": "jest-environment-puppeteer/setup",
  "globalTeardown": "jest-environment-puppeteer/teardown",
  // "testEnvironment": "jest-environment-puppeteer/lib/PuppeteerEnvironment",
  "testEnvironment": "./puppeteer_enviroment.js",
  roots: [
    "<rootDir>"
  ],
  "moduleFileExtensions": [
    "ts",
    "js",
  ],
  // 匹配__tests__文件夹下的后缀为 .test.ts文件
  "testMatch": [
    "**/__tests__/**/*.test.ts"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  }
};
