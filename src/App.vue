<template>
  <router-view />
</template>

<script setup>
import { usePriceListStore } from 'stores/priceListStore';

const { fill } = usePriceListStore();
fill();

</script>
