/**
 * 移动订单业务数
 */
define([
	'require',
	'js/page2/sub/mobileInstall',
	'js/page2/sub/mobileUninstall'
], function (require, _mobileInstall, _mobileUninstall) {
	'use strict';
	/**
	 * 移动订单业务数
	 */
	function MobileOrder() {
		this.title = '移动订单业务数';
		this.elementId = "mobile-order";
		this.installData = [];
		this.uninstallData = [];
		this.installChart = {};
		this.uninstallChart = {};
	}
	MobileOrder.prototype.init = function () {
		this.installChart = _mobileInstall;
		this.installChart.init('js-mobile-order-install', '移动装机数');
		this.uninstallChart = _mobileUninstall;
		this.uninstallChart.init('js-mobile-order-uninstall', '移动拆机数');
	}
	MobileOrder.prototype.setData = function (_installData, _uninstallData) {
		this.installData = _installData;
		this.uninstallData = _uninstallData;
	}
	MobileOrder.prototype.show = function () {
		this.installChart.setOption(this.installData);
		this.uninstallChart.setOption(this.uninstallData);
	}

	return MobileOrder;
});