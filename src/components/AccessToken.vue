<template>
  <div class="field">
      <label class="label">
    Access Token
  </label>
  <div class="field is-grouped is-grouped-centered">
    <div class="control is-expanded">
      <input required :value="value" @input="$emit('input', $event.target.value)" class="input is-primary" type="text" name="token" v-validate="'required|alpha_num'" placeholder="Access Token">
    </div>
    <div class="control">
      <a @click="$emit('save')" class="button is-info">
        Save
      </a>
    </div>
  </div>
  <p v-show="errors.has('token')" class="help is-danger">{{ errors.first('token') }}</p>
  <!-- <p v-show="fields.token && fields.token.valid" class="help is-success">Your Token is Valid</p> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  inject: ['$validator'],
  props: {
    value: String,
    displayName: String,
    isError: Boolean,
    isSuccess: Boolean
  }
})
export default class AccessToken extends Vue {}
</script>

<style>
</style>
