<template>
<div class="field">
      <label class="label">
      File Selection
    </label>
  <div class="field is-grouped is-grouped-multiline">
    <p class="control">
    <div class="file">
    <label class="file-label">
      <input class="file-input" type="file" name="csv" ref="csv"
      @change="handleFileChange" v-validate="'required'" accept=".csv">
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
      <input class="button is-danger is-outlined" @click="clearFile" type="reset" value="Remove File">
    </p>
    <p class="control">
      <a class="button is-success" :href="csvTemplate" download>
      Download Template
      </a>
    </p>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  inject: ['$validator'],
  props: {
    value: File
  }
})
export default class FilePicker extends Vue {
  private fileName: string = '';
  private csvTemplate: string = process.env.BASE_URL + 'blast_template.csv';

  public clearFile(e: Event): void {
    const csvElement = this.$refs.csv as HTMLInputElement;
    csvElement.value = '';
    this.fileName = '';
    this.$emit('cleared');
  }

  public handleFileChange(e: any): void {
    this.fileName = e.target.value;
    this.$emit('input', e.target.files[0]);
  }
}
</script>
