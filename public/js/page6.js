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
	'js/page6/LightNetwork1Component',
	'js/page6/LightNetwork2Component'
], function (require,domReady,template,LightNetwork1,LightNetwork2) {


		var lightNetwork1 = new LightNetwork1();
		lightNetwork1.init();
		lightNetwork1.show();
		console.log(lightNetwork1);
		
		var lightNetwork2 = new LightNetwork2();
		lightNetwork2.init();
		lightNetwork2.show();
		console.log(lightNetwork2);
		
		
	}) 