import axios from "axios";

export default function axiosMethod(endpoint, method , body) {
	return axios({
		method,
		// url: `https://ophim1.com`,
		data: body
	}).catch(err => {
		alert(err);
	});
}