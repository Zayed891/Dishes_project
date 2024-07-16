import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const togglePublished = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/dishes/${id}/toggle`);
      fetchDishes();
    } catch (error) {
      console.error('Error toggling published status:', error);
    }
  };

  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <div key={dish._id} className="dish">
          <img src={dish.imageUrl} alt={dish.dishName} />
          <h3>{dish.dishName}</h3>
          <button onClick={() => togglePublished(dish._id)}>
            {dish.isPublished ? 'Unpublish' : 'Publish'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DishList;



