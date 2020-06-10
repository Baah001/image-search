const express = require('express');
const app = express();
const port = process.env.PORT;
const router = express.Router();
const Filter = require('bad-words');


app.use(express.json());

app.use(require('body-parser').urlencoded({ extended: true }));

router.post('/server/is-profanity', async (req, res) => {
  const filter = new Filter();
  const body = req.body;
  console.log('hola', body);
  // filter.isProfane()
  //   res.status(201).send({user, token});
});

app.listen(port, () => {
  console.log("server is up on port: " + port);
});
