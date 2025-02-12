import PrimeVue from 'primevue/config';
// import Tooltip from 'primevue/tooltip';

export default (app) => {
  app.use(PrimeVue, {
    ripple: false
  });

  // app.directive('tooltip', Tooltip);
}
