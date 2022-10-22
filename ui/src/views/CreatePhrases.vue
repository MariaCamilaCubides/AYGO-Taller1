<template>
  <card
      external-card="material-card-content"
      internal-card="material-card material-card-content"
    >
      <div
        slot="external-header"
      >
        <img 
          alt="Vue logo" 
          src="../assets/logo.png" 
          width="200" 
          height="200"
        >
        <b-field label="Message">
          <b-input 
            v-model="message"
            type="textarea"
            maxlength="200"
            placeholder="Write your phrase ..."
          >
          </b-input>
        </b-field>
        <div
          class="force-right"
          style="margin: 10px"
        >
        <b-button
          class="button is-primary is-light"
          @click="clearMessage"
        >
          delete
        </b-button>

        <b-button
          class="button is-primary"
          @click="saveMessage"
        >
          save
        </b-button>
        </div>
      </div>
    </card>
</template>

<script>
import card from '../components/Card.vue';
import confirmation from '../components/ModalConfirmation.vue';

export default {
  name: 'CreatePhrases',
  components: {
    card,
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    async saveMessage() {
      if (!this.message) {
        this.$buefy.toast.open({
          duration: 1000 * 5,
          message: 'Cannot save empty phrase',
          type: 'is-warning',
          queue: false,
          pauseOnHover: true,
          position: 'is-top',
        });
        return;
      }
      try {
      const getMessagesResult = await this.axios.post(`http://${process.env.VUE_APP_ROUND_ROBIN_URL}:8585`, {
        body: this.message,
      });
      const dataParsed = getMessagesResult.data.map((x) => {
        return {
          creationDate: `${x.created[0]}/${x.created[1]}/${x.created[2]} ${x.created[3]}:${x.created[4]}`,
          phrase: x.log
        }
      })
      console.log(dataParsed)
      this.$buefy.modal.open({
        parent: this,
        component: confirmation,
        hasModalCard: true,
        props: {
          onConfirm: () => this.clearMessage(),
          title: 'Phrases history',
          confirmText: 'Ok',
          items: dataParsed,
        },
      });
    } catch (error) {
        console.log(error);
      }
    },
    clearMessage() {
      this.message = '';
    }
  }
}
</script>

<style scoped>

.button {
  margin: 0px 2px;
}
</style>
