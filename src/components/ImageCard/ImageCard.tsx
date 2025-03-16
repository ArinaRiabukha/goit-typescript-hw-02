import s from "./ImageCard.module.css"

interface ImageCardProps {
  item: {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
  };
  openModal: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
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