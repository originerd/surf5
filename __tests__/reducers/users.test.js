import { usersAdd } from '../../src/actions/users';
import users from '../../src/reducers/users';

describe('users(state, action)', () => {
  describe('when state is not passed', () => {
    it('returns default state', () => {
      // When
      const result = users();

      // Then
      expect(result).toEqual({});
    });
  });

  describe('when state is passed', () => {
    describe('when action type is invalid', () => {
      it('returns state', () => {
        // Given
        const state = {
          userID: {
            email: 'originerd@fake.email.com',
            name: 'Originerd',
          },
        };

        // When
        const result = users(state);

        // Then
        expect(result).toEqual(state);
      });
    });

    describe('when action is usersAppend', () => {
      it('adds user', () => {
        // Given
        const state = {
          userID: {
            email: 'originerd@fake.email.com',
            name: 'Originerd',
          },
        };
        const newUser = {
          newUserID: {
            email: 'newuser@fake.email.com',
            name: 'New user',
          },
        };

        // When
        const result = users(state, usersAdd(newUser));

        // Then
        expect(result).toEqual({ ...state, ...newUser });
      });
    });
  });
});
