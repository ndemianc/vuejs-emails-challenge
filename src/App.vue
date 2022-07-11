<template>
  <section>
    <header>
      <h1>Emails</h1>
    </header>
    <new-email @add-email="addEmail"></new-email>
    <ul>
      <email
        v-for="email in emails"
        :key="email.id"
        :id="email.id"
        :email-address="email.address"
        @delete="deleteEmail"
      ></email>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      emails: [
        {
          id: '123',
          address: 'test@example.com',
        },
        {
          id: '456',
          address: 'admin@example.com',
        },
      ],
    };
  },
  methods: {
    addEmail(address) {
      const newEmail = {
        id: String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, ''),
        address: address,
      };
      this.emails.push(newEmail);
    },
    deleteEmail(emailId) {
      this.emails = this.emails.filter((email) => email.id !== emailId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Jost', sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(50, 115, 220, 1);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #3e8ed0;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  max-width: 40rem;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
}
#app li {
  margin: 0.25rem auto;
  font-weight: bold;
  text-align: left;
  max-width: 40rem;
  display: inline-block;
  margin-right: 0.25rem;
}
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 9rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>