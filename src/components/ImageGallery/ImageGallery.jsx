import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

const ImageGallery = ({photos, openModal}) =>{
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