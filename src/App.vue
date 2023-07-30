<template>
  <transition name="fade">
    <div v-if="isLoading" style="z-index: 9999;" class="bg-base-100 fixed inset-0 flex items-center justify-center h-screen w-screen">
      <div class="flex items-center">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="lexend normal-case text-lg rounded">
          <font-awesome-icon icon="brush" class="mt-1 mr-2 text-primary" /> monkethemes
        </p>
      </div>
    </div>
  </transition>
  <div v-show="!isLoading">
      <AppHeader @freshSearch="reInit"/>
      <transition name="fade" @after-leave="afterThemeLeave">
        <ThemeModal ref="themeModal" v-if="isThemeModalVisible" :key="theme._id" :themeData="theme.themeData"
          :cardId="theme._id" :title="theme.title" :description="theme.description" :likes="theme.likes" :url="theme.url"
          :userId="theme.userId" :username="theme.username" :userLiked="theme.userLiked" :brightness="theme.brightness"
          :previousPage="previousPage" @close="closeThemeModal" @likeUpdate="updateLikeUpdates($event.cardId, $event.userLiked)"/>
      </transition>
      <transition name="fade" @after-leave="afterModifyLeave">
        <ModifyThemeModal v-if="isModifyThemeModalVisible" @freshSearch="freshSearch" @close="closeModifyModal" :state="modifyState" :themeId="modifyThemeId" :previousPage="previousPage" :initialUrl="initialUrl"/>
      </transition>
      <main class="container mx-auto px-4">
        <WelcomeHero :heroView="currentHero" :userId="filterUserId" />
        <ais-instant-search :search-client="searchClient" index-name="themes:likesWeek:desc" :key="searchKey">
          <transition name="fade">
            <div v-if="!routeLoading && !isCreator">
              <FilterBar 
                @flip-change="handleFlipChange" 
                @color-change="handleColorChange" 
                @backgroundImageChanged="backgroundImage = $event"
                @withoutBackgroundChanged="withoutBackground = $event"
                @likesOnlyChanged="likesOnly = $event"
              />
              
              <ais-configure 
                :hitsPerPage="hitCount" 
                :relevancyStrictness="60"
                :filters="generateFilters()"
              />

              <InfiniteResults ref="infiniteResults" @first-page-loaded="isLoading = false">
                <template v-slot:default="{ item }">
                  <ThemeCard :key="item.id" :themeData="item.themeData" :cardId="item.id" :title="item.title"
                    :description="item.description" :likes="item.likes" :url="item.url" :userId="item.userId"
                    :brightness="item.brightness" :likeUpdates="likeUpdates" :flipped="flipped" :colorful="colorful"
                    />
                </template>
              </InfiniteResults>
            </div>
          </transition>

          <transition name="fade-delayed" appear>
            <CreateMode v-if="!routeLoading && isCreator" @uploadWithUrl="setInitialUrlAndUpload"/>
          </transition>
        </ais-instant-search>
      </main>
      <AppFooter />
  </div>
</template>
<script>
import axios from "axios";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

import AppHeader from "./components/AppHeader.vue";
import ModifyThemeModal from "./components/ModifyThemeModal.vue";
import AppFooter from "./components/AppFooter.vue";
import ThemeCard from "./components/ThemeCard.vue";
import ThemeModal from "./components/ThemeModal.vue";
import WelcomeHero from "./components/WelcomeHero.vue";
import FilterBar from "./components/FilterBar.vue";
import CreateMode from "./components/CreateMode.vue";
import InfiniteResults from "./components/widgets/InfiniteResults.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    ThemeCard,
    WelcomeHero,
    FilterBar,
    ThemeModal,
    CreateMode,
    ModifyThemeModal,
    InfiniteResults,
  },
  data() {
    return {
      isLoading: true,
      routeLoading: true,
      isModifyThemeModalVisible: false,
      isThemeModalVisible: false,
      isThemeClosing: false,
      isModifyClosing: false,
      isCreator: false,
      flipped: false,
      colorful: false,
      likesOnly: false,
      selectedThemeId: null,
      currentPage: null,
      totalPages: null,
      filterUserId: null,
      initialUrl: '',
      theme: null,
      previousPage: null,
      wasModal: null,
      modifyThemeId: null,
      backgroundImage: true,
      withoutBackground: true,
      loadStatus: "loading",
      currentHero: "welcome",
      modifyState: "upload",
      hitCount: 12,
      searchKey: 0,
      themes: [],
      likeUpdates: {},
      searchClient: instantMeiliSearch(
        "https://search.monkethemes.com",
        "API_KEY",
        {
          primaryKey: "id",
        }
      ),
    };
  },
  computed: {
    notifications() {
      return this.$store.state.notifications;
    },
  },
  methods: {
    async freshSearch() {
      this.searchClient.clearCache();
      this.hitCount = 0;
      this.hitCount = 12;
    },
    async reInit() {
      this.searchKey++;
    },
    generateFilters() {
      let filters = [];

      if (this.filterUserId) {
        filters.push(`userId = '${this.filterUserId}'`);
      }

      if (this.likesOnly) {
        filters.push(`likesList = '${this.userId}'`);
      }

      if (this.backgroundImage && !this.withoutBackground) {
        filters.push("hasImage = true");
      }

      if (!this.backgroundImage && this.withoutBackground) {
        filters.push("hasImage = false");
      }

      return filters.join(' AND ');
    },
    updateLikeUpdates(cardId, userLiked) {
      this.likeUpdates[cardId] = userLiked;
    },
    handleFlipChange(value) {
      this.flipped = value;
    },
    handleColorChange(value) {
      this.colorful = value;
    },
    closeThemeModal() {
      this.$refs.themeModal.resetVisibleSlides();
      this.isThemeClosing = true;
      this.$nextTick(() => {
        this.isThemeModalVisible = false;
        this.isThemeClosing = false;
      });
    },
    closeModifyModal() {
      this.isModifyClosing = true;
      this.$nextTick(() => {
        this.isModifyThemeModalVisible = false;
        this.isModifyClosing = false;
      });
    },
    afterThemeLeave() {
      this.isThemeModalVisible = false;
      this.isThemeClosing = false;
    },
    afterModifyLeave() {
      this.isModifyThemeModalVisible = false;
      this.isModifyClosing = false;
    },
    setInitialUrlAndUpload(url) {
      this.initialUrl = url;
      this.$router.push('/upload').then(() => {
        this.initialUrl = '';
      });
    },
    
    async loadTheme(id) {
      if (id) {
        try {
          const response = await axios.get(
            `https://monkethemes.com/api/theme/${id}`
          );
          const theme = response.data;
          this.theme = { ...theme };
          document.title = `${this.theme.title} | monkethemes`;
          this.isThemeModalVisible = true;
        } catch (error) {
          console.error("Error fetching theme:", error.message);
        }
      } else {
        this.isThemeModalVisible = false;
      }
    },
  },
  watch: {
    $route(to, from) {
      this.routeLoading = true;
      
      if (to.path === '/') {
        this.filterUserId = null;
        this.isThemeModalVisible = false;
        this.isModifyThemeModalVisible = false;
        this.wasModal = false;
        this.previousPage = "/";
        this.currentHero = "welcome";
        document.title = "home | monkethemes";
      }
      if (to.path.startsWith('/theme/')) {
        this.loadTheme(to.params.id);
        this.wasModal = true;
      }
      if (to.path.startsWith('/user/')) {
        this.searchKey++;
        this.filterUserId = to.params.userId;
        this.currentHero = "user";
        this.previousPage = "/user/" + this.filterUserId;
      }
      if (to.path.startsWith('/upload')) {
        this.modifyThemeId = null;
        this.modifyState = 'upload';
        document.title = "upload | monkethemes";
        this.isModifyThemeModalVisible = true;
        this.wasModal = true;
        if (from.path.startsWith('/create')) {
          this.isCreator = true;
        }
      }
      if (to.path.startsWith('/edit')) {
        this.modifyThemeId = to.params.id;
        this.modifyState = 'edit';
        this.isModifyThemeModalVisible = true;
        this.wasModal = true;
      }
      if (to.path.startsWith('/create')) {
        this.isCreator = true;
        this.currentHero = "create";
        this.previousPage = "/create";
        this.isLoading = false;
      } else if (!to.path.startsWith('/upload')) {
        this.isCreator = false;
      }
      
      this.routeLoading = false;
    },
  },
  created() {
    this.$store.dispatch('fetchUser').then(() => {
      this.userId = this.$store.state.user ? this.$store.state.user.userId.toString() : null;
    });
  }
};
</script>