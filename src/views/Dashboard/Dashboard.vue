<template>
  <div id="dashboard">
    <p>{{ message }}</p>
    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <span :title="message">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 메시지를 볼 수 있습니다!
    </span>
    <button @click="reverseMessage">메시지 뒤집기</button>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <hello></hello>
    <world></world>
  </div>
</template>

<script>
import { Hello, World } from '@/components/index';

export default {
  name: 'dashboard',
  components: { Hello, World },
  data() {
    return {
      message: 'Welcome to Your Vue.js App',
      seen: false,
      todos: [
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' },
        { text: '무언가 멋진 것을 만들기' },
      ],
    };
  },
  methods: {
    reverseMessage: function reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
};
</script>
