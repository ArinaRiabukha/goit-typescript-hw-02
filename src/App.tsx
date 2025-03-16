import { useEffect, useState } from "react";
import { fetchPhotos } from "./services/api";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [targetImage, setTargetImage] = useState<string | null>(null);

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
    
      const handleSetQuery = (newQuery: string) => {
        setQuery(newQuery);
        setPhotos([]);
        setPage(1);
      };

      const openModal = (imageUrl: string) => {
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
        image={targetImage ?? ""}
      />
      </>
    );
  };
  
  export default App;