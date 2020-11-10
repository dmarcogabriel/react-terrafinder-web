module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
  setupFile: '<rootdir>/src/setupTests.js',
};
