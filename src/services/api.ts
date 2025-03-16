import axios from "axios";

const ACCESS_KEY = "7sS9uP6GNbkpOnb8fhpFlQTRwwG8Lzzc-eTsSTE18Po";

axios.defaults.headers.common = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

interface Photos {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
    user: {
      name: string;
      portfolio_url: string | null;
    };
  }

  interface FetchPhotosResponse {
    results: Photos[];
  }

export const fetchPhotos = async (query: string, page: number): Promise<Photos[]> => {
    const response = await axios.get<FetchPhotosResponse>(`https://api.unsplash.com/search/photos`, {
        params: {
            query,
            page,
            per_page: 12, 
        }
    });

    return response.data.results; 
};
