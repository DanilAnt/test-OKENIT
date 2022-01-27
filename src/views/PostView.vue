
<template>
  <div class="postView">
    <div class="postView__homeButton">
      <el-button plain @click="homeButtonHandler">Home</el-button>
    </div>
    <div class="postView__contentContainer">
      <div class="postView__userInf">
        <p>Name: {{ user.name }}</p>
        <p>E-mail: {{ user.email }}</p>
        <p>
          Address:
          {{
            user.address ? user.address.street + ", " + user.address.suite : ""
          }}
        </p>
        <p>Phone: {{ user.phone }}</p>
      </div>

      <div class="postView__postContent">
        <h3 class="postView__title">{{ post.title }}</h3>
        <div class="postView__body">{{ post.body }}</div>
      </div>
    </div>
    <h2>COMMENTS</h2>
    <div class="postView__commentsInputs">
      <div class="postView__inputsContainer">
        <el-input class="postView__input" placeholder="Comment name" v-model="commentInput.name"
          ></el-input
        ><el-input class="postView__input"
          placeholder="Comment body"
          v-model="commentInput.body"
        ></el-input>
      </div>
      <el-button class="postView__commentButton" @click="commentButtonHandler" type="primary" plain
        >Comment</el-button
      >
    </div>

    <ul class="postView__comments">
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="postView__commentsItem"
      >
        <div class="comment__email">
          {{ comment.email }}
        </div>
        <div class="comment__name">
          {{ comment.name }}
        </div>
        <div class="comment__body">
          {{ comment.body }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PostView",
  data() {
    return {
      id: this.$route.params.id,
      commentInput: {
        name: "",
        body: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      comments: "COMMENTS",
      post: "POST",
      user: "USER",
    }),
  },
  methods: {
    async commentButtonHandler() {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          method: "POST",
          body: JSON.stringify({
            postId: this.id,
            name: this.commentInput.name,
            email: this.user.email,
            body: this.commentInput.body,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        let result = await response.json();
        this.$store.dispatch("ADD_COMMENT", result);
        this.$message("Comment was posted successfully");
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    homeButtonHandler() {
      this.$router.push({ name: "home" });
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    this.$store.commit('setPost',{});
    this.$store.commit('setUser',{});
    if (to.name === "home") {
      this.$message("Welcome back to home page");
    }

    next();
  },
  async mounted() {
    console.log(1);
    await this.$store.dispatch("GET_POST", { id: this.id });

    this.$store.dispatch("GET_USER", { id: this.post.userId });
    this.$store.dispatch("GET_COMMENTS", { id: this.id });

    console.log(4);
  },
};
</script>

<style lang="scss">

.postView__homeButton {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.postView__contentContainer {
  display: flex;
  padding: 20px 0;
}
.postView__userInf {
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-start;
}
.postView__postContent {
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: flex-end;
}
.postView__body {
  text-align: right;
}
.postView__commentsInputs{
display: flex;
width:100%
}
.postView__inputsContainer{
display: flex;
flex-direction: column;
flex-grow: 1;
box-sizing: border-box;
padding: 0 5px;
}
.postView__input{
    padding: 5px 0;
}
.postView__comments{
display: flex;
flex-wrap: wrap;

}
.postView__commentsItem{
display: flex;
flex-direction: column;
width:50%;
box-sizing: border-box;
padding: 15px;
}
.comment__email{
 font-weight: bold;
 margin-bottom: 5px;
}
.comment__name{
text-align: justify;
font-weight: bold;
}
.comment__body{
    text-align: justify;
    // white-space: white;
}
</style>


