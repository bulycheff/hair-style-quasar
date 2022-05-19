<template>
  <q-layout class="main-layout" view="lHh Lpr lFf">
    <q-header class="main-layout__header" elevated>
      <q-toolbar>
        <q-btn
          flat
          size="1.1rem"
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="header-title">
          <q-item class="header-title__link" to="/">
            Hair Style App
          </q-item>
        </q-toolbar-title>

        <q-img
          class="logo"
          :src="scissorsImg"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Меню
        </q-item-label>

        <EssentialLink
          v-for="link in linkList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="page-container">
      <router-view v-if="loaded" />
      <div class="loader" v-else>
        <q-spinner
          color="primary"
          size="5rem"
          :thickness="10"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import scissorsImg from 'src/assets/barber-scissors-100.png';
import { storeToRefs } from 'pinia/dist/pinia';
import { usePriceListStore } from 'stores/priceListStore';

const { loaded } = storeToRefs(usePriceListStore());

const linkList = [
  {
    title: 'Главная страница',
    caption: '',
    icon: 'o_home',
    link: '/',
  },
  {
    title: 'Калькулятор',
    caption: 'Рассчитать стоимость',
    icon: 'o_calculate',
    link: '/calc',
  },
  {
    title: 'Цены',
    caption: 'Прайсы поставщиков',
    icon: 'list',
    link: '/price',
  },
];

const leftDrawerOpen = ref(false);

// eslint-disable-next-line
const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value;

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

.main-layout {
  font-family: 'Open Sans', sans-serif;

  @mixin background-grad() {
    background: -webkit-linear-gradient(45deg, rgb(87, 11, 88) 10%,
      rgb(182, 82, 135) 59%, rgb(202, 101, 195) 77%);
    background: -moz-linear-gradient(45deg, rgb(87, 11, 88) 10%,
      rgb(182, 82, 135) 59%, rgb(202, 101, 195) 77%);
    background: linear-gradient(45deg, rgb(87, 11, 88) 10%,
      rgb(182, 82, 135) 59%, rgb(202, 101, 195) 77%);
  }

  @mixin text-shadow() {
    text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93,
    -2px 1px #cdd2d5, 2px 2px 2px rgba(206, 89, 55, 0);
  }

  .main-layout__header {
    display: flex;
    @include background-grad;

    .header-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-family: 'Bad Script', cursive;

      .header-title__link {
        color: whitesmoke;
        padding: .15rem 0 0 0;
        margin: 0;
        min-height: 30px;
        font-weight: 600;
        font-size: 1.2rem;
        position: relative;
        @include text-shadow();
        transform: scaleX(1) scaleY(1);
        transition: all .05s ease-in-out;

        &:hover {
          transform: scaleX(1) scaleY(1);
        }

        &:active {
          transform: scaleX(.95) scaleY(.95);
        }
      }
    }

    .logo {
      width: 2rem;
      margin-top: 2px;
      margin-right: 5px;
      transform: scaleX(-1.1) scaleY(1.1);
      transition: all .1s ease-in-out;

      &:hover {
        transform: scaleX(-1.1) scaleY(1.1);
      }

      &:active {
        transform: scaleX(-1) scaleY(1);
      }
    }
  }
}

.page-container {
  height: 90vh;
}

.loader {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
