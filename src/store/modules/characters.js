
const storageState = JSON.parse(localStorage.getItem('appstate'));

// initial state
const initialState = storageState || {
  primaryDomain: null,
  secondaryDomain: null,
  characterName: null,
  powers: [],
};

// getters
const getters = {
  isCharacterSet: state => (state.primaryDomain && state.secondaryDomain && state.characterName),
  getBaseCharacterInfo: state => ({
    primaryDomain: state.primaryDomain,
    secondaryDomain: state.secondaryDomain,
    name: state.characterName,
  }),
  getPowers: state => state.powers,
  getPrimaryDomain: state => state.primaryDomain,
  getSecondaryDomain: state => state.secondaryDomain,
};

// actions
const actions = {
  setCharacter({ commit }, payload) {
    console.log(payload);
    commit('setCharacter', payload);
  },
  addPowers({ commit }, payload) {
    commit('addPowers', payload);
  },
};

// mutations
const mutations = {
  setCharacter(state, { primaryDomain, secondaryDomain, characterName }) {
    state.primaryDomain = primaryDomain;
    state.secondaryDomain = secondaryDomain;
    state.characterName = characterName;
  },
  addPowers(state, powers) {
    state.powers.push(...powers);
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
