Ext.define('PGP.Helper', {
	singleton: true,
	proxy: 'http://nodejs-ghelobytes.rhcloud.com/',
	_proxy: 'http://localhost:8000/',
	_proxy: 'http://202.90.149.231:8000/',
	proxify: function(url) {
		return this.proxy + url;
	}
});

