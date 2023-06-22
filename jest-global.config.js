import '@testing-library/jest-dom/extend-expect';

const { cleanup } = require('@testing-library/react');

global.afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
