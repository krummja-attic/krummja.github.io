export const state = () => ({
  activeTags: []
})

export const mutations = {
  add (state, tag) {
    state.activeTags.push(tag.tagName);
  },
  remove (state, tag) {
    state.activeTags = state.activeTags.filter(item => item != tag.tagName);
  },
  reset (state, arr) {
    state.activeTags = arr;
  }
}

export const getters = {
  active: state => {
    return state.activeTags;
  }
}
