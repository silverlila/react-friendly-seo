export const config = {
  endpoint:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8001/api"
      : "https://json-server-seo.herokuapp.com/api",
};
