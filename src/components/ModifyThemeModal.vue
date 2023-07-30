<template>
  <div class="modal modal-open animated fadeIn">
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="modal-box overflow-hidden">
      <div v-if="isLoggedIn">
        <h2 v-if="state === 'edit'" class="text-xl text-secondary font-bold mb-4">Edit your Theme</h2>
        <h2 v-else class="text-xl text-secondary font-bold mb-4">Create a New Theme</h2>
        <div class="mb-4">
          <input type="text" placeholder="Theme Link *" v-model="themeUrl" class="input bg-accent w-full"
            :class="{ 'text-secondary': state === 'edit' }" :readonly="isSubmitting || state === 'edit'" />
        </div>
        <div class="mb-4">
          <input type="text" placeholder="Title *" v-model="themeTitle" class="input bg-accent w-full"
            :disabled="isSubmitting" />
        </div>
        <div class="mb-4">
          <textarea class="input resize-none textarea bg-accent input w-full h-20" v-model="themeDescription"
            placeholder="Description" :disabled="isSubmitting"></textarea>
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="!confirmingDelete" key="edit" class="modal-action flex justify-end">
            <button class="btn btn-primary text-accent mr-2 grow" @click="submitTheme" :disabled="isSubmitting">Submit</button>
            <button v-if="state === 'edit'" class="btn btn-outline btn-error max-w-min" @click="startConfirmDelete" :disabled="isSubmitting">
              <font-awesome-icon icon="trash" />
            </button>
          </div>
          <div v-else key="delete" class="modal-action flex justify-end">
            <div class="-mt-1 ml-1 grow">
              <p class="text-secondary text-md mr-2 grow">Deleting</p>
              <p class="text-base-content text-md mr-2 grow">{{ themeTitle }}</p>
            </div>
            <button class="btn btn-outline btn-primary max-w-min" @click="confirmDelete" :disabled="isSubmitting">
              <font-awesome-icon icon="check" />
            </button>
            <button class="btn btn-outline btn-error max-w-min" @click="cancelDelete" :disabled="isSubmitting">
              <font-awesome-icon icon="xmark" />
            </button>
          </div>
        </transition>
      </div>
      <div v-else class="text-center">
        <p class="mb-4">You are not logged in!</p>
        <button class="btn btn-primary" @click="login">Sign in with Discord</button>
      </div>
    </div>
    <notifications-container :notifications="notifications"
      @removeNotification="handleRemoveNotification"></notifications-container>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import axios from 'axios'
import NotificationsContainer from './NotificationsContainer.vue'

export default {
  components: {
    NotificationsContainer,
  },
  data() {
    return {
      themeTitle: '',
      themeDescription: '',
      themeUrl: '',
      theme: null,
      notifications: [],
      notificationCheckInterval: null,
      isSubmitting: false,
      confirmingDelete: false,
    };
  },
  props: {
    themeId: String,
    state: String,
    previousPage: String,
    initialUrl: {
      type: String,
      default: ''
    },
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn
    }),
  },
  methods: {
    navigateToTheme(themeId) {
      this.$emit('close');
      this.$nextTick(() => {
        this.$router.push(`/theme/${themeId}`);
      });
    },
    closeModal() {
      this.$emit('close');
      this.$router.push(this.previousPage);
    },
    async fetchTheme() {
      try {
        const response = await axios.get(`https://monkethemes.com/api/theme/${this.themeId}`);
        this.theme = response.data;
        if (this.theme) {
          this.themeTitle = this.theme.title || this.themeTitle;
          this.themeDescription = this.theme.description || this.themeDescription;
          this.themeUrl = this.theme.url || this.themeUrl;
          document.title = `edit ${this.themeTitle} | monkethemes`;
        }
      } catch (error) {
        console.error(error);
      }
    },
    addNotification(notification) {
      if (notification.type !== 'info') {
        this.notifications = this.notifications.filter(notif => notif.type !== 'info');
      }
      
      const id = Date.now();
      this.notifications.push({
        id,
        expireAt: Date.now() + (notification.duration || 3000),
        link: notification.link,
        ...notification
      });
      
      if (!this.notificationCheckInterval) {
        this.notificationCheckInterval = setInterval(this.checkFirstNotification, 1000);
      }
    },
    handleRemoveNotification(id) {
      this.notifications = this.notifications.filter(notification => notification.id !== id);
      if (this.notifications.length === 0 && this.notificationCheckInterval) {
        clearInterval(this.notificationCheckInterval);
        this.notificationCheckInterval = null;
      }
    },
    checkFirstNotification() {
      if (this.notifications.length > 0 && Date.now() >= this.notifications[0].expireAt && this.notifications[0].type !== 'info') {
        this.handleRemoveNotification(this.notifications[0].id);
      }
    },
    async submitTheme() {
      this.isSubmitting = true;
      try {
        if (!this.themeTitle) {
          this.addNotification({
            message: 'No Title Provided',
            type: 'error',
            timestamp: Date.now()
          });
          return;
        }
        if (this.themeTitle.length < 3 || this.themeTitle.length > 24) {
          this.addNotification({
            message: 'Title should be between 3 to 24 characters.',
            type: 'error',
            timestamp: Date.now()
          });
          return;
        }
        if (!this.themeUrl) {
          this.addNotification({
            message: 'No URL Provided',
            type: 'error',
            timestamp: Date.now()
          });
          return;
        }
        if (this.themeDescription.length > 64) {
          this.addNotification({
            message: 'Description should be up to 64 characters.',
            type: 'error',
            timestamp: Date.now()
          });
          return;
        }
        let themeData;
        let url;
        try {
          url = new URL(this.themeUrl);
        } catch (error) {
          this.addNotification({
            message: 'Invalid URL',
            type: 'error',
            timestamp: Date.now()
          });
          return;
        }
        const themeBase64 = url.searchParams.get('customTheme');
        if (themeBase64) {
          try {
            const themeJson = atob(themeBase64);
            themeData = JSON.parse(themeJson);
          } catch (error) {
            console.error(error);
            this.addNotification({
              message: 'Invalid theme data',
              type: 'error',
              timestamp: Date.now()
            });
            return;
          }
        }
        if (this.state === 'upload' && themeData && themeData.i) {
          this.addNotification({
            message: 'Processing Background Image',
            type: 'info',
            timestamp: Date.now()
          });
        }
        let response;
        let successType;
        if (this.state === 'edit') {
          response = await axios.put(`https://monkethemes.com/api/theme/${this.themeId}`, {
            title: this.themeTitle,
            description: this.themeDescription,
          });
          successType = 'updated';
        } else {
          response = await axios.post('https://monkethemes.com/api/theme/create', {
            title: this.themeTitle,
            description: this.themeDescription,
            url: this.themeUrl
          });
          successType = 'submitted';
        }
        const { _id: themeId } = response.data;
        const successNotification = {
          message: `Theme ${successType} successfully. Redirecting...`,
          type: 'success',
          timestamp: Date.now(),
          duration: 3000,
        };
        this.addNotification(successNotification);
        this.themeTitle = '';
        this.themeDescription = '';
        this.themeUrl = '';
        setTimeout(() => {
          this.navigateToTheme(themeId);
          this.$emit('freshSearch');
        }, successNotification.duration);
      } catch (error) {
        console.error(error);
        let errorMessage = 'Error Submitting Theme';
        if (error.response && error.response.data) {
          const {
            error: apiError,
            id: themeId
          } = error.response.data;
          if (apiError) {
            errorMessage = apiError;
            let notificationLink = null;
            if (errorMessage === 'Theme already exists') {
              notificationLink = () => this.navigateToTheme(themeId);
              errorMessage = `${errorMessage}.`;
            }
            this.addNotification({
              message: errorMessage,
              type: 'error',
              timestamp: Date.now(),
              link: notificationLink
            });
          }
        }
      } finally {
        this.isSubmitting = false;
      }
    },
    login() {
      window.location.href = 'https://monkethemes.com/api/auth/discord'
    },
    escListener(e) {
      if (e.key === 'Escape') {
        this.$emit('close');
      }
    },
    startConfirmDelete() {
      this.confirmingDelete = true;
    },

    cancelDelete() {
      this.confirmingDelete = false;
    },

    async confirmDelete() {
      try {
        const response = await axios.delete(`https://monkethemes.com/api/theme/${this.themeId}`);

        if (response.status === 200) {
          const successNotification = {
            message: 'Theme deleted successfully. Redirecting...',
            type: 'success',
            timestamp: Date.now(),
            duration: 3000,
          };

          this.addNotification(successNotification);

          setTimeout(() => {
            this.$router.push('/');
            this.$emit('freshSearch');
          }, successNotification.duration);
        }
      } catch (error) {
        let errorMessage = 'Error deleting theme';
        if (error.response && error.response.data) {
          const { error: apiError } = error.response.data;
          if (apiError) {
            errorMessage = apiError;
          }
        }

        this.addNotification({
          message: errorMessage,
          type: 'error',
          timestamp: Date.now(),
        });
      } finally {
        this.confirmingDelete = false;
      }
    },
  },
  mounted() {
    this.themeUrl = this.initialUrl;
    window.addEventListener('keydown', this.escListener);
    if (this.state === 'edit' && this.themeId) {
      this.fetchTheme();
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.escListener);
  },
}
</script>
  
<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 500px;
  max-width: 80%;
  margin: 0 auto;
  top: 20px;
  background: none !important;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9997;
}

.modal-box {
  position: relative;
  z-index: 10000;
  min-height: 373.5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animated.fadeIn {
  animation: fadeIn 0.5s;
}

.input,
.btn {
  transition: all 0.8s ease;
}

@media (max-height: 640px) {
  .modal {
    flex-direction: row;
    width: 1000px;
  }
}

@media (max-width: 640px) {
  .modal {
    flex-direction: column-reverse;
    justify-content: stretch;
    max-width: 100%;
    margin-top: -20px;
  }
}</style>
