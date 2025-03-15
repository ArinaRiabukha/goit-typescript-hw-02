import axios from "axios";

const ACCESS_KEY = "7sS9uP6GNbkpOnb8fhpFlQTRwwG8Lzzc-eTsSTE18Po";

axios.defaults.headers.common = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

export const fetchPhotos = async (query, page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            query,
            page,
            per_page: 12, 
        }
    });

    return response.data.results; 
};
