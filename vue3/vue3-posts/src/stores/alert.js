import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
	state: () => ({
		alerts: [],
	}),
	actions: {
		vAlert(message, type = 'error') {
			this.alerts.push({ message, type });
			// showAlert.value = true;
			// alertMessage.value = message;
			// alertType.value = type;
			setTimeout(() => {
				// showAlert.value = false;
				this.alerts.value.shift();
			}, 3000);
		},
		vSucess(message) {
			this.vAlert(message, 'success');
		},
	},
});
