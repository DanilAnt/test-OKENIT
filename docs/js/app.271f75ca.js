(function(t){function e(e){for(var n,a,c=e[0],i=e[1],u=e[2],p=0,m=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,c=1;c<s.length;c++){var i=s[c];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0068":function(t,e,s){},"0c8e":function(t,e,s){"use strict";s("0068")},"21bb":function(t,e,s){"use strict";s("2dad")},"2dad":function(t,e,s){},"31ff":function(t,e,s){"use strict";s("b7a9")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=s("5c96"),o=s.n(r),a=(s("0fae"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)}),c=[],i={name:"App",components:{}},u=i,l=(s("5c0b"),s("2877")),p=Object(l["a"])(u,a,c,!1,null,null,null),m=p.exports,d=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("h2",[t._v("USERS")]),s("Users",{attrs:{users:t.users}}),s("h2",[t._v("POSTS")]),s("Posts",{attrs:{posts:t.posts}})],1)},_=[],h=s("5530"),b=s("2f62"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"users"},[s("div",{staticClass:"usersList__item",attrs:{id:"usersList__item_undefined"},on:{click:function(e){return t.userClickHandler(e)}}},[s("span",[t._v("ALL POSTS")])]),s("ul",{staticClass:"usersList"},t._l(t.users,(function(e){return s("li",{key:e.id,staticClass:"usersList__item",attrs:{id:"usersList__item_"+e.id},on:{click:function(s){return t.userClickHandler(s,e.id)}}},[s("User",{attrs:{user:e}})],1)})),0)])},C=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("div",{staticClass:"user__username"},[t._v(" "+t._s(t.user.username)+" ")]),s("div",{staticClass:"user__name"},[t._v(" ("+t._s(t.user.name)+") ")])])},y=[],k={name:"User",props:["user"],data:function(){return{}},computed:{},methods:{}},j=k,w=(s("fdcf"),Object(l["a"])(j,O,y,!1,null,"62801a75",null)),x=w.exports,T={name:"Users",components:{User:x},props:["users"],data:function(){return{lastCheckedElement:""}},computed:{},methods:{userClickHandler:function(t,e){var s=document.getElementById("usersList__item_"+e);s.classList.add("checked"),this.lastCheckedElement.classList.remove("checked"),this.lastCheckedElement=s,this.$store.dispatch("GET_POSTS",{id:e})}},mounted:function(){var t,e=document.getElementById("usersList__item_"+t);e.classList.add("checked"),this.lastCheckedElement=e}},S=T,g=(s("73b8"),Object(l["a"])(S,v,C,!1,null,"79516ebe",null)),E=g.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"posts"},[s("ul",{staticClass:"postsList"},t._l(t.posts,(function(e){return s("li",{key:e.id,staticClass:"postList__item",on:{click:function(s){return t.postClickHandler(e.id)}}},[s("Post",{attrs:{post:e}})],1)})),0)])},R=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post"},[s("h3",{staticClass:"post__title"},[t._v(" "+t._s(t.post.title)+" ")]),s("div",{staticClass:"post__body"},[t._v(" "+t._s(t.post.body)+" ")])])},U=[],M={name:"Post",props:["post"],data:function(){return{}},computed:{},methods:{}},H=M,I=(s("31ff"),Object(l["a"])(H,$,U,!1,null,"0a8f736a",null)),L=I.exports,V={name:"Posts",components:{Post:L},props:["posts"],data:function(){return{}},computed:{},methods:{postClickHandler:function(t){this.$router.push({name:"posts",params:{id:t}})}}},G=V,N=(s("9e5e"),Object(l["a"])(G,P,R,!1,null,"79720b38",null)),B=N.exports,A={name:"Home",props:{},components:{Users:E,Posts:B},data:function(){return{}},computed:Object(h["a"])({},Object(b["b"])({users:"USERS",posts:"POSTS"})),methods:{},beforeRouteLeave:function(t,e,s){console.log(t,e),this.$message("You opened post №"+t.params.id),s()},mounted:function(){this.$store.dispatch("GET_POSTS"),this.$store.dispatch("GET_USERS")}},D=A,J=(s("21bb"),Object(l["a"])(D,f,_,!1,null,null,null)),F=J.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"postView"},[s("div",{staticClass:"postView__homeButton"},[s("el-button",{attrs:{plain:""},on:{click:t.homeButtonHandler}},[t._v("Home")])],1),s("div",{staticClass:"postView__contentContainer"},[s("div",{staticClass:"postView__userInf"},[s("p",[t._v("Name: "+t._s(t.user.name))]),s("p",[t._v("E-mail: "+t._s(t.user.email))]),s("p",[t._v(" Address: "+t._s(t.user.address?t.user.address.street+", "+t.user.address.suite:"")+" ")]),s("p",[t._v("Phone: "+t._s(t.user.phone))])]),s("div",{staticClass:"postView__postContent"},[s("h3",{staticClass:"postView__title"},[t._v(t._s(t.post.title))]),s("div",{staticClass:"postView__body"},[t._v(t._s(t.post.body))])])]),s("h2",[t._v("COMMENTS")]),s("div",{staticClass:"postView__commentsInputs"},[s("div",{staticClass:"postView__inputsContainer"},[s("el-input",{staticClass:"postView__input",attrs:{placeholder:"Comment name"},model:{value:t.commentInput.name,callback:function(e){t.$set(t.commentInput,"name",e)},expression:"commentInput.name"}}),s("el-input",{staticClass:"postView__input",attrs:{placeholder:"Comment body"},model:{value:t.commentInput.body,callback:function(e){t.$set(t.commentInput,"body",e)},expression:"commentInput.body"}})],1),s("el-button",{staticClass:"postView__commentButton",attrs:{type:"primary",plain:""},on:{click:t.commentButtonHandler}},[t._v("Comment")])],1),s("ul",{staticClass:"postView__comments"},t._l(t.comments,(function(e){return s("li",{key:e.id,staticClass:"postView__commentsItem"},[s("div",{staticClass:"comment__email"},[t._v(" "+t._s(e.email)+" ")]),s("div",{staticClass:"comment__name"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"comment__body"},[t._v(" "+t._s(e.body)+" ")])])})),0)])},Y=[],q=s("1da1"),z=(s("96cf"),s("d3b7"),s("e9c4"),s("b0c0"),{name:"PostView",data:function(){return{id:this.$route.params.id,commentInput:{name:"",body:""}}},computed:Object(h["a"])({},Object(b["b"])({comments:"COMMENTS",post:"POST",user:"USER"})),methods:{commentButtonHandler:function(){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments",{method:"POST",body:JSON.stringify({postId:t.id,name:t.commentInput.name,email:t.user.email,body:t.commentInput.body}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:if(s=e.sent,!s.ok){e.next=11;break}return e.next=6,s.json();case 6:n=e.sent,t.$store.dispatch("ADD_COMMENT",n),t.$message("Comment was posted successfully"),e.next=12;break;case 11:alert("Ошибка HTTP: "+s.status);case 12:case"end":return e.stop()}}),e)})))()},homeButtonHandler:function(){this.$router.push({name:"home"})}},beforeRouteLeave:function(t,e,s){console.log(t,e),this.$store.commit("setPost",{}),this.$store.commit("setUser",{}),"home"===t.name&&this.$message("Welcome back to home page"),s()},mounted:function(){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(1),e.next=3,t.$store.dispatch("GET_POST",{id:t.id});case 3:t.$store.dispatch("GET_USER",{id:t.post.userId}),t.$store.dispatch("GET_COMMENTS",{id:t.id}),console.log(4);case 6:case"end":return e.stop()}}),e)})))()}}),K=z,Q=(s("0c8e"),Object(l["a"])(K,W,Y,!1,null,null,null)),X=Q.exports;n["default"].use(d["a"]);var Z=[{path:"/",name:"home",component:F},{path:"/posts/:id",name:"posts",component:X}],tt=new d["a"]({routes:Z}),et=tt,st=s("2909");s("99af");n["default"].use(b["a"]);var nt=new b["a"].Store({state:{post:{},user:{},comments:[],posts:[],users:[]},actions:{GET_POST:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e,s){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://jsonplaceholder.typicode.com/posts/"+s.id);case 3:if(r=t.sent,!r.ok){t.next=12;break}return console.log(23424234),t.next=8,r.json();case 8:o=t.sent,n("setPost",Object(h["a"])({},o)),t.next=13;break;case 12:alert("Ошибка HTTP: "+r.status);case 13:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),GET_USER:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e,s){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://jsonplaceholder.typicode.com/users/"+s.id);case 3:if(r=t.sent,!r.ok){t.next=11;break}return t.next=7,r.json();case 7:o=t.sent,n("setUser",Object(h["a"])({},o)),t.next=12;break;case 11:alert("Ошибка HTTP: "+r.status);case 12:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),GET_COMMENTS:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e,s){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://jsonplaceholder.typicode.com/posts/"+s.id+"/comments");case 3:if(r=t.sent,!r.ok){t.next=11;break}return t.next=7,r.json();case 7:o=t.sent,n("setComments",Object(h["a"])({},o)),t.next=12;break;case 11:alert("Ошибка HTTP: "+r.status);case 12:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),GET_POSTS:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e,s){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,!s||!+s.id){t.next=7;break}return t.next=4,fetch("https://jsonplaceholder.typicode.com/posts?userId="+s.id);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,fetch("https://jsonplaceholder.typicode.com/posts");case 9:r=t.sent;case 10:if(!r.ok){t.next=17;break}return t.next=13,r.json();case 13:o=t.sent,n("setPosts",Object(st["a"])(o)),t.next=18;break;case 17:alert("Ошибка HTTP: "+r.status);case 18:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),GET_USERS:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:if(n=t.sent,!n.ok){t.next=11;break}return t.next=7,n.json();case 7:r=t.sent,s("setUsers",Object(st["a"])(r)),t.next=12;break;case 11:alert("Ошибка HTTP: "+n.status);case 12:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),ADD_COMMENT:function(t,e){var s=t.commit;console.log(e,"123"),s("addComment",e)}},mutations:{setPosts:function(t,e){t.posts=Object(st["a"])(e)},setUsers:function(t,e){t.users=Object(st["a"])(e)},setPost:function(t,e){t.post=Object(h["a"])({},e)},setUser:function(t,e){t.user=Object(h["a"])({},e)},setComments:function(t,e){console.log(e,"payload");var s=[];for(var n in e)s.push(e[n]);t.comments=[].concat(s)},addComment:function(t,e){console.log(e,"payload"),t.comments=[e].concat(Object(st["a"])(t.comments))}},getters:{POSTS:function(t){return t.posts},USERS:function(t){return t.users},POST:function(t){return t.post},USER:function(t){return t.user},COMMENTS:function(t){return t.comments}},modules:{}});n["default"].use(o.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(m)},store:nt,router:et}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"73b8":function(t,e,s){"use strict";s("7d54")},"7d54":function(t,e,s){},"97f0":function(t,e,s){},"9c0c":function(t,e,s){},"9e5e":function(t,e,s){"use strict";s("97f0")},b7a9:function(t,e,s){},f0c2:function(t,e,s){},fdcf:function(t,e,s){"use strict";s("f0c2")}});
//# sourceMappingURL=app.271f75ca.js.map