<script setup>
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <input v-model="text" />
</template>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
