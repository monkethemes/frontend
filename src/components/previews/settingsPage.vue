<template>
    <svg id="Test_Page" data-name="Test Page" xmlns="http://www.w3.org/2000/svg" :style="colorStyles" viewBox="0 0 300 169">
        <rect v-if="!create" id="Background" class="c1 cls-10" width="300" height="169"/>
        <image
            v-if="backgroundImage"
            :xlink:href="backgroundImage"
            x="-0.5%"
            y="-0.5%"
            width="101%"
            height="101%"
            :opacity="opacity"
        />
        <g id="Funbox">
        <g id="Buttons-6" data-name="Buttons">
        <g id="Binary" class="cls-12">
            <rect class="c5" x="216.92" y="136.69" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(239.96 143.32)"><tspan x="0" y="0">binary</tspan></text>
        </g>
        <g id="Ascii" class="cls-12">
            <rect class="c5" x="150.78" y="136.69" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(175.24 143.32)"><tspan x="0" y="0">ascii</tspan></text>
        </g>
        <g id="Arrows" class="cls-12">
            <rect class="c5" x="84.64" y="136.69" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(107.68 143.32)"><tspan x="0" y="0">arrows</tspan></text>
        </g>
        <g id="_58008" data-name="58008">
            <rect class="c2 cls-1" x="18.5" y="136.69" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c5 cls-6" transform="translate(42.95 143.27)"><tspan x="0" y="0">58008</tspan></text>
        </g>
        <g id="Choo_Choo" data-name="Choo Choo">
            <rect class="c5" x="84.64" y="150.71" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(103.44 157.34)"><tspan x="0" y="0">choo choo</tspan></text>
        </g>
        <g id="Capitals" class="cls-12">
            <rect class="c5" x="18.5" y="150.71" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(38.72 157.34)"><tspan x="0" y="0">capitals</tspan></text>
        </g>
        <g id="Earthquake">
            <rect class="c5" x="150.78" y="150.71" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(168.17 157.34)"><tspan x="0" y="0">earthquake</tspan></text>
        </g>
        <g id="Gibberish" class="cls-12">
            <rect class="c5 cls-13" x="216.92" y="150.71" width="63.17" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(235.73 157.34)"><tspan x="0" y="0">gibberish</tspan></text>
        </g>
        </g>
        <g id="Description" class="c6">
        <text class="cls-2" transform="translate(17.7 123.78)"><tspan x="0" y="0">These are special modes that change the website in some special way (by altering the word</tspan><tspan x="0" y="5.72">generation or website behaviour). Give them a try!</tspan></text>
        </g>
        <g id="Title" class="c4">
        <path class="cls-10" d="M20.43,112.11c-1.09,0-1.97,.88-1.97,1.97s.88,1.97,1.97,1.97h2.62c1.09,0,1.97-.88,1.97-1.97s-.88-1.97-1.97-1.97h-2.62Zm3.11,1.07c.23,0,.41,.18,.41,.41s-.18,.41-.41,.41-.41-.18-.41-.41,.18-.41,.41-.41Zm-1.07,1.39c0-.23,.18-.41,.41-.41s.41,.18,.41,.41-.18,.41-.41,.41-.41-.18-.41-.41Zm-2.29-1.07c0-.14,.11-.25,.25-.25s.25,.11,.25,.25v.33h.33c.14,0,.25,.11,.25,.25s-.11,.25-.25,.25h-.33v.33c0,.14-.11,.25-.25,.25s-.25-.11-.25-.25v-.33h-.33c-.14,0-.25-.11-.25-.25s.11-.25,.25-.25h.33v-.33Z"/>
        <g id="Title-2" data-name="Title">
            <text class="cls-5" transform="translate(27.71 116.04)"><tspan x="0" y="0">funbox</tspan></text>
        </g>
        </g>
    </g>
    <g id="Min_WPM" data-name="Min WPM">
        <g id="Buttons-7" data-name="Buttons">
        <g id="Off">
            <rect class="c5 cls-12" x="185.63" y="98.22" width="45.7" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(204.22 105.06)"><tspan x="0" y="0">off</tspan></text>
        </g>
        <g id="Custom">
            <rect class="c2 cls-1" x="234.47" y="98.22" width="45.65" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c5 cls-6" transform="translate(248.76 105.11)"><tspan x="0" y="0">custom</tspan></text>
        </g>
        <g id="Text_Box" data-name="Text Box">
            <rect class="c5 cls-12" x="185.63" y="84.25" width="81.31" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(191.67 91.1)"><tspan x="0" y="0">100</tspan></text>
        </g>
        <g id="Save_Button" data-name="Save Button">
            <rect class="c5 cls-12" x="269.98" y="84.21" width="10.45" height="10.45" rx="2.53" ry="2.53"/>
            <path class="c6 cls-8" d="M273.87,87.47c-.33,0-.61,.27-.61,.61v3.03c0,.33,.27,.61,.61,.61h3.03c.33,0,.61-.27,.61-.61v-2.3c0-.16-.06-.32-.18-.43l-.73-.73c-.11-.11-.27-.18-.43-.18h-2.3Zm0,.91c0-.17,.14-.3,.3-.3h1.82c.17,0,.3,.14,.3,.3v.61c0,.17-.14,.3-.3,.3h-1.82c-.17,0-.3-.14-.3-.3v-.61Zm1.51,1.51c.33,0,.61,.27,.61,.61s-.27,.61-.61,.61-.61-.27-.61-.61,.27-.61,.61-.61Z"/>
        </g>
        </g>
        <g id="Description-2" data-name="Description">
        <text class="c6 cls-2" transform="translate(18.46 99.01)"><tspan x="0" y="0">Automatically fails a test if your WPM falls below</tspan><tspan x="0" y="5.72">a certain threshold.</tspan></text>
        </g>
        <g class="c4" id="Title-3" data-name="Title">
        <g id="Title-4" data-name="Title">
            <text class="cls-5" transform="translate(27.89 90.46)"><tspan x="0" y="0">min wpm</tspan></text>
        </g>
        <path class="cls-10" d="M24.6,86.15l-.22-.61c-.03-.05-.08-.09-.14-.09s-.11,.03-.14,.09l-.22,.61-.62,.22c-.06,.02-.1,.08-.1,.14,0,.06,.04,.12,.1,.14l.61,.22,.22,.61c.02,.06,.08,.1,.14,.1s.12-.04,.14-.1l.22-.61,.61-.22c.06-.02,.1-.08,.1-.14s-.04-.12-.1-.14l-.61-.22Zm-1.77,.71c-.17-.17-.44-.17-.61,0l-.04,.04c-.29-.11-.61-.16-.94-.16-1.54,0-2.78,1.25-2.78,2.78s1.25,2.78,2.78,2.78,2.78-1.25,2.78-2.78c0-.33-.06-.65-.16-.94l.04-.04c.17-.17,.17-.44,0-.61l-1.07-1.07h0Zm-1.7,1.16c-.77,0-1.39,.62-1.39,1.39v.11c0,.12-.1,.21-.21,.21s-.21-.1-.21-.21v-.11c0-1.01,.81-1.82,1.82-1.82h.11c.12,0,.21,.1,.21,.21s-.1,.21-.21,.21h-.11Z"/>
        </g>
    </g>
    <g id="Test_Difficulty" data-name="Test Difficulty">
        <g id="Buttons-8" data-name="Buttons">
        <g id="Master">
            <rect class="c5 cls-12" x="250.62" y="62.96" width="29.81" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(257.09 69.8)"><tspan x="0" y="0">master</tspan></text>
        </g>
        <g id="Expert">
            <rect class="c5 cls-12" x="218.12" y="62.96" width="29.81" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c6 cls-4" transform="translate(224.16 69.8)"><tspan x="0" y="0">expert</tspan></text>
        </g>
        <g id="Normal">
            <rect class="c2 cls-1" x="185.63" y="62.96" width="29.81" height="10.37" rx="2.53" ry="2.53"/>
            <text class="c5 cls-6" transform="translate(191.74 69.8)"><tspan x="0" y="0">normal</tspan></text>
        </g>
        </g>
        <g id="Description-3" data-name="Description">
        <text class="c6 cls-2" transform="translate(18.72 67.73)"><tspan x="0" y="0">Normal is the classic experience. Expert fails</tspan><tspan x="0" y="5.72">you if you submit an incorrect word. Master fails</tspan><tspan x="0" y="11.44">on any incorrect keypress.</tspan></text>
        </g>
        <g id="Title-5" class="c4" data-name="Title">
        <path class="cls-10" d="M22.18,54.48c-.07-.14-.21-.23-.36-.23s-.3,.09-.36,.23l-.81,1.67-1.81,.27c-.15,.02-.28,.13-.32,.27s0,.31,.1,.41l1.32,1.3-.31,1.84c-.03,.15,.04,.31,.16,.4s.29,.1,.43,.03l1.62-.87,1.62,.87c.14,.07,.3,.06,.43-.03s.19-.24,.16-.4l-.31-1.84,1.32-1.3c.11-.11,.15-.27,.1-.41s-.17-.25-.32-.27l-1.82-.27-.81-1.67Z"/>
        <g id="Title-6" data-name="Title">
            <text class="cls-5" transform="translate(27.73 59.26)"><tspan x="0" y="0">test difficulty</tspan></text>
        </g>
        </g>
    </g>
    <g id="Behaviour" class="c4">
        <path class="cls-10" d="M23.78,46.59c.33,.33,.86,.33,1.19,0l5.03-5.03c.33-.33,.33-.86,0-1.19s-.86-.33-1.19,0l-4.44,4.44-4.44-4.43c-.33-.33-.86-.33-1.19,0s-.33,.86,0,1.19l5.03,5.03h0Z"/>
        <text class="cls-3" transform="translate(35.27 46.43)"><tspan x="0" y="0">behavior</tspan></text>
    </g>
    <g id="Header-3" data-name="Header">
        <g id="Logo">
        <g class="c2">
            <path class="cls-1" d="M34.7,25.36h0c.49,0,.89,.4,.89,.89h0c0,.49-.4,.89-.89,.89h0c-.49,0-.89-.4-.89-.89h0c0-.49,.4-.89,.89-.89Z"/>
            <path class="cls-1" d="M22.18,25.36h5.37c.49,0,.89,.4,.89,.89h0c0,.49-.4,.89-.89,.89h-5.37c-.49,0-.89-.4-.89-.89h0c0-.49,.4-.89,.89-.89Z"/>
            <path class="cls-1" d="M20.39,19.99h0c.49,0,.89,.4,.89,.89v1.79c0,.49-.4,.89-.89,.89h0c-.49,0-.89-.4-.89-.89v-1.79c0-.49,.4-.89,.89-.89Z"/>
            <path class="cls-1" d="M15.91,20.84c.02-1.46,1.22-2.64,2.68-2.64h0c.69,0,1.31,.26,1.79,.68,.48-.43,1.1-.68,1.79-.68h0c1.47,0,2.66,1.18,2.68,2.64,0,.02,0,.03,0,.05h0v1.79c0,.49-.4,.89-.89,.89h0c-.49,0-.89-.4-.89-.89v-1.79h0c0-.49-.4-.89-.89-.89s-.89,.4-.89,.89h0v1.79c0,.49-.4,.89-.89,.89h0c-.49,0-.89-.4-.89-.89v-1.79h0c0-.49-.4-.89-.89-.89s-.89,.4-.89,.89h0v1.79c0,.49-.4,.89-.89,.89h0c-.49,0-.89-.4-.89-.89v-1.79h0s0-.03,0-.05Z"/>
            <path class="cls-1" d="M32.02,23.57v2.68c0,.49-.4,.89-.89,.89h0c-.49,0-.89-.4-.89-.89v-2.68h-2.58c-.55,0-1-.4-1-.89h0c0-.49,.45-.89,1-.89h6.95c.55,0,1,.4,1,.89h0c0,.49-.45,.89-1,.89h-2.58Z"/>
            <path class="cls-1" d="M31.12,18.2h3.58c.49,0,.89,.4,.89,.89h0c0,.49-.4,.89-.89,.89h-3.58c-.49,0-.89-.4-.89-.89h0c0-.49,.4-.89,.89-.89Z"/>
            <path class="cls-1" d="M16.81,25.36h1.79c.49,0,.89,.4,.89,.89h0c0,.49-.4,.89-.89,.89h-1.79c-.49,0-.89-.4-.89-.89h0c0-.49,.4-.89,.89-.89Z"/>
            <path class="cls-1" d="M27.1,18.2h.45c.49,0,.89,.4,.89,.89h0c0,.49-.4,.89-.89,.89h-.45c-.49,0-.89-.4-.89-.89h0c0-.49,.4-.89,.89-.89Z"/>
            <path class="cls-1" d="M14.12,25.36h-1.79v-6.26c0-2.47,2-4.47,4.47-4.47h17.89c2.47,0,4.47,2,4.47,4.47v7.16c0,2.47-2,4.47-4.47,4.47H16.81c-2.47,0-4.47-2-4.47-4.47v-1.79h1.79v1.79c0,1.48,1.2,2.68,2.68,2.68h17.89c1.48,0,2.68-1.2,2.68-2.68v-7.16c0-1.48-1.2-2.68-2.68-2.68H16.81c-1.48,0-2.68,1.2-2.68,2.68v6.26Z"/>
        </g>
        <text class="c6 cls-7" transform="translate(42.27 27.72)"><tspan x="0" y="0">monkeytype</tspan></text>
        <text class="c4 cls-11" transform="translate(43.38 16.94)"><tspan x="0" y="0">monkey see</tspan></text>
        </g>
        <g id="Buttons-9" class="c4" data-name="Buttons">
        <g id="Right">
            <path class="cls-10" d="M285.56,21.36c0-.71-.58-1.29-1.29-1.29s-1.29,.58-1.29,1.29,.58,1.29,1.29,1.29,1.29-.58,1.29-1.29Zm-3.34,0c0-1.14,.92-2.06,2.06-2.06s2.06,.92,2.06,2.06-.92,2.06-2.06,2.06-2.06-.92-2.06-2.06Zm-.75,5.4h5.61c-.14-1.02-1.02-1.8-2.07-1.8h-1.47c-1.06,0-1.93,.78-2.07,1.8Zm-.79,.29c0-1.58,1.28-2.86,2.86-2.86h1.47c1.58,0,2.86,1.28,2.86,2.86,0,.26-.21,.48-.48,.48h-6.24c-.26,0-.48-.21-.48-.48Z"/>
            <path class="cls-10" d="M267.97,19.3c-.28,0-.51,.23-.51,.51v.31c-1.17,.24-2.06,1.28-2.06,2.52v.3c0,.76-.28,1.48-.78,2.05l-.12,.13c-.13,.15-.17,.37-.09,.55s.27,.3,.47,.3h6.17c.2,0,.39-.12,.47-.3s.05-.4-.09-.55l-.12-.13c-.5-.57-.78-1.29-.78-2.05v-.3c0-1.24-.88-2.28-2.06-2.52v-.31c0-.28-.23-.51-.51-.51Zm.73,7.93c.19-.19,.3-.45,.3-.73h-2.06c0,.27,.11,.54,.3,.73s.45,.3,.73,.3,.54-.11,.73-.3Z"/>
        </g>
        <g id="Left">
            <path class="cls-10" d="M155.61,20.09c-.61,0-1.11,.5-1.11,1.11v4.43c0,.61,.5,1.11,1.11,1.11h7.75c.61,0,1.11-.5,1.11-1.11v-4.43c0-.61-.5-1.11-1.11-1.11h-7.75Zm.28,1.11h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm.28,1.38h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm1.38-3.05c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm.28,1.38h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h3.88c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-3.88c-.15,0-.28-.12-.28-.28v-.55Zm1.94-3.6h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm1.94-1.94h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm1.94-1.94h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm.28,1.38h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Z"/>
            <path class="cls-10" d="M176.15,20.82c.2-.12,.33-.34,.33-.59,0-.38-.31-.69-.69-.69s-.69,.31-.69,.69c0,.25,.13,.47,.33,.59l-.99,1.98c-.16,.32-.57,.41-.84,.19l-1.54-1.23c.09-.12,.14-.26,.14-.42,0-.38-.31-.69-.69-.69s-.69,.31-.69,.69,.31,.69,.69,.69h.01l.79,4.35c.1,.53,.55,.91,1.09,.91h4.8c.53,0,.99-.38,1.09-.91l.79-4.35h.01c.38,0,.69-.31,.69-.69s-.31-.69-.69-.69-.69,.31-.69,.69c0,.16,.05,.3,.14,.42l-1.54,1.23c-.28,.22-.68,.13-.84-.19l-.99-1.98Z"/>
            <path class="cls-10" d="M191.26,20.09c0-.46,.37-.83,.83-.83s.83,.37,.83,.83-.37,.83-.83,.83-.83-.37-.83-.83Zm-.83,2.49c0-.31,.25-.55,.55-.55h1.11c.31,0,.55,.25,.55,.55v3.88h.55c.31,0,.55,.25,.55,.55s-.25,.55-.55,.55h-2.22c-.31,0-.55-.25-.55-.55s.25-.55,.55-.55h.55v-3.32h-.55c-.31,0-.55-.25-.55-.55Z"/>
            <path class="cls-10" d="M212.55,21.87c.06,.15,0,.32-.11,.43l-.75,.68c.02,.14,.03,.29,.03,.44s-.01,.3-.03,.44l.75,.68c.12,.11,.17,.28,.11,.43-.08,.21-.17,.4-.27,.59l-.08,.14c-.11,.19-.24,.37-.38,.54-.1,.12-.27,.17-.42,.12l-.96-.31c-.23,.18-.49,.33-.76,.44l-.22,.99c-.03,.16-.16,.28-.32,.31-.24,.04-.48,.06-.74,.06s-.5-.02-.74-.06c-.16-.03-.28-.15-.32-.31l-.22-.99c-.27-.11-.53-.26-.76-.44l-.96,.31c-.15,.05-.32,0-.42-.12-.14-.17-.27-.35-.38-.54l-.08-.14c-.11-.19-.2-.39-.27-.59-.06-.15,0-.32,.11-.43l.75-.68c-.02-.15-.03-.29-.03-.44s.01-.3,.03-.44l-.75-.68c-.12-.11-.17-.28-.11-.43,.08-.21,.17-.4,.27-.59l.08-.14c.11-.19,.24-.37,.38-.54,.1-.12,.27-.17,.42-.12l.96,.31c.23-.18,.49-.33,.76-.44l.22-.99c.03-.16,.16-.28,.32-.31,.24-.04,.48-.06,.74-.06s.5,.02,.74,.06c.16,.03,.28,.15,.32,.31l.22,.99c.27,.11,.53,.26,.76,.44l.96-.31c.15-.05,.32,0,.42,.12,.14,.17,.27,.35,.38,.54l.08,.14c.11,.19,.2,.39,.27,.59h0Zm-4.15,2.93c.76,0,1.38-.62,1.38-1.38s-.62-1.38-1.38-1.38-1.38,.62-1.38,1.38,.62,1.38,1.38,1.38Z"/>
        </g>
        </g>
    </g>
    <rect width="100%" height="100%" fill="transparent" />
    </svg>
</template>
    
<script>
    export default {
        name: 'settingsPage',
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
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@500&family=Roboto+Mono&display=swap');
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
    .cls-2 {
        font-size: 4.77px;
      }

      .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {
        font-family: RobotoMono-Regular, 'Roboto Mono';
        font-variation-settings: 'wght' 400;
      }

      .cls-3 {
        font-size: 7.98px;
      }

      .cls-4, .cls-6 {
        font-size: 4.71px;
      }

      .cls-11 {
        font-size: 5.39px;
      }

      .cls-11, .cls-7 {
        font-family: LexendDeca-Medium, 'Lexend Deca';
        font-variation-settings: 'wght' 500;
      }

      .cls-5 {
        font-size: 4.89px;
      }

      .cls-7 {
        font-size: 15.84px;
      }
      .cls-12 {
        opacity: .4;
      }
</style>
    