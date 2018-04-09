// initial state
const initialState = {
  primaryDomain: 'Darkness',
  secondaryDomain: 'Guardian',
  characterName: 'Moe Chan',
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
    commit('setCharacter', payload);
  },
  addPower({ commit }, payload) {
    commit('addPower', payload);
  },
};

// mutations
const mutations = {
  setCharacter(state, { primaryDomain, secondaryDomain, characterName }) {
    state.primaryDomain = primaryDomain;
    state.secondaryDomain = secondaryDomain;
    state.characterName = characterName;
  },
  addPower(state, power) {
    state.powers.push(power);
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
