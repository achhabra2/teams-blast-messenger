<template>
  <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle" v-if="subtitle">
        {{subtitle}}
      </h2>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    title: String,
    subtitle: String
  }
})
export default class Hero extends Vue {}
</script>

<style>
</style>
