<script setup>
defineProps(["placeholder", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    required
  />
</template>
<style scoped>
input {
  border-radius: 4px;
  flex: 1;
  border: none;
  padding: 10px;
  outline: none;
}
input:focus {
  border: 1px solid #aaaeb7;
}
</style>
