import express from 'express';
import { createReview, getReviews,deleteReview } from '../controller/reviewController.js';

const router = express.Router();

router.post('/reviews', createReview);
router.get('/reviews', getReviews);
router.delete('/reviews/:id', deleteReview);


export default router;
