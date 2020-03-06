/* Constant declaration */
const path = require("path");
const express = require("express");

const assetsDirectory = path.join(__dirname, "assets");
const cssDirectory = path.join(assetsDirectory, "css");
const htmlDirectory = path.join(assetsDirectory, "html");
const imgDirectory = path.join(assetsDirectory, "images");

/* Server variables */
var app = express();
app.use(express.static(assetsDirectory));
app.use(express.static(htmlDirectory));
app.use(express.static(imgDirectory));

/* Create server */
app.listen(3000);

/*Server routes*/
app.get("/about", (req, res) => {
	res.sendFile(`${htmlDirectory}/about.html`);
});

app.get("/help", (req, res) => {
	res.sendFile(`${htmlDirectory}/help.html`);
});

app.get("/weather", (req, res) => {
	res.send({
		location: "90210",
		temperature: ["Sunny", "Cold"]
	});
});
