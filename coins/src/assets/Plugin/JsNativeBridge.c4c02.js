window.JsNativeBridge={showByteMoreGame:function(){"ios"!==tt.getSystemInfoSync().platform?tt.showMoreGamesModal({appLaunchOptions:[{appId:"tt35844339aaa1de7a",query:"",extraData:{}}],success(e){console.log("success",e.errMsg)},fail(e){console.log("fail",e.errMsg)}}):tt.showToast({title:"\u529f\u80fd\u6682\u4e0d\u53ef\u7528",icon:"none"})},_byteMoreGameBanner:null,showByteMoreGameBanner:function(){if(null==this._byteMoreGameBanner&&"ios"!==tt.getSystemInfoSync().platform&&tt.createMoreGamesBanner){let e=cc.view.getVisibleSize();this._byteMoreGameBanner=tt.createMoreGamesBanner({style:this.convertToByteStyle(e.width/2,50,900,200),appLaunchOptions:[{appId:"tt35844339aaa1de7a",query:"",extraData:{}}]}),this._byteMoreGameBanner.onResize(function(){console.log("moreGameBanne reSize"),console.log(this._byteMoreGameBanner.style);let e=this._byteMoreGameBanner.style;var t=tt.getSystemInfoSync(),n=t.windowWidth,a=t.windowHeight;Math.abs(e.left-(n-e.width)/2)>5&&(this._byteMoreGameBanner.style.left=(n-e.width)/2,this._byteMoreGameBanner.style.top=a-this._byteMoreGameBanner.style.width/3)}.bind(this))}this._byteMoreGameBanner&&this._byteMoreGameBanner.show()},hideByteMoreGameBanner:function(){this._byteMoreGameBanner&&this._byteMoreGameBanner.hide()},convertToByteStyle:function(e,t,n,a){var o=tt.getSystemInfoSync(),s=(o.screenWidth,o.screenHeight);let r=cc.view.getVisibleSize().height/s,i=n/r,c=a/r;return{left:e/r-i/2,top:s-t/r-c/2,width:i,height:c}},convertToQGStyle:function(e,t,n,a){var o=qg.getSystemInfoSync(),s=(o.screenWidth,o.screenHeight);let r=cc.view.getVisibleSize().height/s,i=n/r,c=a/r;return{left:e/r-i/2,top:s-t/r-c/2,width:i,height:c}},canShow:function(){return cc.sys.platform==cc.sys.WECHAT_GAME||cc.sys.platform==cc.sys.BYTE_GAME},showShare:function(e){let t=e.cb;cc.sys.platform==cc.sys.BYTE_GAME?tt.shareAppMessage({title:"\u602a\u7269\u53c8\u6765\u62a2\u91d1\u5e01\u5566\uff01\u4ec0\u4e48\u3002\u662f\u6211\u6307\u793a\u7684\uff1f\u90a3\u591a\u62a2\u70b9\u554a",imageUrl:"share/share.png"}):t&&t(!1,"\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd\u54e6")}};