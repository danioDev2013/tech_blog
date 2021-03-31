const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all blog posts
router.get('/', (req, res) => {
    console.log('req.session from blog-routes line 6:', req.session);
    Blog.findAll({
        attributes: [
            'id',
            'title',
            'creator_id',
            'blog_content',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username', 'twitter', 'github']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username', 'twitter', 'github']
                }
            },
        ]
    })
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET - single blog post by ID
router.get('/:id', (req, res) => {
    Blog.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'creator_id',
            'blog_content',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username', 'twitter', 'github']
            },
            {
                model: Comment,
                attributes: ['blog_content', 'user_id', 'blog_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username', 'twitter', 'github']
                }
            }
        ]
    })
        .then(dbBlogData => {
            if (!dbBlogData) {
                res.status(404).json({ message: "We couldn't find that blog post!" });
            }
            res.json(dbBlogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST - create a blog post
router.post('/', withAuth, (req, res) => {
    Blog.create({
        title: req.body.title,
        content: req.body.blog_content,
        creator_id: req.session.user_id
    })
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT - update a blog post
router.put('/:id', withAuth, (req, res) => {
    Blog.update(
        {
            title: req.body.title,
            content: req.body.blog_content
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbBlogData => {
            if (!dbBlogData) {
                res.status(404).json({ message: "We couldn't find that blog post!" });
                return;
            }
            res.json(dbBlogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE - delete a blog post
router.delete('/:id', withAuth, (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBlogData => {
            if (!dbBlogData) {
                res.status(404).json({ message: "We couldn't find that blog post!" });
                return;
            }
            res.json(dbBlogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;