import { defineStore } from 'pinia'

export const usePostStore = defineStore({
  id: 'example',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
  }, 
  actions: {
    doSomething() {
    }
  }
})