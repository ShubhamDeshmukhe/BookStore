const express = require("express");
const bookmodel = require("../model/bookModel");

router = express.Router();

// POST REQUEST //

router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newbook = new bookmodel(data);
        await newbook.save().then(() => {
            res.status(200).json({ message: "Book added successfully." })
        });
        //  res.send(newbook);
    } catch (error) {
        console.log({ error: "Something went wrong." });
    }
})

// GET REQUEST //

router.get("/getbook", async (req, res) => {
    try {
        const books = await bookmodel.find();
        res.send(books)
        // .then(()=>{
        //     res.status(200);
        // })
        
    } catch (error) {
        console.log(error);
    }
})

// GET REQUEST BY ID //

router.get("/getbook/:id", async (req, res) => {
    try {
        const books = await bookmodel.findById(req.params.id);
        res.send(books).then(()=>{
            res.status(200);
        })
    
    } catch (error) {
        console.log(error);
    }
})

// UPDATE REQUEST BY ID //

router.put("/updatebook/:id", async (req, res) => {
    const{bookname,author,description,image,price}= req.body;
    try {
        const update = await bookmodel.findByIdAndUpdate(req.params.id,{
            bookname,
            author,
            description,
            image,
            price
        });
        await update
        .save()
        .then(()=>res.json({message:"Data updated successfully."}))
    
    } catch (error) {
        console.log(error);
    }
})


// DELETE REQUEST BY ID //

router.delete("/delete/:id", async (req,res)=>{
    try {
        const deletebook = await bookmodel.findByIdAndDelete(req.params.id).then(()=>res.status(201).json({message:"Deleted book."}))
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;