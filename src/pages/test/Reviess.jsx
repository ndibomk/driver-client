// import React, { useState } from 'react';
// import axios from 'axios';

// const ReviewForm = ({ productId }) => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState('');
// console.log(rating);
//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmitReview = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(`http://localhost:5000/products/rating/${productId}`, {
//         rating,
//         comment,
//       });

//       const { review, numReviews, rating: averageRating } = response.data;

//       // Reset form fields
//       setRating(0);
//       setComment('');

//       console.log('Review submitted successfully:', review);
//       console.log('Number of reviews:', numReviews);
//       console.log('Average rating:', averageRating);
//     } catch (error) {
//       setError('An error occurred while submitting the review.');
//       console.error('Error submitting the review:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Submit a Review</h3>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmitReview}>
//         <div>
//           <label>Rating:</label>
//           <select value={rating} onChange={(e) => handleRatingChange(parseInt(e.target.value))}>
//             <option value={0}>Select</option>
//             <option value={1}>1 star</option>
//             <option value={2}>2 stars</option>
//             <option value={3}>3 stars</option>
//             <option value={4}>4 stars</option>
//             <option value={5}>5 stars</option>
//           </select>
//         </div>
//         <div>
//           <label>Comment:</label>
//           <textarea value={comment} onChange={handleCommentChange} />
//         </div>
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };

// export default ReviewForm;

import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/products/rating/6468c68050c7c525f7c18f76`, {
        rating,
        comment
      });

      setMessage(response.data.message);
      setRating(0);
      setComment('');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
