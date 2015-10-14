define([
	'require',
	'js/page4/sub/networkLocalBusiness',
], function (require, _networkLocalBusiness) {
	'use strict'
	/**
	 * 本地业务数
    */
	function NetworkLocalBusiness() {
		this.title = "本地业务数";
		this.elementId = "network-local-business";
		this.Data = [];
		this.Chart = {};
	}
	NetworkLocalBusiness.prototype.init = function () {
		this.Chart = _networkLocalBusiness;
		this.Chart.init('js-network-local-business');
	}
	NetworkLocalBusiness.prototype.setData = function (_networkData) {
		this.Data = _networkData;
	}
	NetworkLocalBusiness.prototype.show = function () {
		this.Chart.setOption(this.Data);
	}

	return NetworkLocalBusiness;
});