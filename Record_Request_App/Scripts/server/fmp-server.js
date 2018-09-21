const express = require("express")
const request = require("request")
const cors = require("cors")
const apiServerHost = "https://urimroc.byu.edu/"
const app = express()
app.use(cors())
app.use("/", (req, res) => {
    const url = apiServerHost + req.url
    req.pipe(request(url)).pipe(res)
})
app.listen(process.env.PORT || 3000)
