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
	'js/page4/NetworkBusinessComponent',
	'js/page4/NetworkInlandBusinessComponent',
	'js/page4/NetworklocalBusinessComponent',
	'js/page4/NetworkInternationalBusinessComponent'
], function (require,domReady,template,NetworkBusiness,NetworkInlandBusiness,NetworklocalBusiness,NetworkInternationalBusiness) {


		var networkBusiness = new NetworkBusiness();
		networkBusiness.init();
		networkBusiness.show();
		console.log(networkBusiness);
		
		var networkInlandBusiness = new NetworkInlandBusiness();
		networkInlandBusiness.init();
		networkInlandBusiness.show();
		console.log(networkInlandBusiness)
		
		var networklocalBusiness = new NetworklocalBusiness();
		networklocalBusiness.init();
		networklocalBusiness.show();
		console.log(networklocalBusiness)
		
		var networkInternationalBusiness = new NetworkInternationalBusiness();
		networkInternationalBusiness.init();
		networkInternationalBusiness.show();
		console.log(networkInternationalBusiness)
	}) 