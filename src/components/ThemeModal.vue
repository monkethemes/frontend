<template>
    <div class="modal modal-open animated fadeIn">
      <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" @click="closeModal"></div>
      <div class="modal-box relative min-h-[373.5px] bg-accent p-0">
        <Splide :options="{ type:'slide', drag:true, gap:0, fixedWidth:'100%', heightRatio:0.5625 }" :aria-label="`${cardId}`" :has-track="false">
          <div class="carousel-mask">
            <SplideTrack 
            @mousedown="handleMouseDown" 
            @mousemove="handleMouseMove" 
            @mouseup="handleMouseUp">
              <SplideSlide>  
                <div
                class="absolute top-0 left-0 w-full h-0 pb-[56.25%] pointer-events-none observer-div"
                  data-slide-name="testPage"
                  :style="{ backgroundColor: themeData.c[0] }"
                ></div>           
                <testPage
                v-if="themeData"
                  :colors="themeData.c"
                  :backgroundImage="themeData.i ? `https://monkethemes.com/api/static/bgi/large/${cardId}.jpg` : ''"
                  :cardId="cardId"
                  :opacity="themeData.f?.[3]"
                  :title="title"
                  :flipped="flipped"
                  :colorful="colorful"
                />
              </SplideSlide>
              <SplideSlide>
                <div
                class="absolute top-0 left-0 w-full h-0 pb-[56.25%] pointer-events-none observer-div"
                  data-slide-name="resultsPage"
                  :style="{ backgroundColor: themeData.c[0] }"
                ></div>
                <resultsPage
                v-if="themeData && visibleSlides.resultsPage"
                  :colors="themeData.c"
                  :backgroundImage="themeData.i ? `https://monkethemes.com/api/static/bgi/large/${cardId}.jpg` : ''"
                  :cardId="cardId"
                  :opacity="themeData.f?.[3]"
                  :title="title"
                />
              </SplideSlide>
              <SplideSlide>
                <div
                class="absolute top-0 left-0 w-full h-0 pb-[56.25%] pointer-events-none observer-div"
                  data-slide-name="settingsPage"
                  :style="{ backgroundColor: themeData.c[0] }"
                ></div>
                <settingsPage
                v-if="themeData && visibleSlides.settingsPage"
                  :colors="themeData.c"
                  :backgroundImage="themeData.i ? `https://monkethemes.com/api/static/bgi/large/${cardId}.jpg` : ''"
                  :cardId="cardId"
                  :opacity="themeData.f?.[3]"
                  :title="title"
                />
              </SplideSlide>
              <SplideSlide>
                <div
                class="absolute top-0 left-0 w-full h-0 pb-[56.25%] pointer-events-none observer-div"
                  data-slide-name="aboutPage"
                  :style="{ backgroundColor: themeData.c[0] }"
                ></div>
                <aboutPage
                v-if="themeData && visibleSlides.aboutPage"
                  :colors="themeData.c"
                  :backgroundImage="themeData.i ? `https://monkethemes.com/api/static/bgi/large/${cardId}.jpg` : ''"
                  :cardId="cardId"
                  :opacity="themeData.f?.[3]"
                  :title="title"
                />
              </SplideSlide>
              <SplideSlide>
                <div
                class="absolute top-0 left-0 w-full h-0 pb-[56.25%] pointer-events-none observer-div"
                  data-slide-name="colorsPage"
                  :style="{ backgroundColor: themeData.c[0] }"
                ></div>
                <colorsPage
                v-if="themeData && visibleSlides.colorsPage"
                  :colors="themeData.c"
                  :backgroundImage="themeData.i ? `https://monkethemes.com/api/static/bgi/large/${cardId}.jpg` : ''"
                  :cardId="cardId"
                  :opacity="themeData.f?.[3]"
                  :title="title"
                />
              </SplideSlide>
            </SplideTrack>
          </div>
          <div class="pagination-wrapper h-9 w-full overflow-hidden">
            <ul class="splide__pagination pt-4 relative"></ul>
          </div>
        </Splide>
        <div class="card-body h-[200px] overflow-hidden">
          <div class="mb-4 -mt-7">
            <div class="flex justify-between items-center">
              <p class="whitespace-nowrap overflow-hidden w-7/10 pr-2 overflow-ellipsis text-sm text-secondary">Uploaded by 
                <router-link 
                  :to="`/user/${userId}`" 
                  @click.native="quietCloseModal"
                  class="underline"
                >
                  {{ loading ? 'Loading...' : username }}
                </router-link>  
              </p>
              <div class="text-secondary">
                <font-awesome-icon :icon="brightness > 0.5 ? 'sun' : 'moon'" class="mr-2"/>
                <font-awesome-icon icon="link" @click="copyUrlToClipboard" style="cursor: pointer;"/>
                <transition name="fade">
                  <div v-if="showTooltip" class="absolute right-[15px] p-1.5 rounded-md text-sm mt-[1px] scale-75 bg-secondary text-base-content">Link Copied!</div>
                </transition>
              </div>
            </div>
            <h2 class="card-title w-full whitespace-nowrap overflow-hidden inline-block overflow-ellipsis text-base-content">
              {{ title }}
            </h2>
            <p class="description leading-5 h-[2.4em] overflow-hidden overflow-ellipsis inline-flex flex-col justify-content text-base-content">{{ description ? description : "No description provided." }}</p>
          </div>
          <div class="card-actions flex flex-col space-y-1 mb">
            <div class="flex w-full space-x-2">
                <button
                  class="btn btn-outline btn-error flex items-center flex-nowrap max-w-max"
                  @click="handleLike"
                  :aria-disabled="isCurrentUserUploader"
                  :disabled="isCurrentUserUploader"
                >
                  <font-awesome-icon :icon="userLiked ? 'heart' : ['far', 'heart']" />
                  <span>{{ likes }}</span>
                </button>
              <button
                class="btn btn-outline btn-primary flex-grow"
                @click="applyTheme"
              >
                <font-awesome-icon icon="paint-roller" />
                Apply
              </button>
              <router-link :to="`/edit/${cardId}`"
                v-if="isCurrentUserUploader"
                class="btn btn-outline btn-secondary flex"
              >
                <font-awesome-icon icon="pen-to-square" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      </div>
  </template>
    
  <script>
    import themeMixin from './mixins/themeMixin';
    import '@splidejs/vue-splide/css';
  
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
    import testPage from './previews/testPage.vue';
    import resultsPage from './previews/resultsPage.vue';
    import settingsPage from './previews/settingsPage.vue';
    import aboutPage from './previews/aboutPage.vue';
    import colorsPage from './previews/colorsPage.vue';
  
    export default {
      mixins: [themeMixin],
      components: {
        testPage,
        resultsPage,
        settingsPage,
        aboutPage,
        colorsPage,
        Splide,
        SplideSlide,
        SplideTrack
      },
      props: {
        title: String,
        description: String,
        uploader: String,
        images: Array,
        url: String,
        brightness: Number,
        themeData: Object,
        currentUserId: String,
        cardId: String,
        userId: String,
        previousPage: String,
        flipped: {
          type: Boolean,
          required: false,
          default: false,
        },
        colorful: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
      methods: {
        resetVisibleSlides() {
          for (let prop in this.visibleSlides) {
            if(this.visibleSlides.hasOwnProperty(prop)){
                this.visibleSlides[prop] = false;
            }
          }
        },
        closeModal() {
          this.$emit('close');
          this.$router.push(this.previousPage);
        },
        quietCloseModal() {
          this.$emit('close');
        },
      },
    };
  </script>
    
  <style scoped>
    .observer-div { z-index: -1; }
    .tooltip { transition: opacity 0.3s ease; }
    .description { -webkit-line-clamp: 2; }
    .modal-backdrop { z-index: 9997; }
    .modal-box { z-index: 10000; }
    .carousel-mask {
      mask-image: -webkit-radial-gradient(white, black);
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      border-top-left-radius: var(--rounded-box, 1rem);
      border-top-right-radius: var(--rounded-box, 1rem);
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  </style>