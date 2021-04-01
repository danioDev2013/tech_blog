const { Post } = require('../models');

const postData = [
    {
        // 1
        "post_text": "How many programmers does it take to change a lightblub? None - it's a hardware problem.",
        "user_id": 1
    },
    {
        // 2
        "post_text": "I just finished my second group project at UC Berkley Coding Boot Camp!",
        "user_id": 2
    },
    {
        // 3
        "post_text": "Does anyone know how to implement infinite scrolling?!",
        "user_id": 3
    },
    {
        // 4
        "post_text": "Working with handlebars is like pulling teeth.",
        "user_id": 4
    }, 
    {
        // 5
        "post_text": "Has any used multer before? How does it work?",
        "user_id": 2
    }
    ,  
    {
        // 6 
        "post_text": "What are some good npm resources for a project? I need a new package to use for a project.",
        "user_id": 5
    },
    {
        // 7
        "post_text": "Should I join a coding boot camp or go for my CS degree?",
        "user_id": 4
    },
    {
        // 8
        "post_text": "3 Database SQL walked into a bar. A little while later... they walked out because they couldn't find a table.",
        "user_id": 3
    },
    {
        // 9
        "post_text": "Just accepted a new job at Google! I am excited to start next week!",
        "user_id": 1
    },
    {
        // 10 
        "post_text": "What are some good job boards for junior developers?",
        "user_id": 4
    },
    {
        // 11
        "post_text": "If you need to watch some tutorials on Youtube, I highly recommend Web Simplified and Programming with Mosh! :)",
        "user_id": 3
    },
    {
        // 12
        "post_text": "Harvard's Into to Computer Programming is a must!",
        "user_id": 2
    },
    {
        // 13
        "post_text": "What's a computer's favorite beat. An algo-rhythm. I crack myself up lol",
        "user_id": 5
    },
    {
        // 14
        "post_text": "How do you guys keep yourself focused during a coding boot camp?",
        "user_id": 1
    }
];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;