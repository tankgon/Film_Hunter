import axios from "./axiosConfig";

const getPhim = () => {
    return axios.get(`/danh-sach/phim-moi-cap-nhat`)
}
const getPagePhim = (id) => {
    return axios.get(`/danh-sach/phim-moi-cap-nhat?page=${id}`)
}
const getDetailPhim = (id) => {
    return axios.get(`/phim/${id}`)
}
export default {
    getPhim,
    getPagePhim,
    getDetailPhim,
}