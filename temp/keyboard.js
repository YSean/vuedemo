
import '../../base/keyboard/cc-sk-2.5.8.min.js'
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