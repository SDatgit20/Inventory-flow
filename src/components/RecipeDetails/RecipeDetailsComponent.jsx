import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemService from '../../service/ItemService';
import './recipeDetails.css';

const ItemDetailsComponent = () => {
  const { name } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    ItemService.getItemByName(name)
      .then((res) => {
        const index = res.data.length - 1;
        setItem(res.data[index]);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [name]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-details-container">
      <div className="item-image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="item-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="watch-on-youtube-button">
          <a href={item.youtubeUrl} target="_blank" rel="noopener noreferrer">
            <button>Watch on YouTube</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsComponent;
