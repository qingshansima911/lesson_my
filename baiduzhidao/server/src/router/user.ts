import Router from 'koa-router';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../controller/userController';

const router = new Router();

router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;