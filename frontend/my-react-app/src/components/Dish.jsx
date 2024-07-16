import React from 'react';
import axios from 'axios';

const Dish = ({ dish, onToggle }) => {
  const handleToggle = async () => {
    try {
      await axios.put(`http://localhost:5000/api/dishes/${dish._id}/toggle`);
      onToggle(dish._id);
    } catch (error) {
      console.log('Error toggling dish:', error);
    }
  };

  return (
    <div className="dish">
      <img src={dish.imageUrl} alt={dish.dishName} />
      <h3>{dish.dishName}</h3>
      <p>{dish.isPublished ? 'Published' : 'Unpublished'}</p>
      <button onClick={handleToggle}>
        {dish.isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

export default Dish;

