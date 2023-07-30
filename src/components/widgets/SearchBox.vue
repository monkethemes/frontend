<template>
    <input class="input w-full join-item btn-accent placeholder-secondary" placeholder="Search..." v-model="query" />
</template>
  
<script>
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { createWidgetMixin } from 'vue-instantsearch/vue3/es';

export default {
    mixins: [createWidgetMixin({ connector: connectSearchBox })],
    props: {
        delay: {
            type: Number,
            default: 200,
            required: false,
        },
    },
    data() {
        return {
            timerId: null,
            localQuery: '',
        };
    },
    destroyed() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    },
    computed: {
        query: {
            get() {
                return this.localQuery;
            },
            set(val) {
                this.localQuery = val;
                if (this.timerId) {
                    clearTimeout(this.timerId);
                }
                this.timerId = setTimeout(() => {
                    this.state.refine(this.localQuery);
                }, this.delay);
            },
        },
    },
};
</script>