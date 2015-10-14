define([
	'require',
	'js/page2/sub/allYearInstallBar',
	'js/page2/sub/allYearUninstallBar'
], function (require, _allYearInstallBar, _allYearUninstallBar) {
	'use strict';
	/**
	 * 订单业务数
    */
	function Order() {
		this.title = ' 移动订单业务数';
		this.elementId = "voice-business";
		this.installData = [];
		this.uninstallData = [];
		this.installChart = {};
		this.uninstallChart = {};
	}
	Order.prototype.init = function () {
		this.installChart = _allYearInstallBar;
		this.installChart.init('js-all-year-install', '全年装机数');
		this.uninstallChart = _allYearUninstallBar;
		this.uninstallChart.init('js-all-year-uninstall', '全年拆机数');
	}
	Order.prototype.setData = function (_installData, _uninstallData) {
		this.installData = _installData;
		this.uninstallData = _uninstallData;
	}
	Order.prototype.show = function () {
		this.installChart.setOption(this.installData);
		this.uninstallChart.setOption(this.uninstallData);
	}

	return Order;
});