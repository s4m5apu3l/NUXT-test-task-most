<template>

<!-- <label></label> -->


</template>

<script setup>
import { dataStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = dataStore();

const { sortOptions, sortType } = storeToRefs(store);

function updateSortType() {
  store.setSortType(sortType.value);
}
</script>

<style lang="scss" scoped></style>
