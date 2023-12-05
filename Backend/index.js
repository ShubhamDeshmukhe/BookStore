const express = require("express");
const app = express();
const cors = require('cors');
const bookroute = require("./routes/bookroute");
require("./connection");

app.use(cors());

app.use(express.json());
app.use("/api",bookroute);

app.listen(4200,()=>{
    console.log("Server Started Successfully.")
})