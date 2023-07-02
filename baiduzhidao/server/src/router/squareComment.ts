import Router from 'koa-router';
import {
  getSquareComments,
  getSquareComment,
  createSquareComment,
  updateSquareComment,
  deleteSquareComment
} from '../controller/squareCommentController';

const router = new Router();

router.get('/squareComment', getSquareComments);
router.get('/squareComment/:id', getSquareComment);
router.post('/squareComment', createSquareComment);
router.put('/squareComment/:id', updateSquareComment);
router.delete('/squareComment/:id', deleteSquareComment);

export default router;