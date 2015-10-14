define([
	'require',
	'js/page6/sub/lightNetwork1',
], function (require, _lightNetwork1) {
	'use strict'
	/**
	 * 光网资源1
    */
	function lightNetwork1() {
		this.title = "光网资源1";
		this.elementId = "light-network1";
		this.data = [];
		this.chart = {};
	}
	lightNetwork1.prototype.init = function () {
		this.chart = _lightNetwork1;
		this.chart.init('js-light-network1');
	}
	lightNetwork1.prototype.setData = function (_data) {
		this.data = _data;
	}
	lightNetwork1.prototype.show = function () {
		this.chart.setOption(this.data);
	}

	return lightNetwork1;
});