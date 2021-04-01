const { User } = require('../models');

const userData = [
    {
        "username": "dataKing",
        "email": "king@gmail.com",
        "password": "password1",
        "github": "github.com/dataKing",
        "linkedin": "linkedin.com/dataKing",
        "bio": "Coding Bootcamp student, aspiring to be a web developer!"
    },
    {
        "username": "codingEnvy",
        "email": "dan@gmail.com",
        "password": "password2",
        "github": "github.com/dane",
        "linkedin": "linkedin.com/dane",
        "bio": "Entry level web developer specializing in front end development. Looking to network with other beginner devs!"
    },
    {
        "username": "infinitecoding",
        "email": "eddies@gmail.com",
        "password": "password3",
        "github": "github.com/infinitecode",
        "linkedin": "linkedin.com/eddies",
        "bio": "Based in the New York. Undergrad in CS."
    },
    {
        "username": "janeDoe",
        "email": "jane@gmail.com",
        "password": "password4",
        "github": "github.com/janeDoe",
        "linkedin": "linkedin.com/janelikescoding",
        "bio": "Into all things dev. Let's connect now!"
    },
    {
        "username": "marcilla",
        "email": "marcilla@gmail.com",
        "password": "password5",
        "github": "github.com/marcilla",
        "linkedin": "linkedin.com/marcilla",
        "bio": "Newly graduated coding boot camp alumni and army veteran. Looking for my next big opportunity!"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;