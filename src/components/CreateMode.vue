<template>
    <div class="lg:flex lg:gap-4">
        <div class="p-4 card bg-accent mb-4 lg:mb-0 lg:w-[630px]">
            <div class="grid grid-cols-2 grid-rows-4 gap-1 grid-rows-none">
                <h2 class="row-span-1 col-span-2 text-xl font-bold mb-4 text-center">Theme Preview</h2>
                <div class="row-span-1 col-span-2 flex items-center m-auto -mt-1 mb-1">
                    <h2 class="text-md text-secondary mr-4"><span v-if="!isMobile()">Preview </span>Options:</h2>
                    <div class="form-control flex-row items-center">
                        <label class="label cursor-pointer mr-6 flex items-center">
                            <span class="label-text mr-2">Colorful</span>
                            <input type="checkbox" v-model="colorful" class="checkbox checkbox-sm checkbox-primary" />
                        </label>
                        <label class="label cursor-pointer flex items-center">
                            <span class="label-text mr-2">Flipped</span>
                            <input type="checkbox" v-model="flipped" class="checkbox checkbox-sm checkbox-primary" />
                        </label>
                    </div>
                </div>
                <div class="row-span-1 col-span-2 overflow-hidden rounded-xl mb-2.5">
                    <Splide options="{ type: 'loop', perPage: 1, height: '100%', width: '100%' }">
                        <SplideSlide v-for="(component, i) in components" :key="i">
                            <div
                                :style="{ background: componentProps.colors[0], width: '100%', height: '100%', position: 'absolute', overflow: 'hidden' }">
                                <div :style="{
                                    backgroundImage: `url(${backgroundImage})`,
                                    backgroundSize: backgroundMode === 'max' ? '100% 100%' : backgroundMode,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    filter: `blur(${blur * 6.25}px) brightness(${brightness}) saturate(${saturation})`,
                                    opacity: opacity,
                                    width: `${100 * (1 + blur * 0.06)}%`,
                                    height: `${100 * (1 + blur * 0.06)}%`,
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }">
                                </div>
                            </div>
                            <component :is="component" v-bind="{ ...componentProps, flipped, colorful }"
                                style="position: relative;" />
                        </SplideSlide>
                    </Splide>
                </div>
                <div class="row-span-1 col-span-2 flex justify-center m-auto w-full">
                    <input type="text" readonly :value="themeLink" class="form-input input w-full mr-2">
                    <button class="btn btn-primary px-4 flex-shrink-0" @click="uploadTheme">Upload Theme</button>
                </div>
            </div>
        </div>
        <div class="p-4 card bg-accent lg:mb-0 lg:flex-grow">
            <div class="grid grid-cols-2 grid-rows-8 gap-1 grid-rows-none -ml-2.5">
                <h2 class="row-span-1 col-span-2 text-xl font-bold mb-4 text-center">Theme Colors</h2>
                <div v-for="(color, i) in componentProps.colors.slice(0, 8)" :key="'color' + i"
                    class="row-span-1 col-span-1 flex flex-col items-center">
                    <div class="ml-2 text-secondary">{{ titles[i] }}</div>
                    <div class="flex items-center">
                        <PickColors v-model:value="componentProps.colors[i]" show-alpha />
                        <input v-model="componentProps.colors[i]" class="form-input input w-32 h-7 pl-[30px] ml-[-30px]" />
                        <button v-if="isSupported" @click="openEyeDropper(i)"
                            class="bg-base-100 h-7 w-7 text-white rounded-lg -ml-7 z-10">
                            <font-awesome-icon icon="eye-dropper" class="text-secondary" />
                        </button>
                    </div>
                </div>
                <div class="row-span-1 col-span-2 divider divider-vertical w-full ml-0"></div>
                <h2 class="row-span-1 col-span-2 text-lg font-bold mb-4 text-center text-secondary">Colorful Mode</h2>
                <div v-for="(color, i) in componentProps.colors.slice(8, 10)" :key="'bottom' + i"
                    class="row-span-1 col-span-1 flex flex-col items-center">
                    <div class="ml-2 text-secondary">{{ titles[i + 8] }}</div>
                    <div class="flex items-center">
                        <PickColors v-model:value="componentProps.colors[i + 8]" show-alpha />
                        <input v-model="componentProps.colors[i + 8]"
                            class="form-input input w-32 h-7 pl-[30px] ml-[-30px]" />
                        <button v-if="isSupported" @click="openEyeDropper(i + 8)"
                            class="bg-base-100 h-7 w-7 text-white rounded-lg -ml-7 z-10">
                            <font-awesome-icon icon="eye-dropper" class="text-secondary" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row-span-1 col-span-2 p-4 card bg-accent mt-4 lg:flex lg:gap-4">
        <h2 class="row-span-1 col-span-2 text-xl font-bold mb-4 text-center">Theme Background</h2>
        <div class="lg:flex lg:gap-4">
            <div class="lg:w-1/2 flex flex-col justify-center items-center px-4">
                <label class="form-label text-center mb-4 w-full">
                    <input class="form-input input w-full" v-model="backgroundImage" type="text"
                        placeholder="Background Image URL" />
                </label>
                <div class="join w-full">
                    <input class="join-item btn btn-sm w-1/3 normal-case" type="radio" name="background" aria-label="Cover"
                        v-model="backgroundMode" value="cover" />
                    <input class="join-item btn btn-sm w-1/3 normal-case" type="radio" name="background"
                        aria-label="Contain" v-model="backgroundMode" value="contain" />
                    <input class="join-item btn btn-sm w-1/3 normal-case" type="radio" name="background" aria-label="Max"
                        v-model="backgroundMode" value="max" />
                </div>
            </div>
            <div class="lg:w-1/2 flex flex-col items-center">
                <div class="grid grid-cols-2 grid-rows-2 gap-4 w-full px-4 mt-4 lg:mt-0">
                    <div>
                        <label class="block">Opacity</label>
                        <input type="range" v-model="opacity" min="0" max="1" value="1" step="0.1" class="range range-xs" />
                    </div>
                    <div>
                        <label class="block">Saturation</label>
                        <input type="range" v-model="saturation" min="0" max="2" value="1" step="0.1"
                            class="range range-xs" />
                    </div>
                    <div>
                        <label class="block">Blur</label>
                        <input type="range" v-model="blur" min="0" max="5" value="0" step="0.1" class="range range-xs" />
                    </div>
                    <div>
                        <label class="block">Brightness</label>
                        <input type="range" v-model="brightness" min="0" max="2" value="1" step="0.1"
                            class="range range-xs" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
import { useEyeDropper } from '@vueuse/core'
import aboutPage from './previews/aboutPage.vue'
import colorsPage from './previews/colorsPage.vue'
import resultsPage from './previews/resultsPage.vue'
import settingsPage from './previews/settingsPage.vue'
import testPage from './previews/testPage.vue'

import PickColors from 'vue-pick-colors'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const { isSupported, open, sRGBHex } = useEyeDropper()

export default {
    components: {
        Splide,
        SplideSlide,
        PickColors
    },
    data() {
        return {
            components: [testPage, resultsPage, settingsPage, aboutPage, colorsPage],
            componentProps: {
                create: true,
                colors: ["#1c1f26", "#414a5a", "#64728c", "#93a7cc", "#16181e", "#64728c", "#b54013", "#822d0d", "#b54013", "#822d0d"],
                title: 'Theme Preview',
                cardId: '',
            },
            backgroundImage: '',
            backgroundMode: 'cover',
            blur: 0,
            brightness: 1,
            saturation: 1,
            opacity: 1,
            titles: ["Background", "Main", "Caret", "Sub", "Sub Alt", "Text", "Error", "Extra Error", "Error", "Extra Error"],
            currentColorIndex: null,
            flipped: false,
            colorful: false,
        }
    },
    watch: {
        'componentProps.colors': {
            handler(colors) {
                for (let i = 0; i < colors.length; i++) {
                    if (colors[i].length > 7) {
                        this.componentProps.colors[i] = colors[i].slice(0, 7);
                    }
                }
            },
            deep: true
        },
        'componentProps': {
            handler() { },
            deep: true
        },
        'jsonOutputString': {
            handler() {
                console.log(this.jsonOutputString);
            },
            deep: true
        },
    },
    mounted() {
        watchEffect(() => {
            if (this.currentColorIndex !== null && sRGBHex.value) {
                this.componentProps.colors[this.currentColorIndex] = sRGBHex.value;
            }
        });
    },
    methods: {
        openEyeDropper(i) {
            this.currentColorIndex = i;
            open();
        },
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        uploadTheme() {
            this.$emit('uploadWithUrl', this.themeLink);
        }
    },
    computed: {
        jsonOutputString() {
            let fValues = [this.blur, this.brightness, this.saturation, this.opacity].join(',');
            let output = `{"c":${JSON.stringify(this.componentProps.colors)}`;

            if (this.backgroundImage !== '') {
                output += `,"i":"${this.backgroundImage}","s":"${this.backgroundMode}","f":[${fValues}]`;
            }
            output += '}';
            return output;
        },
        themeLink() {
            const base64Theme = btoa(this.jsonOutputString);
            return `https://monkeytype.com?customTheme=${base64Theme}`;
        }
    }
}
</script>