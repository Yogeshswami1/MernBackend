// import Review from '../models/review.js';
import Review from "../model/review.js";

export const createReview = async (req, res) => {
    const { name, email, phoneNumber, rating, description,tlName } = req.body;
  
    try {
      const newReview = new Review({ name, email, phoneNumber, rating, description ,tlName});
      await newReview.save();
      res.status(201).json(newReview);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // Sort by descending order of createdAt
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteReview = async (req, res) => {
    const { id } = req.params;
  
    try {
      const review = await Review.findByIdAndDelete(id);
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.json({ message: 'Review deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };