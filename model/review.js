// import mongoose from 'mongoose';

// const reviewSchema = new mongoose.Schema({
//   rating: {
//     type: Number,
//     required: true,
//     min: 1,
//     max: 5,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// const Review = mongoose.model('Review', reviewSchema);

// export default Review;


// import mongoose from 'mongoose';

// const reviewSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phoneNumber: { type: String, required: true },
//   rating: { type: Number, required: true },
//   description: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now } // Default timestamp field

// }, { timestamps: true });

// const Review = mongoose.model('Review', reviewSchema);

// export default Review;

    import mongoose from 'mongoose';

    const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    tlName: { type: String, required: true }, // New field for Team Leader name
    createdAt: { type: Date, default: Date.now } // Default timestamp field
    }, { timestamps: true });

    const Review = mongoose.model('Review', reviewSchema);

    export default Review;
