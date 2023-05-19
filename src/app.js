import express from 'express'

const app = express();
const port = 3000;

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
