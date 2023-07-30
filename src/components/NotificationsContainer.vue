<template>
    <div class="notification-container">
        <transition-group name="fade">
            <div 
                v-for="notification in notifications" 
                :key="notification.id" 
                class="alert fade-in" 
                :class="{ 
                    'alert-info': notification.type === 'info', 
                    'alert-error': notification.type === 'error', 
                    'alert-success': notification.type === 'success' 
                }"
            >
                <div class="flex items-center">
                    <font-awesome-icon v-if="notification.type === 'info'" icon="barcode" class="mr-1" />
                    <font-awesome-icon v-if="notification.type === 'error'" icon="triangle-exclamation" class="mr-1" />
                    <font-awesome-icon v-if="notification.type === 'success'" icon="thumbs-up" class="mr-1" />
                    <div>{{ notification.message }}</div>
                    <div v-if="notification.link" class="existing-theme-link" @click="notification.link">Existing Theme</div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props: {
            notifications: {
                type: Array,
                default: () => [],
            },
        },
        methods: {
            removeNotification(index) {
                this.$emit('removeNotification', index);
            },
        },
    }
</script>
  
<style scoped>
    .notification-container {
        width: 100%;
        display: flex;
        z-index: 9999;
        height: 373.5px;
        opacity: 1;
        overflow: hidden;
        padding: 10px;
        flex-direction: column;
        pointer-events: none;
    }
    .alert {
        pointer-events: auto;
        margin-bottom: 0.6rem;
        width: 100%;
    }
    .alert-error {
        background-color: hsl(var(--er));
    }
    .alert-success {
        background-color: hsl(var(--p));
    }
    .existing-theme-link {
        cursor: pointer;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-in {
        animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        .notification-container {
        flex-direction: column-reverse;
        }
    }
</style>