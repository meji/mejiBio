const express = require("express");
const router = express.Router();
const Bio = require("../../models/Bio");


router.get("/", async (req,res)=>{
    try {
        const response = await Bio.find(Bio);
        return res.status(200).json({data: response})
    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Hubo un error"});
    }
});

module.exports = router;