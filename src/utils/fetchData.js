export const workoutOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const ytOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (response.status === 429) {
      return { error: 429 };
    }
    if (!response.ok) {
      return { error: true };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en fetchData:", error);
    return { error: true };
  }
};
