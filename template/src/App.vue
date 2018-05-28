<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class App extends Vue { 
      
  }
</script>
<style lang="scss">
    html, body {
        padding: 0;
        margin: 0;
        border: 0;
        background: aqua;
    }
    
    *, *:after, *:before {
        box-sizing: border-box;
    }
    
    #app {
        &:after {
            content: "vue ts template made by stho"
        }
    }
</style>