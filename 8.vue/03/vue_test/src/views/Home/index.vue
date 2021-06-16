<template>
  <div class="panel">
    <div class="panel-body">
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <router-link to="/home/news" active-class="active">News</router-link>
            </li>
            <li>
              <router-link to="/home/message" active-class="active">Message</router-link>
            </li>
          </ul>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* scoped:  表示样式仅能在当前组件中使用 */
.active {
  background-color: #002fa7 !important;
  color: #fff !important;
}
</style>
