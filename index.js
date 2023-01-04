import express from 'express';
import request from 'request';
import cors from 'cors';
import('dotenv/config');

const app = express();

app.use(cors(
    {
        origin: process.env.ORIGIN,
        credentials: true
    }
));

app.use((req, res, next) => {
    console.log(req.headers);
    next();
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/:anyPath", (req, res) => {
  console.log(req.url)
  const targetUrl = process.env.TARGET +"/"+ req.url;
  request(targetUrl).pipe(res);
});


app.listen(3000)
