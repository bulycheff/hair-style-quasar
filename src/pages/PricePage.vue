<template>
  <q-page class="flex flex-center">
    <div>{{ pageTitle }}</div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const pageTitle = ref('Price Page');
</script>
