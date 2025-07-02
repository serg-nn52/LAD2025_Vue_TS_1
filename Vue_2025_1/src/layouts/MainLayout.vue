<template>
  <div class="wrapper-layout">
    <PageHeader />
    <nav>
      <router-link active-class="active-link" :to="{ name: 'home' }">Главная</router-link>
      <router-link active-class="active-link" :to="{ name: 'composition' }"
        >Composition API</router-link
      >
      <router-link active-class="active-link" :to="{ name: 'posts' }">Posts</router-link>
    </nav>
    <div class="content">
      <router-view />
    </div>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';
</script>

<style scoped>
.wrapper-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
}
.active-link {
  color: red;
}
</style>
