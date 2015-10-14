define([
	'require',
	'js/page3/sub/hkAndTwSmsOrder',
	'js/page3/sub/inlandSmsOrder',
	'js/page3/sub/internationalSmsOrder'
], function (require, _hkAndTwSmsOrder, _inlandSmsOrder, _internationalSmsOrder) {
	'use strict'
	/**
	 * 短信业务数
    */
	function SmsOrder() {
		this.title = "短信业务数";
		this.elementId = "sms-business";
		this.hkAndTwData = [];
		this.internationalData = [];
		this.inlandData = [];
		this.hkAndTwChart =  {};
		this.inlandChart = {};
		this.internationalChart = {};
	}
	SmsOrder.prototype.init = function () {
		this.hkAndTwChart = _hkAndTwSmsOrder;
		this.internationalChart = _internationalSmsOrder;
		this.inlandChart = _inlandSmsOrder;
		this.hkAndTwChart.init('js-hk-and-tw-sms', '港澳台');
		this.inlandChart.init('js-inland-sms', '国内');
		this.internationalChart.init('js-international-sms', '国际');
	}
	SmsOrder.prototype.setData = function (_inlandData, _hkAndTwData, _internationalData) {
		this.inlandData = _inlandData;
		this.hkAndTwData = _hkAndTwData;
		this.internationalData = _internationalData;
	}
	SmsOrder.prototype.show = function () {
		this.inlandChart.setOption(this.inlandData);
		this.hkAndTwChart.setOption(this.hkAndTwData);
		this.internationalChart.setOption(this.internationalData);
	}

	return SmsOrder;
});