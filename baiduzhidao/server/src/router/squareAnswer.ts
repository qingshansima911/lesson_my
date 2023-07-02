import Router from 'koa-router';
import {
  getSquareAnswers,
  getSquareAnswer,
  createSquareAnswer,
  updateSquareAnswer,
  deleteSquareAnswer
} from '../controller/squareAnswerController';

const router = new Router();

router.get('/squareAnswer', getSquareAnswers);
router.get('/squareAnswer/:id', getSquareAnswer);
router.post('/squareAnswer', createSquareAnswer);
router.put('/squareAnswer/:id', updateSquareAnswer);
router.delete('/squareAnswer/:id', deleteSquareAnswer);

export default router;