import { Router } from 'express';
const router = Router();

import * as commentCtrl from '../controllers/comments.controllers';

router.get('/comments', commentCtrl.getComments);
router.get('/comments/:id', commentCtrl.getComment);
router.post('/comments', commentCtrl.createComment);
router.delete('/comments/:id', commentCtrl.deleteComment);
router.put('/comments/:id', commentCtrl.editComment);

export default router;