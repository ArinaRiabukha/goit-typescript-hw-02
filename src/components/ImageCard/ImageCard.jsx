import s from "./ImageCard.module.css"

const ImageCard = ({ item, openModal }) => {
    return (
        <div className={s.photoContainer}>
        <img
        className={s.photo}
          src={item.urls.small}
          alt={item.alt_description}
          onClick={() => openModal(item.urls.regular)}
        />
      </div>
    );
  };
  export default ImageCard;