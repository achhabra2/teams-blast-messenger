import { TaskQueue } from 'cwait';
import axios from 'axios';

const MAX_SIMULTANEOUS = 6;

interface recipient {
  email: string;
  status?: string;
  id?: number;
}

export default class Blaster {
  private queue = new TaskQueue(Promise, MAX_SIMULTANEOUS);

  constructor(public token: string, public message: string) {}

  async blastMessage(recepients: recipient[]) {
    return await Promise.all(
      recepients.map(
        this.queue.wrap(
          async (user: recipient, index: number, array: recipient[]) => {
            array[index].status = 'TRYING';
            try {
              const response = await this.postMessage(user.email);
              array[index].status = `SUCCESS ${response.status}`;
            } catch (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if (error.response.status === 429 && error.response.headers) {
                  const timer = error.response.headers['Retry-After'] || 3000;
                  setTimeout(async () => {
                    try {
                      await this.postMessage(user.email);
                      array[index].status = 'RETRY SUCCESS';
                    } catch (error) {
                      array[index].status = 'RETRY ERROR';
                    }
                  }, timer);
                }
                array[index].status = `RETRYING ${error.response.status}`;
              } else {
                array[index].status = `ERROR ${error.response.status}`;
                console.error(error);
              }
            }
          }
        )
      )
    );
  }

  postMessage(email: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
    const data = {
      toPersonEmail: email,
      markdown: this.message
    };
    return axios.post('https://api.ciscospark.com/v1/messages', data, config);
  }
}
