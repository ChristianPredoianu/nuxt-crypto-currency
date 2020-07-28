export const state = () => ({
  mode: ""
});

export const mutations = {
  colorMode(state, payload) {
    state.mode = payload;
    if (state.mode === "light") {
      this.$colorMode.preference = state.mode;
    } else if (state.mode === "dark") {
      this.$colorMode.preference = state.mode;
    }
  }
};

export const actions = {
  colorMode(context, payload) {
    context.commit("colorMode", payload);
  }
};
