<template>
    <card
      internal-card="container card-container"
    >
      <card
        slot="body"
        external-card="card container material-card card-modal"
        internal-card="material-card-content"
        url-help=""
      >
        <div
          slot="header"
          class="columns"
          style="flex:1;flex-direction: row;justify-content: space-between;margin-bottom:0px"
        >
          <card
            internal-card="modal-card-body column"
            style="flex:2.5;"
            style-internal-card="padding-bottom:0px"
          >
            <p
              slot="header"
              class="subtitle"
            >
              <b>{{ title }}</b>
            </p>
            <div slot="body">
                <b-table
                    :data="items"
                    :paginated="true"
                    :per-page="perPage"
                    :current-page.sync="currentPage"
                    style="font-weight: 400"
                >
                    <b-table-column
                        field="creationDate"
                        label="Date"
                    >
                        <template v-slot="props">
                           {{ moment(props.row.creationDate).format('MMMM Do YYYY, h:mm:ss a') }}
                        </template>
                    </b-table-column>

                    <b-table-column
                        field="phrase"
                        label="Phrase"
                    >
                        <template v-slot="props">
                            <span>
                                {{ props.row.phrase }}
                            </span>
                        </template>
                    </b-table-column>

                    <template slot="empty">
                        <section class="section">
                            <div class="content has-text-grey has-text-centered">
                            <p>
                                <b-icon
                                icon="file"
                                size="is-large"
                                />
                            </p>
                            <p>
                                There is no phrases history
                            </p>
                            </div>
                        </section>
                    </template>
                </b-table>
            </div>
          </card>
        </div>
        <footer
          slot="external-footer"
          class="card-footer has-text-centered padding-card-footer"
        >
          <b-button
            class="button is-primary force-right"
            @click="confirm"
          >
            {{ confirmText }}
          </b-button>
        </footer>
      </card>
    </card>
  </template>
  <script>
  import card from './Card.vue';
  import moment from 'moment';
  export default {
    name: 'ModalConfirmation',
    components: {
      card,
    },
    props: {
      title: {
        type: String,
        default: 'Confirmation',
      },
      items: {
        type: Array,
        default: () => [],
      },
      confirmText: {
        type: String,
        default: 'Accept',
      },
      onConfirm: {
        type: Function,
        default: () => {},
      },
    },
    data() {
      return {
        moment,
        currentPage: 1,
        perPage: 5,
      };
    },
    methods: {
      confirm() {
        this.$parent.close();
        this.onConfirm();
      },
    },
  };
  </script>
  
  <style>

  </style>
  