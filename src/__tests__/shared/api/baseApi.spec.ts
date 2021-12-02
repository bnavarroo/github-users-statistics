import BaseAPI from '@shared/api/repos';

describe('Testing Base Api', () => {
  it('should return error when try instantiate an object of the class', async () => {
    const constructorFn = () => new BaseAPI();
    expect(constructorFn).toThrow(Error);
    expect(constructorFn).toThrow(
      'Não é possível instanciar objetos dessa classe.'
    );
  });
});
