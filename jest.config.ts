/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  roots: [
    "<rootDir>/test"
  ],
  
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
