define([
	'require',
	'js/page3/sub/mobileUser',
], function (require, _mobileUser) {
	'use strict';
	/**
	 * 订单业务数
    */
	function MobileUser() {
		this.title = '订单业务数';
		this.elementId = "all-year-order";
		this.userData = [];
		this.userChart = {};
	}
	MobileUser.prototype.init = function () {
		this.userChart = _mobileUser;
		this.userChart.init('js-mobil-open-user', '移动开机用户数');
	}
	MobileUser.prototype.setData = function (_userData) {
		this.userData = _userData;
	}
	MobileUser.prototype.show = function () {
		this.userChart.setOption(this.userData);
	}

	return MobileUser;
});