import {
	createApp,
	onMounted,
	ref,
	watch
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

	
	

createApp({
	setup() {
		const loaded = ref(true)
		const isSubmitted = ref(false);
		const email = ref("");
		const error = ref(false);
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		function onSubmit() {
			if(email.value !== "" && !error.value) {
				isSubmitted.value = true;
			} else {
				error.value = true
			}
		}
		watch(email, (email) => {
			if (emailPattern.test(email)) {
				error.value = false;
			} else {
				error.value = true;
			}
		});
		function reset() {
			email.value = "";
			isSubmitted.value = false;
			error.value = false;
		}
		return {
			loaded,
			isSubmitted,
			email,
			error,
			reset,
			onSubmit,
		};
	},
}).mount("#app");