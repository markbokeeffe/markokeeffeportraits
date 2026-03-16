export const PresentationGallery = () => {
  return (
    <div className="presentation-gallery">
      <h1>Gallery of Presentation Moments</h1>
      <div className="gallery">
        <figure>
          <img src="/path/to/image1.jpg" alt="Presentation Moment 1" />
          <figcaption>Presentation Moment 1 Caption</figcaption>
        </figure>
        <figure>
          <img src="/path/to/image2.jpg" alt="Presentation Moment 2" />
          <figcaption>Presentation Moment 2 Caption</figcaption>
        </figure>
        <!-- Add more images as needed -->
      </div>
    </div>
  );
};
