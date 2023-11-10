import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';
//alert
export function useAlert() {
	const { alerts } = storeToRefs(useAlertStore());
	const { vAlert, vSucess } = useAlertStore();
	return {
		alerts,
		vAlert,
		vSucess,
	};
}
