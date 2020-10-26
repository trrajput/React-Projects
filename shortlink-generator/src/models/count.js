const mongoose =  require("mongoose")

const CountSchema = mongoose.Schema({
    "shortURL": {type: String, unique: true},
    "count": {type:Number, default: 0}
})

module.exports= {Count: CountSchema}