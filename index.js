const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis diam vitae eros eleifend, eu sollicitudin leo efficitur. Sed nec elit lorem. Phasellus eget sapien nec sem volutpat ullamcorper. Mauris vel urna semper, consequat est vel, lacinia quam. Pellentesque nec sapien quis libero ultricies ullamcorper. Sed fringilla felis et felis eleifend, sed eleifend urna pharetra. Sed ut mauris a libero congue luctus sed et justo. Ut viverra diam sit amet bibendum lacinia. Integer sit amet luctus est, vel luctus nisi. Ut sollicitudin est vel sem dictum, nec dictum ex aliquet. Vestibulum dapibus purus ut tempus vehicula. Fusce consequat scelerisque velit, eu dictum ligula venenatis et.

    Fusce sit amet faucibus lorem. Nullam euismod justo non purus ultricies, et tincidunt nulla ultricies. Ut congue ultricies tortor vitae consequat. Donec vel ante ut quam pellentesque iaculis sit amet sed ipsum. Nulla dapibus elit nec purus interdum, eget aliquet nulla iaculis. Integer volutpat libero sed felis tempus, ac posuere nisi cursus. Mauris nec tortor sit amet magna eleifend vehicula. Proin sit amet neque nec justo feugiat bibendum. Duis vitae mauris id sapien interdum dignissim at ac est. Ut id justo lorem. Quisque ultrices turpis sed augue mattis, eu vestibulum nisl egestas. In semper ligula id nibh aliquam, nec fermentum elit pharetra. Nullam scelerisque justo sed sem vehicula faucibus. Phasellus vitae turpis ac sapien viverra dictum ac et velit. Curabitur nec quam vel enim aliquet feugiat. Aenean sed ligula eu metus tristique mattis a in tortor.
    `);
});
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
];

// GET /users - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
