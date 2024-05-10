//backend/routes/student.route.js
let mongoose = require("mongoose"),
	express = require("express"),
	router = express.Router();

const { json } = require("body-parser");
// Student Model
let studentSchema = require("../models/Student");


// Create Students
router.post("/create-student",
	(req, res, next) => {
		studentSchema.create(req.body)
			.then((result) => {
				res.send({ msg :'Added Successfully' })
			})
			.catch((err) => {
				res.send({ msg :'Not Added Successfully' })
			})
	});


// READ Students
router.get("/", async (req, res, next) => {
	try {
	  const data = await studentSchema.find();
	  res.json(data);
	} catch (error) {
	  next(error);
	}
  });

// UPDATE student
router.get("/update-student/:id", async (req, res, next) => {
		try {
			const data = await studentSchema.findById(req.params.id);
			res.json(data);
		  } catch (error) {
			next(error);
		  }
	});

// Update Student Data
router.put("/update-student/:id", async (req, res, next) => {
		try {
			const data = await studentSchema.findByIdAndUpdate(req.params.id,{$set: req.body,});
			res.json(data);
			console.log("Student updated successfully !");
		  } catch (error) {
			next(error);
		  }
	});
// Delete Student
router.delete("/delete-student/:id",
	(req, res, next) => {
			studentSchema.findOneAndDelete(req.params.id)
			.then((result) => {
				res.status(200).json({
					msg: result,
				});
			})
			.catch((err) => {
				return next(err);
			})
	});

module.exports = router;
