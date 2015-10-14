define([
	'require',
	'js/page7/sub/remunerationEarning',
], function (require, _remunerationEarning) {
	'use strict'
	/**
	 * 酬金汇总
    */
	function RemunerationEarning() {
		this.title = "酬金汇总";
		this.elementId = "remuneration-earning";
		this.data = [];
		this.chart = {};
	}
	RemunerationEarning.prototype.init = function () {
		this.chart = _remunerationEarning;
		this.chart.init('js-remuneration-earning');
	}
	RemunerationEarning.prototype.setData = function (_data) {
		this.data = _data;
	}
	RemunerationEarning.prototype.show = function () {
		this.chart.setOption(this.data);
	}

	return RemunerationEarning;
});