module.exports = {
  // testEnvironment: 'jsdom',
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