import LoginApi from "../api/LoginApi";
import { JWT_TOKEN } from "../shared/constans";

//import ActionAlert  from "../shared/ActionAlert";
//import { JWT_TOKEN } from "../shared/constans";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    authLogin: async (values) => {
        if (!values) values = {};
        if (!values.username) values.username = null;
        if (!values.password) values.password = null;

        const response = await LoginApi.authLogin(values);
        if (!response.success)
            console.log("Ha ocurrido un error", response.message);
        //ActionAlert;
        return response;
    },
    successfullLogin: (jwt) => {
        console.log("Sesión iniciada", "Sesión iniciada exitosamente");
        
        localStorage.setItem(JWT_TOKEN, jwt);
    },

    getUserProfile: async () => {
        const response = await LoginApi.getUserProfile();
    
        if (!response.success)
            console.log("Ha ocurrido un error", response.message);

        return response;
      },
}