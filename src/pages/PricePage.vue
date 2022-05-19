<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
    >
      <template v-slot:pagination="scope">
        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="first_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.firstPage"
        />

        <q-btn
          icon="chevron_left"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        />

        <q-btn
          icon="chevron_right"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        />

        <q-btn
          v-if="scope.pagesNumber > 2"
          icon="last_page"
          color="grey-8"
          round
          dense
          flat
          :disable="scope.isLastPage"
          @click="scope.lastPage"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Наименование',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Цена 1',
    field: 'calories',
    sortable: true,
  },
  {
    name: 'fat',
    label: 'Цена 2',
    field: 'fat',
    sortable: true,
  },
];

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 1235,
    fat: 1560,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
  },
];

export default {
  setup() {
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 10,
      // rowsNumber: xx if getting data from a server
    });

    return {
      pagination,

      columns,
      rows,

      pagesNumber: computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage)),
    };
  },
};
</script>
