<template>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
      <th>#</th>
      <th>Email</th>
      <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in data" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.email}}</td>
        <td>{{user.status}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    data: Array
  }
})
export default class UserTable extends Vue {}
</script>

<style>
</style>
