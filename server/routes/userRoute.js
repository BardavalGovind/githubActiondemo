const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/', async (req, res)=>{
    try{
        const {name, email} = req.body;
        const user = new User({ name, email });
        await user.save();
        res.status(201).json({ message: 'user saved successfully', user });
    }
    catch(error){
        console.error('error saving user: ', error.message);
    }
});

router.get('/', async (req, res)=>{
     try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports =  router;