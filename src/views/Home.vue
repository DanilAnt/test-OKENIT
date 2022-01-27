<template>
  <div class="home">
    <h2>USERS</h2>
    <Users :users="users" />
    <h2>POSTS</h2>
    <Posts :posts="posts" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Users from "../components/Users.vue";
import Posts from "../components/Posts.vue";
export default {
  name: "Home",
  props: {},
  components: {
    Users,
    Posts,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      users: "USERS",
      posts: "POSTS",
    }),
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    this.$message("You opened post №" + to.params.id);
    next();
  },
  mounted() {
    this.$store.dispatch("GET_POSTS");
    this.$store.dispatch("GET_USERS");
  },
};
</script>
<style lang="scss">
  .home{
   padding: 0 15px;
   h2{ 
     margin-top: 35px;
   }
  }
</style>