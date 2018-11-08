module.exports = {
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy'
  },
  preset: 'ts-jest',
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTest.tsx',
  testEnvironment: 'node'
};
