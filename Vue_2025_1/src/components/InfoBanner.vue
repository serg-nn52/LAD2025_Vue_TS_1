<template>
  <a :href="link" target="_blank" class="banner-wrapper">
    <slot name="prepend" />
    <p>{{ text }}</p>
    <slot name="append" />
  </a>
</template>

<script setup lang="ts">
import type { IInfoBannerProps } from './types';

defineProps<IInfoBannerProps>();
</script>

<style scoped>
.banner-wrapper {
  width: 100%;
  height: 150px;
  background-color: coral;
  color: red;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
}
img {
  width: 150px;
  height: 150px;
}
p {
  text-align: center;
  width: 100%;
}
</style>
