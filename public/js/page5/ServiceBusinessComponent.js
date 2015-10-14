define([
	'require',
	'js/page5/sub/serviceBusiness',
], function (require, _serviceBusiness) {
	'use strict'
	/**
	 * 客服业务汇总
    */
	function ServiceBusiness() {
		this.title = "客服业务汇总";
		this.elementId = "service-business";
		this.serviceData = [];
		this.serviceChart = {};
	}
	ServiceBusiness.prototype.init = function () {
		this.serviceChart = _serviceBusiness;
		this.serviceChart.init('js-service-business');
	}
	ServiceBusiness.prototype.setData = function (_serviceData) {
		this.serviceData = _serviceData;
	}
	ServiceBusiness.prototype.show = function () {
		this.serviceChart.setOption(this.serviceData);
	}

	return ServiceBusiness;
});