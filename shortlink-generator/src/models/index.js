const mongoose = require("mongoose");
const {Linkshortner} = require("./linkshortner")
const {Count}= require("./count")
module.exports = {
    Linkshortner: mongoose.model("Linkshortner",Linkshortner),
    Count: mongoose.model("Count",Count )
}