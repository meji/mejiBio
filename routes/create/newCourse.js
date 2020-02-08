const express = require("express");
const router = express.Router();
const NewCourse = require("../../models/Course");


router.post("/", async (req,res)=>{
    try {
        const {name, description, school, dateInit, dateEnd} = req.body;
        const course = new NewCourse({name, description, school, dateInit, dateEnd});
        await course.save();
        return res.status(200).json({message: "Curso creado correctamente"})
    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Hubo un error"});
    }



});

module.exports = router;