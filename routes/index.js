import express from "express";

const router = express.Router();

import users from './users.js';
import comments from './comments.js';

router.get('/', (req, res) => {
    res.send("hello world")
});

router.use('/users', users);
router.use('/comments', comments);

export default router;