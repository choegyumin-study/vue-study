<template>
  <div id="dashboard">
    <h1>Welcome to Your Vue.js App</h1>
    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <p :title="message">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 메시지를 볼 수 있습니다!
    </p>
    <div>
      <span>{{ message }}</span>
      <button @click="reverseMessage">메시지 뒤집기</button>
    </div>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <p>
      <hello></hello>
      <world></world>
    </p>
    <button @click="testHelper">헬퍼(function) 테스트</button>
    <button @click="testMixin">믹스인 테스트</button>
  </div>
</template>

<script>
  import { Hello, World } from '@/components';
  import { alertHelper } from '@/helpers';
  import { alertMixin } from '@/mixins';

  export default {
    mixins: [alertMixin],
    components: { Hello, World },
    data() {
      return {
        message: '가나다라마바사아자차카타파하',
        seen: false,
        todos: [
          { text: 'JavaScript 배우기' },
          { text: 'Vue 배우기' },
          { text: '무언가 멋진 것을 만들기' },
        ],
      };
    },
    methods: {
      testHelper() {
        alertHelper('This is Helper!');
      },
      testMixin() {
        const context = this;
        context.openAlert('This is Mixin!');
      },
      reverseMessage() {
        const context = this;
        context.message = context.message.split('').reverse().join('');
      },
    },
  };
</script>
