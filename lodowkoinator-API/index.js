const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 5000;

const uri =
  "mongodb+srv://root:SILNEhaslo123@cluster0.fegii.mongodb.net/cluster0?retryWrites=true&w=majority";

app.use("/recipes", jsonParser, async (req, res) => {

  // if(req.body == null || JSON.stringify(req.body) == "{}"){
  //   res.status(404).send("Pusta lista skladnikow");
  // } else {

    // let skladnikiTab = req.body.map((skladnik) => {
    //   return skladnik.name;
    // });
    // console.log(skladnikiTab);
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("recipesDB");

    const collection = await db.collection("recipes").find({}).toArray();

    // console.log(collection);

    client.close();

    res.json(collection).send();
  // }
});

app.listen(PORT, () => {
  console.log(`Server up and listening on ${PORT}`);
});
