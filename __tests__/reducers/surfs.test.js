import {
  surfsPrepend,
  surfsSetLikeCount,
  surfsSetLikes,
} from '../../src/actions/surfs';
import surfs from '../../src/reducers/surfs';

describe('surfs(state, action)', () => {
  describe('when state is not passed', () => {
    it('returns default state', () => {
      // When
      const result = surfs();

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
        const result = surfs(state);

        // Then
        expect(result).toEqual(state);
      });
    });

    describe('when action is surfsPrepend', () => {
      // Given
      const state = [{ surf: 'Hello' }];
      const newSurfs = [{ surf: 'New surf1' }, { surf: 'New surf2' }];

      // When
      const result = surfs(state, surfsPrepend(...newSurfs));

      // Then
      expect(result).toEqual([...newSurfs, { surf: 'Hello' }]);
    });

    describe('when action is surfsSetLikeCount', () => {
      // Given
      const state = [{ sid: '1' }, { sid: '2' }];

      // When
      const result = surfs(state, surfsSetLikeCount('2', 2));

      // Then
      expect(result).toEqual([{ sid: '1' }, { likeCount: 2, sid: '2' }]);
    });

    describe('when action is surfsSetLikes', () => {
      // Given
      const state = [{ sid: '1' }, { sid: '2' }];

      // When
      const result = surfs(state, surfsSetLikes('2', { uid: true }));

      // Then
      expect(result).toEqual([{ sid: '1' }, { likes: { uid: true }, sid: '2' }]);
    });
  });
});
