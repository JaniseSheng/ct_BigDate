define([
	'require',
	'js/page4/sub/networkBusiness',
], function (require, _networkBusiness) {
	'use strict'
	/**
	 * 固网业务量
    */
	function NetworkBusiness() {
		this.title = "固网业务量";
		this.elementId = "network-business";
		this.networkData = [];
		this.networkChart = {};
	}
	NetworkBusiness.prototype.init = function () {
		this.networkChart = _networkBusiness;
		this.networkChart.init('js-network-business');
	}
	NetworkBusiness.prototype.setData = function (_networkData) {
		this.networkData = _networkData;
	}
	NetworkBusiness.prototype.show = function () {
		this.networkChart.setOption(this.networkData);
	}

	return NetworkBusiness;
});