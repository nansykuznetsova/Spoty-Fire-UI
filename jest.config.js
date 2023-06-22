module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/styleMock.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-global.config.js'],
}