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
	'js/page2/sub/allDayInstall',
	'js/page2/sub/allDayUnInstall',
	'js/page2/OrderComponent',
	'js/page2/NetworkOrderComponent',
	'js/page2/FixedPhoneOrderComponent',
	'js/page2/MobileOrderComponent',
], function (
	require,
	domReady,
	template,
	_allYearDeselect,
	_allYearSelect,
	Order,
	NetworkOrder,
	FixedPhoneOrder,
	MobileOrder) {

		var data = [
			{
				title: '宽带装机数',
				name: '成交',
				data: [10, 12, 21, 54, 260, 830, 710]
			},
			{
				title: '宽带装机数',
				name: '预购',
				data: [30, 182, 434, 791, 390, 30, 10]
			},
			{
				title: '宽带装机数',
				name: '意向',
				data: [1999, 111, 601, 234, 120, 90, 20]
			}
		];

		var order = new Order();
		order.init();
		order.show();
		console.log(order);

		var networkOrder = new NetworkOrder();
		networkOrder.init();
		networkOrder.show();
		console.log(networkOrder);

		var fixedPhoneOrder = new FixedPhoneOrder();
		fixedPhoneOrder.init();
		fixedPhoneOrder.show();
		console.log(fixedPhoneOrder);

		var mobileOrder = new MobileOrder();
		mobileOrder.init();
		mobileOrder.show();
		console.log(mobileOrder);
	})
