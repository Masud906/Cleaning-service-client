import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://clening-service-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;