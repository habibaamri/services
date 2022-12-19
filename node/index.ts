import express from "express";
const cors = require("cors");
const exceltojson = require("xlsx-to-json-lc");

const app = express();
const port = 3000;
app.use(cors());
const xlsxToJson = () =>
  new Promise((resolve) => {
    exceltojson(
      {
        input: "./assets/services.xlsx",
        output: "./assets/services.json",
        // sheet: "sheetname",  // specific sheetname inside excel file (if you have multiple sheets)
        lowerCaseHeaders: true, //to convert all excel headers to lowr case in json
      },
      (err: any, result: any) => {
        if (err) {
          console.error("err", err);
        } else {
          resolve(result);
        }
      }
    );
  });//=> catch

app.get("/services", async (req, res) => {
  try {
    const result = await xlsxToJson();
    return res.send(result);
  } catch (e) {
    // catch errors and send error status
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
