module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy'
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTest.tsx'
};
