<template>
  <h2>Post</h2>
  <h3>{{ post.title }}</h3>
  <p>{{ post.body }}</p>
  <UILoader v-if="isLoading" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';
import type { IPost } from './types';
import { $api } from '@/api';
import UILoader from '@/components/UILoader.vue';

const route = useRoute();
const postId = route.params.post;

const post = ref<IPost>({} as IPost);
const isLoading = ref(false);

const fetchPost = async () => {
  isLoading.value = true;
  try {
    const { data } = await $api.get(`/posts/${postId}`);
    post.value = data;
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

fetchPost();

onBeforeRouteLeave(() => {
  alert('Вы уходите с поста?');
});
</script>

<style scoped></style>
