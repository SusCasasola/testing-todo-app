import generateRandomId from './generateRandomId';

describe('generateRandomId', () => {
  it('should create a random id as string', () => {
    const id = generateRandomId();

    expect(typeof id).toBe('string');
  });

  it('should create different values', () => {
    const id1 = generateRandomId();
    const id2 = generateRandomId();

    expect(id1).not.toEqual(id2);
  });
});
