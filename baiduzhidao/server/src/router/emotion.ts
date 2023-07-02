import Router from 'koa-router';
import {
  getEmotions,
  getEmotion,
  createEmotion,
  updateEmotion,
  deleteEmotion
} from '../controller/emotionController';

const router = new Router();

router.get('/emotion', getEmotions);
router.get('/emotion/:id', getEmotion);
router.post('/emotion', createEmotion);
router.put('/emotion/:id', updateEmotion);
router.delete('/emotion/:id', deleteEmotion);

export default router;