module.exports = {
  // testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  roots: [
    '<rootDir>',
  ],
  modulePaths: [
    '<rootDir>',
  ],
  // moduleDirectories: [
  //   'node_modules',
  //   "componenets",
  //   'src/componnts/QA',
  //   "src"
  // ],
  moduleNameMapper: {
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ["client/src/components/R&R/*.{js,jsx,ts,tsx}","!<rootDir>/node_modules/"],
  coverageThreshold: {
    "global": {
      "lines": 90,
      "statements": 90
    }},
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"]
};
