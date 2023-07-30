<template>
  <div class="mt-2 navbar">
    <div class="container mx-auto px-4 flex justify-between">
      <div class="navbar-start">
        <div class="dropdown" v-if="isLoggedIn">
          <label tabindex="0" class="btn btn-ghost lg:hidden rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          <ul tabindex="0" class="menu menu-compact text-base-content dropdown-content mt-3 p-2 z-50 shadow bg-base-200 rounded-box w-52">
            <li><router-link :to="`/upload`" class="rounded">Upload</router-link></li>
            <li><router-link :to="`/create`" class="rounded">Create</router-link></li>
            <li><router-link :to="`/user/${userId}`" class="rounded">My Themes</router-link></li>
          </ul>
        </div>
        <router-link @click="this.$emit('freshSearch');" to="/" class="btn lexend btn-ghost normal-case text-xl rounded">
            <font-awesome-icon icon="brush" class="mt-1 mr-2" /> monkethemes
        </router-link>
      </div>
      <div class="navbar-center hidden lg:flex text-secondary">
        <ul class="menu menu-horizontal px-1">
          <li v-if="isLoggedIn"><router-link :to="`/upload`" class="rounded">Upload</router-link></li>
          <li v-if="isLoggedIn"><router-link :to="`/create`" class="rounded">Create</router-link></li>
          <li v-if="isLoggedIn"><router-link :to="`/user/${userId}`" class="rounded">My Themes</router-link></li>
        </ul>
      </div>
      <div class="navbar-end flex justify-end">
        <div class="dropdown dropdown-end" v-if="isLoggedIn">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img :src="userProfilePicture" />
              </div>
            </label>
          <ul tabindex="0" class="mt-3 p-2 z-50 shadow menu menu-compact dropdown-content bg-base-200 text-secondary rounded-box w-52">
            <li><span class="text-secondary font-bold">{{ username }}</span></li>
            <li><a class="rounded text-base-content" @click="logout">Logout</a></li>
          </ul>
        </div>
        <button v-else class="btn btn-ghost avatar mr-3" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    computed: {
      isLoggedIn() {
        return this.$store.state.isLoggedIn
      },
      userProfilePicture() {
        return this.$store.state.user && this.$store.state.user.avatarUrl
      },
      username() {
        return this.$store.state.user && this.$store.state.user.username
      },
      userId() {
        return this.$store.state.user && this.$store.state.user.userId
      }
    },
    methods: {
      login() {
        window.location.href = 'https://monkethemes.com/api/auth/discord'
      },
      async logout() {
        try {
          await axios.post('https://monkethemes.com/api/auth/logout', {}, {
            withCredentials: true
          });
          this.$store.commit('SET_USER', null);
        } catch (err) {
          console.error(err);
        }
      }
    },
    created() {
      this.$store.dispatch('fetchUser')
    }
  }
</script>

<style scoped>
  .mr-2 {
    color: hsl(var(--p));
    margin-right: 8px;
  }
  @media (max-width: 640px) {
    .navbar-end {
      width: 14%;
    }
    .navbar-start {
      width: 86%;
    }
  }
</style>
