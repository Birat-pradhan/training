const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.json());
app.use(require('./userRouter'));
app.use(require('./roleRouter'));

app.all('*', (req, res) => {
    res.send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
});