const API_KEY = "46527075-6be8ab1df8f429bb065d037f3";
const BASE_URL = "https://pixabay.com/api/";

export const getPixabayPhotos = async (query = "images", perPage = 10) => {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching images: ${response.statusText}`);
    }
    const data = await response.json();
    return data.hits; 
  } catch (error) {
    console.error("Error fetching images from Pixabay:", error);
    return [];
  }
};
