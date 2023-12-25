const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 4321;

app.use("/resales", createProxyMiddleware({ target: "https://webapi.resales-online.com/V6", changeOrigin: false }));

app.get("/ping", (req, res) => {
	res.send("pong");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
