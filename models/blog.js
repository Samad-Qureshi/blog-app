const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    title:{
        type: String,
        reqiired: true,
    },
    snippet:{
        type: String,
        reqiired: true,
    },
    body:{
        type: String,
        reqiired: true,
    },
},{timestamps: true})

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;