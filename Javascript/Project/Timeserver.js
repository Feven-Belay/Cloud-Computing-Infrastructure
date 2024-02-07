var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true); // Parse the request URL

    if (parsedUrl.pathname === '/api/parsetime') {
        // Handle /api/parsetime endpoint
        if (parsedUrl.query && parsedUrl.query.iso) {
            var time = new Date(parsedUrl.query.iso);
            var response = {
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds()
            };
            // Set Content-Type header for JSON response
            res.writeHead(200, { 'Content-Type': 'application/json' });
            // Send the JSON response
            res.end(JSON.stringify(response));
        } else {
            // If query string or iso parameter is missing, send 400 Bad Request
            res.writeHead(400);
            res.end();
        }
    } else if (parsedUrl.pathname === '/api/unixtime') {
        // Handle /api/unixtime endpoint
        if (parsedUrl.query && parsedUrl.query.iso) {
            var time = new Date(parsedUrl.query.iso);
            var response = {
                unixtime: time.getTime() // Return UNIX epoch time
            };
            // Set Content-Type header for JSON response
            res.writeHead(200, { 'Content-Type': 'application/json' });
            // Send the JSON response
            res.end(JSON.stringify(response));
        } else {
            // If query string or iso parameter is missing, send 400 Bad Request
            res.writeHead(400);
            res.end();
        }
    } else if (parsedUrl.pathname === '/api/currenttime') {
        // Generate the current date and time
        var currentTime = new Date();
        var response = {
            year: currentTime.getFullYear(),
            month: currentTime.getMonth() + 1, // Adding 1 because getMonth() returns zero-based index
            date: currentTime.getDate(),
            hour: currentTime.getHours(),
            minute: currentTime.getMinutes()
        };

        // Set Content-Type header for JSON response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        // Send the JSON response
        res.end(JSON.stringify(response));
    } else {
        // Handle other endpoints or invalid requests with 404 Not Found
        res.writeHead(404);
        res.end();
    }
});

server.listen(8000); // Listen on port 8000

