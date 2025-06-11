<template>
  <h2>{{ props.title }}</h2>
  <p>Count: {{ count }}</p>
  <p>Double count: {{ doubleCount }}</p>
  <button class="button" @click="increment">Increment+</button>
  <button class="button" @click="decrement">Decrement-</button>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { ICompositionCounterProps } from './types';

const count = ref<number>(0);

const props = withDefaults(defineProps<ICompositionCounterProps>(), {
  title: 'Counter',
});

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const doubleCount = computed(() => {
  return count.value * 2;
});

watch(
  count,
  (newValue, oldValue) => {
    console.log('newValue', newValue);
    console.log('oldValue', oldValue);
  },
  {
    immediate: true,
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
