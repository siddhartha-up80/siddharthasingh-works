const UNSPLASH_BASE_URL = "https://api.unsplash.com/search/photos";

export const getUnsplashPhotos = async (query = "nature", perPage = 10) => {
  try {
    const response = await fetch(
      `${UNSPLASH_BASE_URL}?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS}`, // Using the access key
        },
      }
    );

    if (!response.ok) {
      console.log("Error fetching images from Unsplash:", response.statusText);
      throw new Error(`Error fetching images: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results; // 'results' array contains the images in the Unsplash response
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    return [];
  }
};
