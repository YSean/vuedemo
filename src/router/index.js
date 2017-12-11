import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../pages/chat/chat'
import Search from '../pages/search/search'
import Address from '../pages/address/address'
import Projects from '../pages/projects/projects'
import Me from '../pages/me/me'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
// import Chatroom from '../pages/chatroom/chatroom'
// import AddressDetail from '../pages/address/address-detail/address-detail'
// import FriendCircle from '../pages/find/friend-circle/friend-circle'
// import Scan from '../pages/find/scan/scan'
// import Shake from '../pages/find/shake/shake'
// import ChatroomUser from '../pages/chatroom/chatroom-user/chatroom-user'
// import AddressMore from '../pages/address/address-detail/address-more/address-more'
// import Money from '../pages/me/money/money'
// import Collection from '../pages/me/collection/collection'
// import Album from '../pages/me/album/album'
// import Card from '../pages/me/card/card'
// import Set from '../pages/me/set/set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/chat',  // 第一栏：微信
      component: Chat
    },
    {
      path: '/address',  // 第二栏：通讯录
      component: Address
    },
    {
      path: '/projects',  // 第三栏：项目
      component: Projects
    },
    {
      path: '/me',  // 第四栏：我
      component: Me
    }
  ]
})
