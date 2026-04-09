const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("TEST CASE 1");
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running successfully on port ${PORT}`);
    } else {
        console.log('Server has not started due to an error:', error);
    }
});