import { parseSearch } from '../parseSearch';

describe('utils/parseSearch', () => {
  it('should parse default correctly', () => {
    const search = parseSearch();
    expect(search).toEqual({ data: '1', step2: '3', step3: '4' });
  });

  it('should parse correctly ?test=ok', () => {
    const search = parseSearch('?test=ok');
    expect(search).toEqual({ test: 'ok' });
  });
});
