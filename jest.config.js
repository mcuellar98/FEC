module.exports = {
  // testEnvironment: 'jsdom',
  testEnvironment: 'jest-environment-jsdom',
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
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
  // collectCoverage: true,
  // coverageReporters: ["json", "html"],
  // preset: 'ts-jest',
  // testEnvironment: 'node',
  // testPathIgnorePatterns: [
  //   '<rootDir>/dist'
  // ],
};
