/* global echarts */
define([
	'require',
	'theme'
], function (require, theme) {
	'use strict';
	function BaseChart() {
		this.chartType = "";
		this.chartObj = new Object();
		this.option = {
			title: {
				text: '基础图表',
				textStyle: {
					color: "#1da9a6"
				}
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['意向']
			},
			grid: {
				y: "40px",
				y2: "30px",
				x2: "10px"
			},
			// calculable: true,
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			},
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: '意向',
					type: 'line',
					smooth: true,
					itemStyle: { normal: { areaStyle: { type: 'default' } } },
					data: [9999, 111, 601, 234, 120, 90, 20]
				}
			]
		};
	}
	/**
	 * 初始化图表
	 * @param [string] _elementId 图表所在元素id
	 */
	BaseChart.prototype.init = function (_elementId) {
		this.chartObj = echarts.init(document.getElementById(_elementId));
	};
	/**
	 * 设置皮肤
	 */
	BaseChart.prototype.setTheme = function (_theme) {
		this.chartObj.setTheme(_theme)
	}
	/**
	 * 添加数据
	 * @param [array] _dataObj 驱动数据对象
	 * @return [undefined]
	 */
	BaseChart.prototype.setData = function (_dataObj) {
		if (_dataObj && _dataObj.length > 0) {
			this.option.series = [];
			for (var i = 0; i < _dataObj.length; i++) {
				this.option.series[i].push(_dataObj);
			}
		}
	};
	/**
	 * 显示图表
	 */
	BaseChart.prototype.show = function () {
		this.chartObj.setOption(this.option);
	}

	return BaseChart;
});