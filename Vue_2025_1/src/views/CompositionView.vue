<template>
  <div class="wrapper">
    <PageHeader title="Composition header" />
    <section class="main-section">
      <h2>Composition API</h2>
      <CompositionClickCounter title="Composition counter" />
      <UserBlock
        v-if="device === 'desktop' || device === 'tablet'"
        @decrement-age="user.age--"
        @increment-age="(val) => incrementAge(val)"
        :user="user"
      />
      <p v-else>Мобильная версия блока юзеров находится в разработке"</p>
      <p v-if="user.age < 18 || (user.age > 18 && user.age < 50)" class="notification">
        Вам мало лет, доступ закрыт!
      </p>
      <p v-else-if="user.age < 60 && user.age > 50" class="notification notification-ok">
        Добро пожаловать!
      </p>
      <p v-else class="notification">Вам это уже не интересно!</p>
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
    <div v-show="isSquareVisible" @click="isDark = !isDark" :class="squareClasses" />
    <p :style="{ color: isDark ? 'black' : 'red' }">{{ isDark ? 'Black' : 'Red' }}</p>
    <section class="user-section">
      <h2>Список пользователей</h2>
      <ul>
        <template v-for="(user, index) in userList" :key="user.name">
          <li v-if="user.name !== 'Elena'">{{ index + 1 + ' ' + user.name }}</li>
        </template>
      </ul>
    </section>
    <InfoBanner link="https://yandex.by/" text="Здесь могла быть Ваша реклама">
      <template #prepend>
        <img
          alt="yandex"
          src="https://avatars.mds.yandex.net/i?id=782b5da1c32a3c629c7dc5860ce77e2f862b8168-9233306-images-thumbs&n=13"
        />
      </template>
      <template #append>
        <img class="banner-image" src="../assets/img/galka-11.png" alt="banner-image" />
      </template>
    </InfoBanner>
    <section class="section-form">
      <!-- <input @input="onInput" :value="textValue" type="text" /> -->
      <form @submit.prevent="console.log('Форма отправлена!', textValue)">
        <input @input="onInput" type="text" v-model.trim="textValue" />
        <button @click.once="console.log('click')" type="submit">Отправить форму</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <h2 class="input-text">{{ textValue }}</h2>
      <button class="button">Test button</button>
    </section>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import type { IUser } from './types';
import CompositionClickCounter from '@/components/CompositionClickCounter.vue';
import UserBlock from '@/components/UserBlock.vue';
import picture from '@/assets/img/galka-11.png';
import { userList } from '@/mock/userList';
import InfoBanner from '@/components/InfoBanner.vue';
import { useMedia } from '@/composables/useMedia';

const { device } = useMedia();

const squareClasses = computed(() => {
  return {
    'square-dark': isDark.value,
    square: true,
    'square-all': true,
  };
});

const isDark = ref(false);

const isSquareVisible = ref(true);

const user = ref<IUser>({
  name: 'Sergey',
  age: 30,
});

const incrementAge = (value: string) => {
  console.log(value);
  user.value.age++;
};

const textValue = ref('');
const errorMessage = ref('');

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  errorMessage.value = '';
  if (/[0-9]/g.test(value)) {
    textValue.value = textValue.value.slice(0, -1);
    errorMessage.value = 'Ввод цифр недопустим';
  }
  if (value.length > 10) {
    textValue.value = textValue.value.slice(0, -1);
    errorMessage.value = 'Количество символов не более 10';
  }
};

// const user: IUser = reactive({
//   name: 'Sergey',
//   age: 30,
// });

// user.name = 'Ivan';

// const onInput = (event: Event) => {
//   textValue.value = (event.target as HTMLInputElement).value;
// };

console.log('created');

onMounted(() => {
  console.log('mounted');
});

onUpdated(() => {
  console.log('updated');
});

watch(device, (val) => {
  console.log(val);
});
</script>

<style lang="scss" scoped>
@use 'sass:color';
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: burlywood;
}
.user-wrapper {
  background-color: aqua;
}
.main-section {
  flex-grow: 1;
  padding: 20px;
  font-size: 32px;
  background-color: burlywood;
  color: black;
}
.button {
  background-color: green;
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

.square {
  width: 100px;
  height: 100px;
  background-color: red;
}
.square-dark {
  background-color: black;
}

.notification {
  font-size: 28px;
  color: red;
}

.notification-ok {
  color: green;
}

.user-section {
  padding: 10px;
  color: black;
  font-size: 20px;
}
.banner-image {
  width: 150px;
  height: 150px;
  max-width: 100%;
}
input {
  height: 50px;
  padding: 5px;
  width: 50%;
}
.input-text {
  color: black;
}
form {
  display: flex;
  gap: 20px;

  button {
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    border: none;
    background-color: gray;
    transition: 0.3s;

    &:hover {
      background-color: color.adjust(gray, $lightness: -20%);
    }
  }
}

.error {
  color: red;
}
</style>
