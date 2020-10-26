const mongoose =  require("mongoose")

const ShortlinkSchema = mongoose.Schema({
    "userURL": {type: String, unique: true},
    "shortURL": {type:String, unique: true}
})

module.exports= {Linkshortner: ShortlinkSchema}