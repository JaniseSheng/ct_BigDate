/* global echarts */
define([
	'require',
	'theme'
], function (require, theme) {
	'use strict';
	var obj = {};
	var option = {
		tooltip: {

		},
		grid: {
			y: 40,
			y2: 20,
			borderWidht: 0
		},
		calculable: true,
		yAxis: [
			{
				type: 'value',
				position: 'right',
				// axisLabel: {
				// 	textStyle: {
				// 		color: '#1da9a6'
				// 	}
				// }
			}
		],
		xAxis: [
			{
				type: 'category',
				position: 'bottom',
				axisLabel: {
				},
				data: function(){
					var list = [];
					for(var i=0;i<12;i++){
						list.push(1+i+"月");
					}
					return list;
				}()
			}
		],
		series: [
			{
				name: '邮件营销',
				type: 'bar',
				stack: '总量',
				itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: '联盟广告',
				type: 'bar',
				stack: '总量',
				itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
				data: [220, 182, 191, 234, 290, 330, 310]
			},
			{
				name: '视频广告',
				type: 'bar',
				stack: '总量',
				itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
				data: [150, 212, 201, 154, 190, 330, 410]
			},
		]
	};

	var allYearInstallBar = {
		init: function (_elementId) {
			obj = echarts.init(document.getElementById(_elementId), theme);
		},
		setOption: function () {
			obj.setOption(option);
		}
	}

	return allYearInstallBar;
});