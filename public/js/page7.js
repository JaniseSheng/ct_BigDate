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
	'js/page7/CostEarningComponent',
	'js/page7/EarningComponent',
	'js/page7/OrderEarningComponent',
	'js/page7/RemunerationEarningComponent'
], function (require,domReady,template,CostEarning,Earning,OrderEarning,RemunerationEarning) {


		var costEarning = new CostEarning();
		costEarning.init();
		costEarning.show();
		console.log(costEarning);
		
		var earning = new Earning();
		earning.init();
		earning.show();
		console.log(earning)
		
		var orderEarning = new OrderEarning();
		orderEarning.init();
		orderEarning.show();
		console.log(orderEarning)
		
		var remunerationEarning = new RemunerationEarning();
		remunerationEarning.init();
		remunerationEarning.show();
		console.log(remunerationEarning)
	}) 