const express = require('express');
require('dotenv').config();
const dalle = require('./routes/dalleGeneration');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/promptImage', dalle);

const PORT = process.env.port;

app.get('/', (req, res) => {
    res.send('Hello World from 5000!');
}
);

// app.listen(PORT, () => {
//     console.log(`Text-to-Image Generation open at http://localhost:${PORT}`);
// }
// );