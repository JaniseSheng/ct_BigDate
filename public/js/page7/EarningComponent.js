define([
	'require',
	'js/page7/sub/earning',
], function (require, _earning) {
	'use strict'
	/**
	 * 收入总汇表
    */
	function Earning() {
		this.title = "收入总汇表";
		this.elementId = "earning";
		this.data = [];
		this.chart = {};
	}
	Earning.prototype.init = function () {
		this.chart = _earning;
		this.chart.init('js-earning');
	}
	Earning.prototype.setData = function (_data) {
		this.data = _data;
	}
	Earning.prototype.show = function () {
		this.chart.setOption(this.data);
	}

	return Earning;
});