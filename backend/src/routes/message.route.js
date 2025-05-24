import exress from 'express'

import { protectRoute } from '../middlewares/auth.protect.js';
import { getMessages, getUsersForSidebar, sendMessages } from '../controllers/message.controller.js';
const router = exress.Router();

router.get('/users', protectRoute, getUsersForSidebar)
router.get('/:id',protectRoute,getMessages);
router.post('/send/:id',protectRoute,sendMessages);

export default router;