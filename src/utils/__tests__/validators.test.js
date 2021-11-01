import { validateFile } from '../validators';

describe('utils/validators', () => {
  describe('validateFile', () => {
    it('should pass on validate file', () => {
      const validFiles = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/x-icon',
      ].map((type) => ({ type }));

      validFiles.forEach((file) => {
        const isValid = validateFile(file);

        expect(isValid).toEqual(true);
      });
    });

    it('should fail on validate file', () => {
      const isValid1 = validateFile({});
      const isValid2 = validateFile({ type: 'text' });

      expect(isValid1).toEqual(false);
      expect(isValid2).toEqual(false);
    });
  });
});
