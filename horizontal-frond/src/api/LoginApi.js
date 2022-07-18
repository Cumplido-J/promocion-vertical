import ApiCall from "../shared/apiCall";


const controller = "auth";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    authLogin: async (values) => {
        let response = { success: true };
    
        const method = "client_credential/access_token";
    
        try {
            const apiResponse = await ApiCall.post(controller, method, values);
            response.jwt = apiResponse.data;
        } catch (error) {
            response = ApiCall.handleCatch(error);
        }
    
        return response;
    },
    getUserProfile: async () => {
        let response = { success: true };
    
        const method = "userProfile";
    
        try {
            const apiResponse = await ApiCall.get(controller, method);
            response.userProfile = apiResponse.data;
           // if (response.userProfile.surveys) {
                //response.userProfile.surveys.forEach((survey) => {
                    //survey.startDate = dateToReadableDate(survey.startDate);
                    //survey.endDate = dateToReadableDate(survey.endDate);
                //});
            //}
        } catch (error) {
            response = ApiCall.handleCatch(error);
            response.userProfile = { userProfile: null };
        }
        return response;
    },
}