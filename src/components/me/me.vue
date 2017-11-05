<template>
  <div class="me">
    <div class="me-wrapper" ref="wrapper">
      <div class="me-content">
        <div>
        	<input type="text" id="PasswordS1" />
          <button v-on:click="getPassword">安宁</button>
        </div>
        
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  import BScroll from 'better-scroll'
  import $ from 'jquery'
  import '../../base/keyboard/cc-sk-2.5.8.min.js'
  var subKeyPad1;
  export default {
    components: {
      BScroll
    },
    data () {
      return {
        height: 60,
        codeheight: 30,
        width: 60,
        codewidth: 30
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
          click: true
        })
      })
    },
    methods: {
      getPassword:function() {
        console.log("button click");
        console.log(subKeyPad1.getPasswordValue());
      }
    },
    created :function(){
    	console.log("created");
      
      $.ccsk_ready(function(){
        var ParentKeyPad1 = $.getCCSKeyPad('/wechat/at/bank/WebKeyboard/Init.plain',"Normal");//大小写字母+数字键盘
        subKeyPad1 = ParentKeyPad1.init({
          elementId:"PasswordS1",
          placeholder:"请输入查询密码",
          length:12,
          input_style:{
            width:200,
            height:34
          }
        });    
      });
    }
  }
</script>

<style scoped>
  .me{
    position: fixed;
    top: 50px;
    bottom: 50px;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(238,233,233,0.6);
  }
  .me-wrapper{
    /*border: 1px solid red;*/
    height: 100%;
    overflow: hidden;
  }
  .me-content{
    /*border: 1px solid blue;*/
    overflow: hidden;
  }  
  .aboutme{
    position: relative;
    height: 60px;
    padding: 8px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    /*border: 1px solid red;*/
  }
  .aboutme-img{
    position: absolute;
/*    height: 60px;
    width: 60px;*/
    top: 8px;
    left: 10px;
    z-index: 99;
    transition: all 0.5s;
  }
  .aboutme div{
    position: absolute;
    height: 32px;
    top: 50%;
    margin-top: -16px;
    left: 90px;
  }
  .aboutme h2{
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 5px;
  }
  .aboutme p{
    font-size: 12px;
    line-height: 12px;
  }
  .aboutme-code{
    position: absolute;
    background-color: #fff;
    top: 30px;
    right: 20px;
    transition: all 0.5s;
  }
  .money{
    display: flex;
    align-items: center; 
    left: 0;
    height: 20px;
    padding: 8px 10px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  .collection, .photo, .card, .emoticon{
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    left: 0;
    height: 20px;
    border-bottom: 1px solid rgba(153,153,153,0.4);
    padding: 10px 10px;
    margin-top: 0px;
    background-color: #fff;
  }
  .emoticon{
    border-bottom: 0;
  }
  .setup{
    display: flex;
    align-items: center; 
    left: 0;
    height: 20px;
    padding: 8px 10px;
    margin-top: 20px;
    background-color: #fff;
  }
  .money-img, .collection-img, .photo-img, .card-img, .emoticon-img, .setup-img{
    height: 20px;
    width: 20px;
    padding-right: 20px;
  }
</style>
