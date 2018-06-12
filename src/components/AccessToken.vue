<template>
  <div class="field">
      <label class="label">
    Access Token
  </label>
  <div class="field is-grouped is-grouped-centered">
    <div class="control is-expanded">
      <input v-model="token" class="input is-primary" type="text" placeholder="Access Token">
    </div>
    <div class="control">
      <a @click="onSave" class="button is-info">
        Save
      </a>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AccessToken extends Vue {
  private token = '';

  public mounted() {
    this.token = this.$store.state.token;
  }

  public onSave(e: Event) {
    this.$store.dispatch('setToken', this.token);
  }
}
</script>

<style>
</style>
