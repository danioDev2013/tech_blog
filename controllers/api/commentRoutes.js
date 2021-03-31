const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'blog_content',
            'user_id',
            'blog_id'
        ],
        order: [['created_at', 'DESC']]
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// POST - create a comment ** OLD CODE
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            content_text: req.body.comment_text,
            blog_id: req.body.blog_id,
            user_id: req.session.user_id
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                res.status(400).json(err);
            });
    }
});

// PUT - update a comment
router.put('/:id', withAuth, (req, res) => {
    Comment.update(req.body,
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbCommentData => {
            if (!dbCommentData[0]) {
                res.status(404).json({ message: "We couldn't find that comment!" });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// DELETE a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: "We couldn't find that comment!" });
            return;
        }
        res.json(dbCommentData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;