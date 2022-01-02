import { AxiosError } from "axios";
import axiosInstance from "../instance";
const imageService = {
    async getImages(): Promise<any> {
        try {
            const resp = await axiosInstance.get("/images");
            return resp.data;
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
            throw error;
        }
    },
    async evaluate(formData: FormData){
        try {
            const resp = await axiosInstance.post("/images/evaluate", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                   }       
            });
            return resp.data;
        } catch (error) {
            const err = error as AxiosError
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
            }
            throw error;
        }
    }
}


export default imageService


