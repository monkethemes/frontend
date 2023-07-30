<template>
    <svg id="Test_Page" data-name="Test Page" xmlns="http://www.w3.org/2000/svg" :style="colorStyles" viewBox="0 0 300 169">
        <rect v-if="!create" id="Background" class="c1 cls-7" x="0" width="300" height="169"/>
        <image
            v-if="backgroundImage"
            :xlink:href="backgroundImage"
            x="-0.5%"
            y="-0.5%"
            width="101%"
            height="101%"
            :opacity="opacity"
        />
        <g id="Logo">
            <path class="c2 cls-1" d="M89.93,14.46c-.07-.16-.22-.27-.4-.27h-.85c-.17,0-.34,.11-.4,.27l-.92,2.31c-.14,.36-.65,.36-.8,0l-.92-2.31c-.07-.16-.22-.27-.4-.27h-.42c-1.18,0-2.14,.96-2.14,2.14v9.29h17.15v-9.29c0-1.18-.96-2.14-2.14-2.14h-4.71c-.17,0-.34,.11-.4,.27l-.92,2.31c-.14,.36-.65,.36-.8,0l-.92-2.31Zm-7.25,12.6v1.43c0,1.58,1.28,2.86,2.86,2.86h2.86v2.86c0,1.58,1.28,2.86,2.86,2.86s2.86-1.28,2.86-2.86v-2.86h2.86c1.58,0,2.86-1.28,2.86-2.86v-1.43h-17.15Zm8.58,6.43c.39,0,.71,.32,.71,.71s-.32,.71-.71,.71-.71-.32-.71-.71,.32-.71,.71-.71Z"/>
            <text class="c6 cls-6" transform="translate(107.49 31.41)"><tspan x="0" y="0">monkethemes</tspan></text>
        </g>
        <g id="Colours-2" data-name="Colours">
            <g id="background">
            <rect class="c1 cls-5" x="129.07" y="50.84" width="21.56" height="21.56" rx="3.78" ry="3.78"/>
            <text class="c6 cls-3" transform="translate(70.98 64.62)"><tspan x="0" y="0">background</tspan></text>
            </g>
            <g id="main">
            <rect class="c2 cls-5" x="129.07" y="78.78" width="21.56" height="21.56" rx="3.78" ry="3.78"/>
            <text class="c6 cls-3" transform="translate(99.84 93.2)"><tspan x="0" y="0">main</tspan></text>
            </g>
            <g id="sub">
            <rect class="c4 cls-5" x="129.07" y="106.72" width="21.56" height="21.56" rx="3.78" ry="3.78"/>
            <text class="c6 cls-3" transform="translate(104.56 120.4)"><tspan x="0" y="0">sub</tspan></text>
            </g>
            <g id="sub_alt" data-name="sub alt">
            <rect class="c5 cls-5" x="157.74" y="106.72" width="21.56" height="21.56" rx="3.78" ry="3.78"/>
            <text class="c6 cls-3" transform="translate(187.44 120.4)"><tspan x="0" y="0">sub alt</tspan></text>
            </g>
            <g id="caret">
            <rect class="c3 cls-5" x="157.75" y="78.78" width="21.56" height="21.56" rx="3.78" ry="3.78"/>
            <text class="c6 cls-3" transform="translate(187.56 93.2)"><tspan x="0" y="0">caret</tspan></text>
            </g>
            <g id="text">
            <rect class="c6 cls-5" x="157.74" y="50.84" width="21.56" height="21.56" rx="3.78" ry="3.78"/>
            <text class="c6 cls-3" transform="translate(187.57 64.54)"><tspan x="0" y="0">text</tspan></text>
            </g>
            <g id="error">
            <path id="bottom" class="c9 cls-5" d="M150.63,145.45v7c0,2.09-1.69,3.78-3.78,3.78h-13.99c-2.09,0-3.78-1.69-3.78-3.78v-7"/>
            <path id="top" class="c7 cls-5" d="M129.07,145.45v-7c0-2.09,1.69-3.78,3.78-3.78h13.99c2.09,0,3.78,1.69,3.78,3.78v7"/>
            <text class="c6 cls-3" transform="translate(94.99 142.77)"><tspan x="0" y="0">error</tspan></text>
            <text class="c4 cls-2" transform="translate(80.42 153.94)"><tspan x="0" y="0">colorful</tspan></text>
            </g>
            <g id="extra_error" data-name="extra error">
            <text class="c6 cls-3" transform="translate(187.62 142.77)"><tspan x="0" y="0">extra error</tspan></text>
            <path class="c10 cls-5" d="M179.31,145.45v7c0,2.09-1.69,3.78-3.78,3.78h-13.99c-2.09,0-3.78-1.69-3.78-3.78v-7"/>
            <path class="c8 cls-5" d="M157.75,145.45v-7c0-2.09,1.69-3.78,3.78-3.78h13.99c2.09,0,3.78,1.69,3.78,3.78v7"/>
            <text class="c4 cls-2" transform="translate(187.57 153.89)"><tspan x="0" y="0">colorful</tspan></text>
            </g>
        </g>
        <rect width="100%" height="100%" fill="transparent" />
    </svg>
</template>
    
<script>
    export default {
        name: 'colorsPage',
        props: {
            colors: {
                type: Array,
                default: () => [],
            },
            backgroundImage: {
                type: String,
                default: '',
            },
            opacity: {
                type: Number,
                default: 1,
            },
            title: {
                type: String,
                default: 'Serika Dark',
            },
            cardId: {
                type: String,
                default: '',
            },
            create: {
                type: Boolean,
                required: false,
                default: false,
            }
        },
        computed: {
            colorStyles() {
                const colorVars = this.colors.reduce((acc, color, index) => {
                    acc[`--color-${index+1}`] = color;
                    return acc;
                }, {});
                return colorVars;
            },
        },
        
    };
</script>
    
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&family=Roboto+Mono:wght@600&display=swap');
    svg {
        width: 100%;
        height: auto;
    }
    .c1 {
        fill: var(--color-1);
    }
    .c2 {
        fill: var(--color-2);
    }
    .c3 {
        fill: var(--color-3);
    }
    .c4 {
        fill: var(--color-4);
    }
    .c5 {
        fill: var(--color-5);
    }
    .c6 {
        fill: var(--color-6);
    }
    .c7 {
        fill: var(--color-7);
    }
    .c8 {
        fill: var(--color-8);
    }
    .c9 {
        fill: var(--color-9);
    }
    .c10 {
        fill: var(--color-10);
    }
    .cls-2, .cls-3 {
        font-family: RobotoMono-Regular, 'Roboto Mono';
        font-size: 8.03px;
        font-variation-settings: 'wght' 400;
      }

      .cls-5 {
        stroke: #d2d0c5;
        stroke-miterlimit: 10;
      }

      .cls-6 {
        font-family: LexendDeca-Medium, 'Lexend Deca';
        font-size: 15.84px;
        font-variation-settings: 'wght' 500;
      }
</style>
    