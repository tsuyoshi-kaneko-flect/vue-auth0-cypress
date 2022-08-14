import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-nly3-7cq.us.auth0.com",
    client_id: "jPzIcPoRuFxx6NpYlaXbBlGsAkUoLfmD",
    redirect_uri: window.location.origin
  })
);

app.mount('#app');
