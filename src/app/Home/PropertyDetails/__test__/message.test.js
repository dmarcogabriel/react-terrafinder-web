import { message } from '../message';

describe('message', () => {
  it('should renders correctly', () => {
    const result = message('Tester 1', 'Tester 2');

    expect(result).toEqual(
      `Olá, Tester 1! Estou interessado na sua propriedade chamada Tester 2!
  Qual a melhor forma de pagamento?`
    );
  });

  it('should fail to create message', () => {
    const result = message('Tester 1');

    expect(result).toEqual(null);
  });

  it('should fail to create message', () => {
    const result = message();

    expect(result).toEqual(null);
  });
});
