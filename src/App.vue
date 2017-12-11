<template>
  <div id="app">
    <div>
      <!-- 路由位置,单页面路由-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- 页签 -->
      <div class="tab">
        <router-link tag="div" class="tab-item" to="/home">
          <div class="tab-link tab-link-3">
            <span class="tab-link-text">首页</span>
          </div>
        </router-link>
        <router-link tag="div" class="tab-item" to="/address">
          <div class="tab-link tab-link-2">
            <span class="tab-link-text">通讯录</span>
          </div>
        </router-link>
        <router-link tag="div" class="tab-item" to="/me">
          <div class="tab-link tab-link-4">
            <span class="tab-link-text">我</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
  data:{

  },
  methods: {
    
  }
}

</script>
