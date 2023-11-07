// axios

const post = [
	{ id: 1, title: '제목1', content: '내용1', createAt: '2020-01-01' },
	{ id: 2, title: '제목2', content: '내용2', createAt: '2020-02-02' },
	{ id: 3, title: '제목3', content: '내용3', createAt: '2020-03-03' },
	{ id: 4, title: '제목4', content: '내용4', createAt: '2020-04-04' },
	{ id: 5, title: '제목5', content: '내용5', createAt: '2020-05-05' },
];

export function getPosts() {
	return post;
}
