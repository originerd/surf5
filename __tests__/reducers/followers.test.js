import { followersSet } from '../../src/actions/followers';
import followers from '../../src/reducers/followers';

describe('followers(state, action)', () => {
  describe('when state is not passed', () => {
    it('returns default state', () => {
      // When
      const result = followers();

      // Then
      expect(result).toEqual({});
    });
  });

  describe('when state is passed', () => {
    describe('when action type is invalid', () => {
      it('returns state', () => {
        // Given
        const state = { followerID: true };

        // When
        const result = followers(state);

        // Then
        expect(result).toEqual(state);
      });
    });

    describe('when action is followersSet', () => {
      describe('when followers is null', () => {
        it('sets followers as empty object', () => {
          // Given
          const state = { followerID: true };

          // When
          const result = followers(state, followersSet(null));

          // Then
          expect(result).toEqual({});
        });
      });

      describe('when followers is not null', () => {
        it('sets followers', () => {
          // Given
          const state = { followerID: true };
          const newFollower = { newUserID: true };

          // When
          const result = followers(state, followersSet({ ...state, ...newFollower }));

          // Then
          expect(result).toEqual({ ...state, ...newFollower });
        });
      });
    });
  });
});
