define([
	'require',
	'js/page7/sub/orderEarning',
], function (require, _orderEarning) {
	'use strict'
	/**
	 * 订单模拟收入汇总
    */
	function OrderEarning() {
		this.title = "订单模拟收入汇总";
		this.elementId = "order-earning";
		this.data = [];
		this.chart = {};
	}
	OrderEarning.prototype.init = function () {
		this.chart = _orderEarning;
		this.chart.init('js-order-earning');
	}
	OrderEarning.prototype.setData = function (_data) {
		this.data = _data;
	}
	OrderEarning.prototype.show = function () {
		this.chart.setOption(this.data);
	}

	return OrderEarning;
});