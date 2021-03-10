//Dependencies
const path = require('path');

//routing
module.exports = (app) => {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));    
    });
    
    app.post('/notes', (req, res) => {
        res.send('This is a post request');
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}