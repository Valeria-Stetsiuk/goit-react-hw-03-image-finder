import PropTypes from 'prop-types';


export const GalleryItem = ({ gallery, openModal }) => {
  return (
    <>
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} className="imageGalleryItem">
          <a href="#" onClick={() => {openModal({ src: largeImageURL, alt: tags }); }} rel="noreferrer" >
            <img className="imageGalleryItem-image" src={webformatURL} alt={tags} width="350"  />
          </a>
        </li>
      ))}
    </>
  );
};

GalleryItem.propTypes={
  gallery: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
}