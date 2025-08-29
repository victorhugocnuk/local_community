// Import the necessary libraries
const express = require('express');
const path = require('path');

// Create an instance of the Express app
const app = express();

// Set the port. Use the environment variable or a default port.
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a route for the homepage
app.get('/', (req, res) => {
    // Render the 'home' view
    res.render('home');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access it at: http://localhost:${PORT}`);
});
