<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Please enter email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-email'],
  data() {
    return {
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      this.enteredEmail.length > 0 && this.$emit(
        'add-email',
        this.enteredEmail
      );
    },
  },
};
</script>