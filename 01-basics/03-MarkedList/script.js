import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
// const emails = [
//   'Eliseo@gardner.biz',
//   'Jayne_Kuhic@sydney.com',
//   'Nikita@garfield.biz',
//   'Lew@alysha.tv',
//   'Hayden@althea.biz',
//   'Presley.Mueller@myrl.com',
//   'Dallas@ole.me',
//   'Mallory_Kunze@marie.org',
//   'Meghan_Littel@rene.us',
//   'Carmen_Keeling@caroline.name',
//   'Veronica_Goodwin@timmothy.net',
//   'Oswald.Vandervort@leanne.org',
//   'Kariane@jadyn.tv',
//   'Nathan@solon.io',
//   'Maynard.Hodkiewicz@roberta.com',
//   'Christine@ayana.info',
//   'Preston_Hudson@blaise.tv',
//   'Vincenza_Klocko@albertha.name',
//   'Madelynn.Gorczany@darion.biz',
//   'Mariana_Orn@preston.org',
//   'Noemie@marques.me',
//   'Khalil@emile.co.uk',
//   'Sophia@arianna.co.uk',
//   'Jeffery@juwan.us',
//   'Isaias_Kuhic@jarrett.net',
// ];

const fetchComments = () => fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

const listComponent = {
  name: 'listComponent',

  data() {
    return {
      emails: null,
      searchValue: '',
    };
  },

  computed: {
    filteredEmails() {
      const markFilter = (email) => {
        if (!this.searchValue) return false;
        return email.toLowerCase().includes(this.searchValue.toLowerCase());
      };

      return (this.emails) ? this.emails.map(function (email) {
          return { adress: email, marked: markFilter(email) };
        }) : this.emails;
    },
  },

  mounted() {
    fetchComments().then((comments) => {
      this.emails = comments.map((comment) => comment.email);
    });
  },

};

const listApp = createApp(listComponent);

const vm = listApp.mount('#email-list');
