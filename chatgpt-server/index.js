const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//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
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);
app.post("/", async (req, res) => {
  const { chats } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: chats,
    max_tokens: 2000,
    temperature: 0.5,
  });
  res.json(response.data.choices[0].text)
});

app.get("/", (req, res) => {
  res.send("Hellow, world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//
