const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send(`test dfd dfsdf sdf Feel free to explore our endpoints and interact with our services. If you have any questions or need assistance, don't hesitate to reach out. Have a fantastic day ahead!
    sd fsdf sdfsd fsdf

    dfgd fgdfg 
    xvxcv xvx cvxc dsfgd gdfg
    Welcome to our Express API! Thank you for visiting. We aim to provide you with a seamless experience. Feel free to explore our endpoints and interact with our services. If you have any questions or need assistance, don't hesitate to reach out. Have a fantastic day ahead!`);
});




const users = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@gmail.com' },
];

// GET /users - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET /users/:id - Get user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
