export default (store) => {
  // eslint-disable-next-line
  store.subscribe((mutation, state) => {
    if (localStorage) {
      localStorage.setItem('appstate', JSON.stringify(state.characters));
    }
  });
};
