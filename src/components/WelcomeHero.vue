<template>
  <div class="container mx-auto mt-2 mb-4 px-0">
    <div
      class="rounded-xl overflow-hidden h-auto bg-accent p-4 flex flex-col sm:flex-row items-center justify-between text-neutral-content">
      <h1 v-if="shouldShowWelcome" class="headline text-2xl font-bold mb-2 sm:mb-0 text-base-content">
        <font-awesome-icon :icon="headline.icon" class="mt-1 mr-4 text-secondary" />{{ headline.text }}
      </h1>
      <button v-if="!isLoggedIn && shouldShowWelcome" class="btn btn-sm btn-primary whitespace-nowrap" @click="login">
        Sign in with Discord
      </button>
      <router-link :to="`/upload`" v-if="isLoggedIn && shouldShowWelcome" class="normal-case btn btn-sm btn-primary text-accent whitespace-nowrap">
        Upload Your Theme!
      </router-link>

      <div v-if="heroView === 'user' && userData && !isUserDataLoading" class="avatar flex items-center space-x-4">
        <div class="w-8 rounded-full">
          <img :src="userData.avatarUrl" alt="Profile Photo" />
        </div>
        <h1 class="text-2xl font-bold text-base-content">
          {{ userData.username }}'s Themes
        </h1>
      </div>

      <h1 v-if="heroView === 'create'" class="headline text-2xl font-bold mb-2 sm:mb-0 text-base-content">
        <font-awesome-icon icon="spray-can" class="mt-1 mr-4 text-secondary" />create a new theme
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from "axios";

export default {
  props: {
    heroView: {
      type: String,
      default: 'welcome'
    },
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      headlines: [
        { text: "monkethemes is open!", icon: "door-open" },
        { text: "upload a theme, do it.", icon: "people-group" },
        { text: "welcome to monkethemes!", icon: "ghost" },
        { text: "you're faster with a monketheme.", icon: "gauge-high" },
        { text: "monkeythemes was taken...", icon: "hippo" },
        { text: "miodec don't sue me", icon: "user-tie" },
        { text: "reject humanity return to monke", icon: "skull-crossbones" },
        { text: "made with love by kenn", icon: "heart" },
      ],
      headline: null,
      userData: null,
      isUserDataLoading: false,
    }
  },
  computed: mapState({
    isLoggedIn: state => state.isLoggedIn,
    shouldShowWelcome() {
      return this.heroView === 'welcome' || this.isUserDataLoading;
    },
  }),
  watch: {
    heroView: 'fetchUserData',
    userId: 'fetchUserData',
  },
  methods: {
    login() {
      window.location.href = 'https://monkethemes.com/api/auth/discord'
    },
    handleNewTheme() {
      this.$emit('new-theme')
    },
    async fetchUserData() {
      if (this.heroView === 'user' && this.userId) {
        this.isUserDataLoading = true;
        try {
          const response = await axios.get(`https://monkethemes.com/api/user/${this.userId}`);
          this.userData = response.data;
          document.title = `${this.userData.username}'s themes | monkethemes`;
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        } finally {
          this.isUserDataLoading = false;
        }
      }
    },
  },
  created() {
    this.headline = this.headlines[Math.floor(Math.random() * this.headlines.length)];
  },
}
</script>

<style scoped>
.headline { font-size: min(0.6vw + 12px, 24px); }
</style>
