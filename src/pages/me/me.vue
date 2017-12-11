<template>
  <div>
    <mt-header title="我的"></mt-header>
    <div id="avater" style="height:80px;width:100%;margin:0 auto;padding:20px;">
        <mt-button type="primary" size="large" v-on:click="login();">登陆</mt-button>
    </div>
    <div id="menu">
      <mt-cell title="个人资料" to="/userinfo" is-link value="带链接">
      </mt-cell>
      <mt-cell title="填写周报" to="/weekly" is-link value="带链接">
      </mt-cell>
      <mt-cell title="请假销假" to="/vacation" is-link value="带链接">
      </mt-cell>
      <mt-cell title="所在项目" to="/project" is-link value="带链接">
      </mt-cell>
    </div>
  </div>
</template>
<script type="text/javascript">
import $ from 'jquery'
export default {
  components: {},

  methods: {
    login: function() {
      console.log(this.$router.replace({ path: 'login' }));
    }
  },
  beforeRouteEnter: function(to, from, next) {
    console.log("可以在这个地方加载一些数据,失败就不跳转,成功则传递参数");
    next();

  },
  beforeRouteUpdate: function(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave: function(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  },
  beforeCreate: function() {
    console.log("beforeCreate");
  },
  created: function() {
    console.log("created");
  },
  beforeMount: function() {
    console.log("beforeMount");
  },
  mounted: function() {
    console.log("mounted");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  },
  updated: function() {
    console.log("updated");
  },
  beforeDestory: function() {
    console.log("beforeDestory");
  },
  destoryed: function() {
    console.log("destoryed");
  }
}

</script>
