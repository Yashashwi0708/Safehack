const web = require('../models/req')

const getRequest = async(req, res)=>{
    try { 
        const message = web.create(req.body)
        res.status(201).json({message})
    }
    catch(err){
        res.status(500).json({msg:{err}});
    }
    // res.send('Hello')
}

const postResponce = async(req, res)=>{ 
    try {
        const message = req.body;
        res.status(201).json({message})
    }
    catch(err){
        res.status(500).json({msg:{err}});
    }
}

module.exports = {getRequest, postResponce};