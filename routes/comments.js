import express from 'express';
import controller from '../controllers/commentscontroller.js';

const router = express.Router();

router.get('/list', controller.commentList)
router.post('/create', controller.getComments)

export default router;