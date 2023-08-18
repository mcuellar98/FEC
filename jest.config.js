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
  moduleDirectories: [
    'node_modules',
    "bower_components",
    "src"
  ],
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"]
};