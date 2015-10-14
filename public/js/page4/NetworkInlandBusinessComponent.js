define([
	'require',
	'js/page4/sub/networkInlandBusiness',
], function (require, _networkInlandBusiness) {
	'use strict'
	/**
	 * 国内业务数
    */
	function NetworkBusiness() {
		this.title = "国内业务数";
		this.elementId = "network-inland-business";
		this.Data = [];
		this.Chart = {};
	}
	NetworkBusiness.prototype.init = function () {
		this.Chart = _networkInlandBusiness;
		this.Chart.init('js-network-inland-business');
	}
	NetworkBusiness.prototype.setData = function (_networkData) {
		this.Data = _networkData;
	}
	NetworkBusiness.prototype.show = function () {
		this.Chart.setOption(this.Data);
	}

	return NetworkBusiness;
});