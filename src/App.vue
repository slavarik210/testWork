<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Желтый</router-link> |
      <router-link to="/Red">Красный</router-link> | 
      <router-link to="/Green">Зеленый</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  mounted () {
    this.$router.push({name: 'green'})
  }
}
</script>
<style lang="scss">


</style>
