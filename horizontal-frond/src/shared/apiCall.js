import {
    BACKEND_URL, 
    JWT_HEADER, 
    Messages 
} from "../shared/constans";
import axios from "axios";

  // eslint-disable-next-line import/no-anonymous-default-export
export default {
    
    post: async (controller, method, data, config = {}) => {
        const URL = `${
            BACKEND_URL
        }/${controller}/${method}`;
        return await axios.post(URL, data, { ...JWT_HEADER(), ...config });
    },

    get: async (controller, method,  config = {}) => {
        const URL = `${
            BACKEND_URL
        }/${controller}/${method}`;
        return await axios.get(URL, { ...JWT_HEADER(), ...config });
    },
    delete: async (controller, method,  config = {}) => {
        const URL = `${
            BACKEND_URL
        }/${controller}/${method}`;
        return await axios.delete(URL, { ...JWT_HEADER(), ...config });
    },
    put: async (controller, method, data, config = {}) => {
        const URL = `${
            BACKEND_URL
        }/${controller}/${method}`;
        return await axios.put(URL, data, { ...JWT_HEADER(), ...config });
    },
    handleCatch: (error) => {
        const response = { sucess: false };
        if (!error.response || error.response.status === 404)
            response.message = Messages.error404;
        else if (error.response.status === 500) {
            if (error.response.data.message)
            response.message = error.response.data.message;
        } else if (error.response.status >= 400) {
            if (error.response.data.message)
            response.message = error.response.data.message;
        }
        return response;
    },

};