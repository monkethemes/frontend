<template>
  <div class="flex flex-col-reverse lg:flex-row mb-4 mx-auto space-y-4 lg:space-y-0 lg:space-x-4 items-stretch">
    <div class="flex flex-col sm:flex-row sm:h-12 mt-4 lg:mt-0 sm:space-x-4 p-4 sm:p-0 rounded-box sm:pr-8 bg-accent lg:w-3/5">
      
      <div class="label sm:ml-8 flex space-x-4 flex-grow">
        <font-awesome-icon icon="moon" class="text-secondary" />
        <ais-range-input attribute="brightness" class="flex-grow" :min="0" :max="100">
          <template v-slot="{ currentRefinement, refine }">
            <vue-slider
              :min="0"
              :max="100"
              :lazy="true"
              :modelValue="toValue(currentRefinement)"
              @change="refine({ min: $event[0], max: $event[1] })"
              class="ml-2 mr-2"
            />
          </template>
        </ais-range-input>
        <font-awesome-icon icon="sun" class="text-secondary" />
      </div>

      <div class="divider mt-0 mb-0 sm:p-2 sm:divider-horizontal"></div>
      <div class="flex flex-grow justify-around">
        <label class="label cursor-pointer w-18">
          <font-awesome-icon icon="image" class="text-secondary mr-4" />
          <input 
            type="checkbox" 
            class="checkbox checkbox-primary checkbox-sm"
            v-model="backgroundImage"
            @change="$emit('backgroundImageChanged', backgroundImage)"
          />
        </label>

        <label class="label cursor-pointer w-18">
          <div class="fa-layers fa-fw text-secondary mr-4">
            <span class="fas fa-slash" data-fa-mask="fas fa-image" data-fa-transform="down-1.5"></span>
            <span class="fas fa-slash"></span>
          </div>
          <input 
            type="checkbox" 
            class="checkbox checkbox-primary checkbox-sm"
            v-model="withoutBackground"
            @change="$emit('withoutBackgroundChanged', withoutBackground)"
          />
        </label>
        <div class="divider mt-0 mb-0 sm:p-2 divider-horizontal"></div>
        <label class="swap">
          <input 
            type="checkbox" 
            v-model="likesOnly" 
            @change="$emit('likesOnlyChanged', likesOnly)"
          />
          <font-awesome-icon :icon="['far', 'heart']" class="swap-off text-secondary" />
          <font-awesome-icon icon="heart" class="swap-on text-error" />
        </label>
      </div>
    </div>

    <div class="flex join rounded-box lg:w-2/5">
      <ais-search-box class="w-3/5">
        <template v-slot="{ currentRefinement, refine }">
          <SearchBox :delay="200" />
        </template>
      </ais-search-box>
      <ais-sort-by 
        :items="[
          { value: 'themes:likesWeek:desc', label: 'Top Weekly' },
          { value: 'themes:likesDay:desc', label: 'Top Daily' },
          { value: 'themes:likes:desc', label: 'Top All Time' },
          { value: 'themes:createdAt:desc', label: 'Newest' },
          { value: 'themes:createdAt:asc', label: 'Oldest' }
        ]"
        class="w-2/5"
      >
        <template v-slot="{ items, refine }">
          <select class="select join-item btn-accent w-full" @change="refine($event.currentTarget.value)">
            <option disabled>Sort by</option>
            <option v-for="item in items" :key="item.value" :value="item.value">
              {{ item.label }}
            </option>
          </select>
        </template>
      </ais-sort-by>
    </div>
  </div>

  <div class="sticky-mobile-container">
    <div class="sticky-mobile-block"></div>
    <div class="mb-6 flex flex-row mt-4 mx-auto bg-accent border border-2 border-base-100 rounded-box h-8 items-center justify-between sticky-mobile">
      <div class="ml-4 -mt-1">
        <span class="label-text font-semibold text-secondary"><span class="preview">Preview</span> Options:</span>
      </div>
      <div class="max-w-xs h-8 flex mr-3">
        <div class="flex space-x-4 flex-grow justify-around mx-auto">
          <label class="label cursor-pointer w-18">
            <span class="label-text text-secondary whitespace-nowrap mr-2">Colorful</span>
            <input type="checkbox" id="colorful" class="checkbox checkbox-primary checkbox-xs" v-model="colorful" @change="$emit('color-change', colorful)" />
          </label>
          <label class="label cursor-pointer w-18">
            <span class="label-text text-secondary whitespace-nowrap mr-2">Flipped</span>
            <input type="checkbox" id="flipped" class="checkbox checkbox-primary checkbox-xs" v-model="flipped" @change="$emit('flip-change', flipped)" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, provide } from 'vue';
import VueSlider from 'vue-slider-component';
import SearchBox from './widgets/SearchBox.vue';
import '../css/slider.css'

export default {
  components: {
    VueSlider,
    SearchBox
  },
  setup() {
    const flipped = ref(false);
    const colorful = ref(false);
    provide('flipped', flipped);
    provide('colorful', colorful);

    return { flipped, colorful };
  },
  data() {
    return {
      darkTheme: true,
      lightTheme: true,
      withoutBackground: true,
      colorful: false,
      flipped: false,
      backgroundImage: true,
      withoutBackground: true,
      likesOnly: false,
    }
  },
  methods: {
    toggleBackground() {
      this.backgroundImage = !this.backgroundImage;
    },
    toggleColorful() {
      this.colorful = !this.colorful;
    },
    toggleFlipped() {
      this.flipped = !this.flipped;
    },
    toValue(value) {
      return [
        typeof value.min === "number" ? value.min : 0,
        typeof value.max === "number" ? value.max : 100,
      ];
    },
  },
}
</script>

<style scoped>
.border-primary {
  border-color: hsl(var(--p)) !important;
}
.select {
  border-radius: inherit;
}
.label-text {
  font-size: .8rem;
}
@media (max-width: 768px) {
  .sticky-mobile-container {
    position: sticky;
    top: 8px;
    z-index: 600;
  }
  .sticky-mobile {
    position: relative;
    z-index: 2;
  }
  .sticky-mobile-block {
    content: " ";
    position: absolute; 
    top: -14px;
    left: -19px;
    right: -19px;
    bottom: 50%;
    background: hsl(var(--b1));
    z-index: 1;
  }
}
@media (max-width: 390px) {
  .preview {
    display: none;
  }
}

</style>
