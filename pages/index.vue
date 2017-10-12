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
      <div class="index-options">
        <span style="color: #fff;"> Options </span>
        <select v-model="form.editorOptions.mode">
          <option v-for="(item, index) in theme" :key="index"> {{ item.name }} </option>
        </select>
        <select v-model="form.editorOptions.code">
          <option v-for="(item, index) in code" :key="index"> {{ item.name }} </option>
        </select>
        <span style="color: #fff; cursor: pointer;"> Download </span>
      </div>
      <div class="index-container">
        <codemirror v-model="form.code" :options="form.editorOptions"></codemirror>
      </div>
    </div>

  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import { theme, code, simpleCode } from '../data/global'

export default {
  async asyncData () {
  },
  head () {
    return {
      title: 'VueCarbon'
    }
  },
  data () {
    return {
      theme: theme,
      code: code,
      form: {
        code: simpleCode,
        editorOptions: {
          tabSize: 2,
          mode: code[0].name,
          theme: 'monokai',
          lineNumbers: false,
          line: false,
          keyMap: 'default',
          extraKeys: { 'Ctrl': 'autocomplete' },
          foldGutter: false,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          styleSelectedText: false,
          highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
        }
      }
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
.index-container {
  background: rgb(255, 255, 255);
  padding: 48px 32px;
  /*position: relative;*/
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: inherit;
  font-family: inherit;
  font-style: inherit;
  vertical-align: baseline;
}
.index-options {
  height: 100%;
    border: 1px solid #fff;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 8px 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    z-index: 1;
}
</style>
