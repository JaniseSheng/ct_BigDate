/* global echarts */
/**
 * 固网业务量
 */
define([
	'require',
	'theme'
], function (require, theme) {
	'use strict';
	var obj = {};
	var option = {
		// title: {
		// 	text: '流量',
		// 	// subtext: '纯属虚构'
		// 	textStyle: {
		// 		color: "#1da9a6"
		// 	}
		// },
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
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: function () {
					var list = [];
					for (var i = 0; i < 31;i++){
						list.push(1+i);
					}
					return list;
				}()
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '成交',
				type: 'line',
				// smooth: true,
				// itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [10, 12, 21, 54, 260, 830, 710]
			},
			{
				name: '预购',
				type: 'line',
				// smooth: true,
				// itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [30, 182, 434, 791, 390, 30, 10]
			},
			{
				name: '意向',
				type: 'line',
				// smooth: true,
				// itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [9999, 111, 601, 234, 120, 90, 20]
			}
		]
	};
	var chart = {
		init: function (_element) {
			// option.title.text = _title;
			obj = echarts.init(document.getElementById(_element), theme);
		},
		setOption: function (_data) {
			if (_data && _data.length > 0) {
				option.series = _data;
			}
			obj.setOption(option);
		},
	}
	return chart;
});