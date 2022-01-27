import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post: {

    },
    user: {

    },
    comments: [],
    posts: [

    ],
    users: [],

  },
  actions: {
    GET_POST: async ({ commit }, data) => {

      let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + data.id);
      if (response.ok) {
        console.log(23424234);
        let json = await response.json();
        commit('setPost', { ...json });
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    GET_USER: async ({ commit }, data) => {

      let response = await fetch('https://jsonplaceholder.typicode.com/users/' + data.id);
      if (response.ok) {
        let json = await response.json();
        commit('setUser', { ...json });
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    GET_COMMENTS: async ({ commit }, data) => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + data.id + '/comments');
      if (response.ok) {
        let json = await response.json();
        commit('setComments', { ...json });
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    GET_POSTS: async ({ commit }, data) => {
      let response;
      if (data && +data.id) {
        
        response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + data.id);
      } else {
        
        response = await fetch('https://jsonplaceholder.typicode.com/posts');
      }

      if (response.ok) {
        let json = await response.json();
        commit('setPosts', [...json]);

      } else {
        alert("Ошибка HTTP: " + response.status);
      }

    },
    GET_USERS: async ({ commit }) => {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok) {
        let json = await response.json();
        commit('setUsers', [...json]);
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    ADD_COMMENT: ({ commit }, data)=>{
      console.log(data,"123");
      commit('addComment', data);
    }
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = [...payload];
    },
    
    setUsers(state, payload) {
      state.users = [...payload];
    },
    setPost(state, payload) {

      state.post = { ...payload };
    },
    setUser(state, payload) {

      state.user = { ...payload };


    },
    setComments(state, payload) {
      console.log(payload, "payload");
      let arr = [];
      for (let key in payload) {
        arr.push(payload[key])
      }

      state.comments = [...arr]


    },
    addComment(state, payload) {
      console.log(payload,'payload');
      state.comments = [payload,...state.comments];
    },

  },
  getters: {
    POSTS: state => state.posts,
    USERS: state => state.users,
    POST: state => state.post,
    USER: state => state.user,
    COMMENTS: state => state.comments,

  },

  modules: {
  }
})
