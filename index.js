const express = require("express");
const axios = require("axios");
const xml2js = require("xml2js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/last-played", async (req, res) => {
  try {
    const {
      user = process.env.USER || "ligmatv",
      label = req.query.label || "Last Played",
      color = req.query.color || "07bbbc",
      style = req.query.style || "flat",
      icon = req.query.icon || "lastdotfm",
      provider = req.query.provider || "shields",
    } = req.query;

    const API_KEY = process.env.API_KEY;
    if (!API_KEY) return res.status(500).send("Missing API Key");

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&limit=1&api_key=${API_KEY}&format=xml`;

    const response = await axios.get(url);
    const parser = new xml2js.Parser();

    parser.parseString(response.data, (err, result) => {
      if (err || !result || !result.lfm || !result.lfm.recenttracks || !result.lfm.recenttracks[0] || !result.lfm.recenttracks[0].track || !result.lfm.recenttracks[0].track[0]) {
        return res.status(500).send("Error parsing XML or missing data");
      }

      const track = result.lfm.recenttracks[0].track[0];
      const artist = track.artist[0]._ || track.artist[0];
      const song = track.name[0];

      let badgeUrl = "";
      switch (provider.toLowerCase()) {
        case "badgen":
          badgeUrl = `https://badgen.net/static/${encodeURIComponent(label)}/${encodeURIComponent(song)}%20by%20${encodeURIComponent(artist)}/${color}`;
          break;
        case "badgers":
          badgeUrl = `https://badgers.space/badge/${encodeURIComponent(label)}/${encodeURIComponent(song)}%20by%20${encodeURIComponent(artist)}/${color}`;
          break;
        case "shields":
        default:
          badgeUrl = `https://img.shields.io/static/v1?label=${encodeURIComponent(label)}&color=${color}&style=${style}&message=${encodeURIComponent(song)}%20by%20${encodeURIComponent(artist)}&logo=${icon}`;
          break;
      }

      res.redirect(badgeUrl);
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error fetching data");
  }
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app;