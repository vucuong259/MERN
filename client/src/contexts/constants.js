export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:5000/api"
    : "somedeployedURL";

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern'