import axios from "axios";

const axiosPost = async (url, options = { method: 'get', data: null }) => {
    try {
        const res = await axios({ url, ...options });
        return res?.data;
    } catch (error) {
        throw error;
    }
}

export default axiosPost;