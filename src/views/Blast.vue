<template>
  <div>
    <hero title="Blast Message App" />
    <section class="section" v-if="!loading">
      <div class="container">
        <access-token />
        <markdown v-model="mdInput" @rendered="(render) => this.mdOutput = render" />
        <file-picker v-model="file" @cleared="onFileClear" />
        <controls @send="sendMessages" @clear="onClear"/>
      </div>
    </section>
    <section class="section">
      <div class="container">
          <user-table :data="recipients" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Papa from 'papaparse';
import axios from 'axios';
import Blaster from '../blaster';
import Markdown from '@/components/Markdown.vue';
import AccessToken from '@/components/AccessToken.vue';
import FilePicker from '@/components/FilePicker.vue';
import UserTable from '@/components/UserTable.vue';
import Controls from '@/components/Controls.vue';

interface CSVUser {
  email: string;
  status?: string;
  id?: number;
}

@Component({
  components: {
    Markdown,
    AccessToken,
    FilePicker,
    UserTable,
    Controls
  }
})
export default class Blast extends Vue {
  private recipients: CSVUser[] = [];
  private mdInput = '';
  private mdOutput = '';
  private file: File | null = null;
  private loading: boolean = false;

  mounted() {
    this.mdInput = this.$store.state.render;
  }

  @Watch('file')
  public openFile(newFile: File, oldFile: File): void {
    Papa.parse(newFile, {
      delimiter: ',',
      header: true,
      complete: this.onFileParse
    });
  }

  public onFileParse(result: any): void {
    console.log(result);

    this.recipients = result.data.map(
      (user: CSVUser, index: number): CSVUser => {
        return { email: user.email, status: 'Ready', id: index };
      }
    );
  }

  public async sendMessages() {
    this.loading = true;
    const blaster = new Blaster(this.$store.state.token, this.mdOutput);
    await blaster.blastMessage(this.recipients);
    this.loading = false;
  }

  public onClear(): void {
    this.mdInput = '';
  }

  public onFileClear(): void {
    this.recipients = [];
  }
}
</script>
