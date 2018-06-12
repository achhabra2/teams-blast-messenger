<template>
<div class="field is-grouped is-grouped-centered">
<div class="control">
  <button @click="$emit('send')" class="button is-primary">Send</button>
</div>
<div class="control">
  <button @click="$emit('save')" class="button is-link">Save</button>
</div>
<div class="control">
<button @click="$emit('clear')" class="button is-text">Clear</button>
</div>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>
