require.config({
	paths: {
		template: 'lib/artTemplate/template-debug',
		socket: 'lib/socket.io-client/socket.io',
		domReady: 'lib/domReady/domReady',
		zrender: 'lib/zrender/zrender',
		theme: 'js/theme'
	}
})

require([
	'require',
	'domReady!',
	'template',
	'js/page3/MobileUserComponent',
	'js/page3/VoiceOrderComponent',
	'js/page3/SmsOrderComponent',
	'js/page3/FlowOrderComponent'
], function (require,domReady,template,MobileUser,VoiceOrder,SmsOrder,FlowOrder) {


		var mobileUser = new MobileUser();
		mobileUser.init();
		mobileUser.show();
		console.log(mobileUser);
		
		var voiceOrder = new VoiceOrder();
		voiceOrder.init();
		voiceOrder.show();
		console.log(voiceOrder)
		
		var smsOrder = new SmsOrder();
		smsOrder.init();
		smsOrder.show();
		console.log(smsOrder)
		
		var flowOrder = new FlowOrder();
		flowOrder.init();
		flowOrder.show();
		console.log(flowOrder)
	}) 