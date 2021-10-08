// if (process.env.NODE_ENV !== "production") {
// 	require("dotenv").config();
// }

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

const router = require("./routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
	console.log(`Listening to the PORT: ${PORT}`);
});
