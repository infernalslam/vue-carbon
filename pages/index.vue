<template>
  <div class="index-bg-color"> Hello World </div>
</template>

<script>
// import axios from '~/plugins/axios'

export default {
  async asyncData () {
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.index-bg-color {
  background-color: #121212;
}
</style>
