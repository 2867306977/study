<template>
  <div>
    <p>id:{{list.id}}</p>
    <p>title:{{list.title}}</p>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      msg: [
        { id: 1, title: "msg001" },
        { id: 2, title: "msg002" },
        { id: 4, title: "msg004" },
      ],
    };
  },
  computed: {
    list() {
      const id = +this.$route.params.id;
      return this.msg.find((item) => item.id === id);
    },
  },
};
</script>

<style>
</style>