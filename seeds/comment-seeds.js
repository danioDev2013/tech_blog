
const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Wow, congrats on the good news!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Good luck on your adventure!",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "Thank you for your comments!",
        user_id: 1,
        post_id: 1
    }
];





const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;