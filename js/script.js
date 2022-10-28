const { createApp } = Vue;

createApp({
  data() {
    return {
      emailArray: [],
      temporaryArray: [],
      regenArray: [],
    };
  },
  methods: {
    getEmails() {
      for (let index = 0; index < 10; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            this.temporaryArray.push(resp.data.response);
          });
      }
    },
    printMails() {
      this.emailArray = [...this.temporaryArray];
    },
    reGetEmails() {
      this.temporaryArray = [];
      for (let index = 0; index < 10; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            this.regenArray.push(resp.data.response);
          });
      }
      return this.regenArray;
    },
    rePrintEmails() {
      this.regenArray = [];
      this.emailArray = this.reGetEmails();
    },
  },
  created: function () {
    this.getEmails();
    // this.reGetEmails();
  },
}).mount("#app");
