import axios from "./axiosConfig";

const getPhim = () => {
    return axios.get(`/danh-sach/phim-moi-cap-nhat?page=${id}`)
}
const getDetailPhim = () => {
    return axios.get(`/phim/`)
}
export default {
    getPhim,
    getDetailPhim,
}