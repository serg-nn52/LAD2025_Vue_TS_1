<template>
  <div class="posts-wrapper">
    <button @click="onClick" class="button">На главную</button>
    <button @click="router.back" class="button">Назад</button>
    <h2>Posts</h2>
    <ul class="posts-list">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { post: post.id } }">
          <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <UILoader v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { $api } from '@/api';
import UILoader from '@/components/UILoader.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IPost } from './types';

const isLoading = ref(false);
const posts = ref<IPost[]>([]);

const route = useRoute();
const router = useRouter();

console.log('route', route);
console.log('router', router);

const onClick = () => {
  router.push({
    name: 'home',
  });
};

const fetchPosts = async () => {
  isLoading.value = true;
  try {
    const { data } = await $api.get('/posts');
    posts.value = data;
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
fetchPosts();
</script>

<style lang="scss" scoped>
.posts-wrapper {
  padding: 20px;
}
.button {
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 32px;
  background-color: yellow;
  cursor: pointer;
  margin-right: 10px;
}
.posts-list {
  list-style-type: none;
}
</style>
