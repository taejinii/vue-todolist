<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="검색어를 입력해주세요."
  />
</template>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
</style>
