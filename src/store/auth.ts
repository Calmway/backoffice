import { defineStore } from 'pinia'
import {usePostStore } from './example'
import router from '../router';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    userName: null,
    userPassword: false,
    post: usePostStore()
  }),
  getters: {
  }, 
  actions: {
    login(username: string, password: string) {
      this.token = 'qweqweqe';
      router.push({name: 'home'});
    },
    letsgo() {
        this.post.doSomething();
    }
  }
})