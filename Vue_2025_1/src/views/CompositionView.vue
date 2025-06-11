<template>
  <div class="wrapper">
    <PageHeader title="Composition header" />
    <section class="main-section">
      <h2>Composition API</h2>
      <CompositionClickCounter title="Composition counter" />
      <UserBlock
        @decrement-age="user.age--"
        @increment-age="(val) => incrementAge(val)"
        :user="user"
      />
    </section>
    <div class="images">
      <img
        alt="yandex"
        src="https://avatars.mds.yandex.net/i?id=782b5da1c32a3c629c7dc5860ce77e2f862b8168-9233306-images-thumbs&n=13"
      />
      <img src="/img/galka-11.png" alt="galka" />
      <img src="@/assets/img/galka-11.png" alt="galka" />
      <img :src="picture" alt="galka" />
    </div>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import { ref } from 'vue';
import type { IUser } from './types';
import CompositionClickCounter from '@/components/CompositionClickCounter.vue';
import UserBlock from '@/components/UserBlock.vue';
import picture from '@/assets/img/galka-11.png';

const user = ref<IUser>({
  name: 'Sergey',
  age: 30,
});

const incrementAge = (value: string) => {
  console.log(value);
  user.value.age++;
};

// const user: IUser = reactive({
//   name: 'Sergey',
//   age: 30,
// });

// user.name = 'Ivan';
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.main-section {
  flex-grow: 1;
  padding: 20px;
  font-size: 32px;
  background-color: burlywood;
  color: black;
}
.button {
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  background-color: blueviolet;
  margin-right: 15px;
  cursor: pointer;
}
.images {
  padding: 20px;
  display: flex;
  gap: 50px;
  background-color: burlywood;
}
img {
  max-width: 100px;
}
</style>
