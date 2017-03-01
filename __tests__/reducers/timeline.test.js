import {
  timelineAppend,
  timelineSetLikeCount,
  timelineSetLikes,
  timelinePrepend,
  timelineReset,
} from '../../src/actions/timeline';
import timeline from '../../src/reducers/timeline';

describe('timeline(state, action)', () => {
  describe('when state is not passed', () => {
    it('returns default state', () => {
      // When
      const result = timeline();

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
        const result = timeline(state);

        // Then
        expect(result).toEqual(state);
      });
    });

    describe('when action is timelineAppend', () => {
      // Given
      const state = [{ surf: 'Hello' }];
      const newSurfs = [{ surf: 'New surf1' }, { surf: 'New surf2' }];

      // When
      const result = timeline(state, timelineAppend(...newSurfs));

      // Then
      expect(result).toEqual([{ surf: 'Hello' }, ...newSurfs]);
    });

    describe('when action is timelinePrepend', () => {
      // Given
      const state = [{ surf: 'Hello' }];
      const newSurfs = [{ surf: 'New surf1' }, { surf: 'New surf2' }];

      // When
      const result = timeline(state, timelinePrepend(...newSurfs));

      // Then
      expect(result).toEqual([...newSurfs, { surf: 'Hello' }]);
    });

    describe('when action is timelineReset', () => {
      // Given
      const state = [{ surf: 'Hello' }];
      const newSurfs = [{ surf: 'New surf1' }, { surf: 'New surf2' }];

      // When
      const result = timeline(state, timelineReset(...newSurfs));

      // Then
      expect(result).toEqual(newSurfs);
    });

    describe('when action is timelineSetLikeCount', () => {
      // Given
      const state = [{ sid: '1' }, { sid: '2' }];

      // When
      const result = timeline(state, timelineSetLikeCount('2', 2));

      // Then
      expect(result).toEqual([{ sid: '1' }, { likeCount: 2, sid: '2' }]);
    });

    describe('when action is timelineSetLikes', () => {
      // Given
      const state = [{ sid: '1' }, { sid: '2' }];

      // When
      const result = timeline(state, timelineSetLikes('2', { uid: true }));

      // Then
      expect(result).toEqual([{ sid: '1' }, { likes: { uid: true }, sid: '2' }]);
    });
  });
});
