import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://brainbox-backend.vercel.app",
});

const useAxiosPublic = () => axiosPublic;
export default useAxiosPublic;
