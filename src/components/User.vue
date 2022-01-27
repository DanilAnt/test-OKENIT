<template>
  <div class="user">
      <div class="user__username">
          {{user.username}}
      </div>
      <div class="user__name">
          ({{user.name}})
      </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  
   props: ['user'],

  data() {
        return {
           
        }
    },
  
  computed: {

  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user{
    display:flex;
    flex-direction: column;
}
.user__name{
    white-space: nowrap;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
