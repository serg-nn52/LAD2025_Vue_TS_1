<template>
  <h2>User</h2>
  <p>User name: {{ user.name }}</p>
  <p>User age: {{ user.age }}</p>
  <button class="button" @click="emits('increment-age', data)">Increment age+</button>
  <button class="button" @click="emits('decrement-age')">Decrement age-</button>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import type { IUserBlockEmits, IUserBlockProps } from './types';

const props = defineProps<IUserBlockProps>();
const emits = defineEmits<IUserBlockEmits>();

const data = 'test data';

// watch(
//   user,
//   (newValue, oldValue) => {
//     console.log('newValue', newValue);
//     console.log('oldValue', oldValue);
//   },
//   { deep: true },
// );
watch(
  () => props.user.age,
  (newValue, oldValue) => {
    console.log('newValue', newValue);
    console.log('oldValue', oldValue);
  },
);
</script>

<style scoped>
.button {
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  background-color: blueviolet;
  margin-right: 15px;
  cursor: pointer;
}
</style>
