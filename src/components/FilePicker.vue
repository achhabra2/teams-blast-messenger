<template>
<div class="field">
      <label class="label">
      File Selection
    </label>
  <div class="field is-grouped">
    <p class="control">
    <div class="file">
    <label class="file-label">
      <input class="file-input" type="file" name="csv" ref="csv"
      @change="handleFileChange">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          {{fileName || 'Choose File'}}
        </span>
      </span>
    </label>
    </div>
    </p>
    <p class="control">
      <input class="button" @click="clearFile" type="reset" value="Remove File">
    </p>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    value: File
  }
})
export default class FilePicker extends Vue {
  private fileName: string = '';

  clearFile(e: Event): void {
    let csvElement = this.$refs.csv as HTMLInputElement;
    csvElement.value = '';
    this.fileName = '';
    this.$emit('cleared');
  }

  handleFileChange(e: any): void {
    this.fileName = e.target.value;
    this.$emit('input', e.target.files[0]);
  }
}
</script>
