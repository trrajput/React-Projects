const {Linkshortner, Count } = require("../models");
const shortid = require("shortid");
const count = require("../models/count");
exports.shortenurl = async (req,res) => {
    try{
        const url = await Linkshortner.findOne({userURL: req.body.url})
        if(url)
            return res.send({message: "Url already shortened..."})
        obj =new Linkshortner({
            userURL:req.body.url,
            shortURL: shortid.generate()
        })
        await obj.save()
        const shortlink = await Linkshortner.findOne({ userURL:req.body.url})
        var1 = new Count({
            shortURL: shortlink.shortURL,
            count: 0
        })
        await var1.save()
        res.send({message: "link successfully shortened...", urls: obj})
    }catch(ex){
        console.log(ex)
        res.send({message: "internal servor error"})
    }
}
exports.count = async (req,res) => {
    try{
        const count = await Count.findOne({shortURL: req.params.id.toString()})
        if(!count) return res.send({message:"invalid URL"})
        count.count++
        count.save()
        const site = await Linkshortner.findOne({shortURL:req.params.id})
        res.redirect(site.userURL)
    }catch(ex){
        console.log(ex)
        res.send({message:"internal server error"})
    }
}