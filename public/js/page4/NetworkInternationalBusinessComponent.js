define([
	'require',
	'js/page4/sub/networkInternationalBusiness',
], function (require, _networkInternationalBusiness) {
	'use strict'
	/**
	 * 国际业务数
    */
	function NetworkInternationalBusiness() {
		this.title = "国际业务数";
		this.elementId = "network-international-business";
		this.Data = [];
		this.Chart = {};
	}
	NetworkInternationalBusiness.prototype.init = function () {
		this.Chart = _networkInternationalBusiness;
		this.Chart.init('js-network-international-business');
	}
	NetworkInternationalBusiness.prototype.setData = function (_networkData) {
		this.Data = _networkData;
	}
	NetworkInternationalBusiness.prototype.show = function () {
		this.Chart.setOption(this.Data);
	}

	return NetworkInternationalBusiness;
});