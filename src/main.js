import { createApp } from 'vue';

import App from './App.vue';
import Email from './components/Email.vue';
import NewEmail from './components/NewEmail.vue';

const app = createApp(App);

app.component('email', Email);
app.component('new-email', NewEmail);

app.mount('#app');
