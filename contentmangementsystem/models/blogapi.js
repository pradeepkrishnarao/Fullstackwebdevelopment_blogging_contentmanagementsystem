var mongoose = require('mongoose');

    var BlogSchema = new mongoose.Schema({
    category: String,
    title: String,
    overview: String,
    content: String,
    blog_date: { type: Date}
});

module.exports = mongoose.model('Blog', BlogSchema);