<template>
  <div class="wrapper">
    <PageHeader :title="text" />
    <section class="main-section">
      <h2>App</h2>
      <ClickCounter @increment-counter="onIncrement" />
      <div class="user">
        <h2>User</h2>
        <div>Name: {{ user.name }}</div>
        <div>Age: {{ user.age }}</div>
        <button @click="increment" class="button">Increment age</button>
        <button @click="decrement" class="button">Decrement age</button>
        <div :style="messageStyle" class="message">{{ text }}</div>
      </div>
    </section>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import ClickCounter from '@/components/ClickCounter.vue';

export default defineComponent({
  components: {
    PageHeader,
    PageFooter,
    ClickCounter,
  },
  data() {
    return {
      user: {
        name: 'Sergey',
        age: 30,
      },
      text: '',
    };
  },
  methods: {
    increment() {
      this.user.age++;
    },
    decrement() {
      this.user.age--;
    },
    onIncrement(value: number) {
      console.log('increment - counter', value);
    },
  },
  computed: {
    messageStyle() {
      return { color: this.user.age < 18 ? 'red' : 'green' };
    },
  },
  watch: {
    // user: {
    //   handler(val, oldVal) {
    //     console.log('user', val);
    //     console.log('oldUser', oldVal);
    //   },
    //   immediate: true,
    //   deep: true,
    // },
    'user.age': {
      handler(val, oldVal) {
        if (val < 18) {
          this.text = 'Доступ запрещен, вы слишком молоды!';
        } else if (val < 60) {
          this.text = 'Доступ разрешен, все в порядке!';
        } else {
          this.text = 'Вам уже 60!';
        }
        // console.log('userAge', val);
        // console.log('oldUserAge', oldVal);
      },
      immediate: true,
    },
  },
});
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
.message {
  color: green;
}
</style>
