exports.apiurl = {
	resurl: 'http://192.168.0.123/yuanpinchou/images/', //资源地址
	apiurl:'http://115.29.246.88:8890/'
}

exports.getBaseUrl = function (vm) {
  	var bundleUrl = vm.$getConfig().bundleUrl;
	var nativeBase;
	var isAndroidAssets = bundleUrl.indexOf('http:192.168.0.123') >= 0 || bundleUrl.indexOf('file://assets/')>=0;
	var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	if (isAndroidAssets) {
		nativeBase = 'file://assets/dist/';
	}
	else if (isiOSAssets) {
		nativeBase =  bundleUrl.substring(0, bundleUrl.lastIndexOf('dist/')) + "dist/";
	}
	else {
		var host = 'localhost:12580';
		var matches = /\/\/([^\/]+?)\//.exec(vm.$getConfig().bundleUrl);
		if (matches && matches.length >= 2) {
		host = matches[1];
		}
		nativeBase = 'http://' + host + '/dist/';
	}
	var h5Base = './index.html?page=./dist/';
	var base = nativeBase;
	if (typeof window === 'object') {
		base = h5Base;
	}
	return base;
}

exports.getDevice = function (vm) {
  	var bundleUrl = vm.$getConfig().bundleUrl;
	var device;
	var isAndroidAssets = bundleUrl.indexOf('http:192.168.0.123') >= 0 || bundleUrl.indexOf('file://assets/')>=0;
	var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	if (isAndroidAssets) {
		device = 'android';
	}
	else if (isiOSAssets) {
		device =  'ios';
	}
	else {
		device = 'browser';
	}
	return device;
}

