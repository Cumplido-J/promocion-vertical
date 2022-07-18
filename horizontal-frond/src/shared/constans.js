export const JWT_TOKEN = "accessToken";
export const BACKEND_URL = (process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api/v1");

export const Messages = {
  error404: "No se ha encontrado el recurso solicitado.",
};

export function JWT_HEADER() {
    let config = {
      headers: { Authorization: "" },
    };
  
    if (localStorage.getItem(JWT_TOKEN))
      config.headers.Authorization = `Bearer ${localStorage.getItem(JWT_TOKEN)}`;
    return config;
  }
  