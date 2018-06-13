<template>
  <div class="field">
  <label class="label">
    Markdown Editor
  </label>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="control">
          <textarea 
          class="textarea is-primary" 
          type="text" 
          placeholder="Enter your blast message"
          v-validate="'required'"
          name="message"
          @input="(event) => $emit('input',event.target.value)"
          :value="value"
          @change="saveInput" />
        </div>
        <p v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</p>
      </div>
    </div>
    <div class="column">
      <div class="box activity-text">
        <vue-markdown 
        @rendered="onRender"
        :source="value" />
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
import debounce from 'debounce';

@Component({
  components: {
    VueMarkdown
  },
  inject: ['$validator'],
  props: {
    value: String
  }
})
export default class Markdown extends Vue {
  private output = '';

  saveInput(event: Event) {
    console.log('save input');
    this.$store.dispatch('setRender', event.target.value);
  }

  onRender(render: string): void {
    this.output = render;
    this.$emit('rendered', render);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '../src/assets/fonts.css'; */
textarea {
  height: 50vh;
}

.box {
  height: 50vh;
}
</style>
