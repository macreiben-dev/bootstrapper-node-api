import express from 'express'

// ----------------------------------------------
// Bootstrapping the server

let defaultServerPort = 3000;

if (GLOBAL_SERVER_PORT) {
    defaultServerPort = GLOBAL_SERVER_PORT
}

const app = express();
const port = defaultServerPort;

// ---------------------------------------------

// Sample data
let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

// Middleware to parse JSON requests
app.use(express.json());

// Route for fetching all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Route for creating a new user
app.post('/users', (req, res) => {
    const { id, name } = req.body;
    const newUser = { id, name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
