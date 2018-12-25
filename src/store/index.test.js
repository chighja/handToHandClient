import { reducer, initialState } from './';

describe('reducer', () => {
  describe('FETCH_MATCHES_SUCCESS', () => {
    const mockMatch = { nameChar1: 'Tootsie', nameChar2: 'Blahbitty' };

    it('sets the matches key to the action payload, and unsets the error', () => {
      const state = reducer(initialState, {
        type: 'FETCH_MATCHES_SUCCESS',
        payload: { matches: [mockMatch] }
      });

      expect(state.matches).toEqual([mockMatch]);
      expect(state.error).toBe(undefined);
    });
  });

  describe('FETCH_MATCHES_ERROR', () => {
    const mockError = 'Woopsie Poopsie';

    it('sets the error key', () => {
      const state = reducer(initialState, {
        type: 'FETCH_MATCHES_ERROR',
        payload: { error: mockError }
      });

      expect(state.error).toEqual(mockError);
    });
  });
});
