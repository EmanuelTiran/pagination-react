const { connect } = require("./DL/connectToMongo");
const express = require("express"),
    app = express();
// require("./DL/test_data").go()
require("dotenv").config() // 
app.use(require('cors')());
app.use(express.json())

app.use("/user", require('./routes/user.router'))

connect();


app.listen(5050, () => console.log("The server is runnig on port 5050..."));