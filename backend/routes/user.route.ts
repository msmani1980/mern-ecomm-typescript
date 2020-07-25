import { Router } from 'express';
import { storeUser } from '../controllers/user.controller';

const router = Router();

router.post('/', storeUser);

export default router;
