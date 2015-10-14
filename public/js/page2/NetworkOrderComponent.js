/**
 * 宽带订单业务数
 */
define([
	'require',
	'js/page2/sub/networkOrderInstall',
	'js/page2/sub/networkOrderUninstall'
], function (require, _networkOrderInstall, _networkOrderUninstall) {
	'use strict';
	/**
	 * 宽带订单业务数
	 */
	function NetworkerOrder() {
		this.title = '宽带订单业务数';
		this.elementId = "network-order";
		this.installData = [];
		this.uninstallData = [];
		this.installChart = {};
		this.uninstallChart = {};
	}
	NetworkerOrder.prototype.init = function () {
		this.installChart = _networkOrderInstall;
		this.installChart.init('js-network-order-select', '宽带装机数');
		this.uninstallChart = _networkOrderUninstall;
		this.uninstallChart.init('js-network-order-deselect', '宽带拆机数');
	}
	NetworkerOrder.prototype.setData = function (_installData, _uninstallData) {
		this.installData = _installData;
		this.uninstallData = _uninstallData;
	}
	NetworkerOrder.prototype.show = function () {
		this.installChart.setOption(this.installData);
		this.uninstallChart.setOption(this.uninstallData);
	}

	return NetworkerOrder;
});