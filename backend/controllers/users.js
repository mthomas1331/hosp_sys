const User = require("../models/User.js");

exports.getUsers = async(req, res, next) => {
    try {
        const users = await User.find();
        return res.status(201).json({
            success: true, 
            data: users
        });
    } catch (err) {
        return res.status(404).json({
            success: false, 
            error: err
        });
        
    }
}

exports.createUser = async(req, res, next) => {
    try {
        const user = req.body;
        await User.create(user);
        return res.status(201).json({
            success: true, 
            data: user
        });
    } catch (err) {
        return res.status(400).json({
            success: false, 
            error: err
        });
        
    }
}

exports.getUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(201).json({
            success: true, 
            data: user
        });
    } catch (err) {
        return res.status(404).json({
            success: false, 
            error: err
        });
    }
}

exports.deleteUser = async(req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        //await user.deleteOne();

        return res.status(201).json({
            sucess: true, 
            data: user
        });
    } catch (err) {
        return res.status(404).json({
            sucess:false, 
            error: err
        });
    }
}

exports.updateUser = async(req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
        return res.status(201).json({
            success: true, 
            error: user
        });
    } catch (err) {
        return res.status(404).json({
            success: false, 
            error: err
        });
    }
}