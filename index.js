const express = require("express");
const PORT = 3000;
const { fetchRouter } = require("./routes/fetchAPI");
const { formRouter } = require("./routes/form");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
/*
ZOSTAWIAM DLA POTOMNYCH, NIE MA SENSU SIE BAWIC W TO CO JEST PONIZEJ - ZMARNOWANE 2H ZYCIA
const jsonParser = bodyParser.json();
const urlencodedBodyParser = bodyParser.urlencoded({ extended: true });
//app.use(jsonParser);
*/
app.use("/data/json", fetchRouter);
app.use("/", formRouter);
app.listen(PORT, "localhost");
