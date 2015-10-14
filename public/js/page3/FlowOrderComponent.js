define([
	'require',
	'js/page3/sub/flowOrder',
], function (require, _flowOrder) {
	'use strict';
	/**
	 * 流量业务数
    */
	function FlowOrder() {
		this.title = '流量业务数';
		this.elementId = "all-year-order";
		this.flowData = [];
		this.flowChart = {};
	}
	FlowOrder.prototype.init = function () {
		this.flowChart = _flowOrder;
		this.flowChart.init('js-flow-order', '全年装机数');
	}
	FlowOrder.prototype.setData = function (_flowData) {
		this.flowData = _flowData;
	}
	FlowOrder.prototype.show = function () {
		this.flowChart.setOption(this.flowData);
	}

	return FlowOrder;
});