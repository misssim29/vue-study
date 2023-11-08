import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create({
		baseURL: baseURL,
		...options,
	});
	return instance;
}
export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);

//환경변수 설정
// development : 'http://localhost:5000/posts'
// production : 'http://localhost:5000/posts'
