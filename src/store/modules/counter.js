import * as _TYPES from '../mutation-types';

const TYPES = {
  ..._TYPES,
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const STATE = {
  count: 0,
  history: [],
};

const GETTERS = {
  count: s => s.count,
  recentHistory: (s) => {
    const limit = 5;
    const end = s.history.length;
    const begin = end - limit < 0 ? 0 : end - limit;
    return s.history
      .slice(begin, end)
      .toString()
      .replace(/,/g, ', ');
  },
};

const ACTIONS = {
  increment({ commit }) {
    commit(TYPES.INCREMENT);
  },
  decrement({ commit }) {
    commit(TYPES.DECREMENT);
  },
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit(TYPES.INCREMENT);
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit(TYPES.DECREMENT);
    }, 1000);
  },
};

const MUTATIONS = {
  [TYPES.INCREMENT](state) {
    state.count++;
    state.history.push(TYPES.INCREMENT);
  },
  [TYPES.DECREMENT](state) {
    state.count--;
    state.history.push(TYPES.DECREMENT);
  },
};

export default {
  state: STATE,
  getters: GETTERS,
  actions: ACTIONS,
  mutations: MUTATIONS,
};
