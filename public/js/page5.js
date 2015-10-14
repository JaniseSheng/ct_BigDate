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
	'js/page5/ServiceBusinessComponent',
	'js/page5/ServiceMobileBusinessComponent',
	'js/page5/ServiceNetworkBusinessComponent',
	'js/page5/ServiceVoiceBusinessComponent'
], function (require,domReady,template,ServiceBusiness,ServiceMobileBusiness,ServiceNetworkBusiness,ServiceVoiceBusiness) {


		var serviceBusiness = new ServiceBusiness();
		serviceBusiness.init();
		serviceBusiness.show();
		console.log(serviceBusiness);
		
		var serviceMobileBusiness = new ServiceMobileBusiness();
		serviceMobileBusiness.init();
		serviceMobileBusiness.show();
		console.log(serviceMobileBusiness)
		
		var serviceNetworkBusiness = new ServiceNetworkBusiness();
		serviceNetworkBusiness.init();
		serviceNetworkBusiness.show();
		console.log(serviceNetworkBusiness)
		
		var serviceVoiceBusiness = new ServiceVoiceBusiness();
		serviceVoiceBusiness.init();
		serviceVoiceBusiness.show();
		console.log(serviceVoiceBusiness)
	}) 