import {
  mePrepend,
  meSetLikeCount,
  meSetLikes,
} from '../../src/actions/me';
import me from '../../src/reducers/me';

describe('me(state, action)', () => {
  describe('when state is not passed', () => {
    it('returns default state', () => {
      // When
      const result = me();

      // Then
      expect(result).toEqual([]);
    });
  });

  describe('when state is passed', () => {
    describe('when action type is invalid', () => {
      it('returns state', () => {
        // Given
        const state = [{ surf: 'Hello' }];

        // When
        const result = me(state);

        // Then
        expect(result).toEqual(state);
      });
    });

    describe('when action is mePrepend', () => {
      // Given
      const state = [{ surf: 'Hello' }];
      const newSurfs = [{ surf: 'New surf1' }, { surf: 'New surf2' }];

      // When
      const result = me(state, mePrepend(...newSurfs));

      // Then
      expect(result).toEqual([...newSurfs, { surf: 'Hello' }]);
    });

    describe('when action is meSetLikeCount', () => {
      // Given
      const state = [{ sid: '1' }, { sid: '2' }];

      // When
      const result = me(state, meSetLikeCount('2', 2));

      // Then
      expect(result).toEqual([{ sid: '1' }, { likeCount: 2, sid: '2' }]);
    });

    describe('when action is meSetLikes', () => {
      // Given
      const state = [{ sid: '1' }, { sid: '2' }];

      // When
      const result = me(state, meSetLikes('2', { uid: true }));

      // Then
      expect(result).toEqual([{ sid: '1' }, { likes: { uid: true }, sid: '2' }]);
    });
  });
});
