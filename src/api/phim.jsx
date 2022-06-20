import axios from "./axiosConfig";

const getPhim = () => {
    return axios.get('danh-sach/phim-moi-cap-nhat?page=1')
}
const getDetailPhim = () => {
    return axios.get('phim/ngoi-truong-xac-song')
}
export default {
    getPhim,
    getDetailPhim
}