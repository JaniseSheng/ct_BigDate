define([
	'require',
	'js/page3/sub/hkAndTwVoiceOrder',
	'js/page3/sub/inlandVoiceOrder',
	'js/page3/sub/internationalVoiceOrder'
], function (require, _hkAndTwVoicOrder, _inlandVoicOrder, _internationalVoicOrder) {
	'use strict'
	/**
	 * 订单业务数
    */
	function VoiceOrder() {
		this.title = "订单业务数";
		this.elementId = "all-year-order";
		this.hkAndTwData = [];
		this.internationalData = [];
		this.inlandData = [];
		this.hkAndTwChart =  {};
		this.inlandChart = {};
		this.internationalChart = {};
	}
	VoiceOrder.prototype.init = function () {
		this.hkAndTwChart = _hkAndTwVoicOrder;
		this.internationalChart = _internationalVoicOrder;
		this.inlandChart = _inlandVoicOrder;
		this.hkAndTwChart.init('js-hk-and-tw-voic', '全年装机数');
		this.inlandChart.init('js-inland-voic', '全年装机数');
		this.internationalChart.init('js-international-voic', '全年装机数');
	}
	VoiceOrder.prototype.setData = function (_inlandData, _hkAndTwData, _internationalData) {
		this.inlandData = _inlandData;
		this.hkAndTwData = _hkAndTwData;
		this.internationalData = _internationalData;
	}
	VoiceOrder.prototype.show = function () {
		this.inlandChart.setOption(this.inlandData);
		this.hkAndTwChart.setOption(this.hkAndTwData);
		this.internationalChart.setOption(this.internationalData);
	}

	return VoiceOrder;
});