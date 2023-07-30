import { createApp } from 'vue';
import App from './App.vue';
import InstantSearch from 'vue-instantsearch/vue3/es';
import router from './router';
import './css/app.css';
import store from '../store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faXmark, faSprayCan, faEyeDropper, faLink, faGhost, faImage, faSlash, faUserTie, faHippo, faSkullCrossbones, faGaugeHigh, faPeopleGroup, faDoorOpen, faSun, faMoon, faPaintRoller, faBrush, faThumbsUp, faTriangleExclamation, faHeart, faBarcode, faHeartCrack, faBackward, faCaretLeft, faForward, faCaretRight, faPenToSquare, faTrash, faCheck} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUser, faGhost, faEyeDropper, faXmark, faSprayCan, faHippo, faImage, faSlash, faUserTie, faSkullCrossbones, faGaugeHigh, faDoorOpen, faPeopleGroup, farHeart, faLink, faSun, faMoon, faPaintRoller, faBrush, faThumbsUp, faHeart, faTriangleExclamation, faBarcode, faHeartCrack, faBackward, faCaretLeft, faForward, faCaretRight, faPenToSquare, faTrash, faCheck)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store);
app.use(router);
app.use(InstantSearch);
app.mount('#app');