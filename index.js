const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.port;

app.get('/', (req, res) => {
    res.send('Hello World from 5000!');
}
);

app.listen(PORT, () => {
    console.log(`Text-to-Image Generation open at http://localhost:${PORT}`);
}
);