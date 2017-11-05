import Vue from 'vue'
import Router from 'vue-router'
import Chat from '../components/chat/chat'
import Search from '../components/search/search'
import Address from '../components/address/address'
import Projects from '../components/projects/projects'
import Me from '../components/me/me'
// import Chatroom from '../components/chatroom/chatroom'
// import AddressDetail from '../components/address/address-detail/address-detail'
// import FriendCircle from '../components/find/friend-circle/friend-circle'
// import Scan from '../components/find/scan/scan'
// import Shake from '../components/find/shake/shake'
// import ChatroomUser from '../components/chatroom/chatroom-user/chatroom-user'
// import AddressMore from '../components/address/address-detail/address-more/address-more'
// import Money from '../components/me/money/money'
// import Collection from '../components/me/collection/collection'
// import Album from '../components/me/album/album'
// import Card from '../components/me/card/card'
// import Set from '../components/me/set/set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/chat'
    },
    {
      path: '/search',
      component: Search
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
