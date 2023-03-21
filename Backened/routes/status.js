const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Accept = require('../models/Accept');
const { body, validationResult } = require('express-validator');
const fetchngo = require('../middleware/fetchngo')
const Detail = require('../models/Details');

// ROUTE 1:  Get All the Details using: GET "/api/status/getuser". login required
// router.get('/statusdetails', fetchuser, async (req, res) => {
//     try {
//         const details = await Detail.find({ user: req.user.id });
//         res.json(details);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     } 
// })

// ROUTE 2:  Add a new Detail using: POST "/api/status/addstatus". login required
router.put('/addstatus/:id', fetchngo, [
    body('status', 'Status must be there').exists(),
], async (req, res) => {
    try {
        const { status } = req.body;
        const newNote={};
        if(status){newNote.status=status};

        let note = await Detail.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }

        note = await Detail.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
        // res.json(note); // This is also true
    } catch (error) {
        console.log(error.mesage);
        res.status(500).send("Internal Server Error");
    }
    //     // if there are errors, return Bad request and the errors
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() });
    //     }
    //     const acc = new Accept({
    //         status, ngo: req.ngo.id
    //         // status
    //     })
    //     const savedDetail = await acc.save();
    //     res.json(savedDetail);

    // } catch (error) {
    //     console.error(error.message);
    //     res.status(500).send("Internal Server Error");
    // }
})

module.exports = router;