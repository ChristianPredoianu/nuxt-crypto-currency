export const state = () => ({
  mode: ""
});

export const mutations = {
  toggle(state, payload) {
    state.mode = payload;
    if (state.mode === "light") {
      this.$colorMode.preference = state.mode;
    } else if (state.mode === "dark") {
      this.$colorMode.preference = state.mode;
    }
  }
};

export const actions = {
  toggle(context, payload) {
    context.commit("toggle", payload);
  }
};
