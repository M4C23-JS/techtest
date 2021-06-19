const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
	console.log("sss'");
});

app.listen(process.env.PORT || 9060, () => console.log('Server running...'));
