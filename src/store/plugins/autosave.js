export default (store) => {
  // eslint-disable-next-line
  store.subscribe((mutation, state) => {
    if (localStorage) {
      localStorage.setItem('characterstate', JSON.stringify(state.characters));
    }
  });
};
