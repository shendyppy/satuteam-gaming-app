const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`Listening to the PORT: ${PORT}`);
});
