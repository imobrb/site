import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

export default (app) => {
	app.use(PrimeVue, {
		ripple: false,
		theme: 'none'
	});
}

// para carregar que nem o site da Azion precisamos ter nosso tema
