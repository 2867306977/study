<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import List from './views/List';
import Search from './views/Search';
export default {
  name: 'App',
  components: {
    List,
    Search,
  },
};
</script>

<style>
</style>