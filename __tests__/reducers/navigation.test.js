import {
  NAVIGATION_GOBACK,
  NAVIGATION_NAVIGATE,
  NAVIGATION_RESET,
} from '../../src/actions/actionTypes';
import navigation from '../../src/reducers/navigation';

describe('navigation(state, action)', () => {
  describe('when state is not passed', () => {
    it('initializes with default state', () => {
      // When
      const result = navigation();

      // Then
      expect(result).toEqual({
        index: 0,
        routes: [{
          key: 'Initial_0',
          routeName: 'Initial',
        }],
      });
    });
  });

  describe('when state is passed', () => {
    describe('when action type is invalid', () => {
      it('returns state', () => {
        // Given
        const state = {
          index: 0,
          routes: [
            {
              key: 'Initial_0',
              routeName: 'Initial',
            },
          ],
        };

        // When
        const result = navigation(state);

        // Then
        expect(result).toEqual({
          index: 0,
          routes: [{
            key: 'Initial_0',
            routeName: 'Initial',
          }],
        });
      });
    });

    describe('when action type is NAVIGATION_GOBACK', () => {
      it('decreases index and pops routes', () => {
        // Given
        const state = {
          index: 1,
          routes: [
            {
              key: 'Initial_0',
              routeName: 'Initial',
            },
            {
              key: 'Other_1',
              routeName: 'Other',
            },
          ],
        };
        const action = { type: NAVIGATION_GOBACK };

        // When
        const result = navigation(state, action);

        // Then
        expect(result).toEqual({
          index: 0,
          routes: [{
            key: 'Initial_0',
            routeName: 'Initial',
          }],
        });
      });
    });

    describe('when action type is NAVIGATION_NAVIGATE', () => {
      it('increases index and pushes route', () => {
        // Given
        const state = {
          index: 0,
          routes: [
            {
              key: 'Initial_0',
              routeName: 'Initial',
            },
          ],
        };
        const action = {
          params: { id: 0 },
          routeName: 'New',
          type: NAVIGATION_NAVIGATE,
        };

        // When
        const result = navigation(state, action);

        // Then
        expect(result).toEqual({
          index: 1,
          routes: [
            {
              key: 'Initial_0',
              routeName: 'Initial',
            },
            {
              key: 'New_1',
              params: { id: 0 },
              routeName: 'New',
            },
          ],
        });
      });
    });

    describe('when action type is NAVIGATION_RESET', () => {
      it('resets index and routes', () => {
        // Given
        const state = {
          index: 1,
          routes: [
            {
              key: 'Initial_0',
              routeName: 'Initial',
            },
            {
              key: 'Other_1',
              routeName: 'Other',
            },
          ],
        };
        const action = {
          index: 2,
          routes: [
            {
              key: 'Initial_0',
              routeName: 'Initial',
            },
            {
              key: 'New_1',
              routeName: 'New',
            },
            {
              key: 'Other_2',
              routeName: 'Other',
            },
          ],
          type: NAVIGATION_RESET,
        };

        // When
        const result = navigation(state, action);

        // Then
        expect(result).toEqual({
          index: 2,
          routes: [
            {
              key: 'Initial_0',
              routeName: 'Initial',
            },
            {
              key: 'New_1',
              routeName: 'New',
            },
            {
              key: 'Other_2',
              routeName: 'Other',
            },
          ],
        });
      });
    });
  });
});
