import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

interface ImageGalleryProps {
  photos: {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
  }[];
  openModal: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({photos, openModal}) =>{
    return(
        <ul className={s.list}>
	      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} openModal={openModal}/>
        </li>
      ))}
    </ul>

    );
}

export default ImageGallery;