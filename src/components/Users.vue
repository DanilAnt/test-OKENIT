<template>
  <div class="users">
    <div
      id="usersList__item_undefined"
      class="usersList__item"
      @click="userClickHandler($event)"
    >
      <span>ALL POSTS</span>
    </div>
    <ul class="usersList">
      <li
        v-for="user in users"
        :key="user.id"
        class="usersList__item"
        :id="'usersList__item_' + user.id"
        @click="userClickHandler($event, user.id)"
      >
        <User :user="user" />
      </li>
    </ul>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "Users",
  components: {
    User,
  },
  props: ["users"],

  data() {
    return {
        lastCheckedElement: "",
    };
  },

  computed: {},
  
  methods: {
    userClickHandler(e, id) {
       let elem = document.getElementById('usersList__item_' + id);
       elem.classList.add("checked")
       this.lastCheckedElement.classList.remove("checked")
       this.lastCheckedElement = elem;

      this.$store.dispatch("GET_POSTS", {
        id,
      });
    },
  },
  mounted() {
      let id;
      let elem = document.getElementById('usersList__item_' + id);
       elem.classList.add("checked")
       this.lastCheckedElement = elem;

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.users {
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  min-height: 110px;
  padding: 5px 15px;
}

.usersList {
  display: flex;
}
.usersList__item {
  padding: 0 15px;
  display: flex;
  align-items: center;
  margin:0 15;
  justify-content: center;
}
.usersList__item.checked {
  border: 2px solid rgb(25, 39, 242);
  border-radius: 8px;
}
</style>
