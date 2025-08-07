const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // to get query parameters

    // Handle GET Request
    if (req.method === 'GET' && parsedUrl.pathname === '/greet') {
        const name = parsedUrl.query.name || 'Guest';

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Hello, ${name}!` }));
    }

    // Handle POST Request
    else if (req.method === 'POST' && parsedUrl.pathname === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // convert buffer to string
        });
    }
});