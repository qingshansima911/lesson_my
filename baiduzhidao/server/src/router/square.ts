import Router from 'koa-router';
import {
  getSquares,
  getSquare,
  createSquare,
  updateSquare,
  deleteSquare
} from '../controller/squareController';

const router = new Router();

router.get('/square', getSquares);
router.get('/square/:id', getSquare);
router.post('/square', createSquare);
router.put('/square/:id', updateSquare);
router.delete('/square/:id', deleteSquare);

export default router;