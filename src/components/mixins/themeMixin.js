import { mapState } from 'vuex';
import axios from 'axios';

import testPage from '../previews/testPage.vue';
import resultsPage from '../previews/resultsPage.vue';
import settingsPage from '../previews/settingsPage.vue';
import aboutPage from '../previews/aboutPage.vue';
import colorsPage from '../previews/colorsPage.vue';

export default {
    data() {
        return {
            username: "",
            userLiked: false,
            likes: this.likes,
            showTooltip: false,
            loading: true,
            visibleSlides: {},
            componentsList: [
                { name: 'testPage', component: testPage },
                { name: 'resultsPage', component: resultsPage },
                { name: 'settingsPage', component: settingsPage },
                { name: 'aboutPage', component: aboutPage },
                { name: 'colorsPage', component: colorsPage },
            ],
        }
    },
    computed: {
        ...mapState(['user']),
        isCurrentUserUploader() {
            return this.user && this.user.userId === this.userId;
        }
    },
    watch: {
        userLiked(newVal) {
            this.userLiked = newVal;
        }
    },
    methods: {
        applyTheme() {
            window.open(this.url, '_blank');
        },
        async handleLike() {
            let endpoint;
            let method;
            if (this.userLiked) {
                endpoint = `https://monkethemes.com/api/theme/unlike/${
                    this.cardId
                }`;
                method = 'delete';
            } else {
                endpoint = `https://monkethemes.com/api/theme/like/${
                    this.cardId
                }`;
                method = 'put';
            }
            try {
                const response = await axios({url: endpoint, method, withCredentials: true});
                this.likes = response.data.likes;
                this.userLiked = !this.userLiked;
                this.$emit('likeUpdate', { cardId: this.cardId, userLiked: this.userLiked });
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.$emit('showNewThemeModal');
                }
            }
        },
        async copyUrlToClipboard() {
            try {
                await navigator.clipboard.writeText(`https://monkethemes.com/theme/${
                    this.cardId
                }`);
                this.showTooltip = true;
                setTimeout(() => {
                    this.showTooltip = false;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy url: ', err);
            }
        },
        async getUsernameAndLikedStatus() {
            try {
                this.loading = true;
                const response = await axios.get(`https://monkethemes.com/api/theme/extra/${
                    this.cardId
                }`);
                this.username = response.data.username;
                this.userLiked = response.data.userLiked;
                this.likes = response.data.likes;
                this.loading = false;
            } catch (error) {
                console.error('Error getting username and userLiked status:', error);
                this.loading = false;
            }
        },
        initObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.01
            };

            const observer = new IntersectionObserver(this.handleIntersect, options);
            const elements = this.$el.querySelectorAll('.observer-div');

            elements.forEach(el => {
                observer.observe(el);
            });
        },

        handleIntersect(entries, observer) {
            entries.forEach(entry => {
                const slideName = entry.target.getAttribute('data-slide-name');
                if (entry.isIntersecting) {
                    this.visibleSlides[slideName] = true;
                } else {
                    this.visibleSlides[slideName] = false;
                }
            });
        }
    },
    mounted() {
        this.getUsernameAndLikedStatus();
        this.$nextTick(() => {
            this.initObserver();
        });
    }
}
