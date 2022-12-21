const express = require('express');
const router = express.Router();

const User =require('./User');

router.get('/user', (req, res) => {
    res.json(User.findAll());
});

router.post('/user', (req, res) => {
    const user = new User(req.body);
    user.save();
    res.json(user);
});

router.delete('/user/:id', (req, res) => {
    User.deleteById(req.params.id);
    res.send("User Deleted");
});


module.exports = router;