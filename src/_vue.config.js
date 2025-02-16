import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

export default (app) => {
	app.use(PrimeVue, {
		ripple: false,
		theme: {
			preset: Aura
		}
	});
}
