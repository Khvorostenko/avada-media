<template>
  <div id="app">
    <component :is="layout"/>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// import Header from "./components/UI/header";
// import Header from './components/UI/header-2'
import EmptyLayout from './components/layout/emptyLayout'
import MainLayout from './components/layout/mainLayout'
export default {
  components: {
    'main-layout':MainLayout,
    'empty-layout':EmptyLayout,
  },
  name: "App",
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
};
</script>

<style lang="sass">
body
  padding: 0
  margin: 0
#app
  width: 100%
  height: 100vh
  background: #F2F2F2
  overflow: auto
.content
  padding-top: 20px
  width: 100%
  margin: 0 auto
  
</style>
