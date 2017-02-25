jest.mock('../../src/components/Home');

const tab = require('../../src/reducers/tab').default;

describe('timeline(state, action)', () => {
  it('returns default state', () => {
    // When
    const result = tab();

    // Then
    expect(Object.keys(result)).toEqual(['index', 'routes']);
  });
});
