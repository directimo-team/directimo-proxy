const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 4321;

app.use("/resales", createProxyMiddleware({ target: "https://webapi.resales-online.com/V6", changeOrigin: true }));

app.use(
	"/inmobalia",
	createProxyMiddleware({
		target: "https://api.inmobalia.com/rest",
		changeOrigin: true,
		headers: {
			"x-token":
				"eyJhbGciOiJIUzUxMiJ9.eyJhcHAiOiJhcGlfZGlyZWN0aW1vIiwic2VjcmV0X2tleSI6ImpYbW1IdnhsdFM2bFBHVXk1RHJvU1U3TE9PSWlHdiIsInN1YiI6IkRpcmVjdGltbyJ9.-8R_rF-00CtylbdBfZFHiH1E5xhTT1ZN4oPnnRBW1JptVadt3tXgX2wvNTxRYmGOE2U2lzh-xT6j8I-1tC8SLw",
		},
	})
);

app.get("/ping", (req, res) => {
	res.send("pong");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
