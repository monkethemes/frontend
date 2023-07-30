<template>
  <transition name="fade">
    <div class="card w-full bg-accent">
      <Splide :options="{ type:'slide', drag:true, gap:0, fixedWidth:'100%', heightRatio:0.5625 }" :aria-label="`${cardId}`" :has-track="false">
        <div class="carousel-mask">
          <SplideTrack 
            @mousedown="handleMouseDown" 
            @mousemove="handleMouseMove" 
            @mouseup="handleMouseUp"
        >
            <SplideSlide v-for="(item, index) in componentsList" :key="index">
                <div
                    class="absolute top-0 left-0 w-full h-0 pb-[56.25%] pointer-events-none observer-div"
                    :data-slide-name="item.name"
                    :style="{ backgroundColor: themeData.c[0] }"
                ></div>
                <component
                    :is="item.component"
                    v-if="themeData && visibleSlides[item.name]"
                    :colors="themeData.c"
                    :backgroundImage="themeData.i ? `https://monkethemes.com/api/static/bgi/small/${cardId}.jpg` : ''"
                    :cardId="cardId"
                    :opacity="themeData.f?.[3]"
                    :title="title"
                    :flipped="flipped"
                    :colorful="colorful"
                />
            </SplideSlide>
          </SplideTrack>
        </div>
        <ul class="splide__pagination pt-4 relative"></ul>
      </Splide>
      <div class="card-body h-[200px] overflow-hidden">
        <div class="mb-4 -mt-7">
          <div class="flex justify-between items-center">
            <p class="whitespace-nowrap overflow-hidden w-8/12 pr-2 overflow-ellipsis text-sm text-secondary">Uploaded by 
              <router-link :to="`/user/${userId}`" class="underline">
                {{ loading ? 'Loading...' : username }}
              </router-link>  
            </p>
            <div class="text-secondary">
              <font-awesome-icon :icon="(brightness / 100) > 0.5 ? 'sun' : 'moon'" class="mr-2"/>
              <font-awesome-icon icon="link" @click="copyUrlToClipboard" style="cursor: pointer;"/>
              <transition name="fade">
                <div v-if="showTooltip" class="absolute right-[15px] p-1.5 rounded-md text-sm mt-[1px] scale-75 bg-secondary text-base-content">Link Copied!</div>
              </transition>
            </div>
          </div>
          <router-link :to="`/theme/${cardId}`">
            <h2 class="card-title underline decoration-base-content underline-offset-2 w-full whitespace-nowrap overflow-hidden inline-block overflow-ellipsis text-base-content">
              {{ title }}
            </h2> 
          </router-link>
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
  </transition>
</template>
  
<script>
  import themeMixin from './mixins/themeMixin';
  import '@splidejs/vue-splide/css';

  import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

  export default {
    mixins: [themeMixin],
    components: {
      Splide,
      SplideSlide,
      SplideTrack,
    },
    props: {
      title: String,
      description: String,
      uploader: String,
      images: Array,
      url: String,
      brightness: Number,
      themeData: Object,
      likeUpdates: Object,
      currentUserId: String,
      cardId: String,
      userId: String,
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
    watch: {
      likeUpdates: {
        deep: true,
        immediate: true,
        handler(newValue) {
          if(newValue[this.cardId] !== undefined) {
            const oldUserLiked = this.userLiked;
            this.userLiked = newValue[this.cardId];
            if (!oldUserLiked && this.userLiked) {
              this.likes++;
            }
            else if (oldUserLiked && !this.userLiked) {
              this.likes--;
            }
          }
        }
      }
    },
    created() {
      console.log(this.themeData.c);
    }
  };
</script>
  
<style scoped>
  .observer-div { z-index: -1; }
  .tooltip { transition: opacity 0.3s ease; }
  .description { -webkit-line-clamp: 2; }
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