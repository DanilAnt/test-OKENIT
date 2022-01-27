<template>
  <div class="post">
    <h3 class="post__title">
      {{ post.title }}
    </h3>
    <div class="post__body">
      {{ post.body }}
    </div>
  </div>
</template>

<script>

export default {
  name: "Post",

  props: ["post"],

  data() {
    return {};
  },

 computed: {
  
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.post__title{
    font-size: 20px;
}
</style>
