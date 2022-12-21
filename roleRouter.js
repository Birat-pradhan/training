const express = require('express');
const router = express.Router();

const Role =require('./Role');

router.get('/role', (req, res) => {
    res.json(Role.findAll());
});

router.post('/role', (req, res) => {
    const role = new Role(req.body);
    role.save();
    res.json(role);
});

router.delete('/role/:id', (req, res) => {
    Role.deleteById(req.params.id);
    res.send("Role Deleted");
});


module.exports = router;