<template>
    <div v-if="state" class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <slot v-for="hit in state.hits" :item="hit" :key="hit.objectID"></slot>
    </div>
    <div class="flex justify-center w-full py-4">
        <button :disabled="loading || isLastPage" ref="loadMoreButton" @click="loadMore"
            class="btn btn-wide btn-accent text-secondary"> 
            <span v-if="isLastPage">No more results</span>
            <span v-else-if="loading">Loading more...</span>
            <span v-else>Load More</span>
        </button>
    </div>
</template>
  
<script>
import { createWidgetMixin } from 'vue-instantsearch/vue3/es';
import { connectInfiniteHits } from 'instantsearch.js/es/connectors';
import { watch } from 'vue';

export default {
    mixins: [createWidgetMixin({ connector: connectInfiniteHits })],
    data() {
        return {
            loading: false,
            observer: null,
            hitsLength: 0,
            previousHitsLength: 0,
        };
    },
    computed: {
        isLastPage() {
            return this.state?.isLastPage;
        },
    },
    methods: {
        loadMore() {
            if (!this.state.isLastPage && !this.loading) {
                this.loading = true;
                const prevHitsLength = this.state.hits.length;
                this.state.showMore();
                setTimeout(() => {
                    if (this.state.hits.length === prevHitsLength) {
                        this.state.showMore();
                        setTimeout(() => {
                            if (this.state.hits.length === prevHitsLength) {
                                this.loading = false;
                            }
                        }, 1000);
                    }
                }, 1500);
            }
        },
    },
    mounted() {
        watch(() => this.state, (newValue) => {
            if (newValue) {
                this.observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        this.loadMore();
                    }
                });
                if (this.$refs.loadMoreButton) {
                    this.observer.observe(this.$refs.loadMoreButton);
                }
            }
        }, { immediate: true });

        watch(() => this.state?.hits, (newValue, oldValue) => {
            if (this.state && newValue.length > this.hitsLength) {
                this.loading = false;
                this.hitsLength = newValue.length;
                if (newValue.length > 0 && (!oldValue || oldValue.length === 0)) {
                    this.$emit('first-page-loaded');
                }
            }
        }, { deep: true, immediate: true });
    },
    beforeUnmount() {
        if (this.$refs.loadMoreButton && this.observer) {
            this.observer.unobserve(this.$refs.loadMoreButton);
        }
    },
};
</script>