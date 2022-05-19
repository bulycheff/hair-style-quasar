<template>
  <q-page class="flex flex-center">
    <div>
      <div class="counter-wrapper">
        <q-btn class="action-btn" icon="remove" color="red" @click="decrement" />
        <span class="counter">{{ counter }}</span>
        <q-btn class="action-btn" icon="add" color="green" @click="increment" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia/dist/pinia';
import { useCounterStore } from 'stores/counterStore';

const { counter } = storeToRefs(useCounterStore());
const {
  increment,
  decrement,
} = useCounterStore();

</script>

<style lang="scss">
.counter-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10rem;
}
.counter {
  width: 1.5rem;
  margin: 0 .5rem;
  text-align: center;
}
.action-btn {
  padding: 0 5px;
}
</style>
