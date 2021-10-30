export const mockUseNotification = (showNotification = () => {}) => {
  const mockShowNotification = jest.fn(showNotification);

  jest.mock('hooks/useNotification', () => ({
    useNotification: () => ({
      showNotification: mockShowNotification,
    }),
    NOTIFICATION_TYPES: { SUCCESS: 'success', ERROR: 'error' },
  }));

  return { mockShowNotification };
};
