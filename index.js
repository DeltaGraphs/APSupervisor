/*jshint node: true, -W106 */
'use strict';

 
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
 var http = require('http');
var request = require('request');
var zlib = require('zlib');


app.listen(port, function() {
    console.log("Listening on " + port);
    makeRequest(22);
});
 
 
 

function makeRequest(linea){
    
    var url = 'http://www.apsholding.it/index.php/informazioni/dov­e­il­mezzo­pubblico­in­tempo­reale?option=com_mappeaps&view=posmezzi&format=raw';
	var headers = { 
	    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36',
	    'Content-Type' : 'application/x-www-form-urlencoded',
	    'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
	    'Pragma': 'no-cache',
	    'Origin': 'null',
	    'Accept-Encoding': 'gzip',
	    'Accept-Language': 'it-IT,it;q=0.8,en-US;q=0.6,en;q=0.4',
	    'Cache-Control': 'no-cache',
	    'Connection': 'keep-alive',
	    'gzip': true
	};

	var options = {
	    url: url,
	    method: 'POST',
	    headers: headers,
	    form: { 'l': linea }
	}

	var response = request(options);
    console.log('RESPONSE');
    gunzipJSON(response);
}
 
function gunzipJSON(response){
 	console.log('gunzipJSON');
    var gunzip = zlib.createGunzip();
    var json = "";
 
    gunzip.on('data', function(data){
        json += data.toString();
    });
        
    gunzip.on('end', function(){
    	console.dir(json);
    });
 
    response.pipe(gunzip);
}