export default {
	install(app, options) {
		const person = {
			name: '주연',
			say() {
				alert(this.name);
			},
			...options,
		};
		app.config.globalProperties.$person = person;
		app.provide('person', person);
	},
};
