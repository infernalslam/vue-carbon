<template>
  <div>
    <div class="index-bg-text">
      <span class="index-title-text" >Vue Carbon</span> <br>
      <span class="index-subtitle-text">
        Create and share beautiful images of your source code.
        Start typing, or drop a file into the text area to get started.
      </span>
    </div>
    <div class="index-editor">
    </div>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'

export default {
  async asyncData () {
  },
  head () {
    return {
      title: 'VueCarbon'
    }
  }
}
</script>

<style scoped>
.index-bg-text {
  color: #f8e81d;
  text-align: center;
  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 5%;
}
.index-title-text {
  font-size: 50px;
}
.index-subtitle-text {
  color: #fff;
  font-size: 25px;
}
.index-editor {
  background: #121212;
  border: 3px solid #fff;
  border-radius: 8px;
  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 5%;
}
</style>
