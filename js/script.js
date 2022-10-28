const { createApp } = Vue;

createApp({
  data() {
    return {
      emailArray: [],
      temporaryArray: [],
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
  },
  created: function () {
    this.getEmails();
  },
}).mount("#app");
