<template>
  <div class="col-xs-offset-4">
    <ul>
      <li>
        <router-link to="/home/message/1">message001</router-link>&nbsp;&nbsp;
        <button>push</button> &nbsp;
        <button>replace</button>
      </li>
      <li>
        <router-link to="/home/message/2">message002</router-link>&nbsp;&nbsp;
        <button>push</button> &nbsp;
        <button>replace</button>
      </li>
      <li>
        <router-link to="/home/message/4">message004</router-link>&nbsp;&nbsp;
        <button>push</button> &nbsp;
        <button>replace</button>
      </li>
    </ul>
    <button>前进</button>
    <button>后退</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style>
</style>