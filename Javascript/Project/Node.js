const http = require('http');
const url = require('url');

// Sample student data
const students = [
    { id: 11111, name: 'Bruce Lee', score: 84 },
    { id: 22222, name: 'Jackie Chen', score: 93 },
    { id: 33333, name: 'Jet Li', score: 88 }
];

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    
    // Check if the request is for the /api/score endpoint
    if (parsedUrl.pathname === '/api/score' && query.student_id) {
        // Find the student with the provided ID
        const student = students.find(student => student.id === parseInt(query.student_id));
        
        if (student) {
            // Send student data as JSON with the desired format
            const formattedData = {
                id: student.id,
                name: student.name,
                score: student.score
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(formattedData));
        } else {
            // Student not found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Student not found');
        }
    } else {
        // Invalid endpoint
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid endpoint');
    }
});

// Start the server on port 8000
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});

