import {
  timelineAppend,
  timelinePrepend,
} from '../../src/actions/timeline';
import timeline from '../../src/reducers/timeline';

describe('timeline(state, action)', () => {
  describe('when state is not passed', () => {
    it('returns default state', () => {
      // When
      const result = timeline();

      // Then
      expect(result).toEqual({ surfs: [] });
    });
  });

  describe('when state is passed', () => {
    describe('when action type is invalid', () => {
      it('returns state', () => {
        // Given
        const state = { surfs: [{ surf: 'Hello' }] };

        // When
        const result = timeline(state);

        // Then
        expect(result).toEqual(state);
      });
    });

    describe('when action is timelineAppend', () => {
      // Given
      const state = { surfs: [{ surf: 'Hello' }] };
      const newSurfs = [{ surf: 'New surf1' }, { surf: 'New surf2' }];

      // When
      const result = timeline(state, timelineAppend(...newSurfs));

      // Then
      expect(result).toEqual({
        surfs: [{ surf: 'Hello' }, ...newSurfs],
      });
    });

    describe('when action is timelinePrepend', () => {
      // Given
      const state = { surfs: [{ surf: 'Hello' }] };
      const newSurfs = [{ surf: 'New surf1' }, { surf: 'New surf2' }];

      // When
      const result = timeline(state, timelinePrepend(...newSurfs));

      // Then
      expect(result).toEqual({
        surfs: [...newSurfs, { surf: 'Hello' }],
      });
    });
  });
});
