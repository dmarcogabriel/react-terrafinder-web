import { maskMoney } from '../masks';

describe('utils/masks', () => {
  describe('maskMoney tests', () => {
    it('should mask correctly 2 digits', () => {
      expect(maskMoney('11')).toBe(',11');
    });

    it('should mask correctly 3 digits', () => {
      expect(maskMoney('111')).toBe('1,11');
    });

    it('should mask correctly 5 digits', () => {
      expect(maskMoney('11122')).toBe('111,22');
    });

    it('should mask correctly 6 digits', () => {
      expect(maskMoney('122233')).toBe('1.222,33');
    });

    it('should mask correctly 8 digits', () => {
      expect(maskMoney('11122233')).toBe('111.222,33');
    });

    it('should mask correctly 9 digits', () => {
      expect(maskMoney('122233344')).toBe('1.222.333,44');
    });

    it('should mask correctly 11 digits', () => {
      expect(maskMoney('11122233344')).toBe('111.222.333,44');
    });

    it('should fail to mask Nan', () => {
      expect(maskMoney('test')).toBe('');
    });
  });
});
