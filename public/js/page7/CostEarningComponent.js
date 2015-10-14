define([
	'require',
	'js/page7/sub/costEarning',
], function (require, _costEarning) {
	'use strict'
	/**
	 * 成本汇总
    */
	function CostEarning() {
		this.title = "成本汇总";
		this.elementId = "cost-earning";
		this.data = [];
		this.chart = {};
	}
	CostEarning.prototype.init = function () {
		this.chart = _costEarning;
		this.chart.init('js-cost-earning');
	}
	CostEarning.prototype.setData = function (_data) {
		this.data = _data;
	}
	CostEarning.prototype.show = function () {
		this.chart.setOption(this.data);
	}

	return CostEarning;
});