module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleDirectories: ['node_modules', 'src', 'helpers', __dirname],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  testURL: 'http://test.com',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(gif|jpg|jpeg|png|svg)$': '<rootDir>/jest/mediaFileTransformer.js',
  },
};
