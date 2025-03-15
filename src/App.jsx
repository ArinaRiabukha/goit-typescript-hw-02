import { useEffect, useState } from "react";
import { fetchPhotos } from "./services/api";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
    const [query, setQuery] = useState('');
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [targetImage, setTargetImage] = useState(null);

    useEffect(() => {
        if (!query.trim()) return; 
      
        const getData = async () => {
          try {
            setLoading(true);
            const urls = await fetchPhotos(query, page); 
            setPhotos(prev => [...prev, ...urls]); 
          } catch {
            setIsError(true);
          }
            finally{
            setLoading(false);
          }
        };
      
        getData();
      }, [query, page]);
    
      const handleSetQuery = newQuery => {
        setQuery(newQuery);
        setPhotos([]);
        setPage(1);
      };

      const openModal = (imageUrl) => {
        setTargetImage(imageUrl);
        setModalIsOpen(true);
      };
      

      const closeModal = () => {
        setTargetImage(null);
        setModalIsOpen(false);
      };

    return (
      <>
      <Toaster/>
      <SearchBar onSubmit={handleSetQuery} />
      <ImageGallery photos={photos} openModal={openModal}/>
      {isError && <ErrorMessage/>}
      {loading && <Loader/>}
      {photos.length > 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={targetImage}
      />
      </>
    );
  };
  
  export default App;