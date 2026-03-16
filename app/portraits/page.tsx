import React from 'react';
import Masonry from 'react-masonry-css';
import './styles.css'; // Import your custom styles

const portraits = [
  // Array of portrait image URLs and titles should be populated here
];

const PortraitGallery = () => {
  return (
    <div className="gallery">
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {portraits.map((portrait, index) => (
          <div key={index} className="portrait-item">
            <img src={portrait.url} alt={portrait.title} onClick={() => expandImage(portrait.url)} />
            <h3>{portrait.title}</h3>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

const expandImage = (url) => {
  // Logic for expanding the image, perhaps using a modal
  alert(`Expand Image: ${url}`);
};

export default PortraitGallery;