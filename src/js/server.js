// server.js
/* const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use("/api", async (req, res) => {
  try {
    const apiUrl = "https://restcountries.com/v3.1/";

    console.log("Requested URL:", `${apiUrl}${req.url}`);
    // Check if the request method is GET or HEAD
    const isGetMethod = req.method === "GET" || req.method === "HEAD";

    // Exclude body for GET and HEAD requests
    const requestOptions = {
      method: req.method,
      headers: {
        ...req.headers,
      },
      // Exclude body for GET and HEAD requests
      body: isGetMethod ? null : JSON.stringify(req.body),
    };

    const apiResponse = await fetch(`${apiUrl}${req.url}`, requestOptions);
    const data = await apiResponse.json();

    res.json(data);
  } catch (error) {
    console.error("Proxy server error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
}); */
