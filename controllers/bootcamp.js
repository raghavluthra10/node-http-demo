const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('../middleware/async');


// @desc      Get all bootcamps
// @route     Get /api/v1/bootcamps
// @access    Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    // try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    });
});


// @desc      Get single bootcamp
// @route     Get /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if(!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}, 404`));
    };

    res.status(200).json({ success: true, data: bootcamp });
});


// @desc      Create new Bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    });

});


// @desc      Update Bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { 
        new: true, // this will show the new updated data
        runValidators: true // this will run mongoose validators on update
        })

    if(!bootcamp) {
        // return res.status(400).json({ success: false, msg: "Bootcamp doesn't exists" })
        return next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}, 404`));
    };

    res.status(200).json({ success: true, msg: `Update bootcamp with ${req.params.id} Id`, data: bootcamp });
     
});


// @desc      Delete Bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!bootcamp) {
        // return res.status(400).json({ success: false, msg: "Bootcamp doesn't exists" })
        return next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}, 404`));
    };

    res.status(200).json({ success: true, msg: `Delete bootcamp with ${req.params.id} Id`, data: bootcamp });
});