import { farmingFormat, moneyFormat } from '../formatters';

describe('utils/formatters', () => {
  describe('farmingFormat', () => {
    it('should format correctly with 1 item', () => {
      const formattedText = farmingFormat(['item1']);
      expect(formattedText).toBe('item1');
    });

    it('should format correctly', () => {
      const formattedText = farmingFormat(['item1', 'item2']);
      expect(formattedText).toBe('item1 / item2');
    });

    it('should format correctly with multiple items', () => {
      const formattedText = farmingFormat(['item1', 'item2', 'item3']);
      expect(formattedText).toBe('item1 / item2');
    });

    it('should fail to format with string', () => {
      const formattedText = farmingFormat('test');
      expect(formattedText).toBe('');
    });

    it('should fail to format with number', () => {
      const formattedText = farmingFormat(123);
      expect(formattedText).toBe('');
    });

    it('should fail to format with object', () => {
      const formattedText = farmingFormat({ testing: 'yes' });
      expect(formattedText).toBe('');
    });
  });

  describe('moneyFormat', () => {
    it('should format money correctly', () => {
      const formatted1 = moneyFormat(999);
      const formatted2 = moneyFormat(99.99);
      const formatted3 = moneyFormat(99999.7879);

      expect(formatted1).toContain('999,00');
      expect(formatted2).toContain('99,99');
      expect(formatted3).toContain('99.999,79');
    });

    it('should format money correctly without cents', () => {
      const formatted1 = moneyFormat(999, false);
      const formatted2 = moneyFormat(999.99, false);
      const formatted3 = moneyFormat(12345, false);

      expect(formatted1).toContain('999');
      expect(formatted2).toContain('999');
      expect(formatted3).toContain('12.345');
    });

    it('should format money correctly on string number', () => {
      const formatted1 = moneyFormat('999');
      const formatted2 = moneyFormat('999.94');
      const formatted3 = moneyFormat('999.948');

      expect(formatted1).toContain('999,00');
      expect(formatted2).toContain('999,94');
      expect(formatted3).toContain('999,95');
    });

    it('should fail to format money with text', () => {
      try {
        moneyFormat('text');
      } catch (error) {
        expect(error.message).toBe(
          'moneyFormat expect a finite number as first param'
        );
      }
    });

    it('should fail to format money with object', () => {
      try {
        moneyFormat({ testing: 'yes' });
      } catch (error) {
        expect(error.message).toBe(
          'moneyFormat expect a finite number as first param'
        );
      }
    });
  });
});
