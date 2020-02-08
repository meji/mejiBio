const express = require("express");
const router = express.Router();
const NewProject = require("../../models/Project");


router.post("/", async (req,res)=>{
    try {
        const {name, charge, client, date, description, img, featured} = req.body;
        const project= new NewProject({name, charge, client, date, description, img, featured});
        await project.save();
        return res.status(200).json({message: "Proyecto creado correctamente"})
    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Hubo un error"});
    }



});

module.exports = router;