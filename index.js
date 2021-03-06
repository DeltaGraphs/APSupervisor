/*jshint node: true, -W106 */
'use strict';

function buildHtml() {
	return '<!DOCTYPE html><html><header><title>Hello World</title></header>'+
		'<body><p>Hello World</p></body></html>';
}

console.log('Hello World');

var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
	var html = buildHtml();

	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Content-Length': html.length,
		'Expires': new Date().toUTCString()
	});
	res.end(html);
}).listen(port);

module.exports = function(n) {
	if (typeof n !== 'number') {
		return null;
	}

	if (n % 3 === 0 && n % 5 === 0) {
		return 'fizzbuzz';
	}
	if (n % 3 === 0) {
		return 'fizz';
	}
	if (n % 5 === 0) {
		return 'buzz';
	}

	return '' + n;
};