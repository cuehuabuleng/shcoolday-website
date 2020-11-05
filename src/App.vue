<template>
  <div id="app">
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/nav";
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
