<template>
  <li>
    <span class="tag">
      {{ emailAddress }}
      <button class="delete is-small" @click="$emit('delete', id)"></button>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
  },
  emits: ['delete'],
};
</script>