import axios from "axios";

class Helpers {
    async axiosGet(url: string) {
        try {
            console.log("Axios: Getting data from ", url);
            const { data } = await axios.get(url);
            return data;
        } catch (error: any) {
            error = error && error.response ? error.response.data : error.cause ? error.cause : error;
            console.log("Axios: Error getting data ", error);
        }
    }
}

export const helpers = new Helpers();