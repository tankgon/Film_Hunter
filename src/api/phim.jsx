import axios from "./axiosConfig";

const getPhim = () => {
    return axios.get('/danh-sach/phim-moi-cap-nhat')
}
const getDetailPhim = () => {
    return axios.get('/phim/ky-uc-ngay-he-cua-tran-tinh-lenh')
}
export default {
    getPhim,
    getDetailPhim,
}