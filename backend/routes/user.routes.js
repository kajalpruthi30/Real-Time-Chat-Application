import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import {getUsersForSidebar} from '../controllers/user.controller.js';

const router = express.Router();

// protectRoute - only authenticated users can send message
router.get('/', protectRoute, getUsersForSidebar);

export default router;