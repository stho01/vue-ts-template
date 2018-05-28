<template>
    <div class="home">
        <p>Hello world from vue</p>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    
    @Component
    export default class Home extends Vue {
        
    }
</script>
<style scoped lang="scss">
    .home {
        
    }
</style>