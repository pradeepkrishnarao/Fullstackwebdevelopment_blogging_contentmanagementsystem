var express = require('express');
var router = express.Router();
var Blog = require('../models/blogapi.js');

/* GET ALL BLOGS */
router.get('/', function (req, res, next) {
    Blog.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE BLOG BY ID */
router.get('/:id', function (req, res, next) {
    Blog.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE BLOG */
router.post('/', function (req, res, next) {
    Blog.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE BLOG */
router.put('/:id', function (req, res, next) {
    Blog.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BLOG */
router.delete('/:id', function (req, res, next) {
    Blog.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;