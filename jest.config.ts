import { JestConfigWithTsJest } from "ts-jest/dist/types";

const config: JestConfigWithTsJest = {
  preset: `ts-jest`,
  testEnvironment: `node`,
  rootDir: `./test`,
};

export default config;
