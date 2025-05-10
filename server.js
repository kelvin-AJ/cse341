const express = require("express")
const app = express();
const router = require("./routes")

app.use("/", router)

const port = 3000
app.listen(process.env.PORT || port)
console.log("We are Live and Listening at port: " + port)