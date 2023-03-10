const express = require('express');
const bodyParser = require('body-parser');
const { logger, configs } = require('./logs');
const Joi = require('joi');

const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const logFileNames = configs.Logs.map(i => i.fileName);
const warningLevels = ["info", "error", "warn"];

app.post('/frontEnd/logs', async (req, res) => {
  const schema = Joi.object({
    routePath: Joi.string(),
    type: Joi.string().required().valid(...logFileNames),
    warningLevel: Joi.string().required().valid(...warningLevels),
    content: Joi.any(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    const errorMessage = error.details.map(i => i.message).toString();
    return res.status(400).send(errorMessage);
  } else {
    const text = `${value?.routePath} ${value?.content}`;
    logger[value.type][value.warningLevel](text);
    return res.status(200).send('success');
  }
});

app.listen(3000);
