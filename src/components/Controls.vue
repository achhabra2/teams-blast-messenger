<template>
<div class="field is-grouped is-grouped-centered">
<div class="control">
  <button @click="onSend" class="button is-primary">Send</button>
</div>
<div class="control">
  <button @click="onSave" class="button is-link">Save</button>
</div>
<div class="control">
  <button @click="onClear" class="button is-text">Clear</button>
</div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { EventEmitter } from 'events';

@Component({
  props: {
    isLoading: Boolean
  }
})
export default class Controls extends Vue {
  public onSend(e: Event) {
    this.$emit('send');
  }

  public onClear(e: Event) {
    this.$emit('clear');
  }

  public onSave(e: Event) {
    this.$emit('save');
  }
}
</script>

<style>
</style>
