<template>
    <svg id="Test_Page" data-name="Test Page" xmlns="http://www.w3.org/2000/svg" :style="colorStyles" viewBox="0 0 300 169">
        <g id="One">
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
                <g id="Footer" class="c4">
                <g id="Theme_Name" data-name="Theme Name">
                    <path class="cls-9" d="M287.78,153.41v.03c0,.45-.42,.76-.87,.76h-1.22c-.33,0-.6,.27-.6,.6,0,.04,0,.08,.01,.12,.03,.13,.08,.25,.13,.37,.08,.17,.15,.34,.15,.52,0,.4-.27,.76-.66,.77-.04,0-.09,0-.13,0-1.76,0-3.19-1.43-3.19-3.19s1.43-3.19,3.19-3.19,3.19,1.43,3.19,3.19Zm-4.78,.4c0-.22-.18-.4-.4-.4s-.4,.18-.4,.4,.18,.4,.4,.4,.4-.18,.4-.4Zm0-1.2c.22,0,.4-.18,.4-.4s-.18-.4-.4-.4-.4,.18-.4,.4,.18,.4,.4,.4Zm1.99-1.2c0-.22-.18-.4-.4-.4s-.4,.18-.4,.4,.18,.4,.4,.4,.4-.18,.4-.4Zm1.2,1.2c.22,0,.4-.18,.4-.4s-.18-.4-.4-.4-.4,.18-.4,.4,.18,.4,.4,.4Z"/>
                    <text class="cls-10" transform="translate(274.33 154.83)" text-anchor="end">
                        <tspan x="0" y="0" :textContent="title"></tspan>
                    </text>                
                </g>
                <g id="Buttons">
                    <g id="Github">
                    <path class="cls-9" d="M104.07,150.28c-.21-.06-.43,.06-.49,.27l-1.57,5.49c-.06,.21,.06,.43,.27,.49s.43-.06,.49-.27l1.57-5.49c.06-.21-.06-.43-.27-.49Zm.99,1.47c-.15,.15-.15,.4,0,.56l1.1,1.1-1.1,1.1c-.15,.15-.15,.4,0,.56s.4,.15,.56,0l1.37-1.37c.15-.15,.15-.4,0-.56l-1.37-1.37c-.15-.15-.4-.15-.56,0h0Zm-3.76,0c-.15-.15-.4-.15-.56,0l-1.37,1.37c-.15,.15-.15,.4,0,.56l1.37,1.37c.15,.15,.4,.15,.56,0s.15-.4,0-.56l-1.1-1.1,1.1-1.1c.15-.15,.15-.4,0-.56Z"/>
                    <text class="cls-10" transform="translate(111.48 154.83)"><tspan x="0" y="0">GitHub</tspan></text>
                    </g>
                    <g id="Discord">
                    <path class="cls-9" d="M63.04,150.76s0,0-.01,0c-.54-.25-1.11-.43-1.7-.53-.01,0-.02,0-.03,.01-.08,.14-.15,.29-.21,.44-.63-.1-1.28-.1-1.91,0-.06-.15-.14-.29-.22-.44,0,0-.02-.01-.03-.01-.59,.1-1.16,.28-1.7,.53,0,0,0,0-.01,0-1.08,1.62-1.38,3.2-1.24,4.76,0,0,0,.01,.01,.02,.63,.47,1.34,.82,2.09,1.06,.01,0,.02,0,.03,0,.16-.22,.3-.45,.43-.69,0-.01,0-.03-.01-.04,0,0,0,0,0,0-.23-.09-.44-.19-.65-.31-.01,0-.02-.02,0-.04,0,0,0,0,0,0,.04-.03,.09-.07,.13-.1,0,0,.02,0,.03,0,1.37,.62,2.85,.62,4.2,0,0,0,.02,0,.03,0,.04,.03,.09,.07,.13,.1,.01,0,.01,.03,0,.04,0,0,0,0,0,0-.21,.12-.43,.23-.65,.31-.01,0-.02,.02-.02,.03,0,0,0,0,0,0,.13,.24,.27,.47,.43,.69,0,0,.02,.01,.03,0,.75-.23,1.46-.59,2.09-1.06,0,0,.01-.01,.01-.02,.17-1.8-.29-3.37-1.24-4.76Zm-4.3,3.81c-.41,0-.75-.38-.75-.84s.33-.84,.75-.84,.76,.38,.75,.84c0,.46-.33,.84-.75,.84Zm2.78,0c-.41,0-.75-.38-.75-.84s.33-.84,.75-.84,.76,.38,.75,.84c0,.46-.33,.84-.75,.84Z"/>
                    <text class="cls-10" transform="translate(68.42 154.83)"><tspan x="0" y="0">Discord</tspan></text>
                    </g>
                    <g id="Support">
                    <path class="cls-9" d="M16.62,155.35c-.29,.1-.6,.16-.93,.16s-.64-.06-.93-.16c0,0,0,0-.01,0-.39-.14-.74-.38-1.03-.67-.47-.49-.76-1.16-.76-1.89,0-1.51,1.22-2.73,2.73-2.73s2.73,1.22,2.73,2.73c0,.73-.29,1.4-.76,1.89-.01,.01-.03,.03-.04,.04-.28,.28-.62,.5-1,.64h0Zm-.93-4.09c-.15,0-.26,.12-.26,.26v.08c-.07,.02-.14,.04-.21,.07-.2,.09-.37,.25-.41,.49-.02,.13-.01,.26,.04,.38,.06,.12,.14,.2,.23,.26,.15,.1,.35,.16,.51,.21h.03c.18,.06,.31,.11,.38,.16,.03,.02,.04,.04,.05,.05,0,.01,.01,.03,0,.09,0,.05-.03,.08-.1,.12-.08,.03-.21,.05-.38,.02-.08-.01-.22-.06-.34-.1h0s-.06-.02-.08-.03c-.14-.05-.29,.03-.33,.17-.05,.14,.03,.29,.17,.33,.02,0,.04,.01,.06,.02,.1,.04,.27,.09,.39,.12v.08c0,.15,.12,.26,.26,.26s.26-.12,.26-.26v-.07c.07-.01,.14-.03,.2-.06,.21-.09,.37-.26,.41-.51,.02-.14,.01-.27-.04-.39-.05-.12-.13-.2-.22-.27-.16-.12-.37-.18-.53-.23h-.01c-.19-.06-.31-.1-.39-.15-.03-.02-.04-.04-.05-.05,0,0,0-.02,0-.07,0-.02,.02-.07,.11-.11,.08-.04,.22-.06,.38-.03,.06,0,.23,.04,.28,.06,.14,.04,.28-.05,.32-.19s-.05-.28-.19-.32c-.06-.02-.19-.04-.28-.06v-.08c0-.15-.12-.26-.26-.26Zm-2.73,3.41h.21c.26,.34,.58,.63,.95,.84h-.95v.42h5.04v-.42h-.95c.37-.21,.69-.5,.95-.84h.21c.35,0,.63,.28,.63,.63v.84c0,.35-.28,.63-.63,.63h-5.46c-.35,0-.63-.28-.63-.63v-.84c0-.35,.28-.63,.63-.63Z"/>
                    <text class="cls-10" transform="translate(23.44 154.87)"><tspan x="0" y="0">Support</tspan></text>
                    </g>
                </g>
                </g>
                <g id="Graph">
                <image id="Chart" width="625" height="200" transform="translate(71.85 46.61) scale(.32)" xlink:href="data:image/png;base64,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"/>
                <g id="Gray_Line" class="c4" data-name="Gray Line">
                    <path class="cls-9" d="M90.18,64.54c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M101.97,61.1c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M113.78,67.99c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M125.74,67.93c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M137.54,74.72c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M149.07,67.74c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M161.18,62.24c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M172.94,57.74c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M184.85,55.44c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M196.68,56.56c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M208.47,53.14c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M220.35,55.46c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M232.11,55.42c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M243.94,57.74c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M255.91,57.75c1.45,0,1.45-2.25,0-2.25s-1.45,2.25,0,2.25h0Z"/>
                    <path class="cls-9" d="M90.49,63.75c3.63-1.57,7.35-3.16,11.34-3.51,.48-.04,.48-.79,0-.75-4.13,.37-7.95,1.99-11.71,3.61-.44,.19-.06,.84,.38,.65h0Z"/>
                    <path class="cls-9" d="M102.57,60.05c3.09,2.17,6.15,4.74,9.58,6.35,1.43,.67,2.96,1.13,4.55,1.17,1.95,.05,3.85-.47,5.78-.64s3.57,.13,5.18,1.1c1.35,.82,2.51,1.9,3.73,2.89,2.23,1.82,4.62,3.1,7.59,2.65,4.01-.61,6.92-3.65,9.54-6.49,.33-.35-.2-.89-.53-.53-3.02,3.26-7.06,7.44-12,6.16-3.51-.9-5.63-4.31-8.83-5.81-4.04-1.9-8.26,.68-12.41-.35-2.12-.52-4.01-1.71-5.79-2.93-2.02-1.38-4-2.81-6-4.22-.4-.28-.77,.37-.38,.65h0Z"/>
                    <path class="cls-9" d="M149.78,66.52c.73-.6,1.6-.99,2.46-1.37,1.01-.45,2.01-.89,3.02-1.34,1.98-.88,3.96-1.75,5.94-2.63,.44-.19,.06-.84-.38-.65-2.05,.91-4.1,1.81-6.15,2.72-1.81,.8-3.88,1.46-5.43,2.74-.37,.31,.16,.84,.53,.53h0Z"/>
                    <path class="cls-9" d="M161.62,61.18l11.35-4.33c.45-.17,.25-.9-.2-.72l-11.35,4.33c-.45,.17-.25,.9,.2,.72h0Z"/>
                    <path class="cls-9" d="M173.34,56.93c7.36-2.59,15.35-2.85,22.86-.73,.47,.13,.66-.59,.2-.72-7.63-2.16-15.78-1.91-23.26,.73-.45,.16-.26,.88,.2,.72h0Z"/>
                    <path class="cls-9" d="M196.94,56.05c3.56-1.14,7.12-2.29,10.67-3.43,.46-.15,.26-.87-.2-.72-3.56,1.14-7.12,2.29-10.67,3.43-.46,.15-.26,.87,.2,.72h0Z"/>
                    <path class="cls-9" d="M208.88,52.48c3.87-.04,7.55,1.68,11.39,2.09s7.8,.17,11.68-.08c.48-.03,.48-.78,0-.75-3.88,.25-7.8,.51-11.68,.08s-7.51-2.13-11.39-2.09c-.48,0-.48,.76,0,.75h0Z"/>
                    <path class="cls-9" d="M232.74,54.47c3.77,.82,7.55,1.77,11.37,2.33s7.51,.4,11.27,.19c.48-.03,.48-.78,0-.75-3.84,.2-7.68,.37-11.49-.23s-7.31-1.48-10.95-2.27c-.47-.1-.67,.62-.2,.72h0Z"/>
                </g>
                <g id="Yellow_Line" class="c2" data-name="Yellow Line">
                    <g>
                    <path class="cls-1" d="M90.18,61.83c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M102,66.39c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M113.86,62.42c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M125.67,69.04c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M137.59,68.69c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M149.35,70.39c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M161.19,68.71c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M172.99,67.02c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M184.88,66.12c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M196.69,64.71c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M208.53,64.17c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M220.36,62.98c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M232.19,62.72c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M244.04,62.46c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    <path class="cls-1" d="M255.88,62.14c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"/>
                    </g>
                    <path class="cls-1" d="M90.83,61.27c2.88,1.28,5.78,2.85,8.83,3.7,2.8,.78,5.26,.3,7.8-1.04,3.05-1.61,6.09-3.52,9.43-1.42,2.85,1.79,5.54,3.92,8.28,5.88,.39,.28,.77-.37,.38-.65-2.69-1.92-5.33-3.98-8.11-5.78-2.4-1.55-4.81-1.41-7.37-.25-3.05,1.38-5.57,3.45-9.13,2.79s-6.61-2.49-9.72-3.88c-.44-.19-.82,.45-.38,.65h0Z"/>
                    <path class="cls-1" d="M126.09,68.18c3.8,.05,7.6-.06,11.39-.33,.48-.03,.48-.78,0-.75-3.79,.27-7.59,.38-11.39,.33-.48,0-.48,.74,0,.75h0Z"/>
                    <path class="cls-1" d="M138.12,67.75c3.88,.31,7.72,.93,11.51,1.84,.47,.11,.67-.61,.2-.72-3.85-.93-7.76-1.55-11.7-1.87-.48-.04-.48,.71,0,.75h0Z"/>
                    <path class="cls-1" d="M149.58,69.61c19.29-2.99,38.7-5.09,58.18-6.29,.48-.03,.48-.78,0-.75-19.55,1.2-39.03,3.31-58.38,6.31-.48,.07-.27,.8,.2,.72h0Z"/>
                    <path class="cls-1" d="M208.99,63.23c15.47-1.28,30.99-1.84,46.51-1.66,.48,0,.48-.74,0-.75-15.52-.18-31.04,.38-46.51,1.66-.48,.04-.48,.79,0,.75h0Z"/>
                </g>
                <g id="Chart_Text" class="c4" data-name="Chart Text">
                    <text class="cls-11" transform="translate(84.54 102.17)"><tspan x="0" y="0">0</tspan></text>
                    <text class="cls-11" transform="translate(82.1 90.82)"><tspan x="0" y="0">40</tspan></text>
                    <text class="cls-11" transform="translate(82.1 79.47)"><tspan x="0" y="0">80</tspan></text>
                    <text class="cls-11" transform="translate(79.66 68.12)"><tspan x="0" y="0">120</tspan></text>
                    <text class="cls-11" transform="translate(79.66 56.77)"><tspan x="0" y="0">160</tspan></text>
                    <text class="cls-11" transform="translate(88.96 107.83)"><tspan x="0" y="0">1</tspan></text>
                    <text class="cls-11" transform="translate(100.65 107.87)"><tspan x="0" y="0">2</tspan></text>
                    <text class="cls-11" transform="translate(112.5 107.87)"><tspan x="0" y="0">3</tspan></text>
                    <text class="cls-11" transform="translate(124.32 107.83)"><tspan x="0" y="0">4</tspan></text>
                    <text class="cls-11" transform="translate(136.12 107.83)"><tspan x="0" y="0">5</tspan></text>
                    <text class="cls-11" transform="translate(148.01 107.85)"><tspan x="0" y="0">6</tspan></text>
                    <text class="cls-11" transform="translate(159.89 107.83)"><tspan x="0" y="0">7</tspan></text>
                    <text class="cls-11" transform="translate(171.69 107.87)"><tspan x="0" y="0">8</tspan></text>
                    <text class="cls-11" transform="translate(183.59 107.87)"><tspan x="0" y="0">9</tspan></text>
                    <text class="cls-11" transform="translate(194.13 107.87)"><tspan x="0" y="0">10</tspan></text>
                    <text class="cls-11" transform="translate(206.27 107.83)"><tspan x="0" y="0">11</tspan></text>
                    <text class="cls-11" transform="translate(217.84 107.87)"><tspan x="0" y="0">12</tspan></text>
                    <text class="cls-11" transform="translate(229.71 107.87)"><tspan x="0" y="0">13</tspan></text>
                    <text class="cls-11" transform="translate(241.51 107.83)"><tspan x="0" y="0">14</tspan></text>
                    <text class="cls-11" transform="translate(253.39 107.83)"><tspan x="0" y="0">15</tspan></text>
                    <text class="cls-11" transform="translate(258.99 102.17)"><tspan x="0" y="0">0</tspan></text>
                    <text class="cls-11" transform="translate(258.9 76.59)"><tspan x="0" y="0">1</tspan></text>
                    <text class="cls-11" transform="translate(259.13 51.03)"><tspan x="0" y="0">2</tspan></text>
                    <text class="cls-11" transform="translate(264.76 67.84) rotate(90)"><tspan x="0" y="0">Errors</tspan></text>
                    <text class="cls-11" transform="translate(76.47 93.91) rotate(-90)"><tspan x="0" y="0">Words per Minue</tspan></text>
                </g>
                <g id="Misses" class="c7">
                    <path class="cls-8" d="M126.59,49.15c.08-.08,.08-.21,0-.3s-.21-.08-.3,0l-.69,.69-.69-.69c-.08-.08-.21-.08-.3,0s-.08,.21,0,.3l.69,.69-.69,.69c-.08,.08-.08,.21,0,.3s.21,.08,.3,0l.69-.69,.69,.69c.08,.08,.21,.08,.3,0s.08-.21,0-.3l-.69-.69,.69-.69Z"/>
                    <path class="cls-8" d="M150.33,74.67c.08-.08,.08-.21,0-.3s-.21-.08-.3,0l-.69,.69-.69-.69c-.08-.08-.21-.08-.3,0s-.08,.21,0,.3l.69,.69-.69,.69c-.08,.08-.08,.21,0,.3s.21,.08,.3,0l.69-.69,.69,.69c.08,.08,.21,.08,.3,0s.08-.21,0-.3l-.69-.69,.69-.69Z"/>
                    <path class="cls-8" d="M256.83,74.66c.08-.08,.08-.21,0-.3s-.21-.08-.3,0l-.69,.69-.69-.69c-.08-.08-.21-.08-.3,0s-.08,.21,0,.3l.69,.69-.69,.69c-.08,.08-.08,.21,0,.3s.21,.08,.3,0l.69-.69,.69,.69c.08,.08,.21,.08,.3,0s.08-.21,0-.3l-.69-.69,.69-.69Z"/>
                </g>
                </g>
                <g id="Stats">
                <g id="TIME">
                    <text class="c4 cls-5" transform="translate(242.28 120.68)"><tspan x="0" y="0">time</tspan></text>
                    <text class="c2 cls-3" transform="translate(242.41 131.94)"><tspan x="0" y="0">15s</tspan></text>
                </g>
                <g id="CONSISTENCY">
                    <text class="c4 cls-5" transform="translate(191.37 120.68)"><tspan x="0" y="0">consistency</tspan></text>
                    <text class="c2 cls-3" transform="translate(191.5 131.94)"><tspan x="0" y="0">80%</tspan></text>
                </g>
                <g id="CHARACTERS">
                    <text class="c4 cls-5" transform="translate(109.96 120.3)"><tspan x="0" y="0">characters</tspan></text>
                    <text class="c2 cls-3" transform="translate(110.09 131.94)"><tspan x="0" y="0">177/1/0/0</tspan></text>
                </g>
                <g id="TEST_TYPE" data-name="TEST TYPE">
                    <text class="c4 cls-5" transform="translate(27.55 120.3)"><tspan x="0" y="0">test type</tspan></text>
                    <text class="c2 cls-4" transform="translate(27.68 126.5)"><tspan x="0" y="0">time 15</tspan><tspan x="0" y="5.82">english</tspan></text>
                </g>
                <g id="RAW">
                    <text class="c4 cls-5" transform="translate(71.35 120.3)"><tspan x="0" y="0">raw</tspan></text>
                    <text class="c2 cls-3" transform="translate(71.48 131.93)"><tspan x="0" y="0">142</tspan></text>
                </g>
                <g id="ACC">
                    <text class="c4 cls-6" transform="translate(26.7 86.07)"><tspan x="0" y="0">acc</tspan></text>
                    <text class="c2 cls-2" transform="translate(26.97 104.89)"><tspan x="0" y="0">97%</tspan></text>
                </g>
                <g id="WPM">
                    <text class="c4 cls-6" transform="translate(27.55 52.89)"><tspan x="0" y="0">wpm</tspan></text>
                    <text class="c2 cls-2" transform="translate(27.82 71.71)"><tspan x="0" y="0">142</tspan></text>
                </g>
                </g>
                <g id="Header">
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
                    <text class="c6 cls-12" transform="translate(42.27 27.72)"><tspan x="0" y="0">monkeytype</tspan></text>
                    <text class="c4 cls-10" transform="translate(43.38 16.94)"><tspan x="0" y="0">monkey see</tspan></text>
                </g>
                <g id="Buttons-2" data-name="Buttons" class="c4">
                    <g id="Left">
                    <path class="cls-9" d="M155.61,20.09c-.61,0-1.11,.5-1.11,1.11v4.43c0,.61,.5,1.11,1.11,1.11h7.75c.61,0,1.11-.5,1.11-1.11v-4.43c0-.61-.5-1.11-1.11-1.11h-7.75Zm.28,1.11h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm.28,1.38h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm1.38-3.05c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm.28,1.38h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h3.88c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-3.88c-.15,0-.28-.12-.28-.28v-.55Zm1.94-3.6h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm1.94-1.94h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm1.94-1.94h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Zm-.28,1.94c0-.15,.12-.28,.28-.28h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55Zm.28,1.38h.55c.15,0,.28,.12,.28,.28v.55c0,.15-.12,.28-.28,.28h-.55c-.15,0-.28-.12-.28-.28v-.55c0-.15,.12-.28,.28-.28Z"/>
                    <path class="cls-9" d="M176.15,20.82c.2-.12,.33-.34,.33-.59,0-.38-.31-.69-.69-.69s-.69,.31-.69,.69c0,.25,.13,.47,.33,.59l-.99,1.98c-.16,.32-.57,.41-.84,.19l-1.54-1.23c.09-.12,.14-.26,.14-.42,0-.38-.31-.69-.69-.69s-.69,.31-.69,.69,.31,.69,.69,.69h.01l.79,4.35c.1,.53,.55,.91,1.09,.91h4.8c.53,0,.99-.38,1.09-.91l.79-4.35h.01c.38,0,.69-.31,.69-.69s-.31-.69-.69-.69-.69,.31-.69,.69c0,.16,.05,.3,.14,.42l-1.54,1.23c-.28,.22-.68,.13-.84-.19l-.99-1.98Z"/>
                    <path class="cls-9" d="M191.26,20.09c0-.46,.37-.83,.83-.83s.83,.37,.83,.83-.37,.83-.83,.83-.83-.37-.83-.83Zm-.83,2.49c0-.31,.25-.55,.55-.55h1.11c.31,0,.55,.25,.55,.55v3.88h.55c.31,0,.55,.25,.55,.55s-.25,.55-.55,.55h-2.22c-.31,0-.55-.25-.55-.55s.25-.55,.55-.55h.55v-3.32h-.55c-.31,0-.55-.25-.55-.55Z"/>
                    <path class="cls-9" d="M212.55,21.87c.06,.15,0,.32-.11,.43l-.75,.68c.02,.14,.03,.29,.03,.44s-.01,.3-.03,.44l.75,.68c.12,.11,.17,.28,.11,.43-.08,.21-.17,.4-.27,.59l-.08,.14c-.11,.19-.24,.37-.38,.54-.1,.12-.27,.17-.42,.12l-.96-.31c-.23,.18-.49,.33-.76,.44l-.22,.99c-.03,.16-.16,.28-.32,.31-.24,.04-.48,.06-.74,.06s-.5-.02-.74-.06c-.16-.03-.28-.15-.32-.31l-.22-.99c-.27-.11-.53-.26-.76-.44l-.96,.31c-.15,.05-.32,0-.42-.12-.14-.17-.27-.35-.38-.54l-.08-.14c-.11-.19-.2-.39-.27-.59-.06-.15,0-.32,.11-.43l.75-.68c-.02-.15-.03-.29-.03-.44s.01-.3,.03-.44l-.75-.68c-.12-.11-.17-.28-.11-.43,.08-.21,.17-.4,.27-.59l.08-.14c.11-.19,.24-.37,.38-.54,.1-.12,.27-.17,.42-.12l.96,.31c.23-.18,.49-.33,.76-.44l.22-.99c.03-.16,.16-.28,.32-.31,.24-.04,.48-.06,.74-.06s.5,.02,.74,.06c.16,.03,.28,.15,.32,.31l.22,.99c.27,.11,.53,.26,.76,.44l.96-.31c.15-.05,.32,0,.42,.12,.14,.17,.27,.35,.38,.54l.08,.14c.11,.19,.2,.39,.27,.59h0Zm-4.15,2.93c.76,0,1.38-.62,1.38-1.38s-.62-1.38-1.38-1.38-1.38,.62-1.38,1.38,.62,1.38,1.38,1.38Z"/>
                    </g>
                    <g id="Right">
                    <path class="cls-9" d="M285.56,21.36c0-.71-.58-1.29-1.29-1.29s-1.29,.58-1.29,1.29,.58,1.29,1.29,1.29,1.29-.58,1.29-1.29Zm-3.34,0c0-1.14,.92-2.06,2.06-2.06s2.06,.92,2.06,2.06-.92,2.06-2.06,2.06-2.06-.92-2.06-2.06Zm-.75,5.4h5.61c-.14-1.02-1.02-1.8-2.07-1.8h-1.47c-1.06,0-1.93,.78-2.07,1.8Zm-.79,.29c0-1.58,1.28-2.86,2.86-2.86h1.47c1.58,0,2.86,1.28,2.86,2.86,0,.26-.21,.48-.48,.48h-6.24c-.26,0-.48-.21-.48-.48Z"/>
                    <path class="cls-9" d="M267.97,19.3c-.28,0-.51,.23-.51,.51v.31c-1.17,.24-2.06,1.28-2.06,2.52v.3c0,.76-.28,1.48-.78,2.05l-.12,.13c-.13,.15-.17,.37-.09,.55s.27,.3,.47,.3h6.17c.2,0,.39-.12,.47-.3s.05-.4-.09-.55l-.12-.13c-.5-.57-.78-1.29-.78-2.05v-.3c0-1.24-.88-2.28-2.06-2.52v-.31c0-.28-.23-.51-.51-.51Zm.73,7.93c.19-.19,.3-.45,.3-.73h-2.06c0,.27,.11,.54,.3,.73s.45,.3,.73,.3,.54-.11,.73-.3Z"/>
                    </g>
                </g>
                </g>
            </g>
            <rect width="100%" height="100%" fill="transparent" />
        </svg>
</template>
    
<script>
    export default {
        name: 'resultsPage',
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
        font-size: 20.27px;
    }
    .cls-2,
    .cls-3,
    .cls-5,
    .cls-6,
    .cls-4 {
        font-family: RobotoMono-Regular, 'Roboto Mono';
        font-variation-settings: 'wght' 400;
    }
    .cls-3 {
        font-size: 12.29px;
    }
    .cls-5 {
        font-size: 5.3px;
    }
    .cls-10 {
        font-size: 5.39px;
    }
    .cls-10,
    .cls-12 {
        font-family: LexendDeca-Medium, 'Lexend Deca';
    }
    .cls-10,
    .cls-12,
    .cls-11 {
        font-variation-settings: 'wght' 500;
    }
    .cls-6 {
        font-size: 11.35px;
    }
    .cls-12 {
        font-size: 15.84px;
    }
    .cls-4 {
        font-size: 4.85px;
    }
    .cls-11 {
        font-family: RobotoMono-Medium, 'Roboto Mono';
        font-size: 4.07px;
    }
</style>
    