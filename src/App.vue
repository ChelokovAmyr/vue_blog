<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation/>
      <router-view />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import  './assets/css/global';
</style>
