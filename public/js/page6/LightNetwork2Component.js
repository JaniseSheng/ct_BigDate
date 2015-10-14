define([
	'require',
	'js/page6/sub/lightNetwork2',
], function (require, _lightNetwork2) {
	'use strict'
	/**
	 * 光网资源2
    */
	function lightNetwork2() {
		this.title = "光网资源2";
		this.elementId = "light-network2";
		this.data = [];
		this.chart = {};
	}
	lightNetwork2.prototype.init = function () {
		this.chart = _lightNetwork2;
		this.chart.init('js-light-network2');
	}
	lightNetwork2.prototype.setData = function (_data) {
		this.data = _data;
	}
	lightNetwork2.prototype.show = function () {
		this.chart.setOption(this.data);
	}

	return lightNetwork2;
});