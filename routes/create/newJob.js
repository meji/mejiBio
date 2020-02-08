const express = require("express");
const router = express.Router();
const NewJob = require("../../models/Job");


router.post("/", async (req,res)=>{
    try {
        const {name, description, company, dateInit, dateEnd} = req.body;
        const job = new NewJob({name, description, company, dateInit, dateEnd});
        await job.save();
        return res.status(200).json({message: "Trabajo creado correctamente"})
    }catch (error) {
        console.log(error);
        return res.status(200).json({error: "Hubo un error"});
    }


});

module.exports = router;