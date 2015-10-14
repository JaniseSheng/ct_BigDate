/**
 * 固话订单业务数
 */
define([
	'require',
	'js/page2/sub/fixedPhoneInstall',
	'js/page2/sub/fixedPhoneUninstall'
], function (require, _fixedPhoneInstall, _fixedPhoneUninstall) {
	'use strict';
	/**
	 * 固话订单业务数
	 */
	function FixedPhone() {
		this.title = '固话订单业务数';
		this.elementId = "fix-phone-order";
		this.installData = [];
		this.uninstallData = [];
		this.installChart = {};
		this.uninstallChart = {};
	}
	FixedPhone.prototype.init = function () {
		this.installChart = _fixedPhoneInstall;
		this.installChart.init('js-fix-phone-order-install', '固话装机数');
		this.uninstallChart = _fixedPhoneUninstall;
		this.uninstallChart.init('js-fix-phone-order-uninstall', '固话拆机数');
	}
	FixedPhone.prototype.setData = function (_installData, _uninstallData) {
		this.installData = _installData;
		this.uninstallData = _uninstallData;
	}
	FixedPhone.prototype.show = function () {
		this.installChart.setOption(this.installData);
		this.uninstallChart.setOption(this.uninstallData);
	}

	return FixedPhone;
});
