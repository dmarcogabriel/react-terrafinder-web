const originalModule = jest.requireActual('react-router-dom');

module.exports = {
  ...originalModule,
  useHistory: () => ({
    history: { push: jest.fn() },
  }),
};
