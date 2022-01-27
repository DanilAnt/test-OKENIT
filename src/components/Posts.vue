<template>
  <div class="posts">
      <ul class="postsList">
          <li v-for="post in posts" :key="post.id" @click="postClickHandler(post.id)" class="postList__item">
              <Post :post="post" />
          </li>
      </ul>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: 'Posts',
  components: {
    Post,
  },
  props: ['posts'],

  data() {
        return {
           
        }
    },
  
  computed: {

  },
  methods: {
      postClickHandler(id){
         
          this.$router.push({name : 'posts', params: { id }})
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.postsList{
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
}
.postList__item{
    box-sizing: border-box;
    min-height:220px;
    width:50%;
    margin : 25px 0;
    border-bottom: 2px solid rgb(85, 12, 221);
    padding: 0 15px 25px 15px;
}
</style>
