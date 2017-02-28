import { objectToSurfs } from '../../src/lib/surf';

describe('objectToSurfs(object)', () => {
  it('returns each surfs as array which sorted by timestamp', () => {
    // Given
    const object = {
      sid: { timestamp: 1480000000001 },
      sid2: { timestamp: 1480000000000 },
      sid3: { timestamp: 1480000000002 },
    };

    // When
    const result = objectToSurfs(object);

    // Then
    expect(result).toEqual([
      { sid: 'sid3', timestamp: 1480000000002 },
      { sid: 'sid', timestamp: 1480000000001 },
      { sid: 'sid2', timestamp: 1480000000000 },
    ]);
  });
});
