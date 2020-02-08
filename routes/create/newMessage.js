const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");


router.post("/", async (req,res)=>{
    try {
        const {firstname, lastname, telnum, email, agree, contactType, messageText} = req.body;
        const messageSaved = new Message({firstname, lastname, telnum, email, agree, contactType, messageText});
        await messageSaved.save();
        return res.status(200).json({message: "Mensaje guardado correctamente"})
    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Hubo un error"});
    }



});

module.exports = router;