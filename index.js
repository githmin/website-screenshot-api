require("dotenv").config();
const express = require("express");
const app = express();
const pupperteer = require("puppeteer");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Web Screenshot API by Githmin Jay");
});

app.get("/api/v1/ss", async (req, res) => {
  const browser = await pupperteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    headless: false,
  });
  const page = await browser.newPage();
  req.body.width && req.body.height
    ? await page.setViewport({
        width: req.body.setViewport,
        height: req.body.height,
      })
    : await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(req.body.website);
  const ss = await page.screenshot();
  browser.close();
  res.send(ss);
});

app.listen(process.env.port, () => {
  console.log(`Server running on port ${process.env.port}`);
});
